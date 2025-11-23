
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart2, RefreshCw, Box } from 'lucide-react';

// --- IRON LAW CHART ---
export const IronLawChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="font-serif text-xl mb-2 text-stone-800">Éxito vs Fracaso en Megaproyectos</h3>
      <p className="text-sm text-stone-500 mb-8 text-center max-w-md">
        Solo un porcentaje minúsculo de proyectos cumple sus promesas iniciales.
      </p>
      
      <div className="relative w-full h-64 bg-white rounded-lg p-4 flex items-end justify-center gap-12">
         {/* Grid lines */}
         <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-10">
            <div className="w-full h-[1px] bg-stone-400"></div>
            <div className="w-full h-[1px] bg-stone-400"></div>
            <div className="w-full h-[1px] bg-stone-400"></div>
            <div className="w-full h-[1px] bg-stone-400"></div>
         </div>

         {/* Failure Bar */}
         <div className="w-24 flex flex-col items-center relative group">
            <div className="text-3xl font-serif font-bold text-red-500 mb-2">99.5%</div>
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '80%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full bg-red-100 border border-red-200 rounded-t-lg relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-red-500/10"></div>
                {/* Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
            </motion.div>
            <div className="mt-3 text-xs font-bold uppercase tracking-wider text-stone-500">Fallan</div>
            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs p-2 rounded w-40 text-center pointer-events-none">
                Exceden costo, tiempo o no entregan beneficios.
            </div>
         </div>

         {/* Success Bar */}
         <div className="w-24 flex flex-col items-center relative group">
            <div className="text-3xl font-serif font-bold text-green-600 mb-2">0.5%</div>
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '5%' }} // Tiny bar
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="w-full bg-green-500 rounded-t-lg shadow-lg"
            ></motion.div>
            <div className="mt-3 text-xs font-bold uppercase tracking-wider text-stone-500">Éxito Total</div>
            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs p-2 rounded w-40 text-center pointer-events-none">
                A tiempo, en presupuesto y con beneficios.
            </div>
         </div>
      </div>
    </div>
  );
};

// --- MODULARITY BUILDER ---
export const ModularityDiagram: React.FC = () => {
  const [blocks, setBlocks] = useState<number[]>([]);
  const totalBlocks = 16; // 4x4 grid

  useEffect(() => {
    const interval = setInterval(() => {
        setBlocks(prev => {
            if (prev.length >= totalBlocks) return [];
            return [...prev, prev.length];
        });
    }, 300); // Fast repetition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-stone-800/50 rounded-xl border border-stone-700 w-full max-w-md">
      <h3 className="font-serif text-xl mb-2 text-white">Construcción Modular</h3>
      <p className="text-sm text-stone-400 mb-6 text-center">
        Repetición rápida. Bloques simples. Menos riesgo.
      </p>

      <div className="grid grid-cols-4 gap-2 w-48 h-48">
        {[...Array(totalBlocks)].map((_, i) => (
            <div key={i} className="relative w-full h-full bg-stone-900/50 rounded border border-stone-700/30">
                {blocks.includes(i) && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 bg-nobel-gold rounded shadow-inner border border-white/20"
                    >
                         <div className="absolute inset-0 flex items-center justify-center text-stone-900/30">
                            <Box size={12} strokeWidth={3} />
                         </div>
                    </motion.div>
                )}
            </div>
        ))}
      </div>
      <div className="mt-4 text-nobel-gold font-mono text-xs">
         {blocks.length === totalBlocks ? "PROYECTO COMPLETADO" : "CONSTRUYENDO..."}
      </div>
    </div>
  );
};

// --- PIXAR CYCLE DIAGRAM ---
export const PixarCycleDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 w-full">
      <h3 className="font-serif text-xl mb-4 text-stone-900">El Proceso Pixar</h3>
      <p className="text-sm text-stone-600 mb-8 text-center max-w-md">
        Iteración barata en la fase de planificación para evitar errores caros en la producción.
      </p>

      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Orbit Path */}
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        </svg>

        {/* Center */}
        <div className="z-10 bg-stone-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-xs font-bold tracking-widest shadow-xl border-4 border-white">
            OBRA<br/>MAESTRA
        </div>

        {/* Nodes */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
        >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-stone-600">
                IDEA
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-stone-600">
                ERROR
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-stone-600">
                TEST
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-stone-600">
                MEJORA
            </div>
        </motion.div>
      </div>
      
      <div className="mt-8 flex gap-4 text-xs font-mono text-stone-500">
          <span className="flex items-center gap-1"><RefreshCw size={12}/> ITERACIÓN CONTINUA</span>
      </div>
    </div>
  );
};

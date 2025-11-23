
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, StructuralScene } from './components/QuantumScene';
import { IronLawChart, ModularityDiagram, PixarCycleDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen, Clock, AlertTriangle, Layers } from 'lucide-react';

const KeyConceptCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-nobel-gold group-hover:bg-nobel-gold group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="font-serif text-2xl text-stone-900 mb-3">{title}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navegación */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1 transform rotate-45">
              <span className="transform -rotate-45">B</span>
            </div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              BOOKEY <span className="font-normal text-stone-500">RESUMEN</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#intro" onClick={scrollToSection('intro')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Introducción</a>
            <a href="#planning" onClick={scrollToSection('planning')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Planificación</a>
            <a href="#modularity" onClick={scrollToSection('modularity')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Modularidad</a>
            <a href="#team" onClick={scrollToSection('team')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Equipo</a>
            <a 
              href="https://bookey.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Leer Libro
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#intro" onClick={scrollToSection('intro')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Introducción</a>
            <a href="#planning" onClick={scrollToSection('planning')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Planificación</a>
            <a href="#modularity" onClick={scrollToSection('modularity')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Modularidad</a>
            <a href="#team" onClick={scrollToSection('team')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Equipo</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Overlay Gradiente */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            Bent Flyvbjerg & Dan Gardner
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[1.1] mb-8 text-stone-900 drop-shadow-sm">
            Cómo Hacer <br/><span className="text-nobel-gold">Grandes Cosas</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            La sorprendente ciencia detrás de los grandes proyectos: desde renovaciones caseras hasta la exploración espacial.
          </p>
          
          <div className="flex justify-center">
             <a href="#intro" onClick={scrollToSection('intro')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>DESCUBRIR</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introducción: La Ley de Hierro */}
        <section id="intro" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">El Problema</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">La Ley de Hierro</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              <p className="text-stone-600 mb-6">
                 Más de 16,000 proyectos analizados revelan una verdad incómoda: los sobrecostos y retrasos no son accidentes, son riesgos sistémicos.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="bg-[#F5F4F0] p-8 rounded-xl border border-stone-200">
                <IronLawChart />
              </div>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">9</span>2% de los grandes proyectos superan su presupuesto o plazos. Peor aún, un sorprendente <strong>99.5%</strong> falla en cumplir simultáneamente con costo, tiempo y beneficios prometidos. Flyvbjerg llama a esto la "Ley de Hierro de los Megaproyectos".
              </p>
            </div>
          </div>
        </section>

        {/* Planificación: Pensar Despacio */}
        <section id="planning" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <PixarCycleDiagram />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Clock size={14}/> LA SOLUCIÓN
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Pensar Despacio, Actuar Rápido</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Apresurarse en la planificación conduce a fracasos en la entrega. El secreto de <strong>Pixar</strong> o <strong>Frank Gehry</strong> es iterar obsesivamente <em>antes</em> de construir.
                        </p>
                        <ul className="space-y-4 text-stone-600">
                            <li className="flex items-start gap-3">
                                <span className="text-nobel-gold font-bold">1.</span>
                                <span><strong>Planificación simulada:</strong> Es barato probar ideas en papel o digitalmente.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-nobel-gold font-bold">2.</span>
                                <span><strong>Iteración Pixar:</strong> "Prueba, aprende, repite". Cada película pasa por 8 o 9 versiones completas antes de producirse.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-nobel-gold font-bold">3.</span>
                                <span><strong>Phronesis:</strong> Sabiduría práctica ganada por la experiencia, no solo teoría.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Modularidad: Lego */}
        <section id="modularity" className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            <Layers size={14}/> EL MÉTODO
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">¿Cuál es tu Lego?</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            Los megaproyectos a medida (como plantas nucleares únicas) suelen fracasar. Los proyectos modulares (como la energía solar o eólica) escalan con éxito.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed mb-6">
                            <strong>La Modularidad</strong> consiste en construir estructuras complejas a partir de bloques simples y repetibles. Permite aprender rápido: si fallas con un bloque, es barato y rápido de corregir.
                        </p>
                        <blockquote className="border-l-4 border-nobel-gold pl-4 text-stone-300 italic">
                            "Haz clic, haz clic, haz clic. Repite, repite, repite. Esa es la genialidad de la modularidad."
                        </blockquote>
                     </div>
                     <div className="flex justify-center">
                        <ModularityDiagram />
                     </div>
                </div>
            </div>
        </section>

        {/* Conceptos Clave */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Pilares del Éxito</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Para transformar una visión en realidad, Flyvbjerg identifica elementos críticos que separan los desastres de los triunfos.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <KeyConceptCard 
                        title="Falacia del Compromiso" 
                        desc="La tendencia a comprometerse con un proyecto rápidamente sin explorar alternativas, atrapándonos en un camino desastroso."
                        icon={AlertTriangle}
                        delay="0s"
                    />
                    <KeyConceptCard 
                        title="Derecha a Izquierda" 
                        desc="Empieza con el objetivo final (derecha) y planifica hacia atrás (izquierda). No empieces con la tecnología, empieza con el '¿Por qué?'."
                        icon={ArrowDown}
                        delay="0.1s"
                    />
                    <KeyConceptCard 
                        title="Un Organismo" 
                        desc="El equipo no es una suma de empresas. Debe actuar como 'Un Único Organismo Determinado' con una identidad compartida (ej. T5)."
                        icon={Layers}
                        delay="0.2s"
                    />
                </div>
            </div>
        </section>

        {/* Impacto / Equipo */}
        <section id="team" className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative min-h-[400px]">
                    <div className="absolute inset-0 bg-[#F5F4F0] rounded-xl overflow-hidden border border-stone-200 shadow-inner">
                        <StructuralScene />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Construyendo una visión unificada</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Estudio de Caso</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Terminal 5 de Heathrow</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Un ejemplo brillante de éxito. La autoridad aeroportuaria (BAA) unificó a contratistas dispares bajo una sola identidad: "Equipo T5".
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        Compartieron riesgos, invirtieron en la cultura del equipo y priorizaron la resolución de conflictos. El resultado: un megaproyecto entregado a tiempo y dentro del presupuesto, desafiando todas las probabilidades.
                    </p>
                    
                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-serif italic text-xl text-stone-800 mb-4">
                            "Tu equipo no es tu empresa. Aquí, tu equipo es T5. Somos un solo equipo."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Filosofía del Proyecto T5</span>
                    </div>
                </div>
             </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">Cómo Hacer Grandes Cosas</div>
                <p className="text-sm text-stone-500">Visualización basada en el libro de Bent Flyvbjerg y Dan Gardner.</p>
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Resumen</a>
                <a href="#" className="hover:text-white transition-colors">Autores</a>
                <a href="#" className="hover:text-white transition-colors">Comprar Libro</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            © 2024 Bookey Visualization. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;

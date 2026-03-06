'use client';

import StarField from "@/components/StarField";
import QuizContainer from "@/components/QuizContainer";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <StarField />
      
      {/* Hero Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 z-10 px-4"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-star w-6 h-6 animate-pulse" />
          <span className="text-star font-bold tracking-[0.3em] text-xs uppercase">Conocimiento Cósmico</span>
        </div>
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4"
        >
          NEBULA<span className="text-nebula-purple">QUIZ</span> v2.0
        </motion.h1>
        <p className="text-white/40 max-w-md mx-auto text-lg">
          Pon a prueba tus conocimientos sobre el universo en esta experiencia interactiva. ¡Ahora desplegado automáticamente!
        </p>
      </motion.header>

      {/* Main Content */}
      <section className="w-full z-10">
        <QuizContainer />
      </section>

      {/* Footer Decoration */}
      <footer className="mt-20 z-10 text-white/20 text-xs tracking-widest uppercase">
        &copy; 2026 Nebula Project &bull; Powered by Next.js
      </footer>
    </main>
  );
}

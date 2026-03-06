import StarField from "@/components/StarField";
import QuizContainer from "@/components/QuizContainer";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <StarField />
      
      {/* Hero Header */}
      <header className="text-center mb-12 z-10 px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-star w-6 h-6 animate-pulse" />
          <span className="text-star font-bold tracking-[0.3em] text-xs uppercase">Conocimiento Cósmico</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
          NEBULA<span className="text-nebula-purple">QUIZ</span>
        </h1>
        <p className="text-white/40 max-w-md mx-auto text-lg">
          Pon a prueba tus conocimientos sobre el universo en esta experiencia interactiva.
        </p>
      </header>

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

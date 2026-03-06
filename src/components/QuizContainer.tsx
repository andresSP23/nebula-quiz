'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { questions } from '@/lib/quiz-data';
import { Trophy, ArrowRight, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

export default function QuizContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      if (score + (selectedOption === currentQuestion.answer ? 1 : 0) >= questions.length * 0.8) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7c3aed', '#db2777', '#fbbf24']
        });
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass p-8 rounded-3xl"
          >
            {/* Progress Header */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-medium text-white/60">
                Pregunta {currentQuestionIndex + 1} de {questions.length}
              </span>
              <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-nebula-purple"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold mb-8 text-white leading-relaxed">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const isCorrect = option === currentQuestion.answer;
                const isSelected = option === selectedOption;
                
                let buttonClass = "w-full text-left p-4 rounded-xl transition-all duration-300 border border-white/10 glass hover:bg-white/10";
                
                if (isAnswered) {
                  if (isCorrect) buttonClass = "w-full text-left p-4 rounded-xl border border-green-500/50 bg-green-500/10 text-green-200";
                  else if (isSelected) buttonClass = "w-full text-left p-4 rounded-xl border border-red-500/50 bg-red-500/10 text-red-200";
                  else buttonClass = "w-full text-left p-4 rounded-xl border border-white/5 opacity-40 glass";
                }

                return (
                  <motion.button
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                    key={option}
                    disabled={isAnswered}
                    onClick={() => handleOptionSelect(option)}
                    className={buttonClass}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                      {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation & Next Button */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-8 space-y-6 overflow-hidden"
                >
                  <p className="text-white/70 italic text-sm border-l-2 border-nebula-purple pl-4">
                    {currentQuestion.explanation}
                  </p>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-nebula-purple hover:bg-nebula-purple/80 text-white font-bold py-3 px-8 rounded-full transition-all ml-auto group"
                  >
                    Siguiente
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-3xl text-center"
          >
            <div className="inline-flex p-4 rounded-full bg-star/20 mb-6">
              <Trophy className="w-12 h-12 text-star" />
            </div>
            <h2 className="text-4xl font-bold mb-2">¡Quiz Completado!</h2>
            <p className="text-white/60 mb-8">Has explorado los confines del conocimiento espacial.</p>
            
            <div className="text-6xl font-black text-nebula-purple mb-10">
              {score} / {questions.length}
            </div>

            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              Intentar de nuevo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

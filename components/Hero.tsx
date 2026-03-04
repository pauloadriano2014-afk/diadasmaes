'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    // Data alvo: Fim do Mês da Mulher (31 de março de 2026 às 23:59:59)
    const targetDate = new Date('2026-03-31T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-zinc-950 text-zinc-100 py-16 px-4 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      
      {/* Luz de fundo (Efeito Premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        
        {/* LOGO PAULO ADRIANO TEAM */}
        <div className="mb-12 flex justify-center items-center">
          <img 
            src="/logo.png" 
            alt="Paulo Adriano Team Logo" 
            className="w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-transform hover:scale-105 duration-300"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-tight">
          O Mês da decisão <br />
          <span className="text-rose-600">que você vem adiando.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-2">
          Condição Especial de Março na Consultoria Online
        </p>
        <p className="text-base md:text-lg font-medium text-zinc-300 mb-10">
          Exclusiva para mulheres que estão cansadas de começar e parar.
        </p>

        {/* CONTADOR REGRESSIVO ATÉ O FIM DO MÊS */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([unidade, valor]) => (
            <div key={unidade} className="flex flex-col items-center">
              <div className="bg-zinc-900 border border-zinc-800 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-lg">
                <span className="text-2xl md:text-4xl font-bold text-rose-500">
                  {String(valor).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs md:text-sm text-zinc-500 mt-2 uppercase tracking-wider">{unidade}</span>
            </div>
          ))}
        </div>

        {/* BOX DE CHAMADA DIRETA PARA O WHATSAPP */}
        <div className="bg-zinc-900 border border-rose-900/50 p-6 md:p-8 rounded-xl shadow-[0_0_30px_rgba(225,29,72,0.15)] max-w-md mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
            Mês da Mulher
          </div>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">
            Dê o primeiro passo para a sua transformação.
          </h3>
          <p className="text-rose-500 font-bold mb-6 text-sm uppercase tracking-wide">
            Descontos exclusivos de 20% a 50%
          </p>
          
          {/* BOTÃO DIRETO PARA O WHATSAPP COM MENSAGEM PREDEFINIDA */}
          <a 
            href="https://wa.me/5541997991346?text=Quero%20aproveitar%20o%20desconto%20do%20mes%20da%20mulher"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-lg text-lg uppercase tracking-wide transition-colors mt-2 flex justify-center items-center"
          >
            QUERO APROVEITAR O DESCONTO
          </a>
          
          <div className="mt-6 text-sm text-zinc-500 space-y-1">
            <p>Esta oportunidade é válida exclusivamente</p>
            <p className="font-semibold text-zinc-400">durante o mês de Março.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
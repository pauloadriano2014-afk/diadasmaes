'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    // Data alvo: 7 de março de 2026 às 00:00:00
    const targetDate = new Date('2026-03-07T00:00:00').getTime();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Como é direto para o grupo, apenas redirecionamos para a página de obrigado
    router.push('/obrigado');
  };

  return (
    <section className="bg-zinc-950 text-zinc-100 py-16 px-4 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      
      {/* Luz de fundo (Efeito Premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        
        {/* LOGO PAULO ADRIANO TEAM - AGORA MUITO MAIOR */}
        <div className="mb-12 flex justify-center items-center">
          <img 
            src="/logo.png" 
            alt="Paulo Adriano Team Logo" 
            className="w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-transform hover:scale-105 duration-300"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-tight">
          Dia 7 começa a decisão <br />
          <span className="text-rose-600">que você vem adiando.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-2">
          Promoção especial da minha Consultoria Online
        </p>
        <p className="text-base md:text-lg font-medium text-zinc-300 mb-10">
          Exclusiva para mulheres que estão cansadas de começar e parar.
        </p>

        {/* CONTADOR REGRESSIVO */}
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

        {/* FORMULÁRIO VIP - AGORA FOCADO NO GRUPO E ESCASSEZ */}
        <div className="bg-zinc-900 border border-rose-900/50 p-6 md:p-8 rounded-xl shadow-[0_0_30px_rgba(225,29,72,0.15)] max-w-md mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
            Apenas 10 Vagas
          </div>
          
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">
            Entre no Grupo VIP e receba a oferta com prioridade.
          </h3>
          <p className="text-rose-500 font-bold mb-6 text-sm uppercase tracking-wide">
            Descontos de 20% a 50% <span className="whitespace-nowrap">liberados dia 7</span>
          </p>
          
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <button 
              type="submit" 
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-lg text-lg uppercase tracking-wide transition-colors mt-2"
            >
              Quero entrar no Grupo VIP
            </button>
          </form>
          
          <div className="mt-6 text-sm text-zinc-500 space-y-1">
            <p>A condição especial ficará disponível apenas por 48 horas.</p>
            <p className="font-semibold text-zinc-400">Dia 7 até dia 8 às 23:59.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
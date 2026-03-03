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
    // Define a data alvo: 8 de março de 2026 às 00:00:00
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
    
    // Aqui no futuro você pode adicionar a lógica para salvar o lead (ex: enviar para uma API, Firebase, etc)
    // Por enquanto, apenas redirecionamos.

    router.push('/obrigado');
  };

  return (
    <section className="bg-zinc-950 text-zinc-100 py-20 px-4 min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl mx-auto">
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

        {/* FORMULÁRIO VIP */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-white">
            Entre na Lista VIP e receba prioridade na condição especial.
          </h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Seu Nome" 
              className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-rose-600 transition-colors"
              required
            />
            <input 
              type="tel" 
              placeholder="Seu WhatsApp" 
              className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-rose-600 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-lg text-lg uppercase tracking-wide transition-colors mt-2"
            >
              Quero entrar na Lista VIP
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
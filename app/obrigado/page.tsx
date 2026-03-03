'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Obrigado() {
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

  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-rose-500 selection:text-white flex flex-col justify-center items-center text-center px-4 py-20">
      <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-2xl shadow-2xl w-full">
        
        {/* Ícone de Sucesso */}
        <div className="w-20 h-20 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-rose-500/30">
          <svg className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
          Você acaba de dar o <br className="hidden md:block" />
          <span className="text-rose-600">primeiro passo.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 mb-12">
          Dia 7 você receberá o link de desconto antes de todo mundo.
        </p>

        {/* CONTADOR REGRESSIVO */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([unidade, valor]) => (
            <div key={unidade} className="flex flex-col items-center">
              <div className="bg-zinc-950 border border-zinc-800 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-inner">
                <span className="text-2xl md:text-4xl font-bold text-rose-500">
                  {String(valor).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs md:text-sm text-zinc-500 mt-2 uppercase tracking-wider">{unidade}</span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-950 p-6 md:p-8 rounded-xl border border-rose-900/30 mb-8">
          <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-wide mb-4">Último passo:</p>
          <p className="text-lg text-zinc-400 mb-6">
            Clique no botão abaixo para entrar no <strong className="text-zinc-200">Grupo VIP Silencioso</strong>. É por lá que liberaremos as 10 vagas.
          </p>
          
          <a 
            href="https://chat.whatsapp.com/J8bFwoDi7IhAEy415Q0tuV" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-lg uppercase tracking-wide transition-colors"
          >
            Entrar no Grupo de WhatsApp
          </a>
        </div>

        <Link href="/" className="text-zinc-500 hover:text-white underline text-sm transition-colors uppercase tracking-widest">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
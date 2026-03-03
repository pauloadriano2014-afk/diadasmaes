'use client';

export default function CampaignSection() {
  const releases = [
    "Condição especial por tempo limitado",
    "Desconto estratégico nos planos",
    "Bônus exclusivos (e-books + benefícios extras)",
    "Vantagens maiores para quem escolher planos mais longos"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-zinc-950 py-24 px-4 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        
        {/* SEÇÃO 4 - A CAMPANHA */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center uppercase tracking-tight mb-12">
            O que será liberado <span className="text-rose-600">dia 7:</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {releases.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-rose-900 transition-colors">
                <svg className="w-6 h-6 text-rose-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <p className="text-xl text-rose-500 font-bold uppercase tracking-wide mb-3">Mas atenção:</p>
            <p className="text-2xl md:text-3xl text-white font-bold mb-3">Não é para todas.</p>
            <p className="text-lg md:text-xl text-zinc-400">É para a mulher que decidiu parar de negociar com ela mesma.</p>
          </div>
        </div>

        {/* SEÇÃO 5 - ESCASSEZ REAL */}
        <div className="bg-zinc-900 border border-rose-900/40 p-8 md:p-12 rounded-3xl text-center mb-24 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 via-rose-600 to-zinc-900"></div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight mb-10">
            A condição especial:
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl mb-4">📅</span>
              <span className="text-xl text-zinc-300 font-medium">Abre dia 7</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-zinc-800"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl mb-4">⏳</span>
              <span className="text-xl text-zinc-300 font-medium">Encerra dia 8 às 23:59</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-zinc-800"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl mb-4">❌</span>
              <span className="text-xl text-zinc-300 font-medium text-center">Depois volta ao <br className="hidden md:block" /> valor normal</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-rose-500 font-bold text-xl md:text-2xl uppercase tracking-wider">
            <span>Sem extensão.</span>
            <span className="hidden md:block text-zinc-700">•</span>
            <span>Sem segunda chance.</span>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-zinc-300 mb-2">Se você está cansada de começar e parar...</p>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10">Se você quer estrutura, acompanhamento e método...</p>
          
          <button 
            onClick={scrollToTop}
            className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-bold py-5 px-10 rounded-xl text-xl uppercase tracking-wide transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(225,29,72,0.3)]"
          >
            Entre agora na Lista VIP
          </button>
          
          <p className="mt-8 text-zinc-500 font-medium uppercase tracking-widest text-sm">
            Dia 7 começa a execução.
          </p>
        </div>

      </div>
    </section>
  );
}
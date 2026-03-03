export default function AuthoritySection() {
  // Estrutura organizada em pares (Antes e Depois)
  const transformacoes = [
    { antes: "/resultado-1-antes.jpg", depois: "/resultado-1-depois.jpg" },
    { antes: "/resultado-2-antes.jpg", depois: "/resultado-2-depois.jpg" },
    { antes: "/resultado-3-antes.jpg", depois: "/resultado-3-depois.jpg" },
    { antes: "/resultado-4-antes.jpg", depois: "/resultado-4-depois.jpg" },
    { antes: "/resultado-5-antes.jpg", depois: "/resultado-5-depois.jpg" },
  ];

  return (
    <section className="bg-zinc-900 py-24 px-4 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            Sou professor e <span className="text-rose-600">personal trainer.</span>
          </h2>
          <div className="text-lg md:text-xl text-zinc-300 space-y-2 max-w-2xl mx-auto">
            <p>Já passei pelo processo de transformação física.</p>
            <p>Já ajudei mulheres a saírem da frustração para o resultado.</p>
            <p className="text-rose-500 font-semibold mt-6">Aqui não tem achismo. Tem método validado na prática.</p>
          </div>
        </div>

        {/* VÍDEO DE DEPOIMENTOS (YOUTUBE SHORTS) */}
        <div className="max-w-3xl mx-auto mb-24 bg-zinc-950 p-2 md:p-4 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600/20 to-zinc-950/0 rounded-2xl blur-lg"></div>
            <div className="relative">
                <h3 className="text-center text-white font-bold text-xl md:text-2xl uppercase tracking-wide mb-5 mt-2">
                    Elas decidiram dar o primeiro passo:
                </h3>
                {/* Container focado no formato vertical do Shorts */}
                <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-inner border border-zinc-800">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/Yei6VCuSYUw?rel=0&modestbranding=1" 
                      title="Depoimentos" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

        {/* GRID DE ANTES E DEPOIS (5 PARES COM EFEITO P&B/COLORIDO) */}
        <div className="mb-24">
          <h3 className="text-center text-zinc-300 font-medium text-lg md:text-xl mb-12 uppercase tracking-wider">
            Resultados reais de quem seguiu o processo:
          </h3>
          
          <div className="space-y-12">
            {transformacoes.map((par, index) => (
              <div key={index} className="grid grid-cols-2 gap-3 md:gap-6 items-center bg-zinc-950 p-4 md:p-6 rounded-3xl border border-zinc-800 shadow-xl">
                
                {/* CONTAINER ANTES (Preto e Branco) */}
                <div className="relative group overflow-hidden rounded-2xl border-2 border-zinc-800">
                  <img 
                    src={par.antes} 
                    alt={`Antes aluna ${index + 1}`} 
                    className="w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-sm text-center py-2">
                    <span className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">Antes</span>
                  </div>
                </div>

                {/* CONTAINER DEPOIS (Colorido) */}
                <div className="relative group overflow-hidden rounded-2xl border-2 border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                  <img 
                    src={par.depois} 
                    alt={`Depois aluna ${index + 1}`} 
                    className="w-full h-auto object-cover transition-all duration-500 transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-rose-600 text-center py-2">
                    <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">Depois</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-4xl text-white font-bold uppercase tracking-tight leading-tight">
            Se você quer resultado diferente, <br className="hidden md:block"/>
            <span className="text-rose-600">precisa de orientação diferente.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
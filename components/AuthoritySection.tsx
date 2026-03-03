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
        
        {/* COPY Focada na Consultoria, Treino e Direcionamento Alimentar (Blindagem Legal) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6">
            A ESTRUTURA DA CONSULTORIA <span className="text-rose-600">PA TEAM.</span>
          </h2>
          <div className="text-lg md:text-xl text-zinc-300 space-y-4 max-w-3xl mx-auto">
            <p>
              Há mais de 10 anos vivendo a musculação na prática, transformei meu próprio corpo: <span className="text-rose-500 font-bold">de ex-gordo a campeão de fisiculturismo natural.</span>
            </p>
            <p>
              A Consultoria PA TEAM nasceu para entregar o método exato que me tirou da frustração e já guiou milhares de mulheres e homens rumo ao resultado real.
            </p>
            <p className="bg-zinc-950/50 p-4 rounded-lg border border-zinc-800/50 inline-block mt-4">
              Aqui você recebe o cenário completo para mudar o seu corpo: <span className="text-white font-bold">a minha periodização estratégica de treinos</span> aliada a um <span className="text-white font-bold">direcionamento alimentar inteligente.</span> Além de treinar certo, eu vou te ensinar a comer direito para potencializar os seus resultados, sem restrições malucas.
            </p>
            <p className="text-rose-500 font-semibold mt-6 uppercase tracking-wide text-sm md:text-base">
              Aqui não tem achismo. É o Método PA TEAM validado na prática.
            </p>
          </div>
        </div>

        {/* SEÇÃO: A TRANSFORMAÇÃO DO PAULO ADRIANO */}
        <div className="max-w-4xl mx-auto mb-24 bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600/10 to-zinc-950/0 rounded-2xl blur-lg"></div>
            <div className="relative">
                <h3 className="text-center text-white font-bold text-xl md:text-2xl uppercase tracking-wide mb-8 mt-2">
                    Minha Jornada: De Ex-Gordo a Campeão Natural
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    
                    {/* CONTAINER ANTES (Preto e Branco, mais premium) */}
                    <div className="relative group overflow-hidden rounded-2xl border-2 border-zinc-800 shadow-[0_0_20px_rgba(39,39,42,0.2)]">
                      <img 
                        src="/paulo-antes.jpg" // Substitua por sua foto real do início
                        alt="Paulo Adriano Antes da transformação" 
                        className="w-full h-auto object-cover grayscale"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-sm text-center py-2">
                        <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Antes: Início da jornada</span>
                      </div>
                    </div>

                    {/* CONTAINER DEPOIS (Colorido, com Glow) */}
                    <div className="relative group overflow-hidden rounded-2xl border-2 border-rose-600 shadow-[0_0_25px_rgba(225,29,72,0.4)]">
                      <img 
                        src="/paulo-depois.jpg" // Substitua por sua foto real do campeonato
                        alt="Paulo Adriano Campeão Fisiculturista Natural" 
                        className="w-full h-auto object-cover transform scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-rose-600 text-center py-2">
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Depois: Campeão Natural</span>
                      </div>
                    </div>

                </div>
                <p className="text-center text-zinc-400 mt-10 max-w-2xl mx-auto">
                    A jornada que me transformou é a mesma que vai te guiar. Não usei atalhos, apenas método e disciplina natural.
                </p>
            </div>
        </div>

        {/* VÍDEO DE DEPOIMENTOS (YOUTUBE SHORTS) */}
        <div className="max-w-3xl mx-auto mb-24 bg-zinc-950 p-2 md:p-4 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600/20 to-zinc-950/0 rounded-2xl blur-lg"></div>
            <div className="relative">
                <h3 className="text-center text-white font-bold text-xl md:text-2xl uppercase tracking-wide mb-5 mt-2">
                    Elas decidiram dar o primeiro passo:
                </h3>
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

        {/* GRID DE ANTES E DEPOIS DAS ALUNAS (5 PARES) */}
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

        <div className="text-center flex flex-col items-center">
          {/* Logo Aumentada no final como selo de garantia */}
          <img 
            src="/logo.png" 
            alt="Selo PA Team Campeão Natural" 
            className="h-24 md:h-32 object-contain mb-8 drop-shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          />
          <p className="text-2xl md:text-4xl text-white font-bold uppercase tracking-tight leading-tight max-w-xl">
            Se você quer resultado diferente, <br className="hidden md:block"/>
            <span className="text-rose-600">precisa de orientação diferente.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
export default function MethodSection() {
  const benefits = [
    "Treinos personalizados no aplicativo",
    "Vídeos demonstrativos de execução",
    "Séries, repetições e métodos estruturados",
    "Planejamento alimentar ajustado",
    "Ajustes semanais",
    "Suporte direto comigo"
  ];

  return (
    <section className="bg-zinc-950 py-24 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Resultado não é sorte. <span className="text-rose-600 block mt-2">É processo.</span>
          </h2>
          <p className="text-xl text-zinc-400 mt-6">
            Na minha Consultoria Online você recebe:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-rose-900 transition-colors shadow-sm"
            >
              <svg className="w-8 h-8 text-rose-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-lg text-zinc-200 font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="text-center bg-rose-600/10 border border-rose-900/50 p-8 rounded-2xl max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-2">
            Isso <span className="text-rose-500 font-bold">não é</span> treino genérico de internet.
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold uppercase tracking-wide">
            É acompanhamento individual.
          </p>
        </div>
      </div>
    </section>
  );
}
export default function RealitySection() {
  return (
    <section className="bg-zinc-900 py-20 px-4 text-center border-t border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 uppercase tracking-tight">
          Vamos falar a <span className="text-rose-600">verdade?</span>
        </h2>
        
        <div className="space-y-10 text-lg md:text-xl text-zinc-300">
          <div className="flex flex-col items-center">
            <p className="line-through text-zinc-500 mb-2">Você não precisa de mais motivação.</p>
            <p className="font-bold text-white text-2xl">Você precisa de estrutura.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="line-through text-zinc-500 mb-2">Você não precisa de dieta da moda.</p>
            <p className="font-bold text-white text-2xl">Você precisa de acompanhamento.</p>
          </div>
          
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl shadow-lg mt-12 max-w-2xl mx-auto">
            <p className="text-rose-500 font-extrabold text-2xl mb-3">Você não falhou.</p>
            <p className="mb-2">Você tentou sozinha.</p>
            <p className="font-medium">E sozinha é muito mais difícil manter constância.</p>
          </div>
          
          <div className="pt-12">
            <p className="text-xl md:text-2xl font-medium text-zinc-400">
              Se você já prometeu que iria começar <span className="italic">"segunda-feira"</span>...
            </p>
            <p className="text-rose-500 font-bold text-2xl md:text-3xl mt-4 uppercase tracking-wide">
              essa página é para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
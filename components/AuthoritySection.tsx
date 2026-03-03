export default function AuthoritySection() {
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

        {/* ESPAÇO PARA ANTES E DEPOIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Espaço reservado 1 */}
          <div className="bg-zinc-950 border border-zinc-800 aspect-square rounded-2xl flex flex-col justify-center items-center text-zinc-600">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>[ INSERIR IMAGEM ANTES E DEPOIS AQUI ]</span>
          </div>
          
          {/* Espaço reservado 2 */}
          <div className="bg-zinc-950 border border-zinc-800 aspect-square rounded-2xl flex flex-col justify-center items-center text-zinc-600">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>[ INSERIR IMAGEM ANTES E DEPOIS AQUI ]</span>
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
export default function FeedbackSection() {
  const feedbacks = [
    "/feedback-1.jpg",
    "/feedback-2.jpg",
    "/feedback-3.jpg",
    "/feedback-4.jpg",
    "/feedback-5.jpg"
  ];

  return (
    <section className="bg-zinc-900 py-24 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            O sucesso é medido <span className="text-rose-600 block mt-2">pelos resultados.</span>
          </h2>
          <p className="text-xl text-zinc-400 mt-4 max-w-2xl mx-auto">
            Mensagens reais de mulheres que decidiram parar de adiar e começaram a viver a transformação na prática.
          </p>
        </div>

        {/* GRID DE FEEDBACKS (WHATSAPP PRINTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-start">
          {feedbacks.map((foto, index) => (
            <div 
              key={index} 
              className="group relative bg-zinc-950 border border-zinc-800 p-3 rounded-3xl shadow-xl hover:border-rose-600 hover:shadow-[0_0_30px_rgba(225,29,72,0.2)] transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="rounded-2xl overflow-hidden bg-zinc-900 flex items-center justify-center relative">
                <img 
                  src={foto} 
                  alt={`Feedback de aluna ${index + 1}`} 
                  className="w-full h-auto object-contain transition-all duration-500 transform group-hover:scale-105"
                  loading="lazy"
                />
                {/* Efeito de brilho suave no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-zinc-300 font-medium">
            Hoje, você tem a oportunidade de dar o primeiro passo para ser <span className="text-white font-bold">a próxima a enviar uma mensagem destas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#f7f4ec]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#708238]/10 px-3 py-1 text-xs font-medium text-[#708238]">
              Dosson di Casier • Via Zermanese 10
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-[#5a3e2b]">
              Dalla terra alla tavola, con passione e rispetto per la natura
            </h1>
            <p className="mt-4 text-[#5a3e2b]/80">
              Coltiviamo uva da vino e mele cotogne nel cuore della Marca Trevigiana. 
              Trasformiamo con metodi artigianali per portare in tavola confetture, mostarde e sapori autentici veneti.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-[#7b2b2b] px-5 py-3 text-white shadow hover:bg-[#672222]">
                Scopri i nostri prodotti <ChevronRight size={18} />
              </a>
              <a href="#uva" className="inline-flex items-center gap-2 rounded-full border border-[#5a3e2b]/20 px-5 py-3 text-[#5a3e2b] hover:bg-white">
                Visita il nostro vigneto
              </a>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
              alt="Vigneto a Treviso"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f7f4ec]/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

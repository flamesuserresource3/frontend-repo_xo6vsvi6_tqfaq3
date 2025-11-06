import { Grapes, Apple, ShoppingBag, Gamepad2, Sprout, Factory, Camera } from 'lucide-react';

function Card({ icon: Icon, title, text, href, color }) {
  return (
    <a href={href} className="group rounded-2xl border border-[#5a3e2b]/15 bg-white/70 p-5 sm:p-6 hover:shadow-md transition-shadow">
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${color} text-white shadow`}> 
        <Icon size={18} />
      </div>
      <h3 className="mt-3 font-semibold text-[#5a3e2b]">{title}</h3>
      <p className="mt-1 text-sm text-[#5a3e2b]/80">{text}</p>
      <span className="mt-3 inline-block text-sm text-[#7b2b2b]">Scopri di più →</span>
    </a>
  );
}

export default function Sections() {
  return (
    <section className="bg-[#f7f4ec] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card icon={Grapes} title="Uva & Vino" text="Vigneti a Treviso e servizio di produzione conto terzi: dalla raccolta all’imbottigliamento." href="#uva" color="bg-[#708238]" />
          <Card icon={Apple} title="Mela Cotogna" text="Coltivazione e lavorazione artigianale: marmellate, mostarde e confetture." href="#mela" color="bg-[#7b2b2b]" />
          <Card icon={ShoppingBag} title="Shop" text="Acquista online i nostri prodotti artigianali con spedizione in tutta Italia." href="#shop" color="bg-[#5a3e2b]" />
          <Card icon={Gamepad2} title="Gioca e Raccolta" text="Un semplice clicker game per scoprire il ciclo dalla raccolta alla trasformazione!" href="#gioca" color="bg-[#708238]" />
          <Card icon={Sprout} title="Varietà" text="Glera, Merlot, Cabernet e altre varietà coltivate con cura e rispetto." href="#uva" color="bg-[#5a3e2b]" />
          <Card icon={Camera} title="Galleria" text="Scorci del vigneto e del frutteto, tra filari e mele profumate." href="#chi-siamo" color="bg-[#7b2b2b]" />
        </div>
      </div>
    </section>
  );
}

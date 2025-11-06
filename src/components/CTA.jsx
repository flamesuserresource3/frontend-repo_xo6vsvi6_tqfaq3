import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contatti" className="relative bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl text-[#5a3e2b]">Vieni a trovarci o scrivici</h2>
            <p className="mt-2 text-[#5a3e2b]/80">
              Siamo a Dosson di Casier (Treviso), in Via Zermanese 10. 
              Produciamo con metodi sostenibili e accogliamo visite su appuntamento.
            </p>
            <div className="mt-6 space-y-3 text-[#5a3e2b]">
              <p className="flex items-center gap-2"><MapPin size={18} /> Via Zermanese 10, Dosson di Casier (TV)</p>
              <p className="flex items-center gap-2"><Mail size={18} /> info@sitoalbertomelacotogna.it</p>
              <p className="flex items-center gap-2"><Phone size={18} /> +39 320 000 0000</p>
            </div>
            <div className="mt-8">
              <a href="#shop" className="inline-flex items-center rounded-full bg-[#7b2b2b] px-5 py-3 text-white shadow hover:bg-[#672222]">
                Vai allo Shop
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#5a3e2b]/10">
            <iframe
              title="Mappa"
              src="https://www.google.com/maps?q=Via%20Zermanese%2010%2C%20Dosson%20di%20Casier%2C%20Treviso&output=embed"
              className="w-full h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

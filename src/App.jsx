import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import CTA from './components/CTA';

function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-serif text-3xl text-[#5a3e2b]">{title}</h2>
      {subtitle && <p className="mt-1 text-[#5a3e2b]/80">{subtitle}</p>}
    </div>
  );
}

function ContentBlock({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <div className="rounded-2xl border border-[#5a3e2b]/15 bg-white p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f4ec]">
      <Navbar />
      <Hero />
      <Sections />

      <SectionTitle id="uva" title="Uva & Vino" subtitle="Vigneto a Treviso e servizi conto terzi" />
      <ContentBlock>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-3 text-[#5a3e2b]/90">
            <p>
              Nei nostri filari coltiviamo varietà come Glera, Merlot e Cabernet, seguendo pratiche rispettose del suolo e del ciclo naturale.
            </p>
            <p>
              Offriamo produzione conto terzi: dalla raccolta al conferimento, trasformazione e imbottigliamento, per aziende e privati.
            </p>
            <a href="#contatti" className="inline-flex items-center rounded-full bg-[#708238] px-4 py-2 text-white hover:bg-[#5c6a2f]">
              Richiedi informazioni
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1474342686745-0a4b2aafab05?q=80&w=1200&auto=format&fit=crop" alt="Filari d'uva" />
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVdmF8ZW58MHwwfHx8MTc2MjQ3MTc4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Uva" />
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop" alt="Cantina" />
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop" alt="Bottiglie" />
          </div>
        </div>
      </ContentBlock>

      <SectionTitle id="mela" title="Mela Cotogna & Trasformati" subtitle="Dalla raccolta alla lavorazione artigianale" />
      <ContentBlock>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-3 order-last lg:order-first">
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1444731961956-751ed90465a5?q=80&w=1200&auto=format&fit=crop" alt="Mele" />
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=1200&auto=format&fit=crop" alt="Raccolta" />
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2b?q=80&w=1200&auto=format&fit=crop" alt="Confetture" />
            <img className="h-36 w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb3N0YXJkYXxlbnwwfDB8fHwxNzYyNDcxNzkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Mostarda" />
          </div>
          <div className="space-y-3 text-[#5a3e2b]/90">
            <p>
              Le nostre mele cotogne diventano marmellate, confetture extra e mostarda veneta, preparate in piccoli lotti con ingredienti semplici.
            </p>
            <ul className="list-disc pl-5">
              <li>Marmellata di mela cotogna – 220g</li>
              <li>Confettura extra – 220g</li>
              <li>Mostarda veneta di mela cotogna – 200g</li>
            </ul>
            <a href="#shop" className="inline-flex items-center rounded-full bg-[#7b2b2b] px-4 py-2 text-white hover:bg-[#672222]">
              Acquista online
            </a>
          </div>
        </div>
      </ContentBlock>

      <SectionTitle id="shop" title="Shop Artigianale" subtitle="Selezione di prodotti con spedizione in tutta Italia" />
      <ContentBlock>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[{
            name: 'Marmellata di mela cotogna', price: '€6,50', img: 'https://images.unsplash.com/photo-1505575972945-280c5cf5d040?q=80&w=1200&auto=format&fit=crop'
          }, {
            name: 'Confettura extra di mela cotogna', price: '€6,90', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
          }, {
            name: 'Mostarda veneta di mela cotogna', price: '€7,50', img: 'https://images.unsplash.com/photo-1604908554027-0c1094bf2797?q=80&w=1200&auto=format&fit=crop'
          }].map((p) => (
            <div key={p.name} className="rounded-2xl border border-[#5a3e2b]/15 bg-white p-4">
              <img src={p.img} alt={p.name} className="h-40 w-full object-cover rounded-xl" />
              <h3 className="mt-3 font-semibold text-[#5a3e2b]">{p.name}</h3>
              <div className="mt-1 text-[#7b2b2b] font-medium">{p.price}</div>
              <button className="mt-3 w-full rounded-full bg-[#708238] px-4 py-2 text-white hover:bg-[#5c6a2f]">Aggiungi al carrello</button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[#5a3e2b]/70">Pagamento sicuro con Stripe/PayPal. Ritiro in azienda disponibile.</p>
      </ContentBlock>

      <SectionTitle id="gioca" title="Gioca e Raccolta" subtitle="Un semplice clicker game educativo" />
      <ContentBlock>
        <ClickerGame />
      </ContentBlock>

      <SectionTitle id="chi-siamo" title="Chi Siamo" subtitle="Storia, valori e territorio" />
      <ContentBlock>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-3 text-[#5a3e2b]/90">
            <p>
              Siamo una realtà familiare legata alle tradizioni venete. Coltiviamo con responsabilità e innovazione rurale per custodire la qualità.
            </p>
            <p>Visite su appuntamento e degustazioni stagionali.</p>
          </div>
          <img className="rounded-2xl h-64 w-full object-cover" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop" alt="Famiglia in vigneto" />
        </div>
      </ContentBlock>

      <CTA />

      <footer className="border-t border-[#5a3e2b]/10 bg-[#f7f4ec] py-8 text-center text-sm text-[#5a3e2b]/70">
        © {new Date().getFullYear()} Azienda Agricola • Via Zermanese 10, Dosson (Treviso) • Privacy & Cookie Policy
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
function ClickerGame() {
  const [fruits, setFruits] = useState(0);
  const [products, setProducts] = useState(0);
  const [message, setMessage] = useState('Clicca per raccogliere!');
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.2;
    const play = () => {
      const a = audioRef.current;
      if (!a) return;
      a.play().catch(() => {});
      window.removeEventListener('click', play);
    };
    window.addEventListener('click', play);
    return () => window.removeEventListener('click', play);
  }, []);

  const handleClick = () => {
    const next = fruits + 1;
    setFruits(next);
    if (next % 10 === 0) {
      setProducts((p) => p + 1);
      setMessage('Trasformazione completata! 🍷🥫');
      setTimeout(() => setMessage('Continua a raccogliere...'), 1200);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="rounded-2xl bg-gradient-to-br from-[#708238]/20 to-[#7b2b2b]/10 p-6 text-center border border-[#5a3e2b]/10">
        <p className="text-sm text-[#5a3e2b]/80">Frutti raccolti</p>
        <div className="mt-2 text-4xl font-semibold text-[#5a3e2b]">{fruits}</div>
        <p className="mt-4 text-sm text-[#5a3e2b]/80">Prodotti trasformati (vino/confettura)</p>
        <div className="mt-2 text-2xl font-semibold text-[#7b2b2b]">{products}</div>
        <p className="mt-4 text-[#5a3e2b]">{message}</p>
        <button onClick={handleClick} className="mt-6 w-full rounded-full bg-[#7b2b2b] px-5 py-3 text-white shadow hover:bg-[#672222] active:scale-[.98]">
          Raccogli
        </button>
        <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_0e9afe2f3e.mp3?filename=calm-music-11095.mp3" />
      </div>
      <div className="rounded-2xl overflow-hidden h-56 sm:h-72 lg:h-80 border border-[#5a3e2b]/10">
        <img src="https://images.unsplash.com/photo-1508002366005-75a695ee2d17?q=80&w=1600&auto=format&fit=crop" alt="Frutteto" className="h-full w-full object-cover" />
      </div>
      <p className="md:col-span-2 text-sm text-center text-[#5a3e2b]/70">Hai trasformato la tua passione in prodotto! Scopri i veri sapori nel nostro shop.</p>
    </div>
  );
}

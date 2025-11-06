import { useState } from 'react';
import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#uva', label: 'Uva & Vino' },
    { href: '#mela', label: 'Mela Cotogna' },
    { href: '#shop', label: 'Shop' },
    { href: '#gioca', label: 'Gioca e Raccolta' },
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f7f4ec]/90 backdrop-blur border-b border-[rgba(90,62,43,0.15)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#708238] text-white">
              <Leaf size={20} />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg text-[#5a3e2b]">Azienda Agricola</p>
              <p className="text-xs text-[#7b2b2b]">Dosson • Treviso</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#5a3e2b] hover:text-[#7b2b2b] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-[#7b2b2b] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#672222] transition-colors">
              <ShoppingCart size={18} />
              Acquista
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#5a3e2b] hover:bg-[#f0ece2]">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(90,62,43,0.1)] bg-[#f7f4ec]">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#5a3e2b]">
                {l.label}
              </a>
            ))}
            <a href="#shop" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-[#7b2b2b] px-4 py-2 text-sm font-medium text-white shadow">
              <ShoppingCart size={18} />
              Acquista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

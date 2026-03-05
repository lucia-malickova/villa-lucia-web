import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#d4d4d8] selection:bg-stone-800 font-light">
      <Analytics />

      {/* 1. GHOST NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 flex justify-between p-8 mix-blend-difference">
        <div className="flex flex-col text-white">
          <span className="text-[10px] tracking-[0.5em] uppercase font-light">Villa Lucia</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">Banská Štiavnica</span>
        </div>
        <div className="text-[10px] tracking-[0.5em] uppercase font-light text-white italic">
          UNESCO Sanctuary
        </div>
      </nav>

      {/* 2. HERO SECTION - Široká fotka (Krajina) */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 relative h-[60vh] md:h-[75vh] overflow-hidden rounded-sm shadow-2xl">
            <Image 
              src="/stiavnica_view.jpg" 
              alt="Golden Hour in Banská Štiavnica" 
              fill 
              priority
              className="object-cover brightness-90"
            />
          </div>
          <div className="md:col-span-4 space-y-8">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-white leading-none text-right md:text-left">
              Pure <br /> <span className="italic font-serif">Heritage.</span>
            </h1>
            <p className="text-sm tracking-[0.3em] uppercase opacity-50 leading-relaxed text-right md:text-left">
              The last private forest residence <br /> overlooking the historic heart.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LIVING ROOM - Vysoké formáty */}
      <section className="py-32 px-6 bg-stone-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative h-[85vh] overflow-hidden rounded-sm shadow-xl order-2 md:order-1">
              <Image src="/living/masterpiece_sofa.jpg" alt="Masterpiece Sofa" fill className="object-cover" />
            </div>
            <div className="space-y-12 order-1 md:order-2 sticky top-32">
              <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-500 font-semibold">The Living Salon</h2>
              <h3 className="text-5xl font-extralight text-white font-serif italic">Artisan Masterpiece</h3>
              <p className="text-stone-400 leading-relaxed">
                Where hand-carved furniture meets the 2.5m masterpiece mirror. 
                Relax by the fireplace on a sofa adorned with delicate frescoes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="relative h-64"><Image src="/living/chess.jpg" alt="Chess" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" /></div>
                 <div className="relative h-64"><Image src="/living/living_fireplace.jpg" alt="Fireplace" fill className="object-cover" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DINING & KITCHEN - Portrétne rozloženie */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative h-[80vh] group">
            <Image src="/kitchen/kitchen_smeg.jpg" alt="SMEG Kitchen" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
               <h4 className="text-white text-2xl font-serif italic">Kitchen Coloniale</h4>
            </div>
          </div>
          <div className="relative h-[80vh] pt-12">
            <Image src="/dining/dining_room.jpg" alt="Dining Room" fill className="object-cover" />
          </div>
          <div className="relative h-[80vh] pt-24">
            <Image src="/dining/turquese_diningroom.jpg" alt="Turquese Dining" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 5. MASTER SANCTUARY - Vertikálna dominanta */}
      <section className="py-32 bg-stone-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-500">The Master Sanctuary</h2>
          <h3 className="text-5xl md:text-7xl font-extralight text-white font-serif italic">240cm Suite</h3>
          <div className="relative h-[90vh] w-full overflow-hidden rounded-sm">
            <Image src="/master-sanctuary/master_bed.jpg" alt="Master Bed" fill className="object-cover" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <p className="text-stone-400 font-light text-sm leading-relaxed">The largest bedroom on the upper floor with a custom 220x240cm bed.</p>
            <div className="relative h-96">
               <Image src="/master-sanctuary/master_bathroom.jpg" alt="Master Bathroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. HERITAGE COLLECTION - Galéria na výšku */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="relative h-[70vh]"><Image src="/heritage_collection/hand_painted_bed.jpg" alt="Hand Painted Bed" fill className="object-cover" /></div>
            <h4 className="text-white italic font-serif text-xl">The Folk Suite</h4>
          </div>
          <div className="space-y-6">
            <div className="relative h-[70vh]"><Image src="/heritage_collection/pink_bedroom.jpg" alt="Pink Bedroom" fill className="object-cover" /></div>
            <h4 className="text-white italic font-serif text-xl">Romantic Rose</h4>
          </div>
          <div className="space-y-6">
            <div className="relative h-[70vh]"><Image src="/heritage_collection/gold_bedroom.jpg" alt="Gold Bedroom" fill className="object-cover" /></div>
            <h4 className="text-white italic font-serif text-xl">The Studio</h4>
          </div>
      </section>

      {/* 7. AYURVEDIC RITUAL - Vertikálny detail */}
      <section className="py-32 bg-stone-950 border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[85vh]">
            <Image src="/heritage_collection/ayurvedic_sauna.jpg" alt="Ayurvedic Sauna" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-extralight text-white font-serif italic">Regeneration</h2>
            <p className="text-stone-400 font-light">Private Ayurvedic sauna designed for mental clarity.</p>
            <div className="relative h-96">
               <Image src="/heritage_collection/bath_tub.jpg" alt="Bath Tub" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUTDOOR - Vertikálna sila */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-600 mb-16">The Grand Gazebo</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 h-[90vh]">
          <div className="relative h-full"><Image src="/outdoor/gezebo.jpg" alt="Gazebo" fill className="object-cover" /></div>
          <div className="grid grid-rows-2 gap-8 h-full">
            <div className="relative"><Image src="/outdoor/fireplace_outdoor.jpg" alt="Outdoor Fireplace" fill className="object-cover" /></div>
            <div className="relative"><Image src="/outdoor/view_gezebo.jpg" alt="Gazebo View" fill className="object-cover" /></div>
          </div>
        </div>
      </section>

      {/* 9. THE VILLA EXTERIOR - Široká fotka */}
      <section className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-extralight font-serif italic">The Residence</h2>
            <p className="text-stone-600 font-light leading-relaxed">Nestled in a private 1000m² forest, Villa Lucia stands as a silent guardian.</p>
          </div>
          <div className="relative h-[50vh] shadow-2xl">
            <Image src="/villa.jpg" alt="Villa Lucia Exterior" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FOOTER - Opravená Inversion fotka */}
      <footer className="py-20 text-center bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="relative h-[50vh] w-full grayscale opacity-50 hover:opacity-100 transition-opacity duration-1000">
             <Image src="/stiavnica_inversion.jpg" alt="Stiavnica Inversion" fill className="object-cover" />
          </div>
        </div>
        <p className="text-[8px] tracking-[1em] uppercase opacity-40">Villa Lucia • Artisan Forest Residence • 2026</p>
      </footer>
    </main>
  );
}
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#d4d4d8] selection:bg-stone-800 font-light">
      <Analytics />

      {/* 1. GHOST NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 flex justify-between p-8 mix-blend-difference">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] uppercase font-light text-white">Villa Lucia</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">Banská Štiavnica</span>
        </div>
        <div className="text-[10px] tracking-[0.5em] uppercase font-light text-white italic">
          UNESCO Sanctuary
        </div>
      </nav>

      {/* 2. HERO SECTION - The View */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 relative h-[75vh] overflow-hidden rounded-sm shadow-2xl">
            <Image 
              src="/stiavnica_view.jpg" 
              alt="Golden Hour in Banská Štiavnica" 
              fill 
              priority
              className="object-cover brightness-90 hover:scale-105 transition-transform duration-[3000ms]"
            />
            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] tracking-widest uppercase text-white">Loxone Smart Home</span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-white leading-none">
              Pure <br /> <span className="italic font-serif">Heritage.</span>
            </h1>
            <p className="text-sm tracking-[0.3em] uppercase opacity-50 leading-relaxed">
              The last private forest residence <br /> overlooking the historic heart.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LIVING ROOM - Art & Soul */}
      <section className="py-32 px-6 bg-stone-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-500 font-semibold">The Living Salon</h2>
              <h3 className="text-5xl font-extralight text-white font-serif italic">Artisan Masterpiece</h3>
              <p className="text-stone-400 leading-relaxed max-w-md">
                Where hand-carved furniture meets the 2.5m masterpiece mirror. Relax by the fireplace on a sofa adorned with delicate frescoes.
              </p>
            </div>
            <div className="relative h-[60vh] overflow-hidden rounded-sm">
              <Image src="/living/masterpiece_sofa.jpg" alt="Masterpiece Sofa" fill className="object-cover" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64"><Image src="/living/chess.jpg" alt="Chess" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" /></div>
            <div className="relative h-64"><Image src="/living/living_fireplace.jpg" alt="Fireplace" fill className="object-cover" /></div>
            <div className="relative h-64"><Image src="/living/porch.jpg" alt="Veranda" fill className="object-cover" /></div>
            <div className="relative h-64"><Image src="/living/masterpiece_of_artistic_woodcarver.jpg" alt="Woodwork" fill className="object-cover" /></div>
          </div>
        </div>
      </section>

      {/* 4. DINING & KITCHEN - Gourmet Experience */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 relative h-[70vh]">
            <Image src="/kitchen/kitchen_smeg.jpg" alt="SMEG Kitchen" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-end">
              <h4 className="text-white text-2xl font-serif italic">Kitchen Coloniale</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Full SMEG Equipment</p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div className="relative h-[45vh]">
              <Image src="/dining/dining_room.jpg" alt="Dining Room" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-white">U-Shaped Gatherings</h3>
                <p className="text-sm text-stone-500 leading-relaxed">Bespoke seating designed for long conversations and shared memories.</p>
              </div>
              <div className="relative h-48">
                <Image src="/dining/turquese_diningroom.jpg" alt="Turquese Dining" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MASTER SANCTUARY - The Crown Jewel */}
      <section className="py-32 bg-stone-900/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-500">The Master Sanctuary</h2>
          <h3 className="text-5xl md:text-7xl font-extralight text-white font-serif italic leading-none">
            240cm of <br /> Pure Comfort.
          </h3>
          <div className="relative h-[80vh] w-full overflow-hidden rounded-sm">
            <Image src="/master-sanctuary/master_bed.jpg" alt="Master Bed" fill className="object-cover" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-left pt-12">
            <div className="space-y-4">
              <h4 className="text-white uppercase text-[10px] tracking-widest">The Suite</h4>
              <p className="text-stone-400 font-light text-sm leading-relaxed">The largest bedroom on the upper floor with a custom 220x240cm bed and private master bathroom.</p>
            </div>
            <div className="relative h-64">
              <Image src="/master-sanctuary/master_bathroom.jpg" alt="Master Bathroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. HERITAGE COLLECTION - Folk Art Rooms */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="relative h-96"><Image src="/heritage_collection/hand_painted_bed.jpg" alt="Hand Painted Bed" fill className="object-cover" /></div>
            <h4 className="text-white italic font-serif text-2xl">The Folk Suite</h4>
            <p className="text-xs text-stone-500 leading-relaxed">Ground floor masterpiece featuring a 180x200 hand-painted bed and matching wardrobes.</p>
          </div>
          <div className="space-y-6 pt-12">
            <div className="relative h-96"><Image src="/heritage_collection/pink_bedroom.jpg" alt="Pink Bedroom" fill className="object-cover" /></div>
            <h4 className="text-white italic font-serif text-2xl">Romantic Rose</h4>
            <p className="text-xs text-stone-500 leading-relaxed">Upper floor fairytale with an interior swing and custom built-in wardrobes.</p>
          </div>
          <div className="space-y-6 pt-24">
            <div className="relative h-96"><Image src="/heritage_collection/gold_bedroom.jpg" alt="Gold Bedroom" fill className="object-cover" /></div>
            <h4 className="text-white italic font-serif text-2xl">The Studio Room</h4>
            <p className="text-xs text-stone-500 leading-relaxed">Elegance meets productivity. Dedicated workspace with 200x220 bed.</p>
          </div>
        </div>
      </section>

      {/* 7. AYURVEDIC RITUAL & BATHROOMS */}
      <section className="py-32 bg-stone-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative h-[70vh] rounded-sm overflow-hidden">
            <Image src="/heritage_collection/ayurvedic_sauna.jpg" alt="Ayurvedic Sauna" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-extralight text-white font-serif italic">Physical Regeneration</h2>
            <p className="text-stone-400 font-light leading-relaxed">
              Experience your private Ayurvedic sauna located in the heritage suite. Designed for profound mental clarity and health.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="relative h-40"><Image src="/heritage_collection/bath_tub.jpg" alt="Bath Tub" fill className="object-cover" /></div>
               <div className="relative h-40"><Image src="/heritage_collection/bathroom_heritage.jpg" alt="Heritage Bathroom" fill className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUTDOOR LUXURY */}
      <section className="py-40 bg-[#050505] px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-600">The Grand Gazebo</h2>
            <h3 className="text-5xl md:text-8xl font-extralight text-white leading-none font-serif italic">60m² Outdoor Bliss.</h3>
          </div>
          <div className="grid md:grid-cols-12 gap-4 h-[80vh]">
            <div className="md:col-span-8 relative"><Image src="/outdoor/gezebo.jpg" alt="Gazebo" fill className="object-cover" /></div>
            <div className="md:col-span-4 grid grid-rows-2 gap-4">
              <div className="relative"><Image src="/outdoor/fireplace_outdoor.jpg" alt="Outdoor Fireplace" fill className="object-cover" /></div>
              <div className="relative"><Image src="/outdoor/view_gezebo.jpg" alt="Gazebo View" fill className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE VILLA EXTERIOR */}
      <section className="py-32 border-t border-white/5 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-extralight font-serif italic">The Residence</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Nestled in a private 1000m² forest, Villa Lucia stands as a silent guardian overlooking Banská Štiavnica. A blend of stone, wood, and modern intelligence.
            </p>
          </div>
          <div className="relative h-[60vh] shadow-2xl">
            <Image src="/villa.jpg" alt="Villa Lucia Exterior" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center opacity-40">
        <div className="relative h-20 w-full mb-8 grayscale opacity-30">
           <Image src="/stiavnica_inversion.jpg" alt="Stiavnica Inversion" fill className="object-cover" />
        </div>
        <p className="text-[8px] tracking-[1em] uppercase">Villa Lucia • Artisan Forest Residence • 2026</p>
      </footer>
    </main>
  );
}
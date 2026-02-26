import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#d4d4d8] selection:bg-stone-800 font-light">
      
      {/* 1. GHOST NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 flex justify-between p-8 mix-blend-difference">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] uppercase font-light text-white">Villa Lucia</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">Banská Štiavnica</span>
        </div>
        <div className="text-[10px] tracking-[0.5em] uppercase font-light text-white">
          UNESCO Sanctuary
        </div>
      </nav>

      {/* 2. HERO SECTION - The View & Tech Soul */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 relative h-[70vh] overflow-hidden rounded-sm shadow-2xl bg-stone-900">
            <Image 
              src="/stiavnica_vyhlad.jpg" 
              alt="Golden Hour in Banská Štiavnica" 
              fill 
              priority
              className="object-cover brightness-75 hover:scale-105 transition-transform duration-[3000ms]"
            />
            {/* SMART TECH OVERLAY */}
            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] tracking-widest uppercase">Loxone Smart Home</span>
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] tracking-widest uppercase">Fiber Internet</span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-white leading-none">
              Pure <br /> <span className="italic font-serif">Heritage.</span>
            </h1>
            <p className="text-sm tracking-[0.3em] uppercase opacity-50 leading-relaxed">
              The last private forest residence <br /> overlooking the historic heart.
            </p>
            <div className="h-[1px] w-24 bg-stone-700"></div>
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY & LOCATION */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-500 font-semibold">The Location</h2>
          <p className="text-2xl md:text-4xl font-extralight leading-relaxed text-stone-200 italic font-serif">
            "Five minutes from the city's pulse, yet hidden in a private 1000m² forest. Where UNESCO history meets high-tech silence."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
            <span className="text-[10px] tracking-widest uppercase opacity-40">5 min walk to center</span>
            <span className="text-[10px] tracking-widest uppercase opacity-40">Private Hiking Trail</span>
            <span className="text-[10px] tracking-widest uppercase opacity-40">Heated Roadway</span>
            <span className="text-[10px] tracking-widest uppercase opacity-40">Silent Forest Edge</span>
          </div>
        </div>
      </section>

      {/* 4. GROUND FLOOR - Heritage Master & Ayurveda */}
      <section className="py-32 bg-stone-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xs tracking-[0.4em] uppercase text-stone-600">The Night Zone • Ground Floor</h3>
              <h2 className="text-4xl font-extralight text-white leading-tight">40m² Heritage Suite</h2>
              <p className="text-stone-400 font-light leading-relaxed">
                A masterpiece of folk art. Featuring a hand-painted bed (180x200) and matching wardrobes, complemented by an ancient embroidered tapestry. This room sleeps up to 6 people (including children on high-quality sofa beds).
              </p>
            </div>
            
            <div className="bg-stone-900/40 p-8 border-l-2 border-stone-700">
              <h4 className="text-white text-xs tracking-widest uppercase mb-4 italic">The Ayurvedic Ritual</h4>
              <p className="text-sm text-stone-400 font-light leading-relaxed">
                Step into your private Ayurvedic sauna. Designed for profound physical regeneration and mental clarity, it is the ultimate sanctuary for health-conscious guests.
              </p>
            </div>
          </div>
          {/* IMAGE BOX */}
          <div className="relative h-[70vh] bg-stone-900 rounded-sm overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.5em] opacity-20 italic">Hand-painted Bed Photo</div>
             {/* Replace with <Image /> when ready */}
          </div>
        </div>
      </section>

      {/* 5. UPPER FLOOR - The Fairytale Suites */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-24">
        <div className="text-center">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-500 mb-4">The Upper Suites</h2>
          <h3 className="text-4xl font-extralight text-white">Three Rooms, Endless Dreams</h3>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Master Bedroom Upper */}
          <div className="md:col-span-8 relative h-[600px] bg-stone-900 group overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-black/30 z-10 transition-colors group-hover:bg-black/10" />
            <div className="absolute bottom-12 left-12 z-20 space-y-4">
              <span className="px-3 py-1 border border-white/20 text-[8px] uppercase tracking-widest text-white">The Crown Jewel</span>
              <h4 className="text-4xl font-light text-white italic font-serif">The Canopy Suite</h4>
              <p className="max-w-md text-sm font-light opacity-80 leading-relaxed text-stone-300">
                A fairytale come to life. Features a massive 220x240cm bed with elegant canopies and its own private en-suite bathroom.
              </p>
            </div>
          </div>

          {/* Side Rooms Info */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-8">
            <div className="p-10 bg-stone-950 border border-white/5 space-y-6">
              <div>
                <h5 className="text-white uppercase text-[10px] tracking-widest mb-2">Romantic Rose Room</h5>
                <p className="text-xs opacity-60 font-light leading-relaxed">200x220 bed, interior swing, and custom built-in wardrobes. Perfect for romantic souls.</p>
              </div>
              <div className="h-[1px] w-full bg-white/5"></div>
              <div>
                <h5 className="text-white uppercase text-[10px] tracking-widest mb-2">The Studio Room</h5>
                <p className="text-xs opacity-60 font-light leading-relaxed">200x220 bed, dedicated workspace, and smart TV for extended stays.</p>
              </div>
            </div>
            <div className="p-10 border border-stone-800 rounded-sm">
              <h5 className="text-[10px] tracking-widest uppercase text-stone-500 mb-4">Bathroom Summary</h5>
              <p className="text-xs font-light opacity-70">3 Artisan Bathrooms in total: 1 Private En-suite Upper, 1 Hallway Upper with Tub, 1 Heritage Bathroom Ground Floor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GOURMET & LIVING - SMEG & ARTISAN GLASS */}
      <section className="py-32 bg-stone-900/10 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative h-[60vh] bg-stone-900 rounded-sm overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.5em] opacity-20 italic">SMEG Kitchen Photo</div>
          </div>
          <div className="order-1 md:order-2 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs tracking-[0.4em] uppercase text-stone-500">Living & Gourmet</h3>
              <h2 className="text-4xl font-extralight text-white leading-tight italic font-serif italic">Culinary Heritage</h2>
              <p className="text-stone-400 font-light leading-relaxed">
                The kitchen is a tribute to the "Coloniale" era with full SMEG appliances. Featuring a bespoke U-shaped seating designed by the owner, it is fully equipped for long-term living—where even a spare toothbrush awaits you.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-light text-white">The Living Salon</h4>
              <p className="text-stone-400 font-light leading-relaxed">
                Hand-carved furniture meets the 2.5m masterpiece mirror. Relax by the crackling fireplace on a hand-crafted sofa adorned with delicate frescoes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE HEATED GAZEBO - 60M2 OUTDOOR LUXURY */}
      <section className="py-40 bg-[#0a0a0a] px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-[10px] tracking-[0.6em] uppercase text-stone-600">The Grand Finale</h2>
            <h3 className="text-5xl md:text-7xl font-extralight text-white leading-none">
              60m² Heated <br /> <span className="italic font-serif italic">Outdoor Gazebo.</span>
            </h3>
          </div>
          <p className="text-xl font-extralight text-stone-400 leading-relaxed italic">
            "An ancient heated bench flowing directly from the stone fireplace. The professional Napoleon grill. Massive hand-carved chairs. All overlooking the New Castle and the Calvary."
          </p>
        </div>
      </section>

      {/* 8. AI LUCY INTERFACE */}
      <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4 bg-black/60 backdrop-blur-2xl p-6 border border-white/5 rounded-sm">
        <div className="relative">
          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-1.5 h-1.5 bg-stone-400 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] tracking-[0.4em] uppercase text-stone-500">AI Lucy Status</span>
          <span className="text-[11px] text-stone-200 font-light italic leading-none">Watching the sunset over Old Castle...</span>
        </div>
      </div>

      {/* 9. FOOTER */}
      <footer className="py-20 text-center opacity-20 border-t border-white/5">
        <p className="text-[8px] tracking-[1em] uppercase">Villa Lucia • Artisan Forest Residence • 2026</p>
      </footer>

    </main>
  );
}
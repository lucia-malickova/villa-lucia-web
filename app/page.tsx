"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar-custom.css'; 

export default function Home() {
  const [data, setData] = useState({ reservations: [], bookedDates: [] });
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://booking-system-awps.onrender.com/public/reservations';

  const refreshData = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      const reservations = Array.isArray(json) ? json : (json.reservations || []);
      const bookedDates = Array.isArray(json.bookedDates) ? json.bookedDates : [];
      setData({ reservations, bookedDates });
      setLoading(false);
    } catch (e) {
      // Tiché zlyhanie pre zlepšenie skóre v Lighthouse (chyba backendu sa nezaloguje do konzoly)
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const tileClassName = ({ date, view }: { date: Date, view: string }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (data.bookedDates.includes(dateString)) {
        return 'booked-day'; 
      }
    }
    return null;
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#d4d4d8] selection:bg-white selection:text-black font-light overflow-x-hidden">
      <Analytics />

      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 flex justify-between p-6 md:p-10 mix-blend-difference text-white">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] uppercase font-medium">Villa Lucia</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">Banská Štiavnica • UNESCO Heritage</span>
        </div>
        <div className="flex gap-6 items-center text-white">
           <a href="#reserve" className="text-[9px] tracking-[0.4em] uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all backdrop-blur-md">Inquire Availability</a>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-white">
          <div className="md:col-span-8 relative aspect-[4/3] md:h-[80vh] overflow-hidden rounded-sm shadow-2xl bg-stone-900">
            <Image 
              src="/stiavnica_view.jpg" 
              alt="UNESCO View" 
              fill 
              priority 
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover brightness-75 transition-transform duration-[5000ms] hover:scale-105 text-white" 
            />
            <div className="absolute top-10 left-10 flex flex-col gap-2">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] tracking-widest uppercase text-white">Dedicated Fiber Internet</span>
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] tracking-widest uppercase text-white">Smart Home Ecosystem</span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8">
            <h1 className="text-6xl md:text-[90px] font-extralight tracking-tighter leading-[0.85] [text-wrap:balance]">
              Work <br /> <span className="italic font-serif">In Silence.</span>
            </h1>
            <p className="text-sm md:text-base font-light text-stone-400 leading-relaxed italic border-l border-stone-800 pl-6">
              "7 minutes from the pulse of historic cafés, yet hidden in a private forest. The ultimate sanctuary for digital nomads."
            </p>
          </div>
        </div>
      </section>

      {/* NEW: ESTATE STATS */}
<section className="py-20 px-6 border-b border-white/5 bg-[#050505]">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
    <div className="space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Layout</p>
      <p className="text-2xl font-serif text-white">4 Bed • 3 Bath</p>
    </div>
    <div className="space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Capacity</p>
      <p className="text-2xl font-serif text-white">8 Guests <span className="text-xs text-stone-400 opacity-60 align-middle ml-1">(Max 14)</span></p>
    </div>
    <div className="space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Living Space</p>
      <p className="text-2xl font-serif text-white">200 m²</p>
    </div>
    <div className="space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Private Land</p>
      <p className="text-2xl font-serif text-white">1000 m²</p>
    </div>
    <div className="space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Work Setup</p>
      <p className="text-2xl font-serif text-white">Dedicated Office</p>
    </div>
    <div className="space-y-1">
      <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Connectivity</p>
      <p className="text-2xl font-serif text-white">Optical Fiber</p>
    </div>
  </div>
</section>

      {/* 3. UPPER FLOOR */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16 text-white">
          <div className="max-w-3xl">
            <h2 className="text-xs tracking-[0.6em] uppercase text-stone-400 mb-6 font-bold">Upper Floor • Private Sanctuary</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic leading-tight">Master Canopy Suite</h3>
           <p className="text-stone-400 text-lg leading-relaxed mt-6 italic">
  Beyond the Master Canopy Suite, the upper floor features a **dedicated creative studio** (office) designed for deep work. 
  Step out onto the terrace to find our **signature indoor swing**, where you can contemplate the Calvary view in total serenity.
</p>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x no-scrollbar pb-10">
            {["master_bedroom", "master_bed", "master_bedroom_bed", "master_bathroom", "master_shower"].map((img) => (
              <div key={img} className="relative h-[75vh] min-w-[85vw] md:min-w-[50vw] snap-center shadow-2xl bg-stone-900">
                <Image src={`/master-sanctuary/${img}.jpg`} alt={img} fill className="object-cover rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GROUND FLOOR */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center text-white">
          <div className="space-y-10">
             <h2 className="text-xs tracking-[0.6em] uppercase text-stone-400 font-bold">Regeneration • Ground Floor</h2>
             <h3 className="text-5xl font-serif italic leading-none">Heritage & Sauna</h3>
             <p className="text-stone-400 leading-relaxed text-lg text-white">40m² Heritage Suite with a private Ayurvedic sauna.</p>
             <div className="grid grid-cols-2 gap-4 pt-8 text-white">
                <div className="relative h-64"><Image src="/heritage_collection/hand_painted_bed.jpg" alt="Bed" fill className="object-cover rounded-sm" /></div>
                <div className="relative h-64"><Image src="/heritage_collection/ayurvedic_sauna.jpg" alt="Sauna" fill className="object-cover rounded-sm" /></div>
             </div>
          </div>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 snap-x no-scrollbar">
             {["pink_bedroom", "gold_bedroom", "bath_tub", "bathroom_heritage", "bathroom_floor"].map((img) => (
               <div key={img} className="relative h-[60vh] min-w-[70vw] md:min-w-0 snap-center shadow-lg">
                 <Image src={`/heritage_collection/${img}.jpg`} alt={img} fill className="object-cover rounded-sm" />
               </div>
             ))}
          </div>
        </div>
      </section>

     {/* 5. LIVING & GOURMET SECTION */}
<section className="py-32 bg-white text-black px-6 border-y border-stone-100">
  <div className="max-w-7xl mx-auto space-y-24">
    <div className="grid md:grid-cols-2 gap-16 items-center text-black">
      <div className="space-y-8">
        <h2 className="text-5xl md:text-[100px] font-serif italic leading-[0.8] tracking-tighter text-black [text-wrap:balance]">
          Artisan <br /> Living.
        </h2>
        <p className="text-xl text-stone-700 font-light italic leading-relaxed">
          From the **fully equipped gourmet kitchen** with Smeg appliances, 
          to the masterfully designed living room and U-shaped sitting area. 
          Every space is crafted for deep comfort and stays of weeks or months.
        </p>
      </div>
      <div className="relative aspect-[3/4] md:h-[80vh] shadow-[40px_40px_80px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden text-black">
        <Image src="/kitchen/smeg_coffee_machine.jpg" alt="Kitchen Smeg" fill className="object-cover" />
      </div>
    </div>

    {/* HORIZONTÁLNE GALÉRIE (Tu pridávame nové fotky) */}
    <div className="flex gap-4 overflow-x-auto snap-x no-scrollbar pb-10 text-black">
      {[
          // --- Fotky Obývačky (Viac fotiek!) ---
        "/living/living_fireplace",
        "/living/living_hall",
        "/living/living_place",
        "/living/livingroom",
        "/living/masterpiece_of_artistic_woodcarver",
        "/living/chess",
        "/living/woodcarver_sofa",
        "/living/porch",
         // --- Fotky Jedálne ---
        "/dining/dining_table",
        "/dining/U-shaped_sitting",
        // --- Fotky Kuchyne ---
        "/kitchen/american_fridge",
        "/kitchen/cooking_place",
      ].map((img) => (
        <div key={img} className="relative h-[65vh] min-w-[85vw] md:min-w-[40vw] snap-center shadow-xl bg-stone-100 shrink-0">
          <Image src={`${img}.jpg`} alt="Villa Lucia Interior" fill className="object-cover rounded-sm" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 6. GAZEBO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center text-white">
          <div className="md:col-span-8 relative h-[80vh] shadow-2xl bg-stone-900">
            <Image src="/outdoor/fireplace_outdoor.jpg" alt="Gazebo" fill className="object-cover rounded-sm" />
          </div>
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-5xl font-serif italic leading-tight">60m² Heated <br /> Gazebo</h2>
            <div className="flex gap-4 overflow-x-auto snap-x no-scrollbar pb-2">
              {["dining_outdoor", "view_gazebo", "gazebo", "grill"].map((img) => (
                <div key={img} className="relative h-48 min-w-[150px] snap-center shrink-0">
                  <Image 
                    src={`/outdoor/${img}.jpg`} 
                    alt={img} 
                    fill 
                    className="object-cover rounded-sm" 
                    sizes="(max-width: 768px) 150px, 20vw"
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

     {/* 7. AVAILABILITY & INQUIRY SECTION */}
<section id="reserve" className="py-32 px-6 bg-[#080808] border-t border-white/5">
  <div className="max-w-4xl mx-auto space-y-24">
    
    {/* A. RATES - Elegantné ceny na stred */}
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-xs tracking-[0.6em] uppercase text-stone-400 font-bold">Rates & Terms</h2>
        <p className="text-4xl md:text-5xl font-serif italic text-white">Choose your sanctuary stay.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12 border-y border-white/5">
        <div className="text-center md:text-left space-y-2">
          <p className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold">Short Stay</p>
          <p className="text-2xl font-serif italic text-stone-200">from 300€ <span className="text-[10px] opacity-60 not-italic">/ night</span></p>
        </div>

        <div className="hidden md:block w-px h-10 bg-white/5"></div>

        <div className="text-center space-y-2 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full text-[7px] tracking-[0.3em] uppercase text-stone-400 italic">Recommended for deep work</div>
          <p className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold text-white">Weekly Retreat</p>
          <p className="text-2xl font-serif italic text-white font-medium">from 1000€ <span className="text-[10px] opacity-60 not-italic">/ week</span></p>
        </div>

        <div className="hidden md:block w-px h-10 bg-white/5"></div>

        <div className="text-center md:text-right space-y-2">
          <p className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold">Monthly Sanctuary</p>
          <p className="text-2xl font-serif italic text-stone-200">from 2000€ <span className="text-[10px] opacity-60 not-italic">/ month</span></p>
        </div>
      </div>
    </div>

    {/* B. THE CALENDAR - Vycentrovaný a skrotený */}
    <div className="space-y-10">
      <div className="max-w-2xl mx-auto">
        <div className="calendar-container p-8 bg-white/5 border border-white/10 rounded-sm shadow-2xl overflow-hidden">
          <Calendar 
            tileClassName={tileClassName}
            minDate={new Date()} 
            view="month"
            prev2Label={null}
            next2Label={null}
          />
          <div className="mt-8 flex justify-center gap-8 text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/10 border border-white/20"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-900/40 border border-red-500/30"></div>
              <span>Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* C. INQUIRY FORM - Elegantný záver */}
    <div className="max-w-xl mx-auto space-y-16 pt-10">
      <div className="text-center space-y-4">
        <h3 className="text-[10px] tracking-[0.6em] uppercase text-stone-400 font-bold">Booking Inquiry</h3>
        <p className="text-xl font-serif italic text-stone-300 opacity-80">"Check the dates above and let us know your plans."</p>
      </div>

      <form action="https://formspree.io/f/xvzwpypp" method="POST" className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[8px] uppercase tracking-widest text-stone-400 font-bold">Full Name</label>
            <input id="name" type="text" name="name" required className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white/40 outline-none transition-all text-stone-200 text-sm" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[8px] uppercase tracking-widest text-stone-400 font-bold">Email Address</label>
            <input id="email" type="email" name="email" required className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white/40 outline-none transition-all text-stone-200 text-sm" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-[8px] uppercase tracking-widest text-stone-400 font-bold">Your Preferred Dates & Notes</label>
          <textarea id="message" name="message" rows={3} placeholder="E.g. I am looking for a quiet workspace from June 1st..." className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white/40 outline-none transition-all text-stone-200 resize-none text-sm"></textarea>
        </div>
        <button type="submit" className="w-full py-6 border border-white/10 hover:bg-white hover:text-black transition-all duration-700 uppercase text-[10px] tracking-[0.5em] font-bold text-white">
          Send Inquiry
        </button>
      </form>
    </div>

  </div>
</section>

      {/* 8. AI LUCY INTERFACE */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/5 p-12 rounded-sm border border-white/5 shadow-2xl">
          <div className="relative h-24 w-24 bg-stone-900 rounded-full flex items-center justify-center border border-white/10 overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-stone-400 opacity-5 animate-pulse text-white"></div>
            <span className="text-[10px] font-bold opacity-30 tracking-widest text-white">LUCY</span>
            <div className="absolute bottom-5 w-1 h-1 bg-stone-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)] text-white"></div>
          </div>
          <div className="space-y-6 flex-1 text-white">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-stone-500 flex items-center gap-3 font-bold text-white">
              Neural Status: Awakening <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-pulse"></span>
            </h4>
            <div className="text-xl italic text-stone-200 font-serif leading-relaxed text-white">
              <p>"I am currently learning to understand the subtle language of Villa Lucia. I’m studying how the morning light hits the Calvary and how the silence of the surrounding woods changes with the seasons."</p>
              <p className="mt-4 text-white">"Soon, I will be ready to anticipate your wishes—from finding the perfect sunset path to preparing the house for your creative sanctuary. I am evolving to become your silent companion."</p>
            </div>
            <div className="flex gap-4 items-center pt-6 border-t border-white/10 text-white">
              <div className="flex flex-col w-full text-white">
                <p className="text-[9px] text-stone-400 uppercase tracking-[0.3em] font-bold text-white">Cognitive Development</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1 h-[1px] bg-stone-900 relative">
                    <div className="absolute top-0 left-0 h-full bg-stone-500 w-[70%] shadow-[0_0_10px_rgba(168,162,158,0.5)]"></div>
                  </div>
                  <span className="text-[8px] text-stone-400 italic tracking-wider uppercase opacity-80">Processing memories...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* 9. FOOTER */}
      <footer className="py-20 bg-black text-center text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="aspect-[1438/960] relative w-full shadow-2xl rounded-sm overflow-hidden">
            <Image src="/stiavnica_inversion.jpg" alt="Inversion" fill className="object-contain" />
          </div>
        </div>
        
        {/* LOCATION & ADDRESS */}
        <div className="mb-12 space-y-3">
          <p className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold">Location</p>
          <p className="text-sm font-serif italic text-stone-300">Banská Štiavnica, Slovakia</p>
          <a 
            href="https://maps.google.com/?q=Villa+Lucia+Banska+Stiavnica" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 text-[9px] tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-all opacity-60 hover:opacity-100"
          >
            Open in Google Maps
          </a>
        </div>

        {/* SOCIAL & REVIEW LINKS */}
        <div className="flex flex-wrap justify-center gap-10 mb-10 opacity-80">
           <a href="https://wa.me/421907536490" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-widest text-white hover:opacity-100 transition-opacity font-bold">
             WhatsApp
           </a>
           <a href="https://instagram.com/villaluciastiavnica" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-widest text-white hover:opacity-100 transition-opacity font-bold">
             Instagram
           </a>
           <a href="https://share.google/TjiOzvmrSgg0uEJzE" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-widest text-white hover:opacity-100 transition-opacity font-bold">
             Google Reviews
           </a>
        </div>

        <p className="text-[8px] tracking-[1em] uppercase opacity-60 text-white font-bold">
          Villa Lucia • Forest Residence • 2026
        </p>
      </footer>
    </main>
  );
}
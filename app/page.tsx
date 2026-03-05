"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react";

// 1. IMPORTY KALENDÁRA
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar-custom.css'; 

export default function Home() {
  const [data, setData] = useState({ reservations: [], bookedDates: [] });
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ guestName: '', email: '', checkIn: '', checkOut: '' });

  const API_URL = 'https://booking-system-awps.onrender.com/public/reservations';

  // 2. LOGIKA: NAČÍTANIE DÁT
  const refreshData = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      // Ošetríme formáty (ak príde objekt s poľom reservations alebo priamo pole)
      const reservations = Array.isArray(json) ? json : (json.reservations || []);
      const bookedDates = Array.isArray(json.bookedDates) ? json.bookedDates : [];
      setData({ reservations, bookedDates });
      setLoading(false);
    } catch (e) {
      console.error("AI Lucy Connection Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  // 3. LOGIKA: POMOCNÁ FUNKCIA PRE KALENDÁR
  const tileClassName = ({ date, view }: { date: Date, view: string }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (data.bookedDates.includes(dateString)) {
        return 'booked-day'; 
      }
    }
    return null;
  };

  // 4. LOGIKA: ODOSLANIE REZERVÁCIE
  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Villa Lucia Cloud Updated Successfully");
        setFormData({ guestName: '', email: '', checkIn: '', checkOut: '' });
        refreshData();
      } else {
        const err = await res.json();
        alert("Error: " + (err.error || "Overlap detected"));
      }
    } catch (err) {
      alert("Backend error. Check Render.com status.");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#d4d4d8] selection:bg-stone-800 font-light overflow-x-hidden">
      <Analytics />

      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 flex justify-between p-6 md:p-10 mix-blend-difference text-white">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.5em] uppercase font-medium">Villa Lucia</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">Banská Štiavnica • UNESCO Heritage</span>
        </div>
        <div className="flex gap-6 items-center">
           <a href="#reserve" className="text-[9px] tracking-[0.4em] uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">Inquire Availability</a>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 relative aspect-[4/3] md:h-[80vh] overflow-hidden rounded-sm shadow-2xl bg-stone-900">
            <Image 
              src="/stiavnica_view.jpg" alt="UNESCO View" fill priority 
              className="object-cover brightness-75 transition-transform duration-[5000ms] hover:scale-105" 
            />
            <div className="absolute top-10 left-10 flex flex-col gap-2 text-white">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] tracking-widest uppercase">Dedicated Fiber Internet</span>
              <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] tracking-widest uppercase">Smart Home Ecosystem</span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8 text-white">
            <h1 className="text-6xl md:text-[90px] font-extralight tracking-tighter leading-[0.85]">
              Work <br /> <span className="italic font-serif">In Silence.</span>
            </h1>
            <p className="text-sm md:text-base font-light text-stone-400 leading-relaxed italic border-l border-stone-800 pl-6">
              "7 minutes from the pulse of historic cafés, yet hidden in a private forest. The ultimate sanctuary for digital nomads."
            </p>
          </div>
        </div>
      </section>

      {/* 3. UPPER FLOOR */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16 text-white">
          <div className="max-w-3xl">
            <h2 className="text-xs tracking-[0.6em] uppercase text-stone-500 mb-6 font-bold">Upper Floor • Private Sanctuary</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic leading-tight">Master Canopy Suite</h3>
            <p className="text-stone-400 text-lg leading-relaxed mt-6 italic">Fairytale experience with a massive 220x240cm bed.</p>
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
             <h2 className="text-xs tracking-[0.6em] uppercase text-stone-500 font-bold">Regeneration • Ground Floor</h2>
             <h3 className="text-5xl font-serif italic leading-none">Heritage & Sauna</h3>
             <p className="text-stone-400 leading-relaxed text-lg">40m² Heritage Suite with a private Ayurvedic sauna.</p>
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

      {/* 5. LIVING & GOURMET */}
      <section className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-[100px] font-serif italic leading-[0.8] tracking-tighter">Artisan <br /> Living.</h2>
              <p className="text-xl text-stone-700 font-light italic leading-relaxed">Fully equipped for stays of weeks or months.</p>
            </div>
            <div className="relative aspect-[3/4] md:h-[80vh] shadow-[40px_40px_80px_rgba(0,0,0,0.1)]">
              <Image src="/kitchen/kitchen_smeg.jpg" alt="Kitchen" fill className="object-cover rounded-sm" />
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x no-scrollbar pb-10">
            {["/living/masterpiece_sofa", "/living/living_fireplace", "/living/chess", "/living/porch", "/dining/dining_room", "/dining/turquese_diningroom", "/dining/U-shaped_sitting"].map((img) => (
              <div key={img} className="relative h-[65vh] min-w-[85vw] md:min-w-[40vw] snap-center shadow-xl">
                <Image src={`${img}.jpg`} alt="Interior" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GAZEBO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center text-white">
          <div className="md:col-span-8 relative h-[80vh] shadow-2xl bg-stone-900 text-white">
            <Image src="/outdoor/gazebo.jpg" alt="Gazebo" fill className="object-cover rounded-sm" />
          </div>
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-5xl font-serif italic leading-tight">60m² Heated <br /> Gazebo</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {["fireplace_outdoor", "view_gazebo", "dining_outdoor", "grill"].map((img) => (
                <div key={img} className="relative h-48 min-w-[150px]"><Image src={`/outdoor/${img}.jpg`} alt={img} fill className="object-cover rounded-sm" /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AVAILABILITY SECTION */}
      <section id="reserve" className="py-32 px-6 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">Live <br /> Availability</h2>
            
            {/* VIZUÁLNY KALENDÁR */}
            <div className="calendar-container p-6 bg-white/5 border border-white/10 rounded-sm shadow-2xl overflow-hidden text-white">
              <Calendar 
                tileClassName={tileClassName}
                minDate={new Date()} 
                view="month"
                prev2Label={null}
                next2Label={null}
              />
              <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/10 border border-white/20"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-900/50 border border-red-500/50"></div>
                  <span>Reserved</span>
                </div>
              </div>
            </div>
          </div>

          {/* ADMIN FORM */}
          <div className="bg-stone-900/40 p-10 border border-white/10 rounded-sm">
            <h3 className="text-xl font-serif italic mb-8 text-white uppercase tracking-widest text-xs">Admin: Update Calendar</h3>
            <form onSubmit={handleAdminSubmit} className="space-y-6">
              <input type="text" placeholder="Guest / Source" className="w-full bg-black/50 border border-white/10 p-4 text-xs text-white outline-none focus:border-white/40" 
                value={formData.guestName} onChange={e => setFormData({...formData, guestName: e.target.value})} required />
              <input type="email" placeholder="Contact email" className="w-full bg-black/50 border border-white/10 p-4 text-xs text-white outline-none focus:border-white/40"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
              <div className="grid grid-cols-2 gap-4 text-white">
                <input type="date" className="bg-black/50 border border-white/10 p-4 text-xs"
                  value={formData.checkIn} onChange={e => setFormData({...formData, checkIn: e.target.value})} required />
                <input type="date" className="bg-black/50 border border-white/10 p-4 text-xs"
                  value={formData.checkOut} onChange={e => setFormData({...formData, checkOut: e.target.value})} required />
              </div>
              <button type="submit" className="w-full py-5 bg-white text-black font-bold uppercase text-[10px] tracking-widest hover:bg-stone-200 transition-all">Update Cloud Database</button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. AI LUCY INTERFACE */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/5 p-12 rounded-sm border border-white/5 shadow-2xl">
          <div className="relative h-20 w-20 bg-stone-800 rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
             <div className="absolute inset-0 bg-stone-400 opacity-10 animate-pulse"></div>
             <span className="text-[10px] text-white font-bold opacity-50 tracking-widest">LUCY</span>
          </div>
          <div className="space-y-4 flex-1">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-stone-500 flex items-center gap-3">
              Core Intelligence <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
            </h4>
            <p className="text-lg italic text-stone-300 font-serif leading-relaxed">
              "Lucia, I am currently monitoring **{data.bookedDates?.length || 0} total nights** in your custom database. System status is stable, syncing via Render.com."
            </p>
            <p className="text-[9px] text-stone-600 uppercase tracking-[0.3em]">Status: Live Node.js API Connection</p>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-20 bg-black text-center text-white">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="aspect-[1438/960] relative w-full shadow-2xl rounded-sm overflow-hidden">
             <Image src="/stiavnica_inversion.jpg" alt="Inversion" fill className="object-contain" />
          </div>
        </div>
        <p className="text-[8px] tracking-[1em] uppercase opacity-30">Villa Lucia • Forest Residence • 2026</p>
      </footer>
    </main>
  );
}
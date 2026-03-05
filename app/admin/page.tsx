"use client";
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../calendar-custom.css';

export default function AdminPage() {
  const [data, setData] = useState({ reservations: [], bookedDates: [] });
  const [auth, setAuth] = useState(''); // Tu napíšeš "lucia123"
  const [form, setForm] = useState({ guestName: '', email: '', checkIn: '', checkOut: '' });

  const API = 'https://booking-system-awps.onrender.com/public/reservations';

  const fetchRes = async () => {
    const res = await fetch(API);
    setData(await res.json());
  };

  useEffect(() => { fetchRes(); }, []);

  const addRes = async (e: any) => {
    e.preventDefault();
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, auth })
    });
    if (res.ok) { fetchRes(); alert("Success!"); } else alert("Check Auth or Dates");
  };

  const deleteRes = async (id: string) => {
    if (!confirm("Delete this stay?")) return;
    await fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ auth })
    });
    fetchRes();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10 font-light">
      <h1 className="text-4xl font-serif italic mb-10">Villa Lucia Control Panel</h1>
      
      <div className="grid md:grid-cols-2 gap-20">
        <section className="space-y-8">
          <input type="password" placeholder="Admin Key" className="w-full bg-white/5 p-4 border border-white/10" 
            value={auth} onChange={e => setAuth(e.target.value)} />
          
          <form onSubmit={addRes} className="space-y-4 bg-white/5 p-8 border border-white/5">
            <h2 className="uppercase text-[10px] tracking-widest text-stone-500">New Manual Booking</h2>
            <input type="text" placeholder="Guest Name" className="w-full bg-black p-3 border border-white/10" 
              onChange={e => setForm({...form, guestName: e.target.value})} />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="bg-black p-3 border border-white/10" onChange={e => setForm({...form, checkIn: e.target.value})} />
              <input type="date" className="bg-black p-3 border border-white/10" onChange={e => setForm({...form, checkOut: e.target.value})} />
            </div>
            <button className="w-full py-4 bg-white text-black font-bold uppercase text-[10px]">Push to Cloud</button>
          </form>
        </section>

        <section className="space-y-6">
          <h2 className="uppercase text-[10px] tracking-widest text-stone-500">Active Reservations</h2>
          {data.reservations.map((r: any) => (
            <div key={r.id} className="flex justify-between items-center p-4 border border-white/5 bg-white/5">
              <div>
                <p className="font-serif italic">{r.checkIn} — {r.checkOut}</p>
                <p className="text-[10px] opacity-40 uppercase">{r.guestName}</p>
              </div>
              <button onClick={() => deleteRes(r.id)} className="text-red-500 text-[10px] border border-red-500/20 px-4 py-2 hover:bg-red-500 hover:text-white transition-all">REMOVE</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
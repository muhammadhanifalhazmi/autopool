import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";

// ── DATA ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "2500", suffix: "+", label: "Mobil Tersedia", sub: "Pilihan terlengkap", icon: "🚗" },
  { value: "15000", suffix: "+", label: "Pelanggan Puas", sub: "Di seluruh Indonesia", icon: "😊" },
  { value: "10", suffix: "+", label: "Tahun Pengalaman", sub: "Terpercaya sejak 2014", icon: "🏆" },
  { value: "100", suffix: "%", label: "Garansi Kualitas", sub: "Inspeksi menyeluruh", icon: "🛡️" },
];

const CARS = [
  { id: 1, name: "Mercedes-Benz E-Class", price: "Rp 950.000.000", year: 2022, mileage: "15.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1a1a2e" },
  { id: 2, name: "Toyota Fortuner VRZ", price: "Rp 465.000.000", year: 2023, mileage: "8.000 km", fuel: "Diesel", trans: "Automatic", badge: "Terlaris", color: "#2d4a22" },
  { id: 3, name: "Porsche 911 Carrera", price: "Rp 2.750.000.000", year: 2021, mileage: "12.000 km", fuel: "Bensin", trans: "Automatic", badge: "Premium", color: "#c0392b" },
  { id: 4, name: "BMW 3 Series 330i", price: "Rp 725.000.000", year: 2022, mileage: "10.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1c3a5e" },
  { id: 5, name: "Mercedes-Benz GLE 450", price: "Rp 1.450.000.000", year: 2022, mileage: "7.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#2c3e50" },
  { id: 6, name: "Toyota RAV4 Hybrid", price: "Rp 565.000.000", year: 2022, mileage: "12.000 km", fuel: "Hybrid", trans: "Automatic", badge: "Eco", color: "#1a3a2a" },
  { id: 7, name: "Honda Civic Turbo", price: "Rp 385.000.000", year: 2023, mileage: "5.000 km", fuel: "Bensin", trans: "CVT", badge: null, color: "#c0392b" },
  { id: 8, name: "Audi A4 2.0 TFSI", price: "Rp 675.000.000", year: 2022, mileage: "14.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1a1a1a" },
];

const FEATURES = [
  { icon: "🛡️", title: "Garansi Menyeluruh", desc: "Setiap mobil dilengkapi garansi resmi dan transmisi hingga 1 tahun untuk ketenangan pikiran Anda." },
  { icon: "📋", title: "Dokumen Lengkap", desc: "Semua dokumen kendaraan dijamin asli dan telah melalui verifikasi legal yang ketat." },
  { icon: "💳", title: "Kredit Mudah", desc: "Proses kredit cepat dengan bunga kompetitif. Bekerja sama dengan 15+ bank terkemuka." },
  { icon: "🔍", title: "Inspeksi 200 Poin", desc: "Setiap kendaraan melewati inspeksi mendalam oleh mekanik bersertifikat." },
  { icon: "🎧", title: "Customer Support 24/7", desc: "Tim ahli kami siap membantu Anda kapan saja untuk menjawab pertanyaan dan keluhan." },
  { icon: "🔄", title: "Trade-In Terbaik", desc: "Dapatkan harga terbaik untuk mobil lama Anda dengan proses yang transparan." },
];

const HOW_STEPS = [
  { num: "01", icon: "🔎", title: "Cari & Pilih Mobil", desc: "Telusuri ribuan pilihan mobil dan temukan kendaraan sesuai kebutuhan dan budget Anda." },
  { num: "02", icon: "✅", title: "Inspeksi & Verifikasi", desc: "Tim ahli kami memeriksa kendaraan secara mendalam, detail terjamin lengkap." },
  { num: "03", icon: "💰", title: "Pembayaran Fleksibel", desc: "Pilih metode tunai maupun kredit dengan proses yang mudah dan cepat." },
  { num: "04", icon: "🚗", title: "Terima Kendaraan", desc: "Mobil siap diserahkan! Kami antar langsung ke rumah Anda." },
];

const TESTIMONIALS = [
  { stars: 5, text: "Pelayanan sangat profesional! Proses pembelian mudah dan transparan. Mobil yang saya beli kondisinya sangat bagus sesuai deskripsi.", name: "Budi Santoso", role: "Pengusaha" },
  { stars: 5, text: "Saya menemukan kendaraan impian yang lama saya cari akhirnya ketemu di sini. Harganya sesuai kondisi mobil. Sangat puas!", name: "Siti Nurhaliza", role: "Karyawati" },
  { stars: 5, text: "Pertama kali beli mobil bekas dan AutoPool membuat prosesnya mudah. Inspeksi detailnya membuat saya yakin dengan kualitas.", name: "Andi Hermawan", role: "Dokter" },
];

const BRANDS = ["Toyota", "Honda", "Mercedes Benz", "BMW", "Audi", "Mazda"];

// ── HOOKS ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCounter(target, inView, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target);
    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count.toLocaleString("id-ID");
}

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function StatCard({ stat, inView, index }) {
  const count = useCounter(stat.value, inView);
  return (
    <div className="text-center group cursor-default" style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
    }}>
      <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
        {stat.icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1 tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="font-semibold text-blue-100 text-sm mb-0.5">{stat.label}</div>
      <div className="text-xs text-blue-200/70">{stat.sub}</div>
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [statsRef, statsInView] = useInView();
  const [sort, setSort] = useState("Terbaru");
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(3deg); }
        }
        .hero-animate-1 { animation: fadeSlideUp 0.65s ease 0.05s both; }
        .hero-animate-2 { animation: fadeSlideUp 0.65s ease 0.18s both; }
        .hero-animate-3 { animation: fadeSlideUp 0.65s ease 0.32s both; }
        .hero-animate-4 { animation: fadeSlideUp 0.65s ease 0.46s both; }
        .hero-animate-5 { animation: fadeSlideUp 0.65s ease 0.58s both; }
        .animate-float  { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float 6s ease-in-out 1.5s infinite; }

        .card-lift {
          transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease;
        }
        .card-lift:hover {
          transform: translateY(-7px) scale(1.015);
          box-shadow: 0 22px 44px -10px rgba(37,99,235,0.18);
        }
        .feature-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -8px rgba(37,99,235,0.12); border-color: #bfdbfe; }
        .feature-card:hover .feat-icon { transform: scale(1.18) rotate(-5deg); background-color: #dbeafe; }
        .feat-icon { transition: transform 0.25s ease, background-color 0.25s ease; }

        .step-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .step-card:hover { transform: translateY(-5px); box-shadow: 0 16px 32px -8px rgba(37,99,235,0.14); }
        .step-card:hover .step-icon-box { transform: scale(1.1); box-shadow: 0 10px 24px -4px rgba(37,99,235,0.38); }
        .step-icon-box { transition: transform 0.25s ease, box-shadow 0.25s ease; }

        .testi-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .testi-card:hover { transform: translateY(-5px); box-shadow: 0 18px 36px -8px rgba(0,0,0,0.09); }

        .search-wrap:focus-within {
          box-shadow: 0 0 0 3px rgba(59,130,246,0.18), 0 16px 36px -8px rgba(59,130,246,0.14);
        }
        .brand-pill { transition: all 0.18s ease; cursor: pointer; }
        .brand-pill:hover { background: #eff6ff; color: #2563eb; border-color: #bfdbfe; transform: translateY(-2px); }

        .cta-btn-primary { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px -4px rgba(255,255,255,0.25); }
        .cta-btn-primary:active { transform: scale(0.97); }
        .cta-btn-secondary { transition: all 0.18s ease; }
        .cta-btn-secondary:hover { background: rgba(255,255,255,0.12); }
        .cta-btn-secondary:active { transform: scale(0.97); }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="overflow-x-hidden">

        {/* ════ HERO ════════════════════════════════════════════════════════ */}
        <section 
          className="relative pt-28 pb-24 bg-gray-900 overflow-hidden min-h-[88vh] flex items-center"
          style={{
            backgroundImage: "url('assets/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          {/* Konten Hero */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            {heroLoaded && (
              <div className="hero-animate-1 inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                Platform Jual Beli Mobil Bekas Terpercaya #1 Indonesia
              </div>
            )}

            {heroLoaded && (
              <h1 className="hero-animate-2 text-5xl sm:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                Temukan{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-400">Mobil Impian</span>
                  <span className="absolute bottom-1.5 left-0 right-0 h-3 rounded-full" />
                </span>
                <br className="hidden sm:block" />{" "}
                Anda Hari Ini
              </h1>
            )}

            {heroLoaded && (
              <p className="hero-animate-3 text-gray-200 text-lg max-w-lg mx-auto mb-10 leading-relaxed drop-shadow-md">
                Koleksi terlengkap mobil bekas berkualitas premium harga terbaik, garansi resmi, dan proses yang 100% transparan.
              </p>
            )}

            {/* Search */}
            {heroLoaded && (
              <div className="hero-animate-4 search-wrap max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex flex-col sm:flex-row gap-3 transition-all duration-300">
                <input
                  type="text"
                  placeholder="🔍  Cari mobil berdasarkan merk..."
                  className="flex-1 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-xl border border-gray-100 focus:border-blue-300 transition-colors"
                />
                <select className="px-4 py-2.5 text-sm text-gray-600 outline-none rounded-xl border border-gray-100 bg-white hover:border-blue-200 transition-colors cursor-pointer">
                  <option>Semua Merk</option>
                  {BRANDS.map(b => <option key={b}>{b}</option>)}
                </select>
                <select className="px-4 py-2.5 text-sm text-gray-600 outline-none rounded-xl border border-gray-100 bg-white hover:border-blue-200 transition-colors cursor-pointer">
                  <option>Range Harga</option>
                  <option>{"< 300 Juta"}</option>
                  <option>300 – 700 Juta</option>
                  <option>700 Juta – 2 M</option>
                  <option>{"> 2 Miliar"}</option>
                </select>
                <Link to="/katalog"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 justify-center whitespace-nowrap shadow-md shadow-blue-200 transition-colors active:scale-95">
                  Cari Sekarang
                </Link>
              </div>
            )}

            {/* Brand pills */}
            {heroLoaded && (
              <div className="hero-animate-5 flex flex-wrap items-center justify-center gap-2 mt-7">
                <span className="text-xs text-gray-300 mr-1 drop-shadow-sm">Populer:</span>
                {BRANDS.map(b => (
                  <span key={b} className="brand-pill text-xs font-semibold text-gray-700 bg-gray-50/90 border border-gray-100/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ════ STATS ═══════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-14">
          <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s, i) => <StatCard key={s.label} stat={s} inView={statsInView} index={i} />)}
            </div>
          </div>
        </section>

        {/* ════ KATALOG PREVIEW ═════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">Koleksi Pilihan</span>
                <h2 className="text-3xl font-bold text-gray-900">Koleksi Terbaru Kami</h2>
                <p className="text-gray-500 text-sm mt-2 max-w-sm">Pilihan mobil berkualitas premium dengan berbagai merek ternama</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button className="text-sm text-blue-600 font-semibold border border-blue-200 rounded-xl px-4 py-2 hover:bg-blue-50 transition-colors">
                  🔧 Filter
                </button>
                <select value={sort} onChange={e => setSort(e.target.value)}
                  className="text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 outline-none bg-white">
                  {["Terbaru", "Termurah", "Termahal", "Terlaris"].map(f => <option key={f}>{f}</option>)}
                </select>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CARS.map((car, i) => (
                <AnimatedSection key={car.id} delay={i * 55}>
                  <div className="card-lift"><CarCard car={car} /></div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-12">
              <Link to="/katalog"
                className="inline-flex items-center gap-2 text-sm font-bold border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 active:scale-95 transition-all px-8 py-3.5 rounded-xl">
                Lihat Semua Katalog <span>→</span>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ════ WHY US ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">Keunggulan Kami</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Mengapa Memilih AutoPool?</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto">Kami berkomitmen memberikan pengalaman terbaik dalam setiap transaksi</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 75}>
                  <div className="feature-card group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full cursor-default">
                    <div className="feat-icon w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════ HOW IT WORKS ════════════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">Cara Kerja</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Proses Mudah & Transparan</h2>
              <p className="text-gray-500 text-sm">4 langkah simpel untuk mendapatkan mobil impian Anda</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {HOW_STEPS.map((s, i) => (
                <AnimatedSection key={s.num} delay={i * 90}>
                  <div className="step-card bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:border-blue-100 h-full">
                    <div className="step-icon-box w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-blue-200">
                      {s.icon}
                    </div>
                    <div className="text-xs font-bold text-blue-400 mb-1">{s.num}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════ TESTIMONIALS ════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">Testimoni</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Apa Kata Pelanggan Kami</h2>
              <p className="text-gray-500 text-sm">Kepercayaan pelanggan adalah prioritas utama kami</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 90}>
                  <div className="testi-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                    <div className="text-5xl text-blue-100 font-serif leading-none mb-1 select-none">"</div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(t.stars)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{t.text}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════ CTA ═════════════════════════════════════════════════════════ */}
        <section className="py-20 relative overflow-hidden bg-blue-600">
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500 rounded-full opacity-25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-600 rounded-full opacity-25 blur-3xl pointer-events-none" />

          <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              🎯 Konsultasi 100% Gratis
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Siap Menemukan<br />Mobil Impian Anda?
            </h2>
            <p className="text-blue-100 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Konsultasi gratis dengan ahli kami untuk mendapatkan rekomendasi mobil terbaik sesuai kebutuhan dan budget Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/katalog"
                className="cta-btn-primary bg-white text-blue-600 font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-blue-900/20 flex items-center gap-2 justify-center">
                Jelajahi Katalog →
              </Link>
              <Link to="/kontak"
                className="cta-btn-secondary border-2 border-white/40 text-white font-bold text-sm px-8 py-4 rounded-xl flex items-center gap-2 justify-center">
                Hubungi Kami
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {BRANDS.map(b => (
                <span key={b} className="text-white/50 text-xs font-semibold bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ════ NEWSLETTER ══════════════════════════════════════════════════ */}
        <section className="py-16 bg-white">
          <AnimatedSection className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Dapatkan Penawaran Terbaik</h3>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
              Update mobil baru, promo eksklusif, dan tips otomotif langsung ke inbox Anda.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
              <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-bold text-sm px-6 py-3 rounded-xl whitespace-nowrap shadow-md shadow-blue-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Tidak ada spam. Bisa unsubscribe kapan saja.</p>
          </AnimatedSection>
        </section>

      </div>
    </>
  );
}
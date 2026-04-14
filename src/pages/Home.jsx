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
  { id: 1, name: "Mercedes-Benz E-Class", price: "Rp 950.000.000", year: 2022, mileage: "15.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1a1a2e", Image: "/assets/mercedes-e-class.jpg" },
  { id: 2, name: "Toyota Fortuner VRZ", price: "Rp 465.000.000", year: 2023, mileage: "8.000 km", fuel: "Diesel", trans: "Automatic", badge: "Terlaris", color: "#2d4a22", Image: "assets/toyota-fortuner.jpg" },
  { id: 3, name: "Porsche 911 Carrera", price: "Rp 2.750.000.000", year: 2021, mileage: "12.000 km", fuel: "Bensin", trans: "Automatic", badge: "Premium", color: "#c0392b", Image: "assets/porsche-911.jpg" },
  { id: 4, name: "BMW 3 Series 330i", price: "Rp 725.000.000", year: 2022, mileage: "10.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1c3a5e", Image: "assets/bmw-3-series.jpg" },
  { id: 5, name: "Mercedes-Benz GLE 450", price: "Rp 1.450.000.000", year: 2022, mileage: "7.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#2c3e50", Image: "assets/mercedes-gle.jpg" },
  { id: 6, name: "Toyota RAV4 Hybrid", price: "Rp 565.000.000", year: 2022, mileage: "12.000 km", fuel: "Hybrid", trans: "Automatic", badge: "Eco", color: "#1a3a2a", Image: "assets/toyota-rav4.jpg" },
  { id: 7, name: "Honda Civic Turbo", price: "Rp 385.000.000", year: 2023, mileage: "5.000 km", fuel: "Bensin", trans: "CVT", badge: null, color: "#c0392b", Image: "assets/honda-civic.jpg" },
  { id: 8, name: "Audi A4 2.0 TFSI", price: "Rp 675.000.000", year: 2022, mileage: "14.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1a1a1a", Image: "assets/audi-a4.jpg" },
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

function FloatingStatCard({ stat, inView }) {
  const count = useCounter(stat.value, inView);
  return (
    <div className="text-center group cursor-default">
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white mb-1 tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="font-semibold text-blue-100 text-[10px] md:text-xs uppercase tracking-widest">{stat.label}</div>
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
        .hero-animate-1 { animation: fadeSlideUp 0.65s ease 0.05s both; }
        .hero-animate-2 { animation: fadeSlideUp 0.65s ease 0.18s both; }
        .hero-animate-3 { animation: fadeSlideUp 0.65s ease 0.32s both; }
        .hero-animate-4 { animation: fadeSlideUp 0.65s ease 0.46s both; }
        .hero-animate-5 { animation: fadeSlideUp 0.65s ease 0.58s both; }

        .floating-stats-container {
          margin-top: -65px; /* Mengangkat card agar melayang di antara section */
          position: relative;
          z-index: 20;
        }

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
        .step-icon-box { transition: transform 0.25s ease, box-shadow 0.25s ease; }

        .testi-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .testi-card:hover { transform: translateY(-5px); box-shadow: 0 18px 36px -8px rgba(0,0,0,0.09); }

        .search-wrap:focus-within {
          box-shadow: 0 0 0 3px rgba(59,130,246,0.18), 0 16px 36px -8px rgba(59,130,246,0.14);
        }
        .brand-pill { transition: all 0.18s ease; cursor: pointer; }
        .brand-pill:hover { background: #eff6ff; color: #2563eb; border-color: #bfdbfe; transform: translateY(-2px); }
      `}</style>

      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="overflow-x-hidden bg-white">

        {/* ════ HERO (Full Screen & Local Assets) ═══════════════════════════ */}
        <section 
          className="relative min-h-screen flex items-center pt-28 pb-40 bg-gray-900 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/hero.jpg')", /* Mengarah ke public/assets/hero.jpg */
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {heroLoaded && (
              <>
                <div className="hero-animate-1 inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  Platform Jual Beli Mobil Bekas Terpercaya #1 Indonesia
                </div>

                <h1 className="hero-animate-2 text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
                  Temukan <span className="text-blue-400">Mobil Impian</span> <br className="hidden md:block" /> Anda Hari Ini
                </h1>

                <p className="hero-animate-3 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md opacity-90">
                  Koleksi terlengkap mobil bekas berkualitas premium harga terbaik, garansi resmi, dan proses yang 100% transparan.
                </p>

                <div className="hero-animate-4 search-wrap max-w-4xl mx-auto bg-white rounded-4xl shadow-2xl border border-gray-100 p-3 flex flex-col sm:flex-row gap-3 transition-all duration-300">
                  <input
                    type="text"
                    placeholder="Cari mobil berdasarkan merek, model, atau tahun..."
                    className="flex-1 px-6 py-3 text-sm text-gray-700 outline-none rounded-2xl"
                  />
                  <select className="px-4 py-3 text-sm text-gray-600 outline-none rounded-xl border border-gray-50 bg-gray-50 cursor-pointer">
                    <option>Semua Brand</option>
                    {BRANDS.map(b => <option key={b}>{b}</option>)}
                  </select>
                  <Link to="/katalog"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-10 py-4 rounded-2xl flex items-center gap-2 justify-center shadow-lg shadow-blue-200 transition-all active:scale-95">
                    Cari Sekarang
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ════ STATS (Floating Card / Melayang) ═════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4 floating-stats-container">
          <div 
            ref={statsRef}
            className="bg-blue-600 rounded-[3rem] shadow-2xl shadow-blue-900/20 p-10 md:p-14 relative overflow-hidden"
          >
            {/* Dekorasi halus di dalam card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {STATS.map((s) => (
                <FloatingStatCard key={s.label} stat={s} inView={statsInView} />
              ))}
            </div>
          </div>
        </div>

        {/* ════ KATALOG PREVIEW ═════════════════════════════════════════════ */}
        <section className="py-24 bg-gray-50">
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
          <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">Siap Menemukan Mobil Impian?</h2>
            <p className="text-blue-100 text-base mb-10 max-w-lg mx-auto">Konsultasi gratis dengan ahli kami untuk mendapatkan rekomendasi terbaik sesuai budget Anda.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/katalog" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95">Jelajahi Katalog →</Link>
              <Link to="/kontak" className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/10">Hubungi Kami</Link>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </>
  );
}
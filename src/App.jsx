import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Beranda", "Katalog", "Tentang Kami", "Kontak"];

const STATS = [
  { value: "2,500+", label: "Mobil Tersedia", sub: "Pilihan terlengkap" },
  { value: "15,000+", label: "Pelanggan Puas", sub: "Di seluruh Indonesia" },
  { value: "10+", label: "Tahun Pengalaman", sub: "Terpercaya sejak 2014" },
  { value: "100%", label: "Garansi Kualitas", sub: "Inspeksi menyeluruh" },
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
  { icon: "🔍", title: "Inspeksi 200 Poin", desc: "Setiap kendaraan melewati inspeksi mendalam oleh mekanik bersertifikat seluruh dijamin." },
  { icon: "🎧", title: "Customer Support 24/7", desc: "Tim ahli kami siap membantu Anda kapan saja untuk menjawab pertanyaan dan keluhan." },
  { icon: "🔄", title: "Trade-In Terbaik", desc: "Dapatkan harga terbaik di terjangkau untuk mobil lama Anda dengan proses yang transparan." },
];

const HOW_STEPS = [
  { num: "01", icon: "🔎", title: "Cari & Pilih Mobil", desc: "Telusuri ribuan pilihan mobil dan temukan kendaraan yang sesuai kebutuhan dan budget Anda." },
  { num: "02", icon: "✅", title: "Inspeksi & Verifikasi", desc: "Tim ahli kami akan memeriksa kendaraan secara mendalam dan detail yang diinginkan lengkap dan terjamin." },
  { num: "03", icon: "💰", title: "Pembayaran Fleksibel", desc: "Pilih metode pembayaran yang sesuai, baik tunai maupun kredit, dengan proses yang mudah dan cepat." },
  { num: "04", icon: "🚗", title: "Terima Kendaraan", desc: "Mobil siap diserahkan! Kami akan mengantar kendaraan langsung ke rumah Anda." },
];

const TESTIMONIALS = [
  { stars: 5, text: "Pelayanan sangat profesional! Proses pembelian mudah dan transparan. Mobil yang saya beli kondisinya sangat bagus sesuai deskripsi. Tim AutoPool sangat membantu selama proses berlangsung.", name: "Budi Santoso", role: "Pengusaha" },
  { stars: 5, text: "Saya menemukan kendaraan impian yang saya cari-cari lama akhirnya ketemu di sini. Harganya sesuai dengan kondisi mobil. Sangat puas dengan pelayanan AutoPool dan akan rekomendasikan ke teman-teman!", name: "Siti Nurhaliza", role: "Karyawati" },
  { stars: 5, text: "Pertama kali beli mobil bekas dan AutoPool membuat prosesnya mudah. Inspeksi detailnya membuat saya yakin dengan kualitas. Harga juga kompetitif. Sangat merekomendasikan!", name: "Andi Hermawan", role: "Dokter" },
];

const BRANDS = ["Toyota", "Honda", "Mercedes Benz", "BMW", "Audi", "Mazda"];

const FOOTER_LINKS = {
  "Tautan Cepat": ["Beranda", "Katalog", "Tentang Kami", "Blog"],
  "Layanan": ["Event Ini", "Kredit Mobil", "Trade-In", "Garansi"],
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-55 h-55 rounded-lg flex items-center justify-center">
              <img src="assets/logo.png" alt="AutoPool Logo" srcset="" />
            </div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">{l}</a>
            ))}
          </div>
          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5">Sign In</button>
            <button className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Register</button>
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => <a key={l} href="#" className="text-sm font-medium text-gray-700">{l}</a>)}
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <button className="text-sm font-semibold text-gray-700 px-3 py-1.5">Sign In</button>
            <button className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Temukan Mobil Impian Anda
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Koleksi terlengkap mobil bekas berkualitas premium dengan harga terbaik dan garansi terpercaya
        </p>
        {/* Search bar */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Cari mobil berdasarkan merk"
            className="flex-1 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-xl border border-gray-100 focus:border-blue-300"
          />
          <select className="px-4 py-2.5 text-sm text-gray-600 outline-none rounded-xl border border-gray-100 bg-white">
            <option>Semua Merk</option>
            {BRANDS.map(b => <option key={b}>{b}</option>)}
          </select>
          <select className="px-4 py-2.5 text-sm text-gray-600 outline-none rounded-xl border border-gray-100 bg-white">
            <option>Range Harga</option>
            <option>{'< 300 Juta'}</option>
            <option>300 – 700 Juta</option>
            <option>700 Juta – 2 M</option>
            <option>{'> 2 Miliar'}</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 justify-center whitespace-nowrap">
            <span>🔍</span> Cari
          </button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-gray-50 py-12" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{s.value}</div>
              <div className="font-semibold text-gray-800 text-sm mb-0.5">{s.label}</div>
              <div className="text-xs text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
      {/* Car Image Placeholder */}
      <div className="relative h-44 overflow-hidden" style={{ background: `linear-gradient(135deg, ${car.color} 0%, ${car.color}cc 100%)` }}>
        {car.badge && (
          <span className="absolute top-3 left-3 text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full z-10">{car.badge}</span>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">🚗</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight">{car.name}</h3>
        <div className="text-blue-600 font-bold text-base mb-3">{car.price}</div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">📅 {car.year}</span>
          <span className="flex items-center gap-1">📏 {car.mileage}</span>
          <span className="flex items-center gap-1">⛽ {car.fuel}</span>
          <span className="flex items-center gap-1">⚙️ {car.trans}</span>
        </div>
        <button className="w-full text-sm font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 py-2 rounded-xl">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

function Catalog() {
  const [filter, setFilter] = useState("Terbaru");
  const filters = ["Terbaru", "Termurah", "Termahal", "Terlaris"];

  return (
    <section id="katalog" className="py-16 bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Koleksi Terbaru Kami</h2>
            <p className="text-gray-500 text-sm mt-1">Pilihan mobil berkualitas premium dengan berbagai merek ternama</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-blue-600 font-semibold border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors">
              🔧 Filter Lanjutan
            </button>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400 bg-white"
            >
              {filters.map(f => <option key={f}>{f}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARS.map(car => <CarCard key={car.id} car={car} />)}
        </div>
        <div className="text-center mt-10">
          <button className="text-sm font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all px-8 py-3 rounded-xl">
            Lihat Semua Katalog →
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-16 bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Mengapa Memilih AutoPool?</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">Kami berkomitmen memberikan pengalaman terbaik dalam setiap transaksi mobil terbaik Anda</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cara Kerja AutoPool</h2>
          <p className="text-gray-500 text-sm">Proses mudah dan transparan untuk mendapatkan mobil impian Anda</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_STEPS.map((s, i) => (
            <div key={s.num} className="relative">
              {i < HOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100 z-0" style={{ width: "calc(100% - 2rem)", transform: "translateX(1rem)" }}></div>
              )}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-md shadow-blue-200">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-blue-400 mb-1">{s.num}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Apa Kata Pelanggan Kami</h2>
          <p className="text-gray-500 text-sm">Kepercayaan pelanggan adalah prioritas utama kami</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 bg-blue-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Siap Menemukan Mobil Impian Anda?</h2>
        <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-lg mx-auto">
          Konsultasi gratis dengan ahli kami untuk mendapatkan rekomendasi mobil terbaik sesuai kebutuhan Anda
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            Jelajahi Katalog →
          </button>
          <button className="border-2 border-white text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-white hover:text-blue-600 transition-all">
            📞 Hubungi Kami
          </button>
        </div>
        {/* Brand logos row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
          {BRANDS.map(b => (
            <span key={b} className="text-white text-xs sm:text-sm font-semibold tracking-wide">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-12 bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-3xl mb-3">✉️</div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Dapatkan Penawaran Terbaik</h3>
        <p className="text-gray-500 text-sm mb-6">Berlangganan newsletter kami untuk mendapatkan update mobil baru, promo eksklusif, dan tips otomotif!</p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Masukkan email Anda"
            className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400"
          />
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-xl whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="font-bold text-white text-lg">AutoPool</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">Platform terpercaya untuk jual beli mobil bekas berkualitas dengan harga transparan.</p>
          </div>
          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-white text-sm mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map(l => (
                  <li key={l}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Kontak Kami</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">📞 <span>+62 812-3456-7899</span></div>
              <div className="flex items-center gap-2">✉️ <span>info@autopool.id</span></div>
              <div className="flex items-start gap-2">📍 <span>Jl. Sudirman No. 42<br />Jakarta Selatan, 12190</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2025 AutoPool. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Hero />
      <Stats />
      <Catalog />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
}
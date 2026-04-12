import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";

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
  { icon: "🔄", title: "Trade-In Terbaik", desc: "Dapatkan harga terbaik untuk mobil lama Anda dengan proses yang transparan." },
];

const HOW_STEPS = [
  { num: "01", icon: "🔎", title: "Cari & Pilih Mobil", desc: "Telusuri ribuan pilihan mobil dan temukan kendaraan yang sesuai kebutuhan dan budget Anda." },
  { num: "02", icon: "✅", title: "Inspeksi & Verifikasi", desc: "Tim ahli kami akan memeriksa kendaraan secara mendalam dan detail yang diinginkan lengkap dan terjamin." },
  { num: "03", icon: "💰", title: "Pembayaran Fleksibel", desc: "Pilih metode pembayaran yang sesuai, baik tunai maupun kredit, dengan proses yang mudah dan cepat." },
  { num: "04", icon: "🚗", title: "Terima Kendaraan", desc: "Mobil siap diserahkan! Kami akan mengantar kendaraan langsung ke rumah Anda." },
];

const TESTIMONIALS = [
  { stars: 5, text: "Pelayanan sangat profesional! Proses pembelian mudah dan transparan. Mobil yang saya beli kondisinya sangat bagus sesuai deskripsi.", name: "Budi Santoso", role: "Pengusaha" },
  { stars: 5, text: "Saya menemukan kendaraan impian yang saya cari-cari lama akhirnya ketemu di sini. Harganya sesuai dengan kondisi mobil. Sangat puas!", name: "Siti Nurhaliza", role: "Karyawati" },
  { stars: 5, text: "Pertama kali beli mobil bekas dan AutoPool membuat prosesnya mudah. Inspeksi detailnya membuat saya yakin dengan kualitas.", name: "Andi Hermawan", role: "Dokter" },
];

const BRANDS = ["Toyota", "Honda", "Mercedes Benz", "BMW", "Audi", "Mazda"];

export default function Home() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Temukan Mobil Impian Anda
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Koleksi terlengkap mobil bekas berkualitas premium dengan harga terbaik dan garansi terpercaya
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Cari mobil berdasarkan merk"
              className="flex-1 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-xl border border-gray-100 focus:border-blue-300"
            />
            <select className="px-4 py-2.5 text-sm text-gray-600 outline-none rounded-xl border border-gray-100 bg-white">
              <option>Semua Merk</option>
              {BRANDS.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select className="px-4 py-2.5 text-sm text-gray-600 outline-none rounded-xl border border-gray-100 bg-white">
              <option>Range Harga</option>
              <option>{"< 300 Juta"}</option>
              <option>300 – 700 Juta</option>
              <option>700 Juta – 2 M</option>
              <option>{"> 2 Miliar"}</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold text-sm px-6 py-2.5 rounded-xl flex items-center gap-2 justify-center whitespace-nowrap">
              🔍 Cari
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-50 py-12">
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

      {/* ── KATALOG PREVIEW ── */}
      <section className="py-16 bg-white">
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
              <select className="text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white">
                <option>Terbaru</option>
                <option>Termurah</option>
                <option>Termahal</option>
                <option>Terlaris</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARS.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/katalog"
              className="inline-block text-sm font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all px-8 py-3 rounded-xl"
            >
              Lihat Semua Katalog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 bg-gray-50">
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cara Kerja AutoPool</h2>
            <p className="text-gray-500 text-sm">Proses mudah dan transparan untuk mendapatkan mobil impian Anda</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_STEPS.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-md shadow-blue-200">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-blue-400 mb-1">{s.num}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-gray-50">
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

      {/* ── CTA ── */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Siap Menemukan Mobil Impian Anda?</h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Konsultasi gratis dengan ahli kami untuk mendapatkan rekomendasi mobil terbaik sesuai kebutuhan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/katalog" className="bg-white text-blue-600 font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Jelajahi Katalog →
            </Link>
            <button className="border-2 border-white text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-white hover:text-blue-600 transition-all">
              📞 Hubungi Kami
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-60">
            {BRANDS.map((b) => <span key={b} className="text-white text-xs sm:text-sm font-semibold tracking-wide">{b}</span>)}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl mb-3">✉️</div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">Dapatkan Penawaran Terbaik</h3>
          <p className="text-gray-500 text-sm mb-6">
            Berlangganan newsletter kami untuk mendapatkan update mobil baru, promo eksklusif, dan tips otomotif!
          </p>
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

    </div>
  );
}
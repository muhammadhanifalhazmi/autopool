import { Link } from "react-router-dom";

const TEAM = [
  { name: "Budi Hartono", role: "CEO & Founder", emoji: "👨‍💼" },
  { name: "Sari Dewi", role: "Head of Operations", emoji: "👩‍💼" },
  { name: "Ahmad Fauzi", role: "Lead Mechanic Inspector", emoji: "👨‍🔧" },
  { name: "Rina Kusuma", role: "Customer Relations", emoji: "👩‍💻" },
];

const MILESTONES = [
  { year: "2014", title: "AutoPool Didirikan", desc: "Berawal dari garasi kecil di Jakarta dengan 5 unit mobil pertama." },
  { year: "2017", title: "Ekspansi ke 5 Kota", desc: "Membuka cabang di Surabaya, Bandung, Yogyakarta, dan Semarang." },
  { year: "2020", title: "Platform Digital", desc: "Meluncurkan platform online untuk memudahkan transaksi jual beli." },
  { year: "2023", title: "15.000+ Pelanggan", desc: "Mencapai milestone 15.000 pelanggan puas di seluruh Indonesia." },
];

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white pt-16" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <section className="bg-blue-600 py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-3">Tentang AutoPool</h1>
        <p className="text-blue-100 text-base max-w-xl mx-auto">
          Platform jual beli mobil bekas terpercaya yang menghubungkan penjual dan pembeli dengan transparan sejak 2014.
        </p>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">🎯</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Menjadi platform jual beli mobil bekas nomor satu di Indonesia yang paling transparan, terpercaya, dan mudah diakses oleh seluruh masyarakat Indonesia.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">🚀</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h2>
            <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
              <li>✅ Menyediakan kendaraan berkualitas dengan inspeksi ketat 200 poin</li>
              <li>✅ Memberikan kemudahan proses pembelian dan pembiayaan</li>
              <li>✅ Membangun kepercayaan melalui transparansi harga dan dokumen</li>
              <li>✅ Memberikan layanan purna jual terbaik untuk pelanggan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Perjalanan Kami</h2>
          <div className="space-y-6">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {m.year}
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 h-10 bg-blue-100 mt-2"></div>}
                </div>
                <div className="pb-6">
                  <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-500">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Tim Kami</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                  {t.emoji}
                </div>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-3">Siap Bergabung dengan AutoPool?</h2>
        <p className="text-blue-100 text-sm mb-6">Temukan mobil impian Anda atau jual kendaraan Anda dengan mudah.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/katalog" className="bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
            Lihat Katalog
          </Link>
          <Link to="/kontak" className="border-2 border-white text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all">
            Hubungi Kami
          </Link>
        </div>
      </section>

    </div>
  );
}
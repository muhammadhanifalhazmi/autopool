import { useParams, Link } from "react-router-dom";

const ALL_CARS = [
  { id: 1, name: "Mercedes-Benz E-Class", price: "Rp 950.000.000", year: 2022, mileage: "15.000 km", fuel: "Bensin", trans: "Automatic", color: "#1a1a2e", brand: "Mercedes Benz", engine: "2.0L Turbo", color_name: "Hitam", location: "Jakarta Selatan", desc: "Mercedes-Benz E-Class dalam kondisi sangat baik. Satu pemilik, servis rutin di bengkel resmi. Lengkap dengan sunroof, sistem audio premium, dan fitur keselamatan terkini.", image: "/assets/mercedes-e-class.jpg" },
  { id: 2, name: "Toyota Fortuner VRZ", price: "Rp 465.000.000", year: 2023, mileage: "8.000 km", fuel: "Diesel", trans: "Automatic", color: "#2d4a22", brand: "Toyota", engine: "2.4L Diesel", color_name: "Putih", location: "Surabaya", desc: "Toyota Fortuner VRZ tipe tertinggi, kondisi mulus. Cocok untuk keluarga dan medan off-road. Dilengkapi berbagai fitur canggih termasuk BSM dan PCS.", image: "/assets/toyota-fortuner.jpg" },
  { id: 3, name: "Porsche 911 Carrera", price: "Rp 2.750.000.000", year: 2021, mileage: "12.000 km", fuel: "Bensin", trans: "Automatic", color: "#c0392b", brand: "Porsche", engine: "3.0L Twin-Turbo", color_name: "Merah", location: "Jakarta Pusat", desc: "Porsche 911 Carrera kondisi istimewa. Performa luar biasa dengan akselerasi 0-100 km/h dalam 4 detik. Koleksi langka dengan dokumentasi lengkap.", image: "/assets/porsche-911.jpg" },
  { id: 4, name: "BMW 3 Series 330i", price: "Rp 725.000.000", year: 2022, mileage: "10.000 km", fuel: "Bensin", trans: "Automatic", color: "#1c3a5e", brand: "BMW", engine: "2.0L TwinPower Turbo", color_name: "Biru Metalik", location: "Bandung", desc: "BMW 330i M Sport package, kondisi prima. Fitur lengkap termasuk panoramic sunroof, harman kardon audio, dan sistem navigasi terbaru.", image: "/assets/bmw-3-series.jpg" },
  { id: 5, name: "Mercedes-Benz GLE 450", price: "Rp 1.450.000.000", year: 2022, mileage: "7.000 km", fuel: "Bensin", trans: "Automatic", color: "#2c3e50", brand: "Mercedes Benz", engine: "3.0L EQ Boost", color_name: "Abu-abu", location: "Jakarta Selatan", desc: "Mercedes-Benz GLE 450 kondisi sangat baik. SUV mewah dengan teknologi 48V mild hybrid, sistem suspensi udara, dan interior kulit premium.", image: "/assets/mercedes-gle.jpg" },
  { id: 6, name: "Toyota RAV4 Hybrid", price: "Rp 565.000.000", year: 2022, mileage: "12.000 km", fuel: "Hybrid", trans: "Automatic", color: "#1a3a2a", brand: "Toyota", engine: "2.5L Hybrid", color_name: "Hijau", location: "Yogyakarta", desc: "Toyota RAV4 Hybrid, hemat BBM hingga 18 km/liter. Cocok untuk penggunaan harian dan perjalanan jauh. Fitur Toyota Safety Sense lengkap.", image: "/assets/toyota-rav4.jpg" }, 
  { id: 7, name: "Honda Civic Turbo", price: "Rp 385.000.000", year: 2023, mileage: "5.000 km", fuel: "Bensin", trans: "CVT", color: "#c0392b", brand: "Honda", engine: "1.5L VTEC Turbo", color_name: "Merah", location: "Semarang", desc: "Honda Civic Turbo generasi terbaru, kondisi seperti baru. Desain sporty dengan interior modern. Honda Sensing aktif untuk keselamatan berkendara.", image: "/assets/honda-civic.jpg" },
  { id: 8, name: "Audi A4 2.0 TFSI", price: "Rp 675.000.000", year: 2022, mileage: "14.000 km", fuel: "Bensin", trans: "Automatic", color: "#1a1a1a", brand: "Audi", engine: "2.0L TFSI", color_name: "Hitam", location: "Jakarta Barat", desc: "Audi A4 S-Line package, kondisi sangat terawat. Virtual cockpit, MMI navigation, dan matrix LED headlights. Servis rutin di dealer resmi.", image: "/assets/audi-a4.jpg" },
];

export default function DetailMobil() {
  const { id } = useParams();
  const car = ALL_CARS.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="text-center">
          <div className="text-6xl mb-4">🚗</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Mobil tidak ditemukan</h2>
          <Link to="/katalog" className="text-blue-600 font-semibold hover:underline">← Kembali ke Katalog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Beranda</Link>
          <span>/</span>
          <Link to="/katalog" className="hover:text-blue-600">Katalog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{car.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div
            className="rounded-2xl overflow-hidden h-72 lg:h-96 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${car.color} 0%, ${car.color}cc 100%)` }}
          >
            <span className="text-8xl opacity-60">🚗</span>
          </div>

          {/* Info */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h1>
              <div className="text-3xl font-bold text-blue-600 mb-4">{car.price}</div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { icon: "📅", label: "Tahun", value: car.year },
                  { icon: "📏", label: "Kilometer", value: car.mileage },
                  { icon: "⛽", label: "Bahan Bakar", value: car.fuel },
                  { icon: "⚙️", label: "Transmisi", value: car.trans },
                  { icon: "🔧", label: "Mesin", value: car.engine },
                  { icon: "🎨", label: "Warna", value: car.color_name },
                  { icon: "📍", label: "Lokasi", value: car.location },
                  { icon: "🏷️", label: "Merek", value: car.brand },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-400 mb-0.5">{item.icon} {item.label}</div>
                    <div className="text-sm font-semibold text-gray-800">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 rounded-xl text-sm">
                  {/* TODO: connect to backend booking API */}
                  📞 Hubungi Penjual
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-bold py-3 rounded-xl text-sm">
                  {/* TODO: connect to backend wishlist API */}
                  🤍 Simpan ke Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
          <h2 className="font-bold text-gray-900 mb-3">Deskripsi Kendaraan</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{car.desc}</p>
        </div>

        {/* Back */}
        <div className="mt-6">
          <Link to="/katalog" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
            ← Kembali ke Katalog
          </Link>
        </div>
      </div>
    </div>
  );
}
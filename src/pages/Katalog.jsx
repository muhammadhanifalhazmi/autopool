import { useState } from "react";
import CarCard from "../components/CarCard";

const ALL_CARS = [
  { id: 1, name: "Mercedes-Benz E-Class", price: "Rp 950.000.000", year: 2022, mileage: "15.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1a1a2e", brand: "Mercedes Benz", image: "/assets/mercedes-e-class.jpg" },
  { id: 2, name: "Toyota Fortuner VRZ", price: "Rp 465.000.000", year: 2023, mileage: "8.000 km", fuel: "Diesel", trans: "Automatic", badge: "Terlaris", color: "#2d4a22", brand: "Toyota", image: "/assets/toyota-fortuner.jpg" },
  { id: 3, name: "Porsche 911 Carrera", price: "Rp 2.750.000.000", year: 2021, mileage: "12.000 km", fuel: "Bensin", trans: "Automatic", badge: "Premium", color: "#c0392b", brand: "Porsche", image: "/assets/porsche-911.jpg" },
  { id: 4, name: "BMW 3 Series 330i", price: "Rp 725.000.000", year: 2022, mileage: "10.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1c3a5e", brand: "BMW", image: "/assets/bmw-3-series.jpg" },
  { id: 5, name: "Mercedes-Benz GLE 450", price: "Rp 1.450.000.000", year: 2022, mileage: "7.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#2c3e50", brand: "Mercedes Benz", image: "/assets/mercedes-gle.jpg" },
  { id: 6, name: "Toyota RAV4 Hybrid", price: "Rp 565.000.000", year: 2022, mileage: "12.000 km", fuel: "Hybrid", trans: "Automatic", badge: "Eco", color: "#1a3a2a", brand: "Toyota", image: "/assets/toyota-rav4.jpg" },
  { id: 7, name: "Honda Civic Turbo", price: "Rp 385.000.000", year: 2023, mileage: "5.000 km", fuel: "Bensin", trans: "CVT", badge: null, color: "#c0392b", brand: "Honda", image: "/assets/honda-civic.jpg" },
  { id: 8, name: "Audi A4 2.0 TFSI", price: "Rp 675.000.000", year: 2022, mileage: "14.000 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#1a1a1a", brand: "Audi", image: "/assets/audi-a4.jpg" },
  { id: 9, name: "Toyota Camry Hybrid", price: "Rp 745.000.000", year: 2023, mileage: "6.000 km", fuel: "Hybrid", trans: "Automatic", badge: "Eco", color: "#2c3e50", brand: "Toyota", image: "/assets/toyota-camry.jpg" },
  { id: 10, name: "Honda HR-V RS", price: "Rp 355.000.000", year: 2023, mileage: "9.000 km", fuel: "Bensin", trans: "CVT", badge: null, color: "#c0392b", brand: "Honda", image: "/assets/honda-hr-v.jpg" },
  { id: 11, name: "BMW X5 xDrive40i", price: "Rp 1.850.000.000", year: 2022, mileage: "11.000 km", fuel: "Bensin", trans: "Automatic", badge: "Premium", color: "#1c3a5e", brand: "BMW", image: "/assets/bmw-x5.jpg" },
  { id: 12, name: "Mazda CX-5 Elite", price: "Rp 495.000.000", year: 2023, mileage: "7.500 km", fuel: "Bensin", trans: "Automatic", badge: null, color: "#8B0000", brand: "Mazda", image: "/assets/mazda-cx-5.jpg" },
];

const BRANDS = ["Semua", "Toyota", "Honda", "Mercedes Benz", "BMW", "Audi", "Mazda", "Porsche"];
const FUELS = ["Semua", "Bensin", "Diesel", "Hybrid"];

export default function Katalog() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("Semua");
  const [fuel, setFuel] = useState("Semua");
  const [sort, setSort] = useState("Terbaru");

  const filtered = ALL_CARS.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchBrand = brand === "Semua" || c.brand === brand;
    const matchFuel = fuel === "Semua" || c.fuel === fuel;
    return matchSearch && matchBrand && matchFuel;
  });

  return (
    <div
      className="min-h-screen bg-gray-50 pt-20"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Katalog Mobil</h1>
          <p className="text-gray-500 text-sm">
            Menampilkan <span className="font-semibold text-blue-600">{filtered.length}</span> kendaraan
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-8 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="🔍 Cari nama mobil..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400"
          />
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none bg-white text-gray-700"
          >
            {BRANDS.map((b) => <option key={b}>{b}</option>)}
          </select>
          <select
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none bg-white text-gray-700"
          >
            {FUELS.map((f) => <option key={f}>{f}</option>)}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none bg-white text-gray-700"
          >
            <option>Terbaru</option>
            <option>Termurah</option>
            <option>Termahal</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-semibold text-gray-500">Mobil tidak ditemukan</p>
            <p className="text-sm mt-1">Coba ubah filter atau kata kunci pencarian</p>
          </div>
        )}
      </div>
    </div>
  );
}
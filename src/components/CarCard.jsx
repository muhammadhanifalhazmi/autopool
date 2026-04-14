import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
      {/* Car Image */}
      <div
        className="relative h-44 overflow-hidden"
        style={{
          
        }}
      >
        {car.badge && (
          <span className="absolute top-3 left-3 text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full z-10">
            {car.badge}
          </span>
        )}
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
              <img src="/assets/mercedes-e-class.jpg" alt="" />
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight">
          {car.name}
        </h3>
        <div className="text-blue-600 font-bold text-base mb-3">
          {car.price}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">📅 {car.year}</span>
          <span className="flex items-center gap-1">📏 {car.mileage}</span>
          <span className="flex items-center gap-1">⛽ {car.fuel}</span>
          <span className="flex items-center gap-1">⚙️ {car.trans}</span>
        </div>
        <Link
          to={`/mobil/${car.id}`}
          className="block w-full text-center text-sm font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 py-2 rounded-xl"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
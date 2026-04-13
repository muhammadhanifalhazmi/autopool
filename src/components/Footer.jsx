import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  "Tautan Cepat": [
    { label: "Beranda", path: "/" },
    { label: "Katalog", path: "/katalog" },
    { label: "Tentang Kami", path: "/tentang" },
    { label: "Blog", path: "/blog" },
  ],
  Layanan: [
    { label: "Event Ini", path: "/" },
    { label: "Kredit Mobil", path: "/" },
    { label: "Trade-In", path: "/" },
    { label: "Garansi", path: "/" },
  ],
};

const BRANDS = ["Toyota", "Honda", "Mercedes Benz", "BMW", "Audi", "Mazda"];

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-300"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-65 h-20 rounded-lg flex items-center justify-center">
                <img src="assets/logo.png" alt="AutoPool Logo" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Platform terpercaya untuk jual beli mobil bekas berkualitas dengan
              harga transparan.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-white text-sm mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Kontak Kami</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                📞 <span>+62 812-3456-7899</span>
              </div>
              <div className="flex items-center gap-2">
                ✉️ <span>info@autopool.id</span>
              </div>
              <div className="flex items-start gap-2">
                📍{" "}
                <span>
                  Jl. Sudirman No. 42
                  <br />
                  Jakarta Selatan, 12190
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2025 AutoPool. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
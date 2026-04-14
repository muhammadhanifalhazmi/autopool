import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }
    // TODO: connect to backend API (POST /api/auth/register)
    console.log("Register payload:", form);
    alert("Fitur register belum terhubung ke backend.");
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-70 h-30 rounded-xl flex items-center justify-center">
                <img src="assets/logo.png" alt="AutoPool Logo" />
              </div>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-2">Buat Akun Baru</h1>
            <p className="text-gray-500 text-sm mt-1">Daftar dan temukan mobil impian Anda</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Lengkap</label>
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nomor HP</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="08xx-xxxx-xxxx"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange}
                placeholder="Minimal 8 karakter"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Konfirmasi Password</label>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}
                placeholder="Ulangi password"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all" />
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <input type="checkbox" className="mt-0.5 rounded" />
              <span>Saya menyetujui <a href="#" className="text-blue-600 font-semibold hover:underline">Syarat & Ketentuan</a> dan <a href="#" className="text-blue-600 font-semibold hover:underline">Kebijakan Privasi</a></span>
            </div>
            <button onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 rounded-xl text-sm mt-2">
              Daftar Sekarang
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-xs text-gray-400">atau</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <button className="w-full border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            🌐 Daftar dengan Google
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">Masuk di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
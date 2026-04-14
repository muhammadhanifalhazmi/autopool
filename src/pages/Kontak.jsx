import { useState } from "react";

const CONTACT_INFO = [
  { icon: "📞", label: "Telepon", value: "+62 812-3456-7899", sub: "Senin – Sabtu, 08.00 – 17.00" },
  { icon: "✉️", label: "Email", value: "info@autopool.id", sub: "Respon dalam 1x24 jam" },
  { icon: "💬", label: "WhatsApp", value: "+62 812-3456-7899", sub: "Chat langsung dengan tim kami" },
  { icon: "📍", label: "Alamat", value: "Jl. Sudirman No. 42", sub: "Jakarta Selatan, 12190" },
];

export default function Kontak() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend API (POST /api/contact)
    console.log("Contact payload:", form);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Header */}
      <section className="bg-blue-600 py-16 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-3">Hubungi Kami</h1>
        <p className="text-blue-100 text-base max-w-md mx-auto">
          Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda kapan saja.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                    <div className="font-semibold text-gray-900 text-sm">{c.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden h-64 border border-gray-100 shadow-sm mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273648600106!2d106.81845457586526!3d-6.22760219376063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4a1738727%3A0xec50339d3714b7e!2sSudirman%20Central%20Business%20District!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Penjual"
              ></iframe>
            </div>
          </div>
          

          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            {sent ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-green-800 text-lg mb-2">Pesan Terkirim!</h3>
                <p className="text-green-600 text-sm">Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1x24 jam.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">No. HP</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="08xx-xxxx"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subjek</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 bg-white text-gray-700 transition-all">
                    <option value="">Pilih subjek...</option>
                    <option>Pertanyaan Umum</option>
                    <option>Informasi Kredit</option>
                    <option>Trade-In Kendaraan</option>
                    <option>Komplain</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Pesan</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400 transition-all resize-none" />
                </div>
                <button onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 rounded-xl text-sm">
                  Kirim Pesan
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
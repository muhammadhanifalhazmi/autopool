import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import DetailMobil from "./pages/DetailMobil";

export default function App() {
  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/mobil/:id" element={<DetailMobil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
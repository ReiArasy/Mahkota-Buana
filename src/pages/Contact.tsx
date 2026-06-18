import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../types';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertTriangle, MessageSquareCode, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Gedung Komersial',
    message: ''
  });

  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [lastSubValue, setLastSubValue] = useState<ContactMessage | null>(null);

  useEffect(() => {
    const loaded = localStorage.getItem('mbk_messages');
    if (loaded) {
      try {
        setSavedMessages(JSON.parse(loaded));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Mohon lengkapi seluruh kolom formulir sebelum mengirim.');
      return;
    }

    const newMessage: ContactMessage = {
      id: 'msg-' + Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      date: new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta'
      })
    };

    const updated = [newMessage, ...savedMessages];
    setSavedMessages(updated);
    localStorage.setItem('mbk_messages', JSON.stringify(updated));
    setLastSubValue(newMessage);
    setSuccess(true);
    
    // Clear inputs
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: formData.subject,
      message: ''
    });

    // Auto dismiss success alert after 8 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 8500);
  };

  return (
    <div className="bg-secondary-brand">
      {/* Title Header */}
      <section className="bg-primary-brand pt-24 pb-16 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-brand rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/20 px-3.5 py-1.5 rounded border border-accent-brand/30">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white mt-4">
            Mulai Konsultasi Proyek Anda
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Pintu komunikasi kami selalu terbuka. Tim penaksir RAB, insinyur sipil, dan staf kepatuhan hukum kami siap mendampingi Anda.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="py-20 bg-[#FFFDF9]/85">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-slate-450 uppercase tracking-widest block mb-1">
                  Kantor Pusat Terdaftar
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-brand tracking-tight">PT Mahkota Buana Konstruksi</h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed font-sans">
                  Pelayanan komersial seluruh kepulauan Indonesia. Silakan kunjungi alamat administrasi kantor kami untuk perancangan kontrak fisik atau penyerahan dokumen kelayakan tanah.
                </p>
              </div>

              {/* Info Widgets Grid */}
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 text-[#0A2E36]" />,
                    title: 'Alamat Kantor',
                    desc1: 'Kencana Tower, Lantai 12, Unit B-C',
                    desc2: 'Jl. Boulevard Artha Blok M-4, Jakarta Barat, DKI Jakarta 11610'
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-[#0A2E36]" />,
                    title: 'Hotline Telepon & Telefax',
                    desc1: 'Kantor Utama: (021) 555-1234',
                    desc2: 'WhatsApp Hotline: 0812-3456-7890 (24 Jam Konstruksi Urgensi)'
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-[#0A2E36]" />,
                    title: 'Alamat Surat Elektronik (Surel)',
                    desc1: 'Hubungan Klien: marketing@mahkotabuana.com',
                    desc2: 'Tender & Pengadaan: procurement@mahkotabuana.com'
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-[#0A2E36]" />,
                    title: 'Jam Operasional Administrasi',
                    desc1: 'Senin - Jumat: 08:30 - 17:00 WIB',
                    desc2: 'Sabtu: 08:30 - 13:00 WIB (Minggu/Hari Besar Tutup)'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-xl border border-[#0D3A44]/15 bg-secondary-brand">
                    <div className="bg-[#FFFDF9] p-3 rounded-xl shadow-3xs border border-[#0D3A44]/10 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base font-sans leading-none mb-1">{item.title}</h4>
                      <p className="text-slate-700 text-xs sm:text-sm mt-1">{item.desc1}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{item.desc2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact interactive Form */}
            <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#0D3A44]/15 p-6 sm:p-10 rounded-3xl shadow-xs relative">
              <span className="text-xs font-bold text-[#0A2E36] uppercase tracking-widest block mb-1">
                Kirim Lembar Rencana
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-primary-brand tracking-tight leading-none mb-6">Pesan Tiket Penaksiran RAB</h2>
              
              <AnimatePresence>
                {success && lastSubValue && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-50 border border-emerald-300 p-5 rounded-2xl mb-6 flex flex-col items-start gap-1 text-left"
                  >
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs sm:text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      Pesan Terkirim Berhasil Ke Server Lokal!
                    </div>
                    <div className="text-xs text-slate-650 mt-2 space-y-1 bg-white p-4 rounded-xl border border-slate-150 w-full text-left font-mono">
                      <div><strong className="text-slate-755">Nama:</strong> {lastSubValue.name}</div>
                      <div><strong className="text-slate-755">Email:</strong> {lastSubValue.email}</div>
                      <div><strong className="text-slate-755">Telepon:</strong> {lastSubValue.phone}</div>
                      <div><strong className="text-slate-755">Kategori:</strong> {lastSubValue.subject}</div>
                      <div className="border-t border-slate-150 pt-2 mt-2 leading-relaxed">
                        <strong className="text-slate-755">Pesan Anda:</strong> {lastSubValue.message}
                      </div>
                    </div>
                    <p className="text-slate-500 text-[10px] mt-2 font-sans italic">
                      Formulir terdaftar secara aman di peramban web (LocalStorage). Tim legal tender kami akan segera memverifikasi.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-650 text-xs font-bold uppercase tracking-wide block mb-1.5">Nama Lengkap Anda</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama asli Anda"
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-slate-800 text-sm focus:outline-hidden focus:border-[#0D3A44] text-left"
                    />
                  </div>
                  <div>
                    <label className="text-slate-650 text-xs font-bold uppercase tracking-wide block mb-1.5">Alamat Surat Elektronik (Surel)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contoh@domain.com"
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-slate-800 text-sm focus:outline-hidden focus:border-[#0D3A44] text-left"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-650 text-xs font-bold uppercase tracking-wide block mb-1.5">Nomor Telepon Seluler/WA</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 0812XXXXXXXX"
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-slate-800 text-sm focus:outline-hidden focus:border-[#0D3A44] text-left"
                    />
                  </div>
                  <div>
                    <label className="text-slate-650 text-xs font-bold uppercase tracking-wide block mb-1.5">Kategori Bidang Proyek</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-slate-800 text-sm focus:outline-hidden focus:border-[#0D3A44] text-left cursor-pointer"
                    >
                      <option value="Gedung Komersial">Gedung Komersial / High-rise</option>
                      <option value="Hunian Residensial">Hunian Residensial / Villa</option>
                      <option value="Infrastruktur Sipil">Infrastruktur Sipil / Jalan</option>
                      <option value="Fasilitas Industri">Fasilitas Industri / Warehouse</option>
                      <option value="Renovasi & Interior">Renovasi Premium / Interior Fit-out</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-650 text-xs font-bold uppercase tracking-wide block mb-1.5">Rencana & Detil Kebutuhan Proyek</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Contoh: Saya berencana membangun ruko 3 lantai di Surabaya Barat seluas 400 m2. Saya sudah memiliki gambar cetak biru arsitek. Butuh perkiraan jadwal pengecoran cor beton dan taksiran harga..."
                    required
                    className="w-full bg-white border border-slate-200 rounded-lg py-2.5 px-3.5 text-slate-800 text-sm focus:outline-hidden focus:border-[#0D3A44] leading-relaxed text-left"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-accent-brand hover:bg-[#E65100] text-[#0A2E36] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-transform hover:scale-102 cursor-pointer w-full sm:w-auto"
                  >
                    Kirim Lembar Rencana <Send className="w-4 h-4 text-primary-brand" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Styled custom maps placeholder */}
      <section className="py-20 bg-secondary-brand border-t border-[#0D3A44]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2E36] tracking-tight">Peta Lokasi Kantor Administrasi</h2>
            <p className="text-slate-650 text-xs sm:text-sm mt-3">
              Terletak strategis di kawasan perkantoran mewah Jakarta Barat, mudah diakses melalui gerbang Pintu Tol Lingkar Luar Barat Jakarta.
            </p>
          </div>

          <div className="bg-slate-300 relative h-96 rounded-3xl overflow-hidden shadow-md border border-[#0D3A44]/10 group">
            {/* Custom vector stylized map for aesthetic layout */}
            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-8 text-center select-none overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Styled grids simulating roads */}
                <div className="w-full h-full bg-[radial-gradient(#E2E8F0_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
                <div className="absolute top-1/4 inset-x-0 h-4 bg-slate-300"></div>
                <div className="absolute left-1/3 inset-y-0 w-8 bg-slate-300"></div>
                <div className="absolute left-1/2 inset-y-0 w-4 bg-slate-300 rotate-12"></div>
                <div className="absolute top-2/3 inset-x-0 h-6 bg-slate-300 -rotate-3"></div>
              </div>

              <div className="bg-[#0D3A44] text-white p-6 rounded-2xl shadow-xl max-w-sm border border-slate-700 relative z-10 transition-transform group-hover:scale-103 duration-300">
                <span className="inline-block bg-[#FFD700]/10 text-accent-brand text-[10px] font-bold px-2.5 py-1 rounded border border-[#FFD700]/20 font-mono uppercase mb-2">Google Maps SDK Integration</span>
                <h4 className="font-bold text-sm tracking-tight">PT MAHKOTA BUANA KONSTRUKSI</h4>
                <p className="text-[11px] leading-normal mt-1.5 font-sans text-slate-305">
                  Kencana Tower, Lantai 12, Unit B-C, Jl. Boulevard Artha Blok M-4, Meruya Utara, Kembangan, Jakarta Barat
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-accent-brand text-xs font-semibold gap-1 mt-4 hover:underline"
                >
                  Buka Di Google Maps Aplikasi <ArrowRight className="w-3 h-3 text-accent-brand" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local inbox messages display */}
      {savedMessages.length > 0 && (
        <section className="py-20 bg-[#FFFDF9]/85 border-t border-[#0D3A44]/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h3 className="text-xl font-bold text-primary-brand mb-2 font-sans flex items-center gap-2">
              <MessageSquareCode className="w-5 h-5 text-[#0A2E36]" />
              <span>Kotak Pesan Lokal (Pendaftaran Aktif)</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6">Berikut adalah pesan-pesan penaksiran RAB yang berhasil Anda kirim dalam sesi ini. Tersimpan aman di peramban web.</p>
            
            <div className="space-y-4 font-sans">
              {savedMessages.map((msg) => (
                <div key={msg.id} className="bg-[#FFFDF9] border border-[#0D3A44]/15 p-6 rounded-2xl flex flex-col md:flex-row md:items-start justify-between gap-4 shadow-2xs">
                  <div className="text-left">
                    <div className="flex flex-wrap items-center gap-2 animate-fade-in">
                      <span className="text-sm font-bold text-slate-900">{msg.name}</span>
                      <span className="text-[10px] font-bold bg-accent-brand/20 text-[#0D3A44] px-2 py-0.5 rounded-full">{msg.subject}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-mono">Surel: {msg.email} | Tel: {msg.phone}</p>
                    <p className="text-slate-700 text-sm mt-3 leading-relaxed font-sans">{msg.message}</p>
                  </div>
                  <div className="md:text-right flex-shrink-0 font-sans">
                    <span className="text-[10px] font-mono font-semibold text-slate-400 block">{msg.date}</span>
                    <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 gap-1 mt-2">
                       Terverifikasi
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

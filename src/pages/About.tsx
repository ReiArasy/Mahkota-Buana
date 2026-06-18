import { useState } from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../data';
import { TeamMember } from '../types';
import { Target, Eye, ShieldCheck, Award, Flag, Calendar, Compass, UserCheck } from 'lucide-react';

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState<TeamMember | null>(null);

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-brand" />,
      title: 'Keselamatan Utama',
      desc: 'Setiap pekerja berhak pulang dengan selamat. Keselamatan kerja adalah pilar harga mati dalam operasional kami.'
    },
    {
      icon: <Award className="w-6 h-6 text-primary-brand" />,
      title: 'Kualitas Tanpa Kompromi',
      desc: 'Penggunaan spesifikasi adukan semen presisi tinggi, besi beton ber-SNI, dan kontrol struktural independen.'
    },
    {
      icon: <Flag className="w-6 h-6 text-primary-brand" />,
      title: 'Ketepatan Waktu',
      desc: 'Waktu adalah modal berharga Anda. Kami mengupayakan koordinasi logistik yang matang agar serah terima kunci tepat waktu.'
    },
    {
      icon: <Compass className="w-6 h-6 text-primary-brand" />,
      title: 'Integritas & Transparansi',
      desc: 'Rincian Anggaran Biaya (RAB) disusun terbuka tanpa ada biaya siluman atau pemangkasan spesifikasi tersembunyi.'
    }
  ];

  const milestones = [
    { year: '2001', title: 'Awal Pendirian', desc: 'Didirikan sebagai CV Mahkota Buana Jasa, fokus pada perbaikan sipil dan renovasi ruko kecil di Tangerang.' },
    { year: '2008', title: 'Transformasi PT', desc: 'Meningkatkan legalitas menjadi PT Mahkota Buana Konstruksi dengan modal terdaftar penuh dan ekspansi ke proyek gudang.' },
    { year: '2015', title: 'Sertifikasi ISO 9001', desc: 'Meraih sertifikat manajemen mutu internasional ISO 9001:2015. Mulai memenangkan tender gedung bertingkat swasta.' },
    { year: '2020', title: 'Infrastruktur Sipil', desc: 'Memperoleh Lisensi B2 Konstruksi Sipil Nasional. Bermitra dengan BUMN untuk revitalisasi jalan dan jembatan.' },
    { year: '2025', title: 'Pemberdayaan Teknologi', desc: 'Mengintegrasikan metode BIM (Building Information Modeling) dan sertifikasi bangunan hijau ke seluruh megaproyek kami.' }
  ];

  return (
    <div className="bg-secondary-brand">
      {/* Title Header */}
      <section className="bg-primary-brand pt-24 pb-16 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-brand rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/20 px-3.5 py-1.5 rounded border border-accent-brand/30 font-bold">
            Tentang Perusahaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white mt-4">
            PT Mahkota Buana Konstruksi
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Menjadi pelopor pembangunan bermutu tinggi yang berkontribusi bagi keindahan dan kekuatan arsitektur Indonesia.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 bg-[#FFFDF9]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image banner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-md border border-[#0D3A44]/15"
            >
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=800&q=80"
                alt="Construction team diskursus on building site with helmet and blueprints"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-primary-brand/95 backdrop-blur-md p-6 rounded-xl border border-[#0D3A44]/30 text-white">
                <span className="text-xs font-bold text-accent-brand uppercase font-mono">Sertifikat Resmi</span>
                <p className="text-sm font-sans font-medium mt-1 text-slate-100">ISO 9001:2015 & ISO 45001:2018 Registered Company.</p>
              </div>
            </motion.div>

            {/* Corporate background text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-brand tracking-tight">
                Membangun dengan Pondasi Kepercayaan Sejak Tahun 2001
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                PT Mahkota Buana Konstruksi adalah perusahaan kontraktor umum swasta nasional yang bergerak di bidang konstruksi struktur sipil, bangunan gedung komersial, kompleks residensial premium, hingga fasilitas industri berat.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Berbekal tim insinyur berlisensi resmi dan armada alat berat mandiri, kami mampu melayani pengerjaan proyek berskala besar di perkotaan maupun pelosok tanah air. Kami mengutamakan transparansi material, perhitungan matang, serta eksekusi yang sesuai dengan regulasi K3 nasional.
              </p>
              <div className="bg-[#FFFDF9] border-l-4 border-accent-brand p-4 rounded-r-lg border border-l-4 border-[#0D3A44]/10 shadow-xs">
                <p className="text-[#0A2E36] text-sm font-sans font-medium italic select-none">
                  "Bukan sekadar mendirikan tiang dan merakit besi, kami membangun monumen reputasi Anda yang berdaya tahan lintas generasi."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Bento Grid */}
      <section className="py-20 bg-secondary-brand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFDF9] p-8 sm:p-10 rounded-2xl shadow-xs border border-[#0D3A44]/10 flex flex-col items-start"
            >
              <div className="bg-accent-brand/20 p-4 rounded-xl mb-6">
                <Eye className="w-8 h-8 text-primary-brand" />
              </div>
              <h3 className="text-2xl font-bold text-primary-brand mb-4">Visi Kami</h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Menjadi korporasi jasa konstruksi dan rekayasa teknik terkemuka di tingkat nasional, yang dikenal berkat inovasi desain struktural, tata kelola lingkungan yang berkelanjutan, serta dedikasi mutlak terhadap keselamatan kru lapangan.
              </p>
            </motion.div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFDF9] p-8 sm:p-10 rounded-2xl shadow-xs border border-[#0D3A44]/10 flex flex-col items-start"
            >
              <div className="bg-accent-brand/20 p-4 rounded-xl mb-6">
                <Target className="w-8 h-8 text-primary-brand" />
              </div>
              <h3 className="text-2xl font-bold text-primary-brand mb-4">Misi Perusahaan</h3>
              <ul className="space-y-4 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#0A2E36] font-bold mt-0.5">01.</span>
                  <span>Menyediakan jasa konstruksi prima yang mengombinasikan ketepatan waktu, kualitas tinggi, dan harga kompetitif.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#0A2E36] font-bold mt-0.5">02.</span>
                  <span>Mengadopsi pemanfaatan teknologi beton precast modern dan struktur baja berat untuk menjamin efisiensi proyek.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-[#0A2E36] font-bold mt-0.5">03.</span>
                  <span>Membangun ekosistem kemitraan yang transparan bersama vendor dan pengembang properti guna menciptakan pertumbuhan simbiosis mutualisme.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-[#FFFDF9]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-brand tracking-tight">Nilai Budaya Perusahaan</h2>
            <p className="text-slate-700 mt-3 font-sans text-sm sm:text-base">
              Setiap langkah operasional bisnis kami disetir oleh kode etik profesionalisme kerja yang konsisten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-[#FFFDF9] border border-[#0D3A44]/10 rounded-xl p-6 shadow-xs">
                <div className="bg-secondary-brand border border-slate-100 w-12 h-12 rounded-lg flex items-center justify-center shadow-xs mb-4">
                  {v.icon}
                </div>
                <h4 className="font-bold text-primary-brand text-base mb-2">{v.title}</h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Road Map */}
      <section className="py-20 bg-secondary-brand overflow-hidden border-t border-[#0D3A44]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-brand tracking-tight">Perjalanan Sejarah Kami</h2>
            <p className="text-slate-700 mt-3 font-sans text-sm">
              Rekam jejak pertumbuhan kami dari kontraktor sipil lokal hingga menjadi pelaksana konstruksi nasional terpercaya.
            </p>
          </div>

          <div className="relative border-l-2 border-[#0D3A44]/20 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 rounded-full bg-accent-brand border-4 border-[#FFFDF9] flex items-center justify-center shadow-xs"></div>
                
                <div className="bg-[#FFFDF9] border border-[#0D3A44]/10 rounded-xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                  <span className="inline-block bg-accent-brand text-primary-brand text-xs font-bold font-mono px-3 py-1 rounded-sm mb-3">
                    {m.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-brand">{m.title}</h3>
                  <p className="text-slate-700 mt-2 text-xs sm:text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Container */}
      <section className="py-20 bg-[#FFFDF9]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-brand tracking-tight">Kekuatan Dewan Direksi</h2>
            <p className="text-slate-700 mt-3 font-sans text-sm">
              Dipimpin oleh para profesional yang visioner, berintegritas tinggi, dan piawai di bidang rekayasa konstruksi sipil.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-[#FFFDF9] border border-[#0D3A44]/15 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="h-64 relative overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-950 font-sans text-sm sm:text-base leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[#0A2E36] text-xs font-bold mt-1">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-xs font-mono mt-2 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" /> {member.experience}
                  </p>
                  <p className="text-slate-700 text-xs line-clamp-3 mt-4 leading-relaxed font-sans border-t border-[#0D3A44]/10 pt-3">
                    {member.bio}
                  </p>
                  <button
                    onClick={() => setSelectedLeader(member)}
                    className="mt-4 text-[#0A2E36] hover:text-[#0D3A44] text-xs font-bold uppercase tracking-wider block cursor-pointer"
                  >
                    Profil Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Bio Modal Popup */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] max-w-lg w-full rounded-2xl overflow-hidden shadow-xl relative text-left border border-[#0D3A44]/25">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 bg-[#0D3A44]/10 hover:bg-[#0D3A44]/20 text-[#0A2E36] p-2 rounded-full cursor-pointer transition-colors"
            >
              ✕
            </button>
            <div className="h-44 bg-primary-brand p-8 flex items-end">
              <div>
                <span className="text-xs font-bold text-accent-brand uppercase">{selectedLeader.role}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{selectedLeader.name}</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-xs text-slate-500 font-mono mb-4">{selectedLeader.experience}</p>
              <h4 className="font-semibold text-primary-brand text-sm uppercase mb-2 tracking-wide font-sans">Biografi Singkat</h4>
              <p className="text-slate-700 text-sm leading-relaxed font-sans">{selectedLeader.bio}</p>
              <p className="text-slate-700 text-sm leading-relaxed mt-4">
                Sebagai bagian dari dewan direksi, {selectedLeader.name.split(',')[0]} senantiasa berkomitmen mengedepankan inovasi, integritas pelayanan, keselamatan di area proyek, serta memberikan kepemimpinan yang etis bagi seluruh karyawan PT Mahkota Buana Konstruksi.
              </p>
              <button
                onClick={() => setSelectedLeader(null)}
                className="mt-8 bg-[#0D3A44] hover:bg-[#0A2E36] text-white font-semibold px-6 py-2.5 rounded-lg text-sm w-full cursor-pointer transition-colors"
              >
                Tutup Jendela Profil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

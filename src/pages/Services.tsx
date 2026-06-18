import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { CheckCircle2, ArrowRight, DraftingCompass, Coins, Hammer, Key, LayoutList } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  // Helper to render dynamic Lucide icon
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.Building2;
    return <IconComponent className="w-8 h-8 text-primary-brand" />;
  };

  const selectedService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const methodologySteps = [
    {
      icon: <DraftingCompass className="w-6 h-6 text-[#0A2E36]" />,
      phase: 'Fase 01',
      title: 'Konsultasi & Gambar Kerja',
      desc: 'Pertemuan perdana survei lokasi, diskusi blueprint arsitektur, penyusunan gambar kerja 2D/3D (DED), serta pendampingan pengurusan izin PBG.'
    },
    {
      icon: <Coins className="w-6 h-6 text-[#0A2E36]" />,
      phase: 'Fase 02',
      title: 'Pemeriksaan RAB & Kontrak',
      desc: 'Pembuatan Rencana Anggaran Biaya (RAB) terperinci per item pekerjaan. Negosiasi jadwal termin, disusul penandatanganan SPK tertulis sah hukum.'
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#0A2E36]" />,
      phase: 'Fase 03',
      title: 'Pelaksanaan Struktur & Finishing',
      desc: 'Pengecoran struktur pondasi, kolom, dan slab beton mutu SNI. Dilanjutkan pengerjaan arsitektur, instalasi MEP listrik/air, dan pekerjaan cat berkualitas.'
    },
    {
      icon: <Key className="w-6 h-6 text-[#0A2E36]" />,
      phase: 'Fase 04',
      title: 'Serah Terima & Masa Retensi',
      desc: 'Pengecekan checklist akhir (comcommissioning). Penandatanganan serah terima kunci (BAST) dan perlindungan bangunan lewat masa garansi pemeliharaan tertulis.'
    }
  ];

  return (
    <div className="bg-secondary-brand">
      {/* Title Header */}
      <section className="bg-primary-brand pt-24 pb-16 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-brand rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/20 px-3.5 py-1.5 rounded border border-accent-brand/30">
            Layanan Utama Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white mt-4">
            Solusi Rekayasa Konstruksi
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Layanan menyeluruh PT Mahkota Buana Konstruksi untuk mewujudkan infrastruktur kokoh, gedung komersial, gudang besar, dan residensial premium.
          </p>
        </div>
      </section>

      {/* Services Explorer: Interactive Side Tabs */}
      <section className="py-20 bg-[#FFFDF9]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Nav Tabs */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Pilih Bidang Layanan
              </span>
              {SERVICES.map((serv) => (
                <button
                  key={serv.id}
                  onClick={() => setActiveTab(serv.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-350 cursor-pointer flex items-center justify-between group ${
                    activeTab === serv.id
                      ? 'bg-primary-brand border-[#0D3A44] text-white shadow-md'
                      : 'bg-[#FFFDF9] border-[#0D3A44]/15 text-slate-800 hover:bg-white hover:border-[#0D3A44]/25'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeTab === serv.id ? 'bg-white/10 text-white' : 'bg-[#FFFDF9] text-[#0A2E36] border border-[#0D3A44]/10'}`}>
                      {(Icons as any)[serv.iconName] ? (
                        <span className="inline-block">
                          {(() => {
                            const IconComponent = (Icons as any)[serv.iconName];
                            return <IconComponent className="w-5 h-5 text-accent-brand" />;
                          })()}
                        </span>
                      ) : (
                        <LayoutList className="w-5 h-5 text-accent-brand" />
                      )}
                    </div>
                    <span className="font-bold text-sm sm:text-base font-sans leading-none">{serv.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === serv.id ? 'translate-x-1 text-accent-brand' : 'text-slate-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                </button>
              ))}
            </div>

            {/* Right Tab Content Viewer */}
            <div className="lg:col-span-8 bg-[#FFFDF9] border border-[#0D3A44]/10 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-xs border border-slate-200">
                    <img
                      src={selectedService.bannerImage}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E36]/90 via-[#0A2E36]/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white flex items-center gap-4">
                      <div className="bg-[#FFFDF9] p-3 rounded-xl shadow-md hidden sm:block">
                        {renderIcon(selectedService.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase text-accent-brand font-semibold">Kategori Konstruksi Utama</span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight leading-none mt-1">{selectedService.title}</h2>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2E36] mb-2">Deskripsi Layanan</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedService.description}
                  </p>

                  <h3 className="text-lg font-bold text-[#0A2E36] mb-4 flex items-center gap-2 border-t border-[#0D3A44]/10 pt-6">
                    <span>Cakupan Pekerjaan Lapangan</span>
                    <span className="text-xs bg-accent-brand/20 text-[#0A2E36] font-bold px-2 py-0.5 rounded font-mono">Spesifikasi Standard</span>
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.details.map((detail, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                        key={idx}
                        className="flex items-start gap-3 bg-[#FFFDF9] border border-[#0D3A44]/15 p-4 rounded-xl shadow-2xs"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-brand flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm leading-normal font-medium">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t border-[#0D3A44]/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center bg-[#0D3A44] p-6 rounded-2xl gap-4 text-white">
                    <div>
                      <h4 className="font-sans font-bold text-base text-white">Butuh Penjelasan Teknis & Estimasi Struktur?</h4>
                      <p className="text-slate-350 text-xs mt-0.5">Diskusikan gambar detail arsitek Anda atau serahkan survei tanah kepada kami.</p>
                    </div>
                    <a
                      href="#contact"
                      className="bg-accent-brand hover:bg-accent-hover text-primary-brand font-bold text-xs sm:text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-transform hover:scale-102"
                    >
                      Hubungi Kami <ArrowRight className="w-4 h-4 text-primary-brand" />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-secondary-brand border-t border-[#0D3A44]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-[#0A2E36] uppercase tracking-wider bg-accent-brand/20 px-3 py-1 rounded">
              SOP Pengerjaan Kami
            </span>
            <h2 className="text-3xl font-bold text-primary-brand tracking-tight mt-3">Alur & Metodologi Pelaksanaan Proyek</h2>
            <p className="text-slate-700 mt-3 font-sans text-sm sm:text-base">
              Kami menyusun tahapan pembangunan secara matang untuk menjamin bahwa tidak ada pembengkakan anggaran atau kesalahan spesifikasi bangunan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FFFDF9] border border-[#0D3A44]/15 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#0A2E36] uppercase tracking-widest bg-accent-brand/20 px-2.5 py-1 rounded-sm border border-accent-brand/35">
                      {step.phase}
                    </span>
                    <div className="bg-[#FFFDF9] border border-[#0D3A44]/10 p-3 rounded-xl shadow-3xs">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary-brand mb-3 tracking-tight font-sans">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
                <div className="border-t border-[#0D3A44]/10 pt-3 flex items-center text-xs text-slate-500 font-mono gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-brand" /> Tahap Selesai Bergaransi
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

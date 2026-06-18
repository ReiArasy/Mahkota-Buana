import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, Users, CheckCircle2, Star, Phone, MapPin } from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../data';
import { Project, Service } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSetProject: (proj: Project) => void;
}

export default function Home({ onNavigate, onSetProject }: HomeProps) {
  // Stat data
  const stats = [
    { value: '25+', label: 'Tahun Pengalaman', desc: 'Melayani konstruksi nasional sejak 2001' },
    { value: '150+', label: 'Proyek Selesai', desc: 'Sipil, komersial, residensial, & industri' },
    { value: '100%', label: 'Kepuasan Klien', desc: 'Komitmen waktu, mutu, & anggaran' },
    { value: '0', label: 'Workplace Accidents', desc: 'Penerapan K3L ketat & sertifikat ISO' },
  ];

  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="bg-secondary-brand">
      {/* Search Engine Opimization Elements Placeholder (hidden) */}
      <div className="sr-only">
        <h1>PT Mahkota Buana Konstruksi - Kontraktor Terbaik Indonesia</h1>
        <p>Jasa konstruksi bangunan, renovasi premium, infrastruktur sipil, dan gudang industri di Indonesia.</p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary-brand text-white overflow-hidden py-16 sm:py-24">
        {/* Background Overlay image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Megastructure construction site background of a Jakarta skyscraper in progress at sunrise"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-brand via-primary-brand/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-accent-brand/20 text-accent-brand px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-accent-brand/30">
                Kontraktor Utama Terpercaya dan Berlisensi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white leading-tight mb-6"
            >
              Membangun Mahakarya Konstruksi <span className="text-accent-brand">Kokoh & Presisi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-200 leading-relaxed mb-8 font-sans"
            >
              Kami mengintegrasikan perencanaan arsitektur, teknik sipil modern, dan manajemen proyek yang andal untuk menghasilkan pembangunan komersial, gedung, industri, dan residensial berkualitas tanpa cela.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center bg-accent-brand hover:bg-accent-hover text-primary-brand font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-yellow-500/10 duration-300 group cursor-pointer"
              >
                Konsultasi Proyek Gratis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center bg-transparent border-2 border-[#FAF6F0]/40 hover:border-accent-brand text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Lihat Proyek Kami
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid Banner */}
      <section className="bg-[#051A1E] py-12 relative z-20 border-b border-[#0D3A44]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center md:text-left border-l-2 border-[#0D3A44] pl-4 sm:pl-6"
              >
                <div className="text-3xl sm:text-4xl font-bold font-mono text-accent-brand">
                  {stat.value}
                </div>
                <div className="text-white font-sans font-medium text-sm mt-1">
                  {stat.label}
                </div>
                <div className="text-slate-300 font-sans text-xs mt-1 leading-normal">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#FFFDF9]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/10 px-3 py-1 rounded">
              Mengapa Memilih Kami?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-brand mt-4 tracking-tight">
              Reputasi yang Dibangun Atas Landasan Integritas
            </h2>
            <p className="text-slate-700 mt-4 leading-relaxed">
              Selama puluhan tahun, PT Mahkota Buana Konstruksi mendedikasikan keahlian sipil terbaik di seluruh wilayah kepulauan Indonesia dengan standar kerja unggul.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary-brand" />,
                title: 'Stabilitas & Keamanan Kerja',
                desc: 'Memiliki komitmen K3 Nol Kecelakaan Kerja (Zero Accident) dengan kepatuhan penuh regulasi lingkungan hidup Indonesia.'
              },
              {
                icon: <Award className="w-8 h-8 text-primary-brand" />,
                title: 'Garansi Mutu Struktur',
                desc: 'Setiap cor beton, kancing las baja, dan pengerjaan arsitektur kami jamin terlindungi lewat sertifikasi kualitas resmi.'
              },
              {
                icon: <Users className="w-8 h-8 text-primary-brand" />,
                title: 'Tim Ahli Bersertifikat',
                desc: 'Ditangani oleh insinyur-insinyur sipil senior jebolan institusi ternama dengan kepemilikan sertifikasi keahlian SKA Madya.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FFFDF9] border border-[#0D3A44]/10 p-8 rounded-2xl flex flex-col items-start shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary-brand p-4 rounded-xl shadow-xs border border-slate-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-brand font-sans mb-3">{value.title}</h3>
                <p className="text-slate-700 font-sans text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-20 bg-secondary-brand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-[#0A2E36] uppercase tracking-wider bg-accent-brand/20 px-3 py-1 rounded">
                Layanan Utama Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-brand mt-4 tracking-tight">
                Solusi Konstruksi Terintegrasi
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-4 md:mt-0 text-[#0A2E36] hover:text-accent-hover font-semibold flex items-center transition-all group gap-1 cursor-pointer font-bold"
            >
              Lihat Seluruh Layanan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-accent-hover" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#FFFDF9] border border-[#0D3A44]/15 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src={service.bannerImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A2E36]/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white font-sans">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-700 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-slate-700">
                    {service.details.slice(0, 3).map((det, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-brand flex-shrink-0" />
                        <span className="truncate">{det}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      onNavigate('services');
                    }}
                    className="text-primary-brand hover:text-accent-hover font-bold text-sm flex items-center gap-1 cursor-pointer"
                  >
                    Detil Layanan <ArrowRight className="w-4 h-4 text-accent-hover" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section Preview */}
      <section className="py-20 bg-[#FFFDF9]/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-primary-brand uppercase tracking-wider bg-accent-brand/20 px-3 py-1 rounded font-bold">
              Pekerjaan Terakhir Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-brand mt-4 tracking-tight">
              Galeri Proyek Unggulan
            </h2>
            <p className="text-slate-700 mt-4">
              Keberhasilan pembangunan fisik di berbagai kota besar di Indonesia merupakan cerminan standar kualitas tinggi dari PT Mahkota Buana Konstruksi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#FFFDF9] border border-[#0D3A44]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => {
                  onSetProject(project);
                  onNavigate('portfolio');
                }}
              >
                <div className="h-56 overflow-hidden relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-primary-brand/90 text-white backdrop-blur-xs text-xs font-semibold px-3 py-1.5 rounded-full">
                    Selesai
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A2E36]/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                    <span className="text-white text-xs font-mono">{project.location}</span>
                    <span className="text-white text-xs font-semibold bg-accent-brand text-primary-brand px-2 py-0.5 rounded">Detail</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#0A2E36] font-extrabold">
                      {project.category === 'commercial' ? 'Gedung Komersial' : project.category === 'residential' ? 'Hunian Mewah' : 'Infrastruktur Sipil'}
                    </span>
                    <h3 className="text-lg font-bold text-primary-brand mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-700 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="border-t border-[#0D3A44]/10 mt-4 pt-4 flex justify-between items-center text-xs text-slate-500">
                    <span>Tahun: {project.year}</span>
                    <span className="font-semibold text-primary-brand">{project.budget}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center justify-center bg-primary-brand hover:bg-[#0D3A44] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md cursor-pointer"
            >
              Lihat Seluruh Galeri Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Static Block */}
      <section className="py-20 bg-secondary-brand relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-primary-brand uppercase tracking-wider bg-accent-brand/20 px-3 py-1 rounded">
              Testimoni Klien
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-brand mt-4 tracking-tight">
              Dipercaya oleh Developer, Pemerintah & Pemilik Properti
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFDF9] p-8 rounded-2xl shadow-xs border border-[#0D3A44]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-brand text-accent-brand" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic font-sans text-sm leading-relaxed mb-6">
                    "{test.feedback}"
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-2">
                  <h4 className="font-bold text-slate-800 text-sm leading-tight">{test.name}</h4>
                  <p className="text-slate-500 text-xs font-sans mt-0.5">{test.role}, {test.company}</p>
                  <p className="text-primary-brand text-xs font-mono mt-2 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {test.projectAssociated}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-primary-brand text-white relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#FFD700]/5 mix-blend-color-dodge"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight mb-6">
            Siap Mewujudkan Rencana Pembangunan Anda?
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Jangan tunda lagi perencanaan konstruksi bangunan Anda. Konsultasikan gambar, IMB, struktur, dan estimasi Rencana Anggaran Biaya (RAB) gratis dengan tim profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center bg-accent-brand hover:bg-accent-hover text-primary-brand font-semibold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-yellow-500/20 duration-300 cursor-pointer"
            >
              Hubungi Kami Sekarang
            </button>
            <a
              href="tel:+62215551234"
              className="inline-flex items-center justify-center bg-[#0D3A44] hover:bg-[#0A2E36] text-white font-semibold px-8 py-4 rounded-lg transition-all border border-[#0D3A44]/60 duration-300 gap-2 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-accent-brand" />
              (021) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

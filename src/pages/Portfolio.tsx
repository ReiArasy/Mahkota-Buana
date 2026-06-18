import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, TESTIMONIALS } from '../data';
import { Project } from '../types';
import { MapPin, Calendar, Briefcase, DollarSign, ListTodo, Star, Eye, MessageSquare, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  selectedProject: Project | null;
  onSetProject: (proj: Project | null) => void;
}

export default function Portfolio({ selectedProject, onSetProject }: PortfolioProps) {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'infrastructure' | 'industrial'>('all');
  
  // Local active testimonial
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const categories = [
    { id: 'all', name: 'Semua Proyek' },
    { id: 'commercial', name: 'Gedung Komersial' },
    { id: 'residential', name: 'Hunian Residensial' },
    { id: 'infrastructure', name: 'Infrastruktur Sipil' },
    { id: 'industrial', name: 'Fasilitas Industri' },
  ];

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const testClickNext = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const testClickPrev = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="bg-secondary-brand">
      {/* Search Engine Optimization Elements Placeholder (hidden) */}
      <div className="sr-only">
        <h2>Portfolio Konstruksi Terlengkap di Indonesia</h2>
        <p>Lihat galeri proyek pengerjaan jalan, perumahan elit, jembatan baja, dan gedung perkantoran mewah.</p>
      </div>

      {/* Title Header */}
      <section className="bg-primary-brand pt-24 pb-16 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-brand rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/20 px-3.5 py-1.5 rounded border border-accent-brand/35">
            Portfolio Pekerjaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white mt-4">
            Rekam Jejak Proyek Kami
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Menelusuri mahakarya tata ruang sipil, gedung perkantoran modern, kompleks pergudangan, dan hunian mewah yang telah kami serah-terimakan.
          </p>
        </div>
      </section>

      {/* Gallery Filter Navigation */}
      <section className="py-12 bg-[#FFFDF9]/80 border-b border-[#0D3A44]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-primary-brand text-white shadow-sm border border-primary-brand'
                    : 'bg-[#FFFDF9] text-slate-700 hover:bg-white hover:text-primary-brand border border-[#0D3A44]/15'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  onClick={() => onSetProject(project)}
                  className="bg-[#FFFDF9] border border-[#0D3A44]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                >
                  <div className="h-56 overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className={`text-slate-900 text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase ${
                        project.status === 'complet'
                          ? 'bg-emerald-50 border border-emerald-550 text-emerald-700'
                          : 'bg-accent-brand/20 border border-accent-brand text-primary-brand bg-accent-brand/10'
                      }`}>
                        {project.status === 'complet' ? 'Selesai' : 'Dalam Proses'}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 text-slate-950 backdrop-blur-xs text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-md">
                        <Eye className="w-4 h-4" /> Detail Spesifikasi
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold font-mono tracking-wider text-[#0A2E36] uppercase">
                        {project.category === 'commercial' ? 'Gedung Komersial' : project.category === 'residential' ? 'Hunian Mewah' : project.category === 'infrastructure' ? 'Infrastruktur Sipil' : 'Fasilitas Industri'}
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 mt-1 mb-2 tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-700 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="border-t border-[#0D3A44]/10 mt-6 pt-4 flex flex-col gap-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="truncate text-slate-650">{project.location}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#0D3A44]/10 text-xs text-slate-600">
                        <span>Tahun: {project.year}</span>
                        <span className="font-semibold text-[#0A2E36] font-mono text-xs">{project.budget || 'Rp 45+Miliar'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials Static Area */}
      <section className="py-20 bg-primary-brand text-white overflow-hidden relative border-t border-[#09252c]">
        <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-5">
          <div className="w-full h-full bg-linear-to-t from-accent-brand to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/20 px-3.5 py-1.5 rounded border border-accent-brand/35">
              Evaluasi Publik & Developer
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-white mt-4">
              Apa Kata Klien Mitra Kami?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0D3A44] border border-[#09252c] p-8 sm:p-12 rounded-3xl shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-[#0A2E36] p-4 rounded-2xl border border-[#09252c]">
                <MessageSquare className="w-6 h-6 text-accent-brand" />
              </div>
              <div className="flex gap-1">
                {[...Array(TESTIMONIALS[activeTestimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-brand text-accent-brand" />
                ))}
              </div>
            </div>

            <p className="text-slate-200 italic text-base sm:text-lg leading-relaxed mb-8">
              "{TESTIMONIALS[activeTestimonialIdx].feedback}"
            </p>

            <div className="border-t border-[#0A2E36] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">{TESTIMONIALS[activeTestimonialIdx].name}</h4>
                <p className="text-slate-350 text-xs sm:text-sm mt-0.5">
                  {TESTIMONIALS[activeTestimonialIdx].role}, {TESTIMONIALS[activeTestimonialIdx].company}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={testClickPrev}
                  className="bg-[#0A2E36] hover:bg-primary-brand hover:text-accent-brand text-white px-4 py-2 rounded-lg border border-[#09252c] text-xs font-bold font-mono transition-colors cursor-pointer"
                >
                  PREV
                </button>
                <button
                  onClick={testClickNext}
                  className="bg-[#0A2E36] hover:bg-primary-brand hover:text-accent-brand text-white px-4 py-2 rounded-lg border border-[#09252c] text-xs font-bold font-mono transition-colors cursor-pointer"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Dialog PopUp */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#FFFDF9] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative text-left border border-[#0D3A44]/25"
          >
            {/* Close Button */}
            <button
              onClick={() => onSetProject(null)}
              className="absolute top-4 right-4 bg-slate-900/40 hover:bg-slate-900/60 text-white p-2.5 rounded-full cursor-pointer z-10 mb-4 transition-colors"
            >
              ✕
            </button>

            {/* Banner image */}
            <div className="h-64 sm:h-80 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="inline-block bg-accent-brand text-primary-brand text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-2.5">
                  {selectedProject.category === 'commercial' ? 'Gedung Komersial' : selectedProject.category === 'residential' ? 'Hunian Mewah' : selectedProject.category === 'infrastructure' ? 'Infrastruktur Sipil' : 'Fasilitas Industri'}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-sans tracking-tight leading-tight">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Spec Columns Grid */}
            <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                
                {/* Left Side Specs description */}
                <div className="sm:col-span-8 space-y-4 text-left">
                  <h4 className="font-bold text-primary-brand text-sm sm:text-base border-b border-[#0D3A44]/15 pb-2">Deskripsi Proyek</h4>
                  <p className="text-slate-750 leading-relaxed text-xs sm:text-sm font-sans">{selectedProject.description}</p>
                  
                  <h4 className="font-bold text-primary-brand text-sm sm:text-base border-b border-[#0D3A44]/10 pb-2 pt-2">Metrik & Fitur Struktur</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-1.5 flex-shrink-0"></span>
                        <span className="font-medium text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side metadata table card */}
                <div className="sm:col-span-4 bg-secondary-brand border border-[#0D3A44]/10 rounded-xl p-4 space-y-3.5">
                  <h4 className="font-bold text-[#0A2E36] text-xs sm:text-sm uppercase tracking-wide border-b border-[#0D3A44]/15 pb-2">Rincian Proyek</h4>
                  
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 block font-sand">Klien Pengembang:</span>
                      <span className="font-semibold text-slate-800">{selectedProject.client}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block block font-sans">Lokasi Pekerjaan:</span>
                      <span className="font-semibold text-slate-800">{selectedProject.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block block font-sans">Tahun Penyelesaian:</span>
                      <span className="font-semibold text-slate-800">{selectedProject.year}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block block font-sans">Pemasukan Nilai RAB:</span>
                      <span className="font-bold text-[#0D3A44] font-mono">{selectedProject.budget || 'Rp 50 Miliar'}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer buttons row */}
            <div className="bg-secondary-brand border-t border-[#0D3A44]/15 p-6 flex justify-end gap-2.5 rounded-b-2xl">
              <button
                onClick={() => onSetProject(null)}
                className="bg-[#0D3A44] hover:bg-[#0A2E36] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg cursor-pointer transition-colors"
              >
                Tutup Jendela Spesifikasi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

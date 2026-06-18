import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import { Search, ChevronDown, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Semua Kategori' },
    { id: 'Prosedur & Durasi', name: 'Prosedur & Durasi' },
    { id: 'Kontrak & Keuangan', name: 'Kontrak & Keuangan' },
    { id: 'Perizinan & Hukum', name: 'Perizinan & Hukum' },
    { id: 'Layanan Pasca Proyek', name: 'Pasca Layanan' },
  ];

  // Filter FAQs based on category AND search input
  const filteredFAQs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    if (expandedFAQId === id) {
      setExpandedFAQId(null);
    } else {
      setExpandedFAQId(id);
    }
  };

  return (
    <div className="bg-secondary-brand">
      {/* Title Header */}
      <section className="bg-primary-brand pt-24 pb-16 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider bg-accent-brand/20 px-3.5 py-1.5 rounded border border-accent-brand/35">
            Pertanyaan Umum
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white mt-4">
            Tanya Jawab Konstruksi
          </h1>
          <p className="text-slate-350 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Temukan jawaban langsung seputar perizinan PBG, durasi pengecoran semen, tata cara pengajuan termin, hingga garansi kecacatan bangunan.
          </p>
        </div>
      </section>

      {/* Search & Categories Nav bar */}
      <section className="py-10 bg-[#FFFDF9]/80 border-b border-[#0D3A44]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Live Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cari pertanyaan Anda... (contoh: 'garansi', 'IMB', 'biaya')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#0D3A44]/15 rounded-2xl py-3.5 pl-11 pr-5 text-slate-800 text-sm focus:outline-hidden focus:border-[#0D3A44] focus:bg-white text-left shadow-2xs"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>

            {/* Categorized Filter Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-primary-brand text-white shadow-xs border border-primary-brand'
                      : 'bg-[#FFFDF9] text-slate-700 hover:bg-white hover:text-primary-brand border border-[#0D3A44]/15'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Accordion List render */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, idx) => (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-[#FFFDF9] border border-[#0D3A44]/10 rounded-2xl overflow-hidden shadow-2xs text-left"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-hidden"
                    >
                      <div className="flex gap-3 items-start">
                        <HelpCircle className="w-5 h-5 text-primary-brand flex-shrink-0 mt-0.5" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                          {faq.question}
                        </span>
                      </div>
                      <span className={`bg-slate-50 border border-slate-150 p-1.5 rounded-lg text-slate-500 transition-transform duration-350 flex-shrink-0 ${
                        expandedFAQId === faq.id ? 'rotate-180 bg-[#0D3A44] text-[#FFD700] border-[#0D3A44]' : ''
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedFAQId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-[#0D3A44]/10 bg-secondary-brand"
                        >
                          <div className="p-6 text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
                            {faq.answer}
                            
                            <div className="mt-4 pt-4 border-t border-[#0D3A44]/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                              <span>Ketegori: {faq.category}</span>
                              <span className="text-[#0D3A44] font-bold">Resmi Mahkota Buana SOP</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#FFFDF9] text-center p-12 rounded-2xl border border-[#0D3A44]/15"
              >
                <div className="text-slate-400 font-bold mb-2">Pencarian Tidak Ditemukan</div>
                <p className="text-slate-500 text-xs font-sans max-w-sm mx-auto">
                  Maaf, kata kunci "{searchQuery}" tidak cocok dengan pertanyaan di database kami. Silakan hubungi pusat bantuan marketing kami secara langsung.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 bg-[#0D3A44] hover:bg-[#0A2E36] text-white font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  Reset Filter & Kata Kunci
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Box at the bottom */}
      <section className="py-20 bg-[#FFFDF9]/85 border-t border-[#0D3A44]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="bg-primary-brand rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white flex flex-col items-center">
            
            <div className="bg-[#FFFDF9]/10 p-4 rounded-full mb-6 relative z-10">
              <MessageSquare className="w-8 h-8 text-[#FFD700]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight relative z-10">
              Masih Memiliki Pertanyaan Khusus?
            </h3>
            <p className="text-slate-350 text-sm sm:text-base mt-2 max-w-md mx-auto relative z-10 leading-relaxed font-sans">
              Kami siap memberikan perhitungan kasaran, analisis rencana pengerjaan, dan skema kontrak untuk mematangkan konsep ruko atau gedung perkantoran Anda.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 bg-accent-brand hover:bg-[#E65100] text-[#0A2E36] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-lg transition-transform hover:scale-102 flex items-center gap-2 cursor-pointer relative z-10 font-sans"
            >
              Hubungi Pusat Penilai RAB <ArrowRight className="w-5 h-5 text-primary-brand" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

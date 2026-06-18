import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Building2, Phone, Mail, MapPin, Award, ArrowUp, ArrowRight, Clock } from 'lucide-react';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import { Project } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Synchronize component views with URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const validPages = ['home', 'about', 'services', 'portfolio', 'contact', 'faq'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        // Collapse mobile menu if open
        setMobileMenuOpen(false);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash) {
        // Default to home page if no hash
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange(); // Init router state
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll height to show scrolling back-to-top buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set selected portfolio project and trigger transition to Portfolio catalog
  const handleSelectProject = (project: Project | null) => {
    setSelectedProject(project);
    if (project) {
      window.location.hash = 'portfolio';
    }
  };

  const navigateToPage = (pageName: string) => {
    window.location.hash = pageName;
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans select-none bg-secondary-brand text-text-brand">
      
      {/* Dynamic Top Announcement bar */}
      <div className="bg-[#051A1E] border-b border-[#0D3A44] text-slate-300 py-2.5 px-4 text-xs font-sans">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-accent-brand" />
              Hotline: (021) 555-1234
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-accent-brand" />
              marketing@mahkotabuana.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-sm font-mono text-[10px] uppercase font-bold">
              ● K3 CERTIFIED / ISO 9001
            </span>
            <span className="hidden sm:inline text-slate-400 text-[11px]">
              Tangerang, Jakarta & Surabaya
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 bg-primary-brand/95 backdrop-blur-md text-white border-b border-[#0D3A44] shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="bg-accent-brand p-2.5 rounded-xl text-primary-brand shadow-md group-hover:scale-105 transition-transform duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-left font-sans">
                <div className="font-bold text-base tracking-tight leading-none text-white group-hover:text-accent-brand transition-colors">
                  MAHKOTA BUANA
                </div>
                <div className="text-[10px] tracking-widest text-accent-brand font-semibold font-mono uppercase mt-1 leading-none">
                  KONSTRUKSI
                </div>
              </div>
            </a>

            {/* Desktop Navbar menu links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`transition-colors relative py-1.5 ${
                    currentPage === link.id
                      ? 'text-accent-brand font-bold'
                      : 'text-slate-200 hover:text-accent-brand'
                  }`}
                >
                  {link.label}
                  {currentPage === link.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Action CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="bg-accent-brand hover:bg-accent-hover text-primary-brand px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md hover:shadow-yellow-500/20 transition-all hover:scale-102 flex items-center gap-1.5"
              >
                Konsultasi Proyek
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white bg-[#0D3A44]/50 hover:bg-[#0D3A44] rounded-lg focus:outline-hidden transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#0D3A44] border-t border-[#0A2E36]"
            >
              <div className="px-4 py-6 space-y-3.5 text-left font-sans">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                      currentPage === link.id
                        ? 'bg-accent-brand text-primary-brand'
                        : 'text-slate-200 hover:bg-[#0A2E36] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-[#0A2E36] px-4">
                  <a
                    href="#contact"
                    className="w-full bg-accent-brand hover:bg-accent-hover text-primary-brand py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                  >
                    Konsultasi Proyek <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Pages Content with Smooth Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {currentPage === 'home' && (
              <Home onNavigate={navigateToPage} onSetProject={handleSelectProject} />
            )}
            {currentPage === 'about' && <About />}
            {currentPage === 'services' && <Services />}
            {currentPage === 'portfolio' && (
              <Portfolio selectedProject={selectedProject} onSetProject={setSelectedProject} />
            )}
            {currentPage === 'faq' && <FAQ onNavigate={navigateToPage} />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>      {/* Corporate Site Footer */}
      <footer className="bg-primary-brand text-white pt-20 pb-10 border-t border-[#0D3A44]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start mb-16">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 space-y-5 text-left">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage('home');
                }}
                className="flex items-center gap-3"
              >
                <div className="bg-accent-brand p-2.5 rounded-xl text-primary-brand shadow-md h-fit">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-base tracking-tight leading-none text-white">
                    MAHKOTA BUANA
                  </div>
                  <div className="text-[10px] tracking-widest text-[#FFD700] font-semibold font-mono uppercase mt-1 leading-none">
                    KONSTRUKSI
                  </div>
                </div>
              </a>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                PT Mahkota Buana Konstruksi adalah badan usaha jasa pelaksana konstruksi umum berlisensi resmi di Indonesia, mengabdi puluhan tahun melayani rancang bangun infrastruktur sipil dan properti terbaik.
              </p>

              <div className="flex gap-2.5">
                {[
                  { label: 'Sertifikat ISO 9001:2015', val: 'Mutu Internasional' },
                  { label: 'Sertifikat ISO 45001', val: 'K3L Terpadu' }
                ].map((cert, idx) => (
                  <div key={idx} className="bg-[#0D3A44] border border-[#0D3A44]/30 px-3 py-1.5 rounded-md text-[10px] font-mono select-none">
                    <div className="text-accent-brand font-bold">{cert.label}</div>
                    <div className="text-slate-300 leading-none mt-0.5">{cert.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Sitemap Links */}
            <div className="md:col-span-3 text-left space-y-4">
              <h4 className="font-bold text-xs uppercase text-accent-brand tracking-wider border-b border-[#0D3A44] pb-2">Peta Situs Website</h4>
              <ul className="space-y-2.5 text-slate-300 text-sm">
                <li>
                  <a href="#home" className="hover:text-accent-brand transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-brand"></span> Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent-brand transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-brand"></span> Tentang Kami / About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent-brand transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-brand"></span> Bidang Layanan / Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-accent-brand transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-brand"></span> Portofolio & Proyek
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent-brand transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-brand"></span> FAQ / Pertanyaan Umum
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent-brand transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-brand"></span> Hubungi Kami / Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact coordinates */}
            <div className="md:col-span-5 text-left space-y-4">
              <h4 className="font-bold text-xs uppercase text-accent-brand tracking-wider border-b border-[#0D3A44] pb-2">Administrasi Wilayah</h4>
              
              <div className="space-y-3.5 text-slate-200 text-xs sm:text-sm">
                <div className="flex gap-3 leading-normal font-sans">
                  <MapPin className="w-5 h-5 text-accent-brand flex-shrink-0 mt-0.5" />
                  <span>
                    Kencana Tower, Lantai 12, Unit B-C, Jl. Boulevard Artha Blok M-4, Meruya Utara, Jakarta Barat, 11610
                  </span>
                </div>
                <div className="flex gap-3 leading-none font-sans">
                  <Phone className="w-5 h-5 text-accent-brand flex-shrink-0" />
                  <span>Hotline: (021) 555-1234 / Sales: 0812-3456-7890</span>
                </div>
                <div className="flex gap-3 leading-none font-sans">
                  <Mail className="w-5 h-5 text-accent-brand flex-shrink-0" />
                  <span>Surel Respon: marketing@mahkotabuana.com</span>
                </div>
                <div className="flex gap-3 leading-normal font-sans">
                  <Clock className="w-5 h-5 text-accent-brand flex-shrink-0 mt-0.5" />
                  <span>
                     Senin - Sabtu: 08:30 - 17:00 WIB (SOP Standar Kehadiran)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Column Copyright row */}
          <div className="border-t border-[#0D3A44] pt-10 text-center flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <p className="font-sans">
              © {new Date().getFullYear()} PT Mahkota Buana Konstruksi. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <div className="flex gap-4 font-mono">
              <span className="text-xs bg-[#0D3A44] border border-[#0D3A44]/30 px-2 py-0.5 rounded text-accent-brand">
                SK Kemenkumham RI No. AHU-001293.AH.01
              </span>
              <span>
                Kontraktor Gred B2 Nasional
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top floating Button widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-accent-brand hover:bg-accent-hover text-primary-brand p-3 rounded-full shadow-lg cursor-pointer z-50 hover:scale-105 transition-transform"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

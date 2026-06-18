import { Service, Project, TeamMember, FAQItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'commercial',
    title: 'Gedung Komersial',
    description: 'Pembangunan gedung bertingkat, perkantoran, pusat perbelanjaan, dan ruko dengan standar keamanan tinggi.',
    iconName: 'Building2',
    details: [
      'Konstruksi gedung bertingkat tinggi (high-rise)',
      'Pengembangan pusat perbelanjaan & retail',
      'Pembangunan hotel, kondominium & apartemen',
      'Struktur beton bertulang & rangka baja berat',
      'Sertifikasi hijau untuk bangunan ramah lingkungan'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80' // Gambar pekerja konstruksi sedang memasang struktur baja besi / konstruksi gedung modern komersial
  },
  {
    id: 'residential',
    title: 'Hunian Residensial',
    description: 'Konstruksi rumah tinggal mewah, kompleks hunian (townhouse), dan villa eksklusif dengan presisi arsitektural.',
    iconName: 'Home',
    details: [
      'Pembangunan rumah tinggal kustom & mewah',
      'Pengembangan area perumahan (cluster & townhouse)',
      'Pembangunan villa & resort eksklusif',
      'Pekerjaan penyelesaian (finishing) berkualitas premium',
      'Integrasi sistem smart home & otomasi rumah'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' // Rumah mewah modern tropis
  },
  {
    id: 'infrastructure',
    title: 'Infrastruktur Sipil',
    description: 'Pengerjaan proyek infrastruktur publik seperti jembatan, jalan raya, bendungan, dan sistem utilitas perkotaan.',
    iconName: 'Milestone',
    details: [
      'Konstruksi jembatan bentang panjang',
      'Pembangunan jalan beton & pengaspalan standar nasional',
      'Sistem drainase makro dan kelayakan air limbah',
      'Pekerjaan tanah skala besar & galian tanah berat',
      'Dinding penahan tanah (retaining wall) anti longsor'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1545459720-aac273a2773d?auto=format&fit=crop&w=800&q=80' // Struktur jembatan baja sipil kokoh
  },
  {
    id: 'industrial',
    title: 'Fasilitas Industri',
    description: 'Pembangunan gudang logistik, pabrik manufaktur, dan hanggar industri dengan struktur baja bentang lebar.',
    iconName: 'Factory',
    details: [
      'Konstruksi pabrik manufaktur & pengolahan',
      'Pembangunan gudang pergudangan logistik modern',
      'Struktur baja bentang lebar (wide-span steel frame)',
      'Lantai beton hardener daya tahan beban tinggi',
      'Instalasi sistem proteksi kebakaran & utilitas industri'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' // Gudang logistik modern
  },
  {
    id: 'renovation',
    title: 'Desain, Renovasi & Interior',
    description: 'Layanan pemugaran gedung, perkuatan struktur lama, perencanaan desain 3D digital, serta fit-out interior modern.',
    iconName: 'Paintbrush',
    details: [
      'Perencanaan arsitek & estimasi RAB presisi',
      'Pemodelan 3D terpadu (digital BIM & CAD modeling)',
      'Fit-out interior kantor & area komersial premium',
      'Renovasi total & penyegaran fasad gedung komersial',
      'Pemeliharaan berkala infrastruktur gedung'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80' // Tangan memegang tablet dengan desain 3D digital interaktif bangunan
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Menara Buana Office Tower',
    category: 'commercial',
    location: 'Kuningan, Jakarta Selatan',
    year: '2025',
    client: 'PT Buana Land Development',
    description: 'Pembangunan gedung perkantoran ramah lingkungan setinggi 28 lantai dengan sertifikasi Gold Green Building. Proyek ini diselesaikan tepat waktu dengan standar K3 paling ketat.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    budget: 'Rp 142 Miliar',
    status: 'complet',
    features: ['Sertifikasi Green Building Gold', 'Pengecoran Struktur Beton Mutu Tinggi K-500', 'Sistem Kaca Ganda Low-E', 'Sistem Manajemen Gedung Terintegrasi'],
    galleryImages: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-2',
    title: 'Resor & Villa Tebing Uluwatu',
    category: 'residential',
    location: 'Uluwatu, Bali',
    year: '2024',
    client: 'Uluwatu Luxury Sanctuary Group',
    description: 'Konstruksi resor eksklusif berkonsep tebing terapung dengan 15 unit private villa mewah. Struktur dirancang khusus tahan gempa serta menggunakan material lokal berkualitas tinggi.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    budget: 'Rp 65 Miliar',
    status: 'complet',
    features: ['Struktur Cantilever Anti Gempa', 'Infinity Pool dengan View Samudera', 'Material Kayu Ulin Kalimantan Premium', 'Desain Pencahayaan Alami Maksimal'],
    galleryImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-3',
    title: 'Revitalisasi Jembatan Mahakam II',
    category: 'infrastructure',
    location: 'Samarinda, Kalimantan Timur',
    year: '2025',
    client: 'Kementerian Pekerjaan Umum RI',
    description: 'Pekerjaan perbaikan struktur utama jembatan suspensi baja bentang 400 meter. Pekerjaan meliputi pemasangan damper gempa baru, penggantian sling baja high-tensile, dan pengaspalan ulang.',
    image: 'https://images.unsplash.com/photo-1545459720-aac273a2773d?auto=format&fit=crop&w=1200&q=80',
    budget: 'Rp 89 Miliar',
    status: 'complet',
    features: ['Penggantian Kabel Sling Utama', 'Instalasi Damper Hidrolik Baru', 'Sensor Pemuatan Struktur Real-time', 'Daya Tahan Operasional 50 Tahun'],
    galleryImages: [
      'https://images.unsplash.com/photo-1545459720-aac273a2773d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513828583848-6b2a0c24a76e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1473842191133-3a56853fa0a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590483736148-3c1a58f94216?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-4',
    title: 'Gudang Logistik Nasional',
    category: 'industrial',
    location: 'Gresik, Jawa Timur',
    year: '2026',
    client: 'PT Trans Logistik Indonesia',
    description: 'Pembangunan kompleks pergudangan pintar ultra-luas dengan kapasitas load-bearing lantai mencapai 7 ton per meter persegi. Menggunakan konstruksi baja bentang lebar tanpa tiang tengah.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    budget: 'Rp 52 Miliar',
    status: 'ongoing',
    features: ['Lantai Beton Super Flat SFRC', 'Baja Struktur Bentang Bebas 50 Meter', 'Sistem Pembangkit Listrik Tenaga Surya Atap', 'Sistem Proteksi Kebakaran FM Approved'],
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-5',
    title: 'Kompleks Townhouse Green Wood',
    category: 'residential',
    location: 'Dago, Bandung',
    year: '2025',
    client: 'PT Hijau Propertindo Utama',
    description: 'Pembangunan klaster perumahan modern tropis berwawasan lingkungan sebanyak 42 unit rumah mewah tipe 180/200 dengan kontur tanah perbukitan Dago yang dinamis.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    budget: 'Rp 45 Miliar',
    status: 'complet',
    features: ['Struktur Berteras Tahan Longsor', 'Water Harvesting System Terpadu', 'Batu Alam Andesit Premium', 'Pekerjaan Utilitas Bawah Tanah'],
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'proj-6',
    title: 'Fit-out Nusantara Business Center',
    category: 'commercial', // fixed mapping to commercial/renovation
    location: 'Sudirman, Jakarta Pusat',
    year: '2026',
    client: 'PT Bank Global Nusantara',
    description: 'Pekerjaan pemugaran dan fit-out interior modern untuk markas pusat baru dengan kualifikasi material bebas emisi VOC, serta pemasangan sekat akustik modern.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    budget: 'Rp 18 Miliar',
    status: 'ongoing',
    features: ['Pekerjaan Akustik High STC', 'Sistem Tata Cahaya Pintar DALI', 'Material Ramah Lingkungan bersertifikat', 'Instalasi AC VRF Rendah Daya'],
    galleryImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ir. Handoyo Subrata, M.T.',
    role: 'Direktur Utama / Chief Executive Officer',
    experience: '25+ Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: 'Alumnus Teknik Sipil ITB dengan pengalaman puluhan tahun memimpin proyek infrastruktur BUMN dan gedung bertingkat di Jakarta.'
  },
  {
    id: 'team-2',
    name: 'Budi Santoso, S.T., PMP',
    role: 'Direktur Operasional / Chief Projects Officer',
    experience: '18+ Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Pakar manajemen proyek bersertifikasi internasional (PMP). Mengawasi seluruh pelaksanaan teknis di lapangan agar tepat mutu dan tepat waktu.'
  },
  {
    id: 'team-3',
    name: 'Maya Citra, S.T., M.Arst',
    role: 'Kepala Divisi Estimator & Desain',
    experience: '12 Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Spesialis dalam perencanaan anggaran (RAB) dan perancangan fungsionalitas ruang dengan sentuhan estetika berkelanjutan.'
  },
  {
    id: 'team-4',
    name: 'Ir. Ferry Wahyudi',
    role: 'Manajer Senior HSE (K3L)',
    experience: '15 Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Menjamin keselamatan jiwa seluruh kru lapangan dengan penerapan SOP Kesehatan, Keselamatan Kerja dan Lingkungan berperingkat ISO 45001.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama estimasi pengerjaan pembangunan sebuah rumah tinggal atau ruko?',
    answer: 'Rata-rata pembangunan rumah tinggal mewah atau ruko 3 lantai berkisar antara 6 hingga 10 bulan, tergantung pada kompleksitas struktur, luas bangunan, kondisi tanah, serta material finishing yang dipilih. Jadwal detail (Gantt Chart) akan kami rilis sebelum tanda tangan kontrak.',
    category: 'Prosedur & Durasi'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana metode pembayaran proyek konstruksi di Mahkota Buana Konstruksi?',
    answer: 'Kami menerapkan metode pembayaran berbasis Termin (progres pekerjaan lapangan) atau Down Payment (DP) + Termin Berkala. Setiap termin diawali dengan penyerahan Berita Acara Progres Lapangan bersama dokumen foto fisik proyek. Pembayaran dilakukan via transfer bank resmi perusahaan.',
    category: 'Kontrak & Keuangan'
  },
  {
    id: 'faq-3',
    question: 'Apakah biaya jasa sudah termasuk pengurusan perizinan seperti KKPR, Persetujuan Bangunan Gedung (PBG/SLF)?',
    answer: 'Ya, kami menyediakan paket lengkap turnkey engineering yang mencakup pembuatan gambar kerja (DED), pembuatan perhitungan struktur formal bersertifikat ahli madya (SKO), hingga pendampingan pengurusan PBG (dulu IMB) di situs pemerintah setempat.',
    category: 'Perizinan & Hukum'
  },
  {
    id: 'faq-4',
    question: 'Apakah proyek yang sudah selesai memiliki garansi pemeliharaan?',
    answer: 'Tentu. Seluruh pekerjaan kami dilindungi oleh Garansi Pemeliharaan (Retensi) tertulis selama 3 hingga 12 bulan sejak tanggal penandatanganan Berita Acara Serah Terima (BAST). Masa jaminan ini mencakup perbaikan bocor, struktur retak rambut, kerusakan instalasi kelistrikan, maupun kerusakan pipa air.',
    category: 'Layanan Pasca Proyek'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana jika terjadi perubahan desain atau material di pertengahan pelaksanaan?',
    answer: 'Setiap perubahan material atau desain di tengah pengerjaan akan difasilitasi melalui mekanisme CCO (Contract Change Order). Kami akan menyusun draf Addendum Kontrak berisi hitungan tambah-kurang biaya yang transparan untuk disetujui bersama sebelum pekerjaan tersebut dimulai.',
    category: 'Prosedur & Durasi'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Herman Sutanto',
    role: 'Direktur Project',
    company: 'PT Buana Land Development',
    feedback: 'Kami sangat puas dengan keandalan PT Mahkota Buana Konstruksi dalam membidani gedung Menara Buana. Meskipun cuaca buruk, manajemen sirkulasi logistik beton sangat matang sehingga tidak terjadi delay.',
    rating: 5,
    projectAssociated: 'Menara Buana Office Tower'
  },
  {
    id: 'test-2',
    name: 'Angelina Widjaja',
    role: 'Owner & Investor',
    company: 'Uluwatu Luxury Sanctuary Group',
    feedback: 'Tim arsitek dan sipil dari Mahkota Buana membuktikan kompetensi luar biasa dalam mewujudkan konstruksi tebing uluwatu yang rumit. Garansi dan layanan perbaikan cepat tanggap.',
    rating: 5,
    projectAssociated: 'Resor & Villa Tebing Uluwatu'
  },
  {
    id: 'test-3',
    name: 'H. Achmad Riyadi',
    role: 'Perwakilan Pejabat Komitmen (PPK)',
    company: 'Kementerian Pekerjaan Umum RI',
    feedback: 'Ketelitian teknis pada pekerjaan jembatan suspensi sangat krusial. Tim ini menerapkan kontrol mutu material (baja dan sling tensile) yang sesuai dengan dokumen spesifikasi teknis kami.',
    rating: 5,
    projectAssociated: 'Revitalisasi Jembatan Mahakam II'
  }
];

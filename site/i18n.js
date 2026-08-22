// ponytail: EN copy lives in the HTML (so the page reads fine with JS off);
// this file only carries the ID overrides.
const ID = {
  navWork: 'Karya', navCase: 'Studi Kasus', navAbout: 'Tentang', navContact: 'Kontak',
  resume: 'CV', downloadResume: 'Unduh CV', present: 'Sekarang',
  kicker: 'Software Engineer · Surabaya, Indonesia',
  heroSub: 'Lebih dari 5 tahun membangun sistem web dan mobile di lingkungan manufaktur, startup, dan logistik pelabuhan — tempat di mana satu bug punya biaya nyata.',
  ctaEnter: 'Masuk ke yard', ctaHire: 'Hubungi saya', scroll: 'Gulir untuk menjelajah',
  secWork: 'KARYA', workTitle: 'Sistem yang berjalan di produksi',
  workIntro: 'Logistik pelabuhan, operasional BBM, produk POS dan CRM, HR perusahaan. Stack lama dan modern, biasanya harus saling berbicara.',
  p1: 'Membangun ulang APBS lama menjadi Portal APBS dengan ASP.NET Core 8 untuk permohonan izin kapal, terintegrasi dengan TPS, PTOS-M, PTOS-PK, PKK, dan TTL.',
  p2: 'Gateway ASP.NET Core 3 yang menangani integrasi JSON-to-JSON antara sistem internal dan SAP.',
  p3: 'Aplikasi web untuk alur permintaan BBM dan pelaporannya, dilengkapi aplikasi Flutter agar staf pelabuhan bisa mengelola operasional BBM dari mana saja.',
  p4: 'Sistem .NET Framework untuk mengelola arus kontainer masuk dan keluar depo pelabuhan, meningkatkan visibilitas operasional.',
  p5: 'Aplikasi web fullstack untuk alur pinjaman korporasi Pelindo Group dan perusahaan non-Pelindo, mencakup modul pengajuan, persetujuan, dan pelaporan keuangan.',
  p6: 'Aplikasi POS Java Android dengan backend Node.js dan CodeIgniter 3, platform loyalty berbasis Flutter, serta Wooblazz CRM untuk memantau kinerja dan kehadiran tim sales.',
  secCase: 'STUDI KASUS',
  caseBody: 'Permohonan izin kapal sebelumnya berjalan di instalasi APBS lama. Pembangunan ulang memindahkannya ke ASP.NET Core 8 dan menyambungkannya ke sistem yang benar-benar dipakai pelabuhan — TPS, PTOS-M, PTOS-PK, PKK, dan TTL.',
  lblRole: 'PERAN', valRole: 'Developer / arsitektur & dokumentasi', lblStack: 'STACK',
  lblIntegrations: 'INTEGRASI', lblYear: 'TAHUN', valYear: '2024 – sekarang',
  stat1: 'SISTEM EKSTERNAL TERINTEGRASI', stat2: 'SISTEM DIKIRIM DI PELINDO',
  secProcess: 'PROSES',
  pr1t: 'Baca kode lamanya', pr1b: 'Nyaman bekerja di codebase lama — sistem PHP Native dari 2012 dibaca dulu sebelum ada yang ditulis ulang.',
  pr2t: 'Rancang untuk dirawat', pr2b: 'Arsitektur sistem dan struktur folder yang disiapkan untuk skala jangka panjang, dengan dokumentasi jelas bagi developer berikutnya.',
  pr3t: 'Integrasikan', pr3b: 'SAP, REST API, konversi XML/JSON, dan perangkat seperti mesin fingerprint serta akses kontrol Hikvision.',
  pr4t: 'Perkuat', pr4b: 'Penanganan error yang solid, optimasi performa, dan unit testing agar produksi tetap stabil.',
  secAbout: 'TENTANG',
  aboutLead: 'Mulai dari otomasi HR dan absensi, lanjut ke produk POS dan CRM startup, dan sekarang menangani infrastruktur pelabuhan yang kritikal — mengintegrasikan sistem lama seperti SAP dan .NET Framework dengan stack modern seperti ASP.NET Core 8 dan Flutter.',
  aboutBody: 'Sebagian besar pekerjaan berada di lingkungan di mana biaya sebuah bug itu nyata — operasional pelabuhan, logistik BBM, HR perusahaan — sehingga stabilitas produksi dan dokumentasi yang bersih bukan kebiasaan opsional.',
  skills: 'KEAHLIAN TEKNIS', skLang: 'BAHASA', skBackend: 'BACKEND', skFront: 'FRONTEND & MOBILE',
  skData: 'DATA & DEVOPS', skIntegration: 'INTEGRASI', skEdu: 'PENDIDIKAN',
  edu1: 'S1 Sistem Informasi, Institut Teknologi Adhi Tama Surabaya (2025)',
  edu2: 'D3 Sistem Informasi, Universitas Airlangga (2021)',
  secCerts: 'SERTIFIKASI', secContact: 'KONTAK',
  contactTitle1: 'Tersedia untuk', contactTitle2: 'proyek freelance'
};

const nodes = [...document.querySelectorAll('[data-t]')];
const EN = Object.fromEntries(nodes.map((n) => [n.dataset.t, n.textContent]));

function apply(lang) {
  const dict = lang === 'ID' ? ID : EN;
  for (const n of nodes) if (dict[n.dataset.t]) n.textContent = dict[n.dataset.t];
  document.documentElement.lang = lang.toLowerCase();
  for (const b of document.querySelectorAll('.lang button')) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }
  try { localStorage.setItem('amz-portfolio-lang', lang); } catch (e) {}
}

for (const b of document.querySelectorAll('.lang button')) {
  b.addEventListener('click', () => apply(b.dataset.lang));
}

let saved;
try { saved = localStorage.getItem('amz-portfolio-lang'); } catch (e) {}
if (saved === 'ID') apply('ID');

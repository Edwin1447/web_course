document.addEventListener("DOMContentLoaded", function () {
    const btnDetails = document.querySelectorAll(".btnDetail");
    const modalTitle = document.querySelector(".modalTitle");
    const modalImage = document.querySelector(".modalImage");
    const modalDeskripsi = document.querySelector(".modalDeskripsi");
    const modalHarga = document.querySelector(".modalHarga");
  
    const productData = [
        {
          title: "BASIC ENGLISH",
          image: "images/inggris_1.jpg",
          description: `
            💡 Apa yang Anda Dapatkan?  
            - Dasar-dasar Bahasa Inggris untuk Pemula  
            - Latihan Percakapan Sehari-hari  
            - Panduan Tata Bahasa Sederhana  
            - Kosakata yang Mudah Dipahami  
            🎯 Cocok untuk Anda yang:  
            - Baru belajar Bahasa Inggris  
            - Ingin percaya diri berbicara dalam situasi sehari-hari  
            - Butuh pondasi kuat untuk tingkat lanjut  
            💬 Hanya dengan Rp200.000, raih kemampuan dasar Bahasa Inggris dengan metode praktis dan menyenangkan!  
            🚀 Gabung sekarang dan mulailah perjalanan belajar Anda!  
            👉 Hubungi kami untuk pendaftaran.  
            📖 Belajar hari ini, percaya diri besok! 🌟
          `,
          price: "Rp. 200.000,00",
        },
        {
          title: "PROFESSIONAL ENGLISH CLASS",
          image: "images/inggris_2.jpg",
          description: `
            💡 Apa yang Anda Dapatkan?  
            - Teknik presentasi profesional  
            - Bahasa Inggris untuk lingkungan kerja  
            - Materi tulisan formal dan email  
            🎯 Cocok untuk Anda yang:  
            - Bekerja di lingkungan internasional  
            - Ingin menguasai keterampilan profesional  
            💬 Hanya dengan Rp500.000, tingkatkan karier Anda dengan percaya diri!  
            🚀 Daftar sekarang dan jadilah profesional sejati!  
            👉 Hubungi kami untuk pendaftaran.  
          `,
          price: "Rp. 500.000,00",
        },
        {
          title: "BUSINESS ENGLISH CLASS",
          image: "images/inggris_3.jpg",
          description: `
            🌟 Business English Class - Hanya Rp700.000! 🌟  
            📈 Apa yang Akan Anda Pelajari?  
            - Bahasa Inggris untuk Dunia Bisnis Internasional  
            - Teknik Menulis Laporan dan Proposal Bisnis  
            - Keterampilan Komunikasi untuk Rapat dan Negosiasi  
            - Presentasi Profesional dengan Bahasa Inggris yang Meyakinkan  
            🎯 Cocok untuk Anda yang:  
            - Ingin meningkatkan keterampilan komunikasi bisnis  
            - Bekerja di perusahaan multinasional atau startup  
            - Membutuhkan Bahasa Inggris untuk ekspansi bisnis global  
            🌟 Mengapa Pilih Kami?  
            - Materi fokus pada kebutuhan bisnis nyata  
            - Tutor profesional dengan pengalaman internasional  
            - Akses ke latihan studi kasus dunia bisnis  
            💬 Hanya Rp700.000, raih kemampuan Bahasa Inggris untuk menaklukkan dunia bisnis!  
            🚀 Bergabung sekarang dan jadilah profesional yang lebih kompetitif!  
            👉 Daftar segera untuk slot terbatas.  
            📖 Bahasa Inggris Bisnis, Kunci Sukses Anda di Pasar Global! 💼🌎
          `,
          price: "Rp. 700.000,00",
        },
        {
          title: "ENGLISH FOR ENGINEERING",
          image: "images/inggris_4.jpg",
          description: `
            ⚙️ English for Engineering - Hanya Rp750.000! ⚙️  
            🔧 Apa yang Akan Anda Pelajari?  
            - Kosakata Teknis dalam Dunia Teknik  
            - Cara Menulis Laporan dan Dokumentasi Teknik dalam Bahasa Inggris  
            - Teknik Presentasi Proyek Engineering  
            - Komunikasi Efektif dalam Tim Multinasional  
            🎯 Siapa yang Cocok untuk Kelas Ini?  
            - Mahasiswa atau Profesional di Bidang Teknik  
            - Insinyur yang Bekerja dengan Mitra atau Klien Internasional  
            - Anda yang Ingin Mengembangkan Karier Teknik di Lingkungan Global  
            🌟 Keunggulan Program Ini:  
            - Fokus pada kebutuhan spesifik bidang teknik  
            - Studi kasus nyata di dunia engineering  
            - Dibimbing oleh tutor dengan pengalaman teknik internasional  
            💬 Hanya Rp750.000, dapatkan keterampilan Bahasa Inggris untuk mendukung karier teknik Anda!  
            🚀 Daftar Sekarang dan tingkatkan peluang sukses Anda!  
            👉 Hubungi kami untuk pendaftaran dan informasi lebih lanjut.  
            📖 Bahasa Inggris Teknik, untuk Insinyur Hebat yang Siap Mendunia! ⚙️🌍
          `,
          price: "Rp. 750.000,00",
        },
        {
          title: "ENGLISH FOR TOURISM",
          image: "images/inggris_5.jpg",
          description: `
            🌍 English for Tourism - Hanya Rp600.000! 🌍  
            ✈️ Apa yang Akan Anda Pelajari?  
            - Bahasa Inggris untuk Pelayanan Wisata  
            - Kosakata dan Frasa Penting di Industri Pariwisata  
            - Teknik Berkomunikasi dengan Wisatawan Asing  
            - Simulasi Skenario Pariwisata: Hotel, Restoran, dan Panduan Tur  
            🎯 Cocok untuk Anda yang:  
            - Bekerja atau ingin berkarier di industri pariwisata  
            - Menjadi tour guide, staf hotel, atau agen perjalanan  
            - Ingin memperluas jangkauan layanan kepada wisatawan asing  
            🌟 Keunggulan Kelas Ini:  
            - Materi disesuaikan dengan kebutuhan dunia pariwisata  
            - Latihan interaktif dan simulasi situasi nyata  
            - Tutor berpengalaman di bidang hospitality dan tourism  
            💬 Hanya Rp600.000, tingkatkan kemampuan Bahasa Inggris Anda untuk bersinar di industri pariwisata!  
            🚀 Daftar Sekarang dan wujudkan impian Anda!  
            👉 Hubungi kami untuk informasi dan pendaftaran.  
            📖 Bahasa Inggris Pariwisata, Gerbang Kesuksesan Anda di Dunia Global! ✈️🌟
          `,
          price: "Rp. 600.000,00",
        },
        {
          title: "TECHNICAL FOR EDUCATION",
          image: "images/inggris_6.jpg",
          description: `
            🌟 Tecnical For Education - Hanya Rp550.000! 🌟  
            📚 Apa yang Akan Anda Dapatkan?  
            - Kelas interaktif untuk memperkuat kemampuan berkomunikasi  
            - Latihan kosakata, tata bahasa, dan pengucapan yang tepat  
            - Strategi memahami aksen dan budaya bahasa Inggris  
            - Tips efektif untuk berbicara percaya diri dalam berbagai situasi  
            🎯 Siapa yang Harus Bergabung?  
            - Pelajar atau pekerja yang ingin mahir berbahasa Inggris  
            - Anda yang ingin memperluas peluang di bidang akademik atau profesional  
            - Siapa saja yang ingin belajar dengan cara praktis dan menyenangkan  
            🌟 Keunggulan Kelas Ini:  
            - Modul komprehensif dengan metode pembelajaran yang fleksibel  
            - Tutor berpengalaman yang ramah dan profesional  
            - Akses ke materi eksklusif untuk mempercepat kemajuan Anda  
            💬 Hanya Rp550.000 untuk kursus berkualitas yang membuka peluang global Anda!  
            🚀 Daftar Sekarang dan mulailah perjalanan belajar Anda!  
            👉 Hubungi kami untuk info lebih lanjut.  
            📖 Bahasa Inggris untuk Semua, Kesempatan untuk Dunia! 🌍✨
          `,
          price: "Rp. 550.000,00",
        },
      ];
      
  
    btnDetails.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        const product = productData[index];
        modalTitle.textContent = product.title;
        modalImage.innerHTML = `<img src="${product.image}" class="img-fluid rounded" />`;
        modalDeskripsi.innerHTML = product.description.replace(/\n/g, "<br>");
        modalHarga.textContent = product.price;
  
        document.querySelector(".btnModal").click();
      });
    });
  });  
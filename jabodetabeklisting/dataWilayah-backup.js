window.dataWilayah = window.dataWilayah || {
      // 1. JAKARTA
      "jakarta-selatan": {
        slug: "jakarta-selatan",
        name: "Jakarta Selatan",
        type: "Kota Administrasi",
        kecamatan: {
          "tebet": { name: "Tebet", deskripsi: "Kawasan hunian strategis, kuliner, dan sentra stasiun transit.", desa: ["Bukit Duri", "Kebon Baru", "Manggarai", "Manggarai Selatan", "Menteng Dalam", "Tebet Barat", "Tebet Timur"] },
          "setiabudi": { name: "Setiabudi", deskripsi: "Pusat bisnis Kuningan, Sudirman, dan apartemen.", desa: ["Guntur", "Karet", "Karet Kuningan", "Kuningan Timur", "Menteng Atas", "Setiabudi"] },
          "kebayoran-baru": { name: "Kebayoran Baru", deskripsi: "Pusat gaya hidup Senopati, SCBD, Blok M, dan Gandaria.", desa: ["Cipete Utara", "Gandaria Utara", "Melawai", "Petogogan", "Rawa Barat", "Senayan"] },
          "cilandak": { name: "Cilandak", deskripsi: "Kawasan TB Simatupang, Citos, dan Fatmawati.", desa: ["Cilandak Barat", "Cipete Selatan", "Gandaria Selatan", "Lebak Bulus", "Pondok Labu"] },
          "pasar-minggu": { name: "Pasar Minggu", deskripsi: "Kawasan Pejaten, Ragunan, dan perkantoran Simatupang.", desa: ["Cilandak Timur", "Jati Padang", "Kebagusan", "Pasar Minggu", "Pejaten Barat", "Ragunan"] }
        }
      },
      "jakarta-barat": {
        slug: "jakarta-barat",
        name: "Jakarta Barat",
        type: "Kota Administrasi",
        kecamatan: {
          "kebon-jeruk": { name: "Kebon Jeruk", deskripsi: "Kawasan Puri, Kedoya, dan kantor media.", desa: ["Duri Kepa", "Kebon Jeruk", "Kedoya Selatan", "Kedoya Utara", "Kelapa Dua"] },
          "grogol-petamburan": { name: "Grogol Petamburan", deskripsi: "Kawasan kampus Trisakti, Untar, dan Central Park.", desa: ["Grogol", "Jelambar", "Tanjung Duren Selatan", "Tanjung Duren Utara", "Tomang"] },
          "kembangan": { name: "Kembangan", deskripsi: "Pusat Pemerintahan Jakarta Barat dan Puri Indah.", desa: ["Joglo", "Kembangan Selatan", "Kembangan Utara", "Meruya Selatan", "Meruya Utara"] }
        }
      },
      "jakarta-pusat": {
        slug: "jakarta-pusat",
        name: "Jakarta Pusat",
        type: "Kota Administrasi",
        kecamatan: {
          "menteng": { name: "Menteng", deskripsi: "Kawasan eksklusif diplomatik, Cikini, dan Thamrin.", desa: ["Cikini", "Gondangdia", "Kebon Sirih", "Menteng", "Pegangsaan"] },
          "tanah-abang": { name: "Tanah Abang", deskripsi: "Sentra tekstil, Bundaran HI, dan Bendungan Hilir.", desa: ["Bendungan Hilir", "Gelora", "Kampung Bali", "Karet Tengsin", "Petamburan"] },
          "kemayoran": { name: "Kemayoran", deskripsi: "Kawasan JIExpo, apartemen, dan perumahan.", desa: ["Cempaka Baru", "Gunung Sahari Selatan", "Kebon Kosong", "Kemayoran", "Serdang"] }
        }
      },
      "jakarta-timur": {
        slug: "jakarta-timur",
        name: "Jakarta Timur",
        type: "Kota Administrasi",
        kecamatan: {
          "pulo-gadung": { name: "Pulo Gadung", deskripsi: "Kawasan Rawamangun, Velodrome, dan JIEP.", desa: ["Cipinang", "Jati", "Kayu Putih", "Pisangan Timur", "Rawamangun"] },
          "duren-sawit": { name: "Duren Sawit", deskripsi: "Kawasan pemukiman Buaran, Klender, dan Pondok Kelapa.", desa: ["Duren Sawit", "Klender", "Pondok Bambu", "Pondok Kelapa", "Pondok Kopi"] },
          "jatinegara": { name: "Jatinegara", deskripsi: "Pusat transit Stasiun Jatinegara dan Kampung Melayu.", desa: ["Bidara Cina", "Cipinang Muara", "Kampung Melayu", "Rawa Bunga"] }
        }
      },
      "jakarta-utara": {
        slug: "jakarta-utara",
        name: "Jakarta Utara",
        type: "Kota Administrasi",
        kecamatan: {
          "kelapa-gading": { name: "Kelapa Gading", deskripsi: "Kawasan elit perumahan dan sentra bisnis/kuliner.", desa: ["Kelapa Gading Barat", "Kelapa Gading Timur", "Pegangsaan Dua"] },
          "penjaringan": { name: "Penjaringan", deskripsi: "Kawasan PIK, Pluit, dan Muara Karang.", desa: ["Kamal Muara", "Kapuk Muara", "Pejagalan", "Penjaringan", "Pluit"] },
          "tanjung-priok": { name: "Tanjung Priok", deskripsi: "Pusat pelabuhan utama dan kawasan Sunter.", desa: ["Papanggo", "Sunter Agung", "Sunter Jaya", "Tanjung Priok", "Warakas"] }
        }
      },

      // 2. BOGOR
      "kabupaten-bogor": {
        slug: "kabupaten-bogor",
        name: "Kabupaten Bogor",
        type: "Kabupaten",
        kecamatan: {
          "cileungsi": { name: "Cileungsi", deskripsi: "Kawasan hunian dan sentra industri timur Bogor.", desa: ["Pasirangin", "Cileungsi Kidul", "Cileungsi", "Limusnunggal", "Cipenjo", "Mekarsari", "Dayeuh", "Gandoang"] },
          "cibinong": { name: "Cibinong", deskripsi: "Pusat pemerintahan Kabupaten Bogor.", desa: ["Cirimekar", "Ciriung", "Harapan Jaya", "Karadenan", "Pakansari", "Sukahati"] },
          "gunung-putri": { name: "Gunung Putri", deskripsi: "Kawasan hunian padat perbatasan Bogor-Bekasi.", desa: ["Wanaherang", "Tlajung Udik", "Bojong Nangka", "Cicadas", "Bojong Kulur", "Ciangsana"] },
          "jonggol": { name: "Jonggol", deskripsi: "Kawasan berkembang pesat timur Bogor.", desa: ["Jonggol", "Singajaya", "Sirnagalih", "Sukasirna", "Balekambang"] },
          "babakan-madang": { name: "Babakan Madang", deskripsi: "Kawasan Sentul City dan sekitarnya.", desa: ["Babakan Madang", "Bojong Koneng", "Cipambuan", "Sentul", "Sumur Batu"] }
        }
      },
      "kota-bogor": {
        slug: "kota-bogor",
        name: "Kota Bogor",
        type: "Kota",
        kecamatan: {
          "bogor-tengah": { name: "Bogor Tengah", deskripsi: "Pusat Kota Bogor di sekeliling Kebun Raya.", desa: ["Babakan", "Cibogor", "Gudang", "Pabaton", "Paledang", "Sempur"] },
          "bogor-barat": { name: "Bogor Barat", deskripsi: "Kawasan pemukiman dan sentra niaga Yasmin.", desa: ["Bubulak", "Cilendek Barat", "Cilendek Timur", "Menteng", "Semplak"] },
          "bogor-selatan": { name: "Bogor Selatan", deskripsi: "Area hunian asri Batutulis dan Rancamaya.", desa: ["Batutulis", "Bondongan", "Cikaret", "Empang", "Rancamaya"] },
          "bogor-timur": { name: "Bogor Timur", deskripsi: "Kawasan Pajajaran, Baranangsiang, dan Tajur.", desa: ["Baranangsiang", "Katulampa", "Sindangrasa", "Sukasari", "Tajur"] },
          "bogor-utara": { name: "Bogor Utara", deskripsi: "Kawasan hunian modern Bantarjati dan Indraprasta.", desa: ["Bantarjati", "Cibuluh", "Ciluar", "Cimahpar", "Tanahbaru"] },
          "tanah-sareal": { name: "Tanah Sareal", deskripsi: "Kawasan strategis dekat akses tol BORR.", desa: ["Cibadak", "Kebonpedes", "Kedungbadak", "Kedungjaya", "Tanahsareal"] }
        }
      },

      // 3. DEPOK
      "kota-depok": {
        slug: "kota-depok",
        name: "Kota Depok",
        type: "Kota",
        kecamatan: {
          "beji": { name: "Beji", deskripsi: "Kawasan kampus UI, Margonda Raya, dan kost mahasiswa.", desa: ["Beji", "Beji Timur", "Kemiri Muka", "Kukusan", "Pondok Cina", "Tanah Baru"] },
          "pancoran-mas": { name: "Pancoran Mas", deskripsi: "Pusat kota Depok Lama dan stasiun transit.", desa: ["Depok", "Depok Jaya", "Mampang", "Pancoran Mas", "Rangkapan Jaya"] },
          "sukmajaya": { name: "Sukmajaya", deskripsi: "Kawasan pemukiman padat Depok II Tengah/Timur.", desa: ["Abadijaya", "Bakti Jaya", "Cisalak", "Mekar Jaya", "Sukmajaya"] },
          "cimanggis": { name: "Cimanggis", deskripsi: "Kawasan industri dan hunian Jl. Raya Bogor.", desa: ["Curug", "Harjamukti", "Mekarsari", "Pasir Gunung Selatan", "Tugu"] },
          "cinere": { name: "Cinere", deskripsi: "Kawasan hunian premium perbatasan Jakarta Selatan.", desa: ["Cinere", "Gandul", "Pangkalan Jati", "Pangkalan Jati Baru"] },
          "sawangan": { name: "Sawangan", deskripsi: "Kawasan perumahan modern barat Depok.", desa: ["Bedahan", "Cinangka", "Kedaung", "Pasir Putih", "Sawangan"] }
        }
      },

      // 4. TANGERANG
      "kota-tangerang": {
        slug: "kota-tangerang",
        name: "Kota Tangerang",
        type: "Kota",
        kecamatan: {
          "tangerang": { name: "Tangerang", deskripsi: "Pusat kota Tangerang dan Pasar Lama.", desa: ["Babakan", "Buaran Indah", "Cikokol", "Sukasari", "Tanah Tinggi"] },
          "karawaci": { name: "Karawaci", deskripsi: "Kawasan Lippo Village dan kampus UPH.", desa: ["Bojong Jaya", "Cimone", "Karawaci", "Pabuaran", "Sukajadi"] },
          "ciledug": { name: "Ciledug", deskripsi: "Sentra niaga penghubung Tangerang-Jakarta.", desa: ["Paninggilan", "Sudimara Barat", "Sudimara Selatan", "Tajur"] },
          "cipondoh": { name: "Cipondoh", deskripsi: "Kawasan Situ Cipondoh dan Banjar Wijaya.", desa: ["Cipondoh", "Gondrong", "Kenanga", "Petir", "Poris Plawad"] }
        }
      },
      "kota-tangerang-selatan": {
        slug: "kota-tangerang-selatan",
        name: "Kota Tangerang Selatan",
        type: "Kota",
        kecamatan: {
          "serpong": { name: "Serpong", deskripsi: "Kawasan mandiri BSD City dan perkantoran.", desa: ["Ciater", "Cilenggang", "Lengkong Gudang", "Rawa Buntu", "Serpong"] },
          "pondok-aren": { name: "Pondok Aren", deskripsi: "Kawasan Bintaro Jaya Sektor 1-9.", desa: ["Jurang Mangu Barat", "Pondok Betung", "Pondok Jaya", "Pondok Ranji"] },
          "ciputat": { name: "Ciputat", deskripsi: "Sentra niaga dan kampus UIN Jakarta.", desa: ["Cipayung", "Ciputat", "Jombang", "Sawah Lama", "Serua"] },
          "pamulang": { name: "Pamulang", deskripsi: "Kawasan kampus UNPAM dan pemukiman padat.", desa: ["Bambu Apus", "Benda Baru", "Pamulang Barat", "Pamulang Timur", "Pondok Benda"] }
        }
      },
      "kabupaten-tangerang": {
        slug: "kabupaten-tangerang",
        name: "Kabupaten Tangerang",
        type: "Kabupaten",
        kecamatan: {
          "kelapa-dua": { name: "Kelapa Dua", deskripsi: "Kawasan Gading Serpong dan Lippo Karawaci barat.", desa: ["Bencongan", "Bojong Nangka", "Curug Sangereng", "Kelapa Dua", "Pakulonan Barat"] },
          "cikupa": { name: "Cikupa", deskripsi: "Sentra industri dan kota mandiri CitraRaya.", desa: ["Bitung Jaya", "Bojong", "Cikupa", "Pasir Gadung", "Talaga"] },
          "pasar-kemis": { name: "Pasar Kemis", deskripsi: "Kawasan pemukiman padat Kutabumi dan Puri Jaya.", desa: ["Gelam Jaya", "Kuta Baru", "Kutabumi", "Pasar Kemis", "Sukamantri"] }
        }
      },

      // 5. BEKASI
      "kota-bekasi": {
        slug: "kota-bekasi",
        name: "Kota Bekasi",
        type: "Kota",
        kecamatan: {
          "bekasi-barat": { name: "Bekasi Barat", deskripsi: "Kawasan niaga dan transit Stasiun Kranji.", desa: ["Bintara", "Bintara Jaya", "Jaka Sampurna", "Kota Baru", "Kranji"] },
          "bekasi-selatan": { name: "Bekasi Selatan", deskripsi: "Pusat bisnis Grand Metropolitan dan Galaxy.", desa: ["Jaka Mulya", "Jaka Setia", "Kayuringin Jaya", "Pekayon Jaya"] },
          "bekasi-utara": { name: "Bekasi Utara", deskripsi: "Kawasan Summarecon Bekasi dan sekitarnya.", desa: ["Harapan Baru", "Harapan Jaya", "Kaliabang Tengah", "Teluk Pucung"] },
          "pondok-gede": { name: "Pondok Gede", deskripsi: "Pintu masuk perbatasan Jakarta Timur-Bekasi.", desa: ["Jatibening", "Jaticempaka", "Jatimakmur", "Jatiwaringin"] }
        }
      },
      "kabupaten-bekasi": {
        slug: "kabupaten-bekasi",
        name: "Kabupaten Bekasi",
        type: "Kabupaten",
        kecamatan: {
          "tambun-selatan": { name: "Tambun Selatan", deskripsi: "Kawasan pemukiman terbesar dekat Grand Wisata.", desa: ["Jatimulya", "Lambangjaya", "Lambangsari", "Mangunjaya", "Tambun"] },
          "cibitung": { name: "Cibitung", deskripsi: "Sentra kawasan industri MM2100 dan hunian komuter.", desa: ["Cibuntu", "Kertamukti", "Wanajaya", "Wanasari"] },
          "cikarang-utara": { name: "Cikarang Utara", deskripsi: "Pusat niaga Jababeka dan Stasiun Cikarang.", desa: ["Cikarang Kota", "Harjamekar", "Karangasih", "Mekarmukti", "Simpangan"] },
          "cikarang-selatan": { name: "Cikarang Selatan", deskripsi: "Kawasan Lippo Cikarang, EJIP, dan Hyundai.", desa: ["Ciantra", "Cibatu", "Pasirsari", "Sukadami", "Serang"] }
        }
      }
    };

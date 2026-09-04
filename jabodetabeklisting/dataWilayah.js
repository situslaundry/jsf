window.dataWilayah = window.dataWilayah || {
      // 1. JAKARTA
      "jakarta-selatan": {
        slug: "jakarta-selatan",
        name: "Jakarta Selatan",
        type: "Kota Administrasi",
        kecamatan: {
           "tebet": { name: "Tebet", deskripsi: "Kawasan hunian strategis, kuliner, dan sentra stasiun transit.", desa: ["Bukit Duri", "Kebon Baru", "Manggarai", "Manggarai Selatan", "Menteng Dalam", "Tebet Barat", "Tebet Timur"] },
          "setiabudi": { name: "Setiabudi", deskripsi: "Pusat bisnis segitiga emas Kuningan, Sudirman, dan apartemen modern.", desa: ["Guntur", "Karet", "Karet Kuningan", "Karet Semanggi", "Kuningan Timur", "Menteng Atas", "Pasar Manggis", "Setiabudi"] },
          "mampang-prapatan": { name: "Mampang Prapatan", deskripsi: "Kawasan perkantoran koridor Mampang, Tendean, dan Kemang utara.", desa: ["Bangka", "Kuningan Barat", "Mampang Prapatan", "Pela Mampang", "Tegal Parang"] },
          "kebayoran-baru": { name: "Kebayoran Baru", deskripsi: "Pusat gaya hidup Senopati, SCBD, Blok M, Gandaria, dan Dharmawangsa.", desa: ["Cipete Utara", "Gandaria Utara", "Gunung", "Kramat Pela", "Melawai", "Petogogan", "Pulo", "Rawa Barat", "Selong", "Senayan"] },
          "kebayoran-lama": { name: "Kebayoran Lama", deskripsi: "Kawasan hunian Pondok Indah, Gandaria City, dan Permata Hijau.", desa: ["Cipulir", "Grogol Selatan", "Grogol Utara", "Kebayoran Lama Selatan", "Kebayoran Lama Utara", "Pondok Pinang"] },
          "cilandak": { name: "Cilandak", deskripsi: "Kawasan koridor TB Simatupang, Cilandak Town Square, dan Fatmawati.", desa: ["Cilandak Barat", "Cipete Selatan", "Gandaria Selatan", "Lebak Bulus", "Pondok Labu"] },
          "pasar-minggu": { name: "Pasar Minggu", deskripsi: "Kawasan pemukiman Pejaten, Ragunan, dan perkantoran Simatupang.", desa: ["Cilandak Timur", "Jati Padang", "Kebagusan", "Pasar Minggu", "Pejaten Barat", "Pejaten Timur", "Ragunan"] },
          "pancoran": { name: "Pancoran", deskripsi: "Kawasan transit Kalibata, Pengadegan, dan apartemen padat.", desa: ["Cikoko", "Duren Tiga", "Kalibata", "Pancoran", "Pengadegan", "Rawajati"] },
          "jagakarsa": { name: "Jagakarsa", deskripsi: "Kawasan hunian asri Lenteng Agung, Ciganjur, dan sekitar kampus UI/ISTN.", desa: ["Ciganjur", "Cipedak", "Jagakarsa", "Lenteng Agung", "Srengseng Sawah", "Tanjung Barat"] },
          "pesanggrahan": { name: "Pesanggrahan", deskripsi: "Kawasan Bintaro sektor utara, Petukangan, dan Ulujami.", desa: ["Bintaro", "Pesanggrahan", "Petukangan Selatan", "Petukangan Utara", "Ulujami"] }
        }
      },
      "jakarta-barat": {
        slug: "jakarta-barat",
        name: "Jakarta Barat",
        type: "Kota Administrasi",
        kecamatan: {
          "kebon-jeruk": { name: "Kebon Jeruk", deskripsi: "Kawasan hunian Puri, Kedoya, dan kantor stasiun televisi nasional.", desa: ["Duri Kepa", "Kebon Jeruk", "Kedoya Selatan", "Kedoya Utara", "Kelapa Dua", "Sukabumi Selatan", "Sukabumi Utara"] },
          "grogol-petamburan": { name: "Grogol Petamburan", deskripsi: "Kawasan kampus Trisakti, Untar, Mall Central Park, dan Ciputra Mall.", desa: ["Grogol", "Jelambar", "Jelambar Baru", "Tanjung Duren Selatan", "Tanjung Duren Utara", "Tomang", "Wijaya Kusuma"] },
          "kembangan": { name: "Kembangan", deskripsi: "Pusat Pemerintahan Jakarta Barat, Puri Indah, dan akses tol JORR.", desa: ["Joglo", "Kembangan Selatan", "Kembangan Utara", "Meruya Selatan", "Meruya Utara", "Srengseng"] },
          "palmerah": { name: "Palmerah", deskripsi: "Kawasan dekat stasiun Palmerah, Slipi, dan kampus Binus Kemanggisan.", desa: ["Jatipulo", "Kemanggisan", "Kota Bambu Selatan", "Kota Bambu Utara", "Palmerah", "Slipi"] },
          "cengkareng": { name: "Cengkareng", deskripsi: "Kawasan perumahan Taman Palem, Duri Kosambi, dan Rawa Buaya.", desa: ["Cengkareng Barat", "Cengkareng Timur", "Duri Kosambi", "Kapuk", "Kedaung Kali Angke", "Rawa Buaya"] },
          "kalideres": { name: "Kalideres", deskripsi: "Kawasan hunian Citra Garden, Daan Mogot, dan Terminal Kalideres.", desa: ["Kalideres", "Kamal", "Pegadungan", "Semanan", "Tegal Alur"] },
          "tamansari": { name: "Tamansari", deskripsi: "Kawasan Kota Tua, Glodok, dan sentra perdagangan Mangga Besar.", desa: ["Glodok", "Keagungan", "Krukut", "Mangga Besar", "Maphar", "Pinangsia", "Taman Sari", "Tangki"] },
          "tambora": { name: "Tambora", deskripsi: "Kawasan niaga Pasar Pagi, Jembatan Lima, dan Angke.", desa: ["Angke", "Duri Selatan", "Duri Utara", "Jembatan Besi", "Jembatan Lima", "Kali Anyar", "Krendang", "Pekojan", "Roa Malaka", "Tambora", "Tanah Sereal"] }
       }
      },
      "jakarta-pusat": {
        slug: "jakarta-pusat",
        name: "Jakarta Pusat",
        type: "Kota Administrasi",
        kecamatan: {
           "menteng": { name: "Menteng", deskripsi: "Kawasan hunian eksklusif diplomatik, Cikini, dan Jalan Thamrin.", desa: ["Cikini", "Gondangdia", "Kebon Sirih", "Menteng", "Pegangsaan"] },
          "tanah-abang": { name: "Tanah Abang", deskripsi: "Sentra tekstil terbesar, Bundaran HI, Bendungan Hilir, dan Petamburan.", desa: ["Bendungan Hilir", "Gelora", "Kampung Bali", "Karet Tengsin", "Kebon Kacang", "Kebon Melati", "Petamburan"] },
          "gambir": { name: "Gambir", deskripsi: "Kawasan Monas, Istana Negara, Balai Kota, dan Stasiun Gambir.", desa: ["Cideng", "Duri Pulo", "Gambir", "Kebon Kelapa", "Petojo Selatan", "Petojo Utara"] },
          "kemayoran": { name: "Kemayoran", deskripsi: "Kawasan JIExpo Kemayoran, apartemen Menara Jakarta, dan perumahan.", desa: ["Cempaka Baru", "Gunung Sahari Selatan", "Harapan Mulya", "Kebon Kosong", "Kemayoran", "Serdang", "Sumur Batu", "Utan Panjang"] },
          "cempaka-putih": { name: "Cempaka Putih", deskripsi: "Kawasan hunian tenang Cempaka Putih Timur dan Barat dekat Rawasari.", desa: ["Cempaka Putih Barat", "Cempaka Putih Timur", "Rawasari"] },
          "senen": { name: "Senen", deskripsi: "Pusat transit Stasiun Pasar Senen, Kwitang, dan RSPAD Gatot Soebroto.", desa: ["Bungur", "Kenari", "Kramat", "Kwitang", "Paseban", "Senen"] },
          "sawah-besar": { name: "Sawah Besar", deskripsi: "Kawasan Pasar Baru, Mangga Dua Selatan, dan Masjid Istiqlal.", desa: ["Gunung Sahari Utara", "Karang Anyar", "Kartini", "Mangga Dua Selatan", "Pasar Baru"] },
          "johor-baru": { name: "Johar Baru", deskripsi: "Kawasan pemukiman padat di koridor timur Jakarta Pusat.", desa: ["Galur", "Johar Baru", "Kampung Rawa", "Tanah Tinggi"] }
        }
      },
      "jakarta-timur": {
        slug: "jakarta-timur",
        name: "Jakarta Timur",
        type: "Kota Administrasi",
        kecamatan: {
          "matraman": { name: "Matraman", deskripsi: "Pintu masuk Jakarta Timur sekitar Pramuka dan Utan Kayu.", desa: ["Kayu Manis", "Kebon Manggis", "Pal Meriam", "Pisangan Baru", "Utan Kayu Selatan", "Utan Kayu Utara"] },
          "pulo-gadung": { name: "Pulo Gadung", deskripsi: "Kawasan Rawamangun, Velodrome, Pacuan Kuda, dan Kawasan Industri JIEP.", desa: ["Cipinang", "Jati", "Jatinegara Kaum", "Kayu Putih", "Pisangan Timur", "Pulo Gadung", "Rawamangun"] },
          "jatinegara": { name: "Jatinegara", deskripsi: "Pusat transit Stasiun Jatinegara, Kampung Melayu, dan Otista.", desa: ["Bali Mester", "Bidara Cina", "Cipinang Besar Selatan", "Cipinang Besar Utara", "Cipinang Cempedak", "Cipinang Muara", "Kampung Melayu", "Rawa Bunga"] },
          "duren-sawit": { name: "Duren Sawit", deskripsi: "Kawasan pemukiman mapan Buaran, Klender, dan Pondok Kelapa.", desa: ["Duren Sawit", "Klender", "Malaka Jaya", "Malaka Sari", "Pondok Bambu", "Pondok Kelapa", "Pondok Kopi"] },
          "kramat-jati": { name: "Kramat Jati", deskripsi: "Sentra Pasar Induk Kramat Jati, Cililitan, dan Cawang transit.", desa: ["Batu Ampar", "Balekambang", "Cawang", "Cililitan", "Dukuh", "Kramat Jati", "Tengah"] },
          "makasar": { name: "Makasar", deskripsi: "Kawasan Bandara Halim Perdanakusuma, Pinang Ranti, dan TMII utara.", desa: ["Cipinang Melayu", "Halim Perdana Kusumah", "Kebon Pala", "Makasar", "Pinang Ranti"] },
          "pasar-rebo": { name: "Pasar Rebo", deskripsi: "Kawasan hunian Kalisari, Cijantung, dan industri Jl. Raya Bogor.", desa: ["Baru", "Cijantung", "Gedong", "Kalisari", "Pekayon"] },
          "ciracas": { name: "Ciracas", deskripsi: "Kawasan LRT Cibubur, Kelapa Dua Wetan, dan Kampung Rambutan.", desa: ["Cibubur", "Ciracas", "Kelapa Dua Wetan", "Rambutan", "Susukan"] },
          "cipayung": { name: "Cipayung", deskripsi: "Kawasan hijau TMII, Bambu Apus, Lubang Buaya, dan Cilangkap.", desa: ["Bambu Apus", "Ceger", "Cilangkap", "Cipayung", "Lubang Buaya", "Munjul", "Pondok Ranggon", "Setu"] },
          "cakung": { name: "Cakung", deskripsi: "Pusat Pemerintahan Jakarta Timur, Jakarta Garden City, dan Penggilingan.", desa: ["Cakung Barat", "Cakung Timur", "Jatinegara", "Penggilingan", "Pulo Gebang", "Rawa Terate", "Ujung Menteng"] }
          }
      },
      "jakarta-utara": {
        slug: "jakarta-utara",
        name: "Jakarta Utara",
        type: "Kota Administrasi",
        kecamatan: {
           "kelapa-gading": { name: "Kelapa Gading", deskripsi: "Kawasan elit perumahan, Mall Kelapa Gading, dan sentra kuliner.", desa: ["Kelapa Gading Barat", "Kelapa Gading Timur", "Pegangsaan Dua"] },
          "tanjung-priok": { name: "Tanjung Priok", deskripsi: "Pusat pelabuhan utama Tanjung Priok, Sunter Agung, dan JIS.", desa: ["Kebon Bawang", "Papanggo", "Sungai Bambu", "Sunter Agung", "Sunter Jaya", "Tanjung Priok", "Warakas"] },
          "pademangan": { name: "Pademangan", deskripsi: "Kawasan wisata Ancol Taman Impian, Mangga Dua, dan Pademangan.", desa: ["Ancol", "Pademangan Barat", "Pademangan Timur"] },
          "penjaringan": { name: "Penjaringan", deskripsi: "Kawasan Pantai Indah Kapuk (PIK), Pluit, Muara Karang, dan Kapuk Muara.", desa: ["Kamal Muara", "Kapuk Muara", "Pejagalan", "Penjaringan", "Pluit"] },
          "koja": { name: "Koja", deskripsi: "Kawasan sentra Jakarta Islamic Centre, Lagoa, dan Rawa Badak.", desa: ["Koja", "Lagoa", "Rawa Badak Selatan", "Rawa Badak Utara", "Tugu Selatan", "Tugu Utara"] },
          "cilincing": { name: "Cilincing", deskripsi: "Kawasan industri Marunda, Rorotan, dan pesisir timur Jakarta Utara.", desa: ["Cilincing", "Kalibaru", "Marunda", "Rorotan", "Semper Barat", "Semper Timur", "Sukapura"] }
        }
      },

      // 2. BOGOR
      "kabupaten-bogor": {
        slug: "kabupaten-bogor",
        name: "Kabupaten Bogor",
        type: "Kabupaten",
        kecamatan: {
          "cileungsi": { name: "Cileungsi", desa: ["Pasirangin", "Cileungsi Kidul", "Cileungsi", "Limusnunggal", "Cipenjo", "Mekarsari", "Dayeuh", "Gandoang", "Mampir", "Jatisari", "Setu Sari", "Cipeucang"] },
          "gunung-putri": { name: "Gunung Putri", desa: ["Wanaherang", "Tlajung Udik", "Bojong Nangka", "Gunung Putri", "Cicadas", "Bojong Kulur", "Nagrak", "Ciangsana", "Cikeas Udik", "Kragan"] },
          "cibinong": { name: "Cibinong", desa: ["Cirimekar", "Ciriung", "Harapan Jaya", "Karadenan", "Nanggewer", "Nanggewer Mekar", "Pabuaran", "Pabuaran Mekar", "Pakansari", "Pondok Rajeg", "Sukahati", "Tengah", "Kalibaru"] },
          "jonggol": { name: "Jonggol", desa: ["Jonggol", "Singajaya", "Sirnagalih", "Sukasirna", "Balekambang", "Bendungan", "Cibodas", "Sukanegara", "Weninggalih"] },
          "citeureup": { name: "Citeureup", desa: ["Citeureup", "Puspanegara", "Karang Asem Barat", "Gunung Sari", "Hambalang", "Leuwinutug", "Pasir Mukti", "Sanja", "Sukahati", "Tajur", "Tanggulun"] },
          "klapanunggal": { name: "Klapanunggal", desa: ["Bantarjati", "Bojong", "Cikahuripan", "Kembang Kuning", "Klapanunggal", "Leuwikaret", "Lulut", "Nambo", "Ligarmukti"] },
          "babakan-madang": { name: "Babakan Madang", desa: ["Babakan Madang", "Bojong Koneng", "Cadas Ngampar", "Cipambuan", "Citaringgul", "Kadumangu", "Karang Tengah", "Sentul", "Sumur Batu"] },
          "sukaraja": { name: "Sukaraja", desa: ["Cadasngampar", "Cibanon", "Cijujung", "Cikeas", "Cilebut Barat", "Cilebut Timur", "Cimandala", "Gunung Geulis", "Nagrak", "Pasir Jambu", "Pasirlaja", "Sukaraja", "Sukatani"] },
          "bojonggede": { name: "Bojonggede", desa: ["Bojonggede", "Kedung Waringin", "Ragajaya", "Rawa Panjang", "Susukan", "Waringin Jaya", "Pabuaran", "Bojong Baru"] },
          "kemang": { name: "Kemang", desa: ["Bojong", "Kemang", "Pabuaran", "Parakan Jaya", "Pondok Udik", "Semplak Barat", "Tegal"] },
          "parung": { name: "Parung", desa: ["Bojong Indah", "Bojong Sempu", "Cogreg", "Iwul", "Jabon Mekar", "Pamagersari", "Parung", "Warujaya", "Warukalapa"] },
          "parung-panjang": { name: "Parung Panjang", desa: ["Cibunar", "Cikuda", "Dago", "Gintung Cilejet", "Gorowong", "Jagabita", "Kabasiran", "Lumpang", "Parungpanjang", "Pingku"] },
          "cariu": { name: "Cariu", desa: ["Babakan Raden", "Bantar Kuning", "Cariu", "Cibatu Tiga", "Cikutamahi", "Karya Mekar", "Kuta Mekar", "Mekarwangi", "Sukajadi", "Tegal Panjang"] },
          "tanjungsari": { name: "Tanjungsari", desa: ["Antajaya", "Buanajaya", "Cibadak", "Pasir Tanjung", "Selawangi", "Sirnarasa", "Sirnasari", "Sukarasa", "Tanjungrasa", "Tanjungsari"] },
          "sukamakmur": { name: "Sukamakmur", desa: ["Cibadak", "Pabuaran", "Sirnajaya", "Sukadamai", "Sukaharja", "Sukamakmur", "Sukamulya", "Sukaresmi", "Wargaluyu"] },
          "ciawi": { name: "Ciawi", desa: ["Banjar Sari", "Banjar Wangi", "Bitung Sari", "Bojong Murni", "Ciawi", "Cibedug", "Cileungsi", "Citapen", "Jambu Luwuk", "Pandansari", "Teluk Pinang"] },
          "cisarua": { name: "Cisarua", desa: ["Batulayang", "Cibeureum", "Cilember", "Cisarua", "Jogjogan", "Kopo", "Leuwimalang", "Tugu Selatan", "Tugu Utara"] },
          "megamendung": { name: "Megamendung", desa: ["Cipayung Datar", "Cipayung Girang", "Gadog", "Kuta", "Megamendung", "Mensa", "Pasir Angin", "Sukagalih", "Sukakarya", "Sukamahi", "Sukamaju"] },
          "cijeruk": { name: "Cijeruk", desa: ["Cibalung", "Cijeruk", "Cipelang", "Palasari", "Tajur Halang", "Tanjungsari", "Warung Menteng", "Sukaharja", "Cipicung"] },
          "cigombong": { name: "Cigombong", desa: ["Ciburayut", "Ciburuy", "Cigombong", "Cisalada", "Pasirjaya", "Srogol", "Tugujaya", "Watesjaya", "Panyarungan"] },
          "tamansari": { name: "Tamansari", desa: ["Calobak", "Pasireurih", "Sirnagalih", "Sukajadi", "Sukajaya", "Sukaluyu", "Sukamantri", "Tamansari"] },
          "ciomas": { name: "Ciomas", desa: ["Ciomas", "Ciomas Rahayu", "Kotabatu", "Laladon", "Mekarjaya", "Pagelaran", "Parakan", "Sukaharja", "Sukamakmur"] },
          "dramaga": { name: "Dramaga", desa: ["Babakan", "Ciherang", "Cikarawang", "Dramaga", "Neglasari", "Petir", "Purwasari", "Sinarsari", "Sukadamai", "Sukawening"] },
          "tenjolaya": { name: "Tenjolaya", desa: ["Cibitung Tengah", "Cinangneng", "Gunung Malang", "Gunung Mulya", "Situ Daun", "Tapos I", "Tapos II"] },
          "cibungbulang": { name: "Cibungbulang", desa: ["Cemplang", "Ciaruteun Ilir", "Ciaruteun Udik", "Cibatok I", "Cibatok II", "Cijujung", "Cimanggu 1", "Cimanggu 2", "Dukuh", "Galuga", "Girijaya", "Leuweung Kolot", "Situ Ilir", "Situ Udik", "Sukamaju"] },
          "pamijahan": { name: "Pamijahan", desa: ["Ciasihan", "Ciasmara", "Cibening", "Cibitung Kulon", "Cibitung Wetan", "Cibunian", "Cimayang", "Gunung Bunder I", "Gunung Bunder II", "Gunung Menyan", "Gunung Picung", "Gunung Sari", "Pamijahan", "Pasarean", "Purwabakti"] },
          "leuwiliang": { name: "Leuwiliang", desa: ["Barengkok", "Cibeber I", "Cibeber II", "Karacak", "Karyasari", "Karehkel", "Leuwiliang", "Leuwimekar", "Pabangbon", "Purasari", "Puraseda"] },
          "leuwisadeng": { name: "Leuwisadeng", desa: ["Babakan Sadeng", "Kalong I", "Kalong II", "Leuwisadeng", "Sadeng", "Sadengkolot", "Sibanteng", "Wangun Jaya"] },
          "nanggung": { name: "Nanggung", desa: ["Bantar Karet", "Batu Tulis", "Cisarua", "Curug Bitung", "Kalong Liud", "Malasari", "Nanggung", "Pangkal Jaya", "Sukaluyu", "Hambaro"] },
          "sukajaya": { name: "Sukajaya", desa: ["Cileuksa", "Cisarua", "Jayaraharja", "Kiarapandak", "Kiarasari", "Madang", "Pasir Madang", "Sipayung", "Sukajaya", "Sukamulih", "Urug"] },
          "jasinga": { name: "Jasinga", desa: ["Bageur", "Barengkok", "Cikopomayak", "Curug", "Jasinga", "Jugala Jaya", "Kalongsawah", "Koleang", "Pangaur", "Pangradin", "Sipak", "Setu", "Tegal Wangi"] },
          "cigudeg": { name: "Cigudeg", desa: ["Argapura", "Banyuasih", "Banyuresmi", "Batujajar", "Bunar", "Cigudeg", "Cintamanik", "Mekarjaya", "Rengasjajar", "Sukajaya", "Sukaraksa", "Sukaraja", "Tegallega", "Wargajaya"] },
          "tenjo": { name: "Tenjo", desa: ["Babakan", "Bojong", "Cilaku", "Ciomas", "Singabraja", "Tapos", "Tenjo"] },
          "ranca-bungur": { name: "Ranca Bungur", desa: ["Bantarjaya", "Bantarsari", "Candali", "Mekarsari", "Pasircongtok", "Rancabungur", "Sukaresmi"] },
          "tajurhalang": { name: "Tajurhalang", desa: ["Citayam", "Kalisuren", "Nanggerang", "Sasak Panjang", "Sukmajaya", "Tajurhalang", "Tonjong"] },
          "ciseeng": { name: "Ciseeng", desa: ["Babakan", "Cibeuteung Muara", "Cibeuteung Udik", "Cibentang", "Cihoe", "Ciseeng", "Karihkil", "Kuripan", "Parigi Mekar", "Putat Nutug"] },
          "gunung-sindur": { name: "Gunung Sindur", desa: ["Cibadung", "Cibinong", "Cidokom", "Curug", "Gunung Sindur", "Jampang", "Pabuaran", "Padurenan", "Pengasinan", "Rawa Kalong"] },
          "rumpin": { name: "Rumpin", desa: ["Cibodas", "Cidokom", "Cipinang", "Gobang", "Hulubatu", "Kertajaya", "Leuwibatu", "Mekarsari", "Rumpin", "Sukamulya", "Sukasari", "Tamansari"] },
          "tajur-katulampa": { name: "Caringin", desa: ["Caringin", "Ciherang Pondok", "Ciderum", "Cinagara", "Lemah Duhur", "Muara Jaya", "Pancawati", "Pasir Buncir", "Pasir Muncang", "Tangkil"] },
          "sukajadi": { name: "Ciampea", desa: ["Bojong Jengkol", "Bojong Rangkas", "Ciampea", "Ciampea Udik", "Cibadak", "Cibanteng", "Cibuntu", "Cicadas", "Cihideung Ilir", "Cihideung Udik", "Cinangka", "Tegal Waru"] }
         }
      },
      "kota-bogor": {
        slug: "kota-bogor",
        name: "Kota Bogor",
        type: "Kota",
        kecamatan: {
          "bogor-barat": { name: "Bogor Barat", desa: ["Balungbangjaya", "Bubulak", "Cilendek Barat", "Cilendek Timur", "Curug", "Curugmekar", "Gunungbatu", "Loji", "Margajaya", "Menteng", "Pasirjaya", "Pasirkuda", "Pasirmulya", "Semplak", "Sindangbarang", "Situgede"] },
          "bogor-selatan": { name: "Bogor Selatan", desa: ["Batutulis", "Bojongkerta", "Bondongan", "Cikaret", "Cipaku", "Empang", "Genteng", "Harjasari", "Kertamaya", "Lawanggintung", "Muarasari", "Mulyaharja", "Pakuan", "Pamoyanan", "Rancamaya", "Ranggamekar"] },
          "bogor-tengah": { name: "Bogor Tengah", desa: ["Babakan", "Babakanpasar", "Cibogor", "Ciwaringin", "Gudang", "Kebonkelapa", "Pabaton", "Paledang", "Panaragan", "Sempur", "Tegallega"] },
          "bogor-timur": { name: "Bogor Timur", desa: ["Baranangsiang", "Katulampa", "Sindangrasa", "Sindangbarang", "Sukasari", "Tajur"] },
          "bogor-utara": { name: "Bogor Utara", desa: ["Bantarjati", "Cibuluh", "Ciluar", "Cimahpar", "Ciparigi", "Kedunghalang", "Tanahbaru", "Tegalgundil"] },
          "tanah-sareal": { name: "Tanah Sareal", desa: ["Cibadak", "Kayumanis", "Kebonpedes", "Kedungbadak", "Kedungjaya", "Kedungwaringin", "Kencana", "Mekarwangi", "Sukadamai", "Sukaresmi", "Tanahsareal"] }
       }
      },

      // 3. DEPOK
      "kota-depok": {
        slug: "kota-depok",
        name: "Kota Depok",
        type: "Kota",
        kecamatan: {
          "beji": {
            name: "Beji",
            deskripsi: "Kawasan sentra pendidikan di sekitar kampus Universitas Indonesia (UI) dan jalan Margonda Raya. Melayani jemput antar cepat untuk kost mahasiswa dan apartemen.",
            desa: ["Beji", "Beji Timur", "Kemiri Muka", "Kukusan", "Pondok Cina", "Tanah Baru"]
          },
          "pancoran-mas": {
            name: "Pancoran Mas",
            deskripsi: "Pusat pemerintahan dan kawasan cagar budaya Depok Lama dekat Stasiun Depok Baru dan Stasiun Depok.",
            desa: ["Depok", "Depok Jaya", "Mampang", "Pancoran Mas", "Rangkapan Jaya", "Rangkapan Jaya Baru"]
          },
          "sukmajaya": {
            name: "Sukmajaya",
            deskripsi: "Kawasan pemukiman padat Depok II Tengah dan Depok II Timur dengan fasilitas kurir penjemputan harian.",
            desa: ["Abadijaya", "Bakti Jaya", "Cisalak", "Mekar Jaya", "Sukmajaya", "Tirtajaya"]
          },
          "cimanggis": {
            name: "Cimanggis",
            deskripsi: "Kawasan strategis koridor Jl. Raya Bogor dan akses tol Jagorawi/Cijago dengan layanan laundry kilat keluarga.",
            desa: ["Curug", "Harjamukti", "Cisalak Pasar", "Mekarsari", "Pasir Gunung Selatan", "Tugu"]
          },
          "cinere": {
            name: "Cinere",
            deskripsi: "Kawasan pemukiman premium dan perbatasan Jakarta Selatan dengan layanan laundry dry clean dan cuci satuan.",
            desa: ["Cinere", "Gandul", "Pangkalan Jati", "Pangkalan Jati Baru"]
          },
          "sawangan": {
            name: "Sawangan",
            deskripsi: "Kawasan hunian modern yang berkembang pesat di barat Kota Depok dengan armada jemput antar tepat waktu.",
            desa: ["Bedahan", "Cinangka", "Kedaung", "Pasir Putih", "Pengasinan", "Sawangan Baru", "Sawangan"]
          },
          "bojongsari": {
            name: "Bojongsari",
            deskripsi: "Kawasan perbatasan Depok-Bogor-Tangerang Selatan dengan paket laundry kiloan hemat dan cuci karpet masjid.",
            desa: ["Bojongsari", "Bojongsari Baru", "Curug", "Duren Mekar", "Duren Seribu", "Pondok Petir", "Serua"]
          },
          "cilodong": {
            name: "Cilodong",
            deskripsi: "Area berkembang di sekitar Grand Depok City (GDC) dan Kostrad dengan layanan cuci bersih wangi tahan lama.",
            desa: ["Cikumpa", "Cilodong", "Jatimulya", "Kalibaru", "Kalimulya", "Sukamaju"]
          },
          "cipayung": {
            name: "Cipayung",
            deskripsi: "Kawasan hunian dekat Stasiun Citayam dengan layanan 1 mesin 1 pelanggan tidak dicampur.",
            desa: ["Boojong Pondok Terong", "Cipayung", "Cipayung Jaya", "Pondok Jaya", "Ratujaya"]
          },
          "tapos": {
            name: "Tapos",
            deskripsi: "Kawasan hunian timur Kota Depok dengan standar pengerjaan cepat dan pengering gas modern anti apek.",
            desa: ["Cilangkap", "Cimpaeun", "Jatijajar", "Leuwinanggung", "Sukamaju Baru", "Sukatani", "Tapos"]
          },
          "limo": {
            name: "Limo",
            deskripsi: "Area berkembang dekat akses tol Desari penghubung Depok-Antasari Jakarta Selatan.",
            desa: ["Grogol", "Krukut", "Limo", "Meruyung"]
           }
      },

      // 4. TANGERANG
      "kota-tangerang": {
        slug: "kota-tangerang",
        name: "Kota Tangerang",
        type: "Kota",
        kecamatan: {
         "tangerang": {
            name: "Tangerang",
            deskripsi: "Pusat Kota Tangerang dan kawasan Pasar Lama dengan akses cepat Stasiun Tangerang.",
            desa: ["Babakan", "Buaran Indah", "Cikokol", "Kelapa Indah", "Sukasari", "Sukarasa", "Sukaasih", "Tanah Tinggi"]
          },
          "karawaci": {
            name: "Karawaci",
            deskripsi: "Kawasan Lippo Village, kampus UPH, dan perumahan padat dengan layanan kurir jemput cepat.",
            desa: ["Bojong Jaya", "Bugel", "Cimone", "Cimone Jaya", "Gerendeng", "Karawaci", "Karawaci Baru", "Koang Jaya", "Margasari", "Nambo Jaya", "Nusa Jaya", "Pabuaran", "Pabuaran Tumpeng", "Pasar Baru", "Sukajadi", "Sumur Pacing"]
          },
          "ciledug": {
            name: "Ciledug",
            deskripsi: "Kawasan hunian padat dan sentra niaga penghubung Tangerang-Jakarta Selatan.",
            desa: ["Paninggilan", "Paninggilan Utara", "Parung Serab", "Sudimara Barat", "Sudimara Jaya", "Sudimara Selatan", "Sudimara Timur", "Tajur"]
          },
          "cipondoh": {
            name: "Cipondoh",
            deskripsi: "Kawasan sekitar Situ Cipondoh dan perumahan Banjar Wijaya, Poris Indah.",
            desa: ["Cipondoh", "Cipondoh Indah", "Cipondoh Makmur", "Gondrong", "Kenanga", "Ketapang", "Petir", "Poris Plawad", "Poris Plawad Indah", "Poris Plawad Utara"]
          },
          "pinang": {
            name: "Pinang",
            deskripsi: "Kawasan berkembang pesat Alam Sutera dan Kunciran dengan akses tol langsung.",
            desa: ["Cipete", "Kunciran", "Kunciran Indah", "Kunciran Jaya", "Nerogtog", "Pakojan", "Panunggangan", "Panunggangan Timur", "Panunggangan Utara", "Pinang", "Sudimara Pinang"]
          },
          "larangan": {
            name: "Larangan",
            deskripsi: "Perbatasan langsung dengan Puri Beta dan Jakarta Selatan dengan layanan kilat 6 jam.",
            desa: ["Cipadu", "Cipadu Jaya", "Gaga", "Kreo", "Kreo Selatan", "Larangan Indah", "Larangan Selatan", "Larangan Utara"]
          },
          "karangtengah": {
            name: "Karang Tengah",
            deskripsi: "Area hunian modern sekitar Metro Permata dan Green Lake City.",
            desa: ["Karang Mulya", "Karang Tengah", "Karang Timur", "Parung Jaya", "Pedurenan", "Pondok Bahar", "Pondok Pucung"]
          },
          "batuceper": {
            name: "Batuceper",
            deskripsi: "Kawasan industri dan pemukiman dekat stasiun transit Batuceper ke Bandara Soetta.",
            desa: ["Batuceper", "Batujaya", "Batusari", "Kebon Besar", "Poris Gaga", "Poris Gaga Baru", "Poris Jaya"]
          },
          "benda": {
            name: "Benda",
            deskripsi: "Kawasan pintu gerbang Bandara Internasional Soekarno-Hatta dan perkantoran kargo.",
            desa: ["Belendung", "Benda", "Jurumudi", "Jurumudi Baru", "Pajang"]
          },
          "cibodas": {
            name: "Cibodas",
            deskripsi: "Kawasan perumahan Taman Cibodas dan Perumnas dengan harga kiloan bersahabat.",
            desa: ["Cibodas", "Cibodasari", "Cibodas Baru", "Jatiuwung", "Panbar", "Uwung Jaya"]
          },
          "jatiuwung": {
            name: "Jatiuwung",
            deskripsi: "Sentra kawasan industri barat Kota Tangerang dengan layanan 1 mesin 1 pelanggan.",
            desa: ["Alam Jaya", "Gandasari", "Jatake", "Keroncong", "Manis Jaya", "Pasir Jaya"]
          },
          "periuk": {
            name: "Periuk",
            deskripsi: "Kawasan hunian Grand Duta, Villa Tangerang Regency, dan sekitarnya.",
            desa: ["Gebang Raya", "Gembor", "Periuk", "Periuk Jaya", "Sangiang Jaya"]
          },
          "neglasari": {
            name: "Neglasari",
            deskripsi: "Kawasan dekat Bandara Soetta dengan armada kurir antar jemput gesit.",
            desa: ["Karang Anyar", "Karangsari", "Kedaung Baru", "Kedaung Wetan", "Mekar Sari", "Neglasari", "Selapajang Jaya"]
          }
      },
      "kota-tangerang-selatan": {
        slug: "kota-tangerang-selatan",
        name: "Kota Tangerang Selatan",
        type: "Kota",
        kecamatan: {
          "serpong": {
            name: "Serpong",
            deskripsi: "Jantung kawasan mandiri BSD City dengan cluster hunian modern dan perkantoran.",
            desa: ["Buaran", "Ciater", "Cilenggang", "Lengkong Gudang", "Lengkong Gudang Timur", "Lengkong Wetan", "Rawa Buntu", "Rawa Mekar Jaya", "Serpong"]
          },
          "serpong-utara": {
            name: "Serpong Utara",
            deskripsi: "Kawasan Alam Sutera, Graha Raya, dan Jelupang dengan layanan antar jemput express.",
            desa: ["Jelupang", "Lengkong Karya", "Pakualam", "Pakulonan", "Paku Jaya", "Pondok Jagung", "Pondok Jagung Timur"]
          },
          "pondok-aren": {
            name: "Pondok Aren",
            deskripsi: "Kawasan Bintaro Jaya Sektor 1-9 dengan layanan cuci sepatu premium dan bedcover.",
            desa: ["Jurang Mangu Barat", "Jurang Mangu Timur", "Pondok Kacang Barat", "Pondok Kacang Timur", "Perigi", "Perigi Baru", "Pondok Aren", "Pondok Betung", "Pondok Jaya", "Pondok Karya", "Pondok Pung"]
          },
          "ciputat": {
            name: "Ciputat",
            deskripsi: "Pusat aktivitas niaga dan kampus UIN Jakarta dengan tarif kiloan ramah mahasiswa.",
            desa: ["Cipayung", "Ciputat", "Jombang", "Sawah Baru", "Sawah Lama", "Serua", "Serua Indah"]
          },
          "ciputat-timur": {
            name: "Ciputat Timur",
            deskripsi: "Kawasan hunian dekat Jakarta Selatan sekitar Cirendeu, Pisangan, dan Rempoa.",
            desa: ["Cempaka Putih", "Cireundeu", "Pisangan", "Pondok Ranji", "Rempoa", "Rengas"]
          },
          "pamulang": {
            name: "Pamulang",
            deskripsi: "Kawasan pemukiman padat dan Universitas Pamulang (UNPAM) dengan sistem cuci higienis.",
            desa: ["Bambu Apus", "Benda Baru", "Kedaung", "Pondok Benda", "Pamulang Barat", "Pamulang Timur", "Pondok Cabe Ilir", "Pondok Cabe Udik"]
          },
          "setu": {
            name: "Setu",
            deskripsi: "Pusat Pemerintahan Kota Tangsel dan kawasan Puspiptek dengan layanan jemput harian.",
            desa: ["Babakan", "Bakti Jaya", "Kademangan", "Keranggan", "Muncul", "Setu"]
          }
      },
      "kabupaten-tangerang": {
        slug: "kabupaten-tangerang",
        name: "Kabupaten Tangerang",
        type: "Kabupaten",
        kecamatan: {
          "kelapa-dua": {
            name: "Kelapa Dua",
            deskripsi: "Kawasan elit Gading Serpong, Lippo Karawaci barat, dan Bojong Nangka.",
            desa: ["Bencongan", "Bencongan Indah", "Bojong Nangka", "Curug Sangereng", "Kelapa Dua", "Pakulonan Barat"]
          },
          "curug": {
            name: "Curug",
            deskripsi: "Kawasan kampus STPI Curug dan perumahan berkembang di koridor barat.",
            desa: ["Cukanggalih", "Curug Kulon", "Curug Wetan", "Kadu", "Kadu Jaya", "Sukabakti", "Binong"]
          },
          "pasar-kemis": {
            name: "Pasar Kemis",
            deskripsi: "Kawasan pemukiman terpadat sekitar Puri Jaya dan Kutabumi dengan harga terjangkau.",
            desa: ["Gelam Jaya", "Kuta Baru", "Kutabumi", "Kuta Jaya", "Pangadegan", "Pasar Kemis", "Sindangsari", "Sukamantri"]
          },
          "cikupa": {
            name: "Cikupa",
            deskripsi: "Sentra industri dan kawasan mandiri CitraRaya Tangerang dengan layanan antar jemput.",
            desa: ["Bitung Jaya", "Bojong", "Budi Mulya", "Cibadak", "Cikupa", "Dukuh", "Pasir Gadung", "Pasir Jaya", "Sukamulya", "Sukanagara", "Talaga", "Talagasari"]
          },
          "balaraja": {
            name: "Balaraja",
            deskripsi: "Pusat transit tol barat dan kawasan industri dengan standar cuci higienis 1 mesin 1 nota.",
            desa: ["Balaraja", "Cangkudu", "Gembong", "Saga", "Sentul", "Sentul Jaya", "Sukamurni", "Talagasari", "Tobat"]
          },
          "cisauk": {
            name: "Cisauk",
            deskripsi: "Kawasan transit intermoda BSD dan stasiun Cisauk penghubung Tangerang-Bogor.",
            desa: ["Cibogo", "Cisauk", "Dangdang", "Mekar Wangi", "Sampora", "Suradita"]
          },
          "pagedangan": {
            name: "Pagedangan",
            deskripsi: "Kawasan BSD City fase barat (ICE BSD, QBig, Vanya Park) dengan layanan express.",
            desa: ["Cicalengka", "Cihuni", "Cijantra", "Jatake", "Kadu Sirung", "Karang Tengah", "Lengkong Kulon", "Medang", "Pagedangan", "Situgadung"]
          },
          "panongan": {
            name: "Panongan",
            deskripsi: "Kawasan hunian CitraRaya sektor selatan dan sekitarnya.",
            desa: ["Ciakar", "Mekar Bakti", "Panongan", "Peusar", "Ranca Iyuh", "Ranca Kalapa", "Serdang Kulon"]
          },
          "legok": {
            name: "Legok",
            deskripsi: "Kawasan pemukiman strategis perbatasan Serpong-Parung Panjang.",
            desa: ["Babat", "Bojongkamal", "Caringin", "Ciangir", "Cirarab", "Kamuning", "Legok", "Palasari", "Rancagong", "Serab"]
          },
          "tigaraksa": {
            name: "Tigaraksa",
            deskripsi: "Pusat Pemerintahan Kabupaten Tangerang dengan layanan prima cuci wangi bergaransi.",
            desa: ["Bantar Panjang", "Cileles", "Cisereh", "Kadu Agung", "Margasari", "Matagara", "Pasir Bolang", "Pasir Nangka", "Pematang", "Petet", "Sodong", "Tegalsari", "Tigaraksa"]
          },
          "sepatan": {
            name: "Sepatan",
            deskripsi: "Kawasan pemukiman utara Tangerang dengan layanan antar jemput harian.",
            desa: ["Karet", "Kayu Agung", "Kayu Bongkok", "Mekar Jaya", "Pisangan Jaya", "Sarakan", "Sepatan", "Kedaung Barat"]
          },
          "teluknaga": {
            name: "Teluknaga",
            deskripsi: "Kawasan pesisir utara dan PIK 2 dengan standar pengerjaan cepat dan rapi.",
            desa: ["Babakan Asem", "Bojong Renged", "Kampung Besar", "Kampung Melayu Barat", "Kampung Melayu Timur", "Keboncau", "Lemo", "Muara", "Pangkalan", "Tanjung Burung", "Tanjung Pasir", "Teluknaga", "Tegal Angus"]
          },
          "kosambi": {
            name: "Kosambi",
            deskripsi: "Kawasan perbatasan Jakarta Barat dan pengembangan PIK 2 dengan kurir jemput gesit.",
            desa: ["Belimbing", "Cengklong", "Dadap", "Jati Mulya", "Kosambi Barat", "Kosambi Timur", "Rawa Burung", "Rawa Rengas", "Salembaran Jati", "Salembaran Jaya"]
          },
          "rajeg": {
            name: "Rajeg",
            deskripsi: "Kawasan hunian perumahan baru berkembang pesat dengan paket kiloan hemat.",
            desa: ["Daon", "Jambu Karya", "Lembangsari", "Mekarsari", "Pangarengan", "Rajeg", "Rajeg Mulya", "Ranca Bango", "Sukatani", "Tanjakan", "Tanjakan Mekar"]
          },
          "sindang-jaya": {
            name: "Sindang Jaya",
            deskripsi: "Kawasan kota mandiri Suvarna Sutera dengan layanan laundry modern berkelas.",
            desa: ["Badak Anom", "Sindang Asih", "Sindang Jaya", "Sindang Panon", "Sindang Sono", "Sukaharja", "Wanakerta"]
        }
      },

      // 5. BEKASI
      "kota-bekasi": {
        slug: "kota-bekasi",
        name: "Kota Bekasi",
        type: "Kota",
        kecamatan: {
          "bekasi-barat": {
            name: "Bekasi Barat",
            deskripsi: "Kawasan hunian dan sentra niaga strategis Kota Bekasi dekat akses Tol Jakarta-Cikampek dan Stasiun Kranji.",
            desa: ["Bintara", "Bintara Jaya", "Jaka Sampurna", "Kota Baru", "Kranji"]
          },
          "bekasi-timur": {
            name: "Bekasi Timur",
            deskripsi: "Pusat aktivitas perkantoran, perumahan, dan stasiun transit utama Kota Bekasi.",
            desa: ["Aren Jaya", "Bekasi Jaya", "Duren Jaya", "Margahayu"]
          },
          "bekasi-utara": {
            name: "Bekasi Utara",
            deskripsi: "Kawasan pemukiman padat Summarecon Bekasi dan sekitarnya dengan layanan kurir jemput cepat.",
            desa: ["Harapan Baru", "Harapan Jaya", "Kaliabang Tengah", "Marga Mulya", "Perwira", "Teluk Pucung"]
          },
          "bekasi-selatan": {
            name: "Bekasi Selatan",
            deskripsi: "Pusat bisnis Mall Grand Metropolitan, Galaxy, dan perumahan modern dengan layanan laundry express.",
            desa: ["Jaka Mulya", "Jaka Setia", "Kayuringin Jaya", "Pekayon Jaya"]
          },
          "rawalumbu": {
            name: "Rawalumbu",
            deskripsi: "Kawasan pemukiman keluarga mapan dan sentra kuliner dengan layanan jemput antar gratis.",
            desa: ["Bojong Menteng", "Bojong Rawalumbu", "Pengasinan", "Sepanjang Jaya"]
          },
          "medan-satria": {
            name: "Medan Satria",
            deskripsi: "Area sentra industri dan hunian Harapan Indah Bekasi dengan jadwal penjemputan harian.",
            desa: ["Harapan Mulya", "Kali Baru", "Medan Satria", "Pejuang"]
          },
          "pondok-gede": {
            name: "Pondok Gede",
            deskripsi: "Pintu masuk perbatasan Jakarta Timur-Bekasi dengan mobilitas masyarakat yang sangat tinggi.",
            desa: ["Jatibening", "Jatibening Baru", "Jaticempaka", "Jatimakmur", "Jatiwaringin"]
          },
          "pondok-melati": {
            name: "Pondok Melati",
            deskripsi: "Kawasan residensial berkembang di selatan Kota Bekasi dengan paket laundry bulanan hemat.",
            desa: ["Jatimelati", "Jatimurni", "Jatirahayu", "Jatiwarna"]
          },
          "jatisampurna": {
            name: "Jatisampurna",
            deskripsi: "Kawasan Cibubur-Bekasi yang asri dengan layanan cuci sepatu, bedcover, dan laundry kiloan kilat.",
            desa: ["Jatikarya", "Jatiraden", "Jatirangga", "Jatiranggon", "Jatisampurna"]
          },
          "jatiasih": {
            name: "Jatiasih",
            deskripsi: "Kawasan perumahan berkembang pesat di koridor tol JORR dengan armada antar jemput gesit.",
            desa: ["Jatiasih", "Jatikramat", "Jatikiwul", "Jatimekar", "Jatirasa", "Jatisari"]
          },
          "bantargebang": {
            name: "Bantargebang",
            deskripsi: "Area selatan Kota Bekasi dengan standar cuci higienis 1 mesin 1 pelanggan.",
            desa: ["Bantargebang", "Ciketing Udik", "Cikiwul", "Sumur Batu"]
          },
          "mustikajaya": {
            name: "Mustikajaya",
            deskripsi: "Kawasan perumahan Grand Wisata dan Dukuh Zamrud dengan layanan prioritas express same-day.",
            desa: ["Cimuning", "Mustikajaya", "Mustikasari", "Padurenan"]
         }
      },
      "kabupaten-bekasi": {
        slug: "kabupaten-bekasi",
        name: "Kabupaten Bekasi",
        type: "Kabupaten",
        kecamatan: {
           "tambun-selatan": {
            name: "Tambun Selatan",
            deskripsi: "Kawasan pemukiman terbesar di Kabupaten Bekasi dekat stasiun Tambun dan akses tol Grand Wisata.",
            desa: ["Jatimulya", "Lambangjaya", "Lambangsari", "Mangunjaya", "Setiadarma", "Setiamekar", "Sumberjaya", "Tambun", "Tridaya Sakti"]
          },
          "tambun-utara": {
            name: "Tambun Utara",
            deskripsi: "Kawasan hunian baru berkembang dengan layanan laundry bersih wangi tahan lama.",
            desa: ["Bagasasi", "Jelegong", "Karangsatria", "Satria Jaya", "Satria Mekar", "Sriamur", "Srijaya", "Srimahi"]
          },
          "cibitung": {
            name: "Cibitung",
            deskripsi: "Sentra kawasan industri MM2100 dan hunian komuter dengan layanan laundry kilat siap pakai.",
            desa: ["Cibuntu", "Kertamukti", "Muktiwari", "Sarimukti", "Sukajaya", "Wanajaya", "Wanasari"]
          },
          "cikarang-pusat": {
            name: "Cikarang Pusat",
            deskripsi: "Pusat Pemerintahan Kabupaten Bekasi (Deltamas) dengan layanan laundry ekspres untuk kantor dan hunian.",
            desa: ["Cicau", "Hegarmukti", "Jayamukti", "Pasirranji", "Pasirtanjung", "Sukamahi"]
          },
          "cikarang-barat": {
            name: "Cikarang Barat",
            deskripsi: "Jantung kawasan industri MM2100 dan Gandamekar dengan fasilitas antar jemput shift kerja.",
            desa: ["Cikedokan", "Danau Indah", "Gandamekar", "Gandasari", "Jatiwangi", "Kalijaya", "Mekawangi", "Sukadanau", "Telaga Asih", "Telagamurni", "Telajung"]
          },
          "cikarang-utara": {
            name: "Cikarang Utara",
            deskripsi: "Pusat niaga Jababeka, Stasiun Cikarang, dan perkuliahan President University.",
            desa: ["Cikarang Kota", "Harjamekar", "Karangasih", "Karangbaru", "Karangraharja", "Mekarmukti", "Pasirgombong", "Simpangan", "Tanjungsari", "Waluya", "Wangunharja"]
          },
          "cikarang-selatan": {
            name: "Cikarang Selatan",
            deskripsi: "Kawasan Lippo Cikarang, EJIP, dan Hyundai dengan layanan laundry standar hotel dan apartemen.",
            desa: ["Ciantra", "Cibatu", "Pasirsari", "Sukadami", "Sukaresmi", "Serang"]
          },
          "cikarang-timur": {
            name: "Cikarang Timur",
            deskripsi: "Area Stadion Wibawa Mukti dan perumahan baru dengan layanan cuci kasur, karpet, dan pakaian kiloan.",
            desa: ["Cipayung", "Hegantara", "Jatibaru", "Jatireja", "Karangsari", "Labansari", "Sertajaya", "Tanjungbaru"]
          },
          "babelan": {
            name: "Babelan",
            deskripsi: "Kawasan perumahan padat di utara Bekasi dengan layanan kurir jemput harian tepat waktu.",
            desa: ["Babelan Kota", "Bahagia", "Buni Bakti", "Hurip Jaya", "Kebalen", "Kedung Jaya", "Kedung Pengawas", "Muara Bakti", "Pantai Hurip"]
          },
          "tarumajaya": {
            name: "Tarumajaya",
            deskripsi: "Kawasan pesisir dan Marunda Center dekat akses Tol Cibitung-Cilincing.",
            desa: ["Pahlawan Setia", "Pantai Makmur", "Pusaka Rakyat", "Samudra Jaya", "Segara Jaya", "Segaramakmur", "Setia Asih", "Setia Mulya"]
          },
          "setu": {
            name: "Setu",
            deskripsi: "Kawasan asri berkembang penghubung Bekasi-Cileungsi/Bogor dengan paket laundry keluarga.",
            desa: ["Burangkeng", "Cibening", "Cijengkol", "Cikarageman", "Lubangbuaya", "Muktiwari", "Ragamanunggal", "Tamansari"]
          },
          "serang-baru": {
            name: "Serang Baru",
            deskripsi: "Kawasan perumahan Mega Regency dan sentra hunian asri dengan kurir jemput antar.",
            desa: ["Cilangkara", "Jayamulya", "Jayasampurna", "Nagacipta", "Nagasari", "Sirnajaya", "Sukarragam", "Sukassari"]
          },
          "sukatani": {
            name: "Sukatani",
            deskripsi: "Sentra pemukiman jalur utara Kabupaten Bekasi dengan harga kiloan ramah kantong.",
            desa: ["Banjarsari", "Sukamulya", "Sukanyata", "Sukardi", "Sukasedang", "Sukajadi", "Sukasono"]
          },
          "karangbahagia": {
            name: "Karangbahagia",
            deskripsi: "Area penyangga Cikarang Utara dengan layanan jemput cucian kiloan dan cuci karpet masjid.",
            desa: ["Karanganyar", "Karangbahagia", "Karangmukti", "Karangrahayu", "Karangsentosa", "Karangsetia", "Sukajaya"]
          },
          "kedungwaringin": {
            name: "Kedungwaringin",
            deskripsi: "Perbatasan timur Bekasi-Karawang dengan layanan cuci bersih wangi bergaransi.",
            desa: ["Bojongsari", "Karangharja", "Karangmekar", "Karangsambung", "Kedungwaringin", "Mekarjaya", "Waringinjaya"]
          },
          "pebayuran": {
            name: "Pebayuran",
            deskripsi: "Kawasan agraris timur laut Bekasi dengan layanan cuci bedcover tebal dan pakaian harian.",
            desa: ["Bantarjaya", "Bantarsari", "Karangharja", "Karanghaur", "Karangjaya", "Karangpatri", "Karangreja", "Karangsegar", "Kertajaya", "Kertasari", "Sumberreja", "Sumbersari", "Sumberurip"]
          },
          "cabangbungin": {
            name: "Cabangbungin",
            deskripsi: "Layanan cuci higienis bebas apek menggunakan pengering gas berteknologi tinggi.",
            desa: ["Jayabakti", "Jayalaksana", "Lenggahjaya", "Lenggahsari", "Setialaksana", "Setiajaya", "Sindangjaya", "Sindangsari"]
          },
          "muaragembong": {
            name: "Muaragembong",
            deskripsi: "Ujung utara pesisir Bekasi dengan standar penjemputan terjadwal dan hasil wangi berkelas.",
            desa: ["Pantai Bahagia", "Pantai Bakti", "Pantai Harapanjaya", "Pantai Mekar", "Pantai Sederhana"]
          },
          "sukakarya": {
            name: "Sukakarya",
            deskripsi: "Kawasan pemukiman asri di jalur utara dengan layanan cuci satuan sepatu dan kiloan express.",
            desa: ["Sukajadi", "Sukakarya", "Sukalaksana", "Sukamakmur", "Sukamurni", "Sukareja", "Sukaterbit"]
          },
          "sukawangi": {
            name: "Sukawangi",
            deskripsi: "Area pemukiman berkembang dengan jangkauan antar jemput langsung ke depan pintu rumah.",
            desa: ["Sukabudi", "Sukadaya", "Sukakerta", "Sukamekar", "Sukatenang", "Sukaringin", "Sukawangi"]
          },
          "bojongmangu": {
            name: "Bojongmangu",
            deskripsi: "Wilayah selatan Kabupaten Bekasi dekat kawasan GIIC Deltamas dengan layanan cuci kilat.",
            desa: ["Bojongmangu", "Karangmulya", "Karangindah", "Medalkrisna", "Sukabungah", "Sukamukti"]
          },
          "cibarusah": {
            name: "Cibarusah",
            deskripsi: "Ujung selatan Kabupaten Bekasi berbatasan dengan Jonggol Bogor dengan paket laundry hemat.",
            desa: ["Cibarusahjaya", "Cibarusahkota", "Ridogalih", "Ridomanah", "Sindangmulya", "Sirnajati", "Wibawamulya"]
          },
          "tambelang": {
            name: "Tambelang",
            deskripsi: "Kawasan penghubung jalur tengah Bekasi dengan sistem 1 mesin 1 pelanggan tidak dicampur.",
            desa: ["Rakitjaya", "Sukabakti", "Sukamaju", "Sukamantri", "Sukarahayu", "Sukarapi", "Sukatani"]
          }
      }
    };

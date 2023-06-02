/* eslint-disable no-unused-vars */
export function DataService(limit, sort) {
  const services = [
    // Aesthetic
    {
      img: "/img/service/Botox-Eye-Lines.webp",
      alt: "Service-620x720",
      title: "Botulinum Toxin Injection",
      preview:
        "Botulinum toxin adalah tindakan injeksi yang digunakan dengan tujuan merelaksasikan otot (Muscle relaxant) pada bagian wajah untuk menghilangkan kerutan dan garis halus pada area wajah...",
      category: { code: 1, title: "Aesthetic" },
      description: [
        "Botulinum toxin adalah tindakan injeksi yang digunakan dengan tujuan merelaksasikan otot (Muscle relaxant) pada bagian wajah untuk menghilangkan kerutan dan garis halus pada area wajah, mengurangi penebalan otot pada daerah rahang (Masetter) sehingga terlihat tirus serta dapat mengurangi keringat berlebih pada area tertentu seperti telapak tangan, ketiak (hyperhidrosis). Selain itu dengan teknik messobotox, dapat juga memberikan efek sebagai pengencangan kulit.",
        "Waktu yang dibutuhkan dari Botulinum toxin bekerja adalah 24-48 jam setelah injeksi. Kelemahan otot mulai dapat diamati pada hari ke-2 sampai hari ke-10, namun efek maksimal tercapai setelah 2 minggu. Efek botulinum toxin sangat bervariatif dapat bertahan selama kurang lebih 3-12 bulan, namun hal tersebut juga di pengaruhi oleh beberapa faktor, seperti pola aktivitas yang meningkatkan metabolisme, efek paparan panas matahari, efek resistensi dalam tubuh pasien, pemakaian antibiotic dsb.",
        "Secara umum bagian yang biasa dilakukan penyuntikan filler adalah area bawah mata, dahi, pipi, rahang, bibir, serta dagu.",
      ],
      indication: [
        "Mengurangi garis kerutan pada bagian : Forehead (kening), Glabella(diantara 2 alis), Crowsfeet (sudut mata), Bunny Line (area hidung), Smoke Line (Area lingkar bibir)",
        "Mengurangi penebalan otot rahang (Masseter) sehingga memberikan efek tirus pada rahang",
        "Lowereyelid (kantung bawah mata)",
        "Memperbaiki Gummysmile (Bagian gusi rahang atas terlalu terlihat saat tersenyum)",
        "Memperbaiki Marionette Line/ sad smile (Garis lengkung ujung bawah bibir)",
        "Memperbaiki kerutan pada dagu (Cobblestone chin / dimpledchin)",
        "Mengurangi produksi keringat (hyperhidrosis) pada area ketiak, telapak tangan dan telapak kaki.",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Threadlift.webp",
      alt: "Service-620x720",
      title: "Thread Lift",
      preview:
        "Thread lift atau tanam benang adalah prosedur treatment aesthetic dengan memasukkan benang dibawah permukaan kulit (lapisan lemak). Benang tersebut akan diserap oleh jaringan...",
      category: { code: 1, title: "Aesthetic" },
      description: [
        "Thread lift atau tanam benang adalah prosedur treatment aesthetic dengan memasukkan benang dibawah permukaan kulit (lapisan lemak). Benang tersebut akan diserap oleh jaringan sehingga akan memberikan efek penarikan kulit yang kendur pada wajah, pengencangkan kulit dan membentuk wajah menjadi lebih tirus (v shape)",
        "Umumnya thread lift biasa dilakukan pada area hidung, pada pipi dan leher yang mengalami pengenduran namun bisa juga dilakukan pada bagian-bagian yang dikehendaki sesuai dengan tujuan tindakan.",
      ],
      indication: [
        "Mengencangkan dan mengangkat kulit yang kendur",
        "Memberikan efek muka yang tirus/ramping",
        "Mempertegas garis hidung",
        "Mempertajam bentuk nose tip",
        "Menghilangkan double chin (kulit yang mengendur dibawah dagu)",
      ],
      source: "https://nmwclinic.co.id/treatment",
    },
    {
      img: "/img/service/Filler-Bibir.webp",
      alt: "Service-620x720",
      title: "Filler",
      preview:
        "Merupakan tindakan estetik dengan menginjeksikan produk gel HA(Hyaluronic Acid Cross Linked) kedalam lapisan kulit.Bertujuan untuk memberikan efek mengisi bagian tertentu dan memperbaiki...",
      category: { code: 1, title: "Aesthetic" },
      description: [
        "Merupakan tindakan estetik dengan menginjeksikan produk gel HA(Hyaluronic Acid Cross Linked) kedalam lapisan kulit.Bertujuan untuk memberikan efek mengisi bagian tertentu dan memperbaiki penyusutan lemak pada wajah dengan mengganti volume yang hilang(loss volume).Selain efek tersebut, kandungan HA ini turut serta dalam perbaikan sel kolagen dalam kulit sehingga kulit akan menjadi lebih sehat, lembab, kenyal dan cerah.Tindakan ini nyaman dengan sedikit atau tanpa rasa sakit, karena sebelum tindakan diberikan anastesi topical dan dalam kandungan filler terebut juga mengandung anastesi gel.",
      ],
      indication: [
        "Mengatasi mengisi bagian cekung (Volume Loss)",
        "Memberi / memperbaiki struktur pada wajah sesuai keinginan seperti: Menambah volume dagu, Membentuk bibir, Membentuk struktur garis rahang",
        "Merangsang produksi kolagen (collagen booster) dalam kulit",
        "Mengenyalkan, melembabkan, mencerahakan dan menghaluskan kulit",
      ],
      source: "https://nmwclinic.co.id/service",
    },

    // Clinical
    {
      img: "/img/service/PRP.webp",
      alt: "Service-620x720",
      title: "Platelet Rich Plasma (PRP)",
      preview:
        "Platelet Rich Plasma (PRP) adalah tindakan penyuntikan growth factor/faktor pertumbuhan kedalam kulit yang didapat dari pengambilan sampel darah diri sendiri yang kemudian...",
      category: { code: 2, title: "Clinical" },
      description: [
        "Platelet Rich Plasma (PRP) adalah tindakan penyuntikan growth factor/faktor pertumbuhan kedalam kulit yang didapat dari pengambilan sampel darah diri sendiri yang kemudian diolah melalui beberapa proses sehingga mendapatkan PRP yang banyak mengandung growth factor.",
        "PRP dibuat dari bahan autologous atau darah pasien itu sendiri, jadi tindakan ini relatif sangat aman dari infeksi maupun alergi. Walaupun jarang tetapi terdapat sedikit resiko terjadinya cedera pada syaraf ataupun pembuluh darah (lebam kecil pada kulit, bersifat sementara dan dapat kembali normal) dengan cara dikompres dingin",
      ],
      indication: [
        "Pertumbuhan sel, memperbaiki & regenerasi pembuluh darah, produksi kolagen sehingga terlihat lebih cerah, kenyal dan lembab",
        "Membantu mengecilkan pori-pori",
        "Aloplecia (mengatasi kebotakan rambut)",
        "Memperbaiki jaringan yang rusak seperti Acnescars (bopeng bekas jerawat) dan contour defects (permukaan kulit yang tidak rata)",
        "Stretch mark",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/PRP-Subsicision.webp",
      alt: "Service-620x720",
      title: "Platelet Rich Plasma (PRP) with Subcission",
      preview:
        "Perawatan PRP Subcission merupakan tindakan medis untuk kondisi scar yang dalam...",
      category: { code: 2, title: "Clinical" },
      description: [
        "Perawatan PRP Subcission merupakan tindakan medis untuk kondisi scar yang dalam. Prosedur tindakan PRP Subcission yaitu mengangkat scar dari perlekatan jaringan dibawahnya dengan bantuan jarum suntik. kemudian proses injeksi PRP pada bagian tersebut.",
      ],
      indication: [
        "Pertumbuhan sel, memperbaiki & regenerasi pembuluh darah, produksi kolagen sehingga terlihat lebih cerah, kenyal dan lembab",
        "Membantu mengecilkan pori-pori",
        "Aloplecia (mengatasi kebotakan rambut)",
        "Memperbaiki jaringan yang rusak seperti Acnescars (bopeng bekas jerawat) dan contour defects (permukaan kulit yang tidak rata)",
        "Stretch mark",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Trichology.webp",
      alt: "Service-620x720",
      title: "Trichology Package",
      preview:
        "Trichology Package merupakan salah satu perawatan dari hair treatment...",
      category: { code: 2, title: "Clinical" },
      description: [
        "Trichology Package merupakan salah satu perawatan dari hair treatment.",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Chemical-Peeling.webp",
      alt: "Service-620x720",
      title: "Skin Peeling",
      preview:
        "Serangkaian tindakan aplikasi cairan kimia pada permukaan kulit dalam pengawasan dokter dengan tujuan eksfoliasi / mengangkat sel-sel kulit mati yang akan diikuti dengan regenerasi kulit...",
      category: { code: 2, title: "Clinical" },
      description: [
        "Serangkaian tindakan aplikasi cairan kimia pada permukaan kulit dalam pengawasan dokter dengan tujuan eksfoliasi / mengangkat sel-sel kulit mati yang akan diikuti dengan regenerasi kulit baru pada lapisan terluar pada kulit (epidermis). Pengelupasan pada kulit akan terjadi biasanya hari 1 setelah treatement hingga 1 – 2 minggu bergantung jenis peelingnya.",
      ],
      indication: [
        "Kerusakan stuktur kulit seperti scar (yang ringan)",
        "Meratakan warna kulit yang tidak merata (distribusi melanin lebih rata)",
        "Menyamarkan noda hitam pada wajah atau flek (PIH, freckles)",
        "Mencerahkan warna kulit",
        "Inflamasi kronik, Acne.",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Mesolipo.webp",
      alt: "Service-620x720",
      title: "Messo Lipolisis Injection",
      preview:
        "Perawatan Injeksi Messo Lipolisis merupakan rindakan medis yang bertujuan untuk menghancurkan lemak pada aera wajah atau tubuh. Produk yang disuntikan memiliki bahan aktif yang aman dengan tujuan untuk menghancurkan lemak...",
      category: { code: 2, title: "Clinical" },
      description: [
        "Perawatan Injeksi Messo Lipolisis merupakan rindakan medis yang bertujuan untuk menghancurkan lemak pada aera wajah atau tubuh. Produk yang disuntikan memiliki bahan aktif yang aman dengan tujuan untuk menghancurkan lemak.",
        "Lipolisis terbagi menjadi 2 jenis produk yaitu, Artliner yang berfungsi menghilangkan double chin, meniruskan pipi sehingga memberikan efek V-shape dan Celulisis untuk mengecilkan lemak pada area perut, pinggang, paha dan lengan.",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Collagen-Booster.webp",
      alt: "Service-620x720",
      title: "Collagen Booster Injection",
      preview:
        "Merupakan tindakan estetik dengan menginjeksikan produk gel HA (Hyaluronic Acid Non - Cross Linked) kedalam lapisan kulit. Berbeda halnya dengan Filler, kandungan HA non crosslinked...",
      category: { code: 2, title: "Clinical" },
      description: [
        "Merupakan tindakan estetik dengan menginjeksikan produk gel HA (Hyaluronic Acid Non - Cross Linked) kedalam lapisan kulit. Berbeda halnya dengan Filler, kandungan HA non crosslinked ini tidak ditujukan untuk pengisian volume loss / pembentukan struktur pada wajah melainkan untuk colagenisasi kulit. sehingga kulit akan menjadi lebih sehat, lembab, kenyal dan cerah.",
      ],
      indication: [
        "Pada kulit wajah untuk mencerahkan melembabkan dan meningkatkan elastisitas kulit",
        "Membantu memperbaiki kerusakan struktur kulit seperti Scar / Bopeng",
        "Dapat juga digunakan pada punggung tangan untuk membantu melembabkan mengencangkan serta mengembalikan elastisitas kulit",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Dermal-Punch.webp",
      alt: "Service-620x720",
      title: "Dermal Punch",
      preview: "description coming soon...",
      category: { code: 2, title: "Clinical" },
      description: [""],
      source:
        "https://www.halodoc.com/artikel/segala-hal-mengenai-injeksi-kolagen-yang-perlu-diketahui",
    },
    {
      img: "/img/service/Intravena-Injection.webp",
      alt: "Service-620x720",
      title: "Intravena Injection",
      preview:
        "IV atau intravena injection adalah metode pemberian obat injeksi atau infus melalui pembuluh darah vena...",
      category: { code: 2, title: "Clinical" },
      description: [
        "IV atau intravena injection adalah metode pemberian obat injeksi atau infus melalui pembuluh darah vena yang berisi anti oksidan dan multivitamin lain.",
        "Tindakan ini bertujuan untuk menjaga dan meningkatkan daya tahan tubuh, serta memberikan warnakulit yang lebih cerah apabila dilakukan dengan rutin, membantu regenerasi kulit serta membantu penyembuhan luka.",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },

    // Medical
    {
      img: "/img/service/Rev-Laser.webp",
      alt: "Service-620x720",
      title: "Rev Laser",
      preview:
        "Rev laser adalah tindakan dengan menggunakan Mesin Laser (light amplification by stimulated emission of radiation) berbasis teknologi Ndyag yang telah terbukti efektif secara medis...",
      category: { code: 3, title: "Medical" },
      description: [
        "Rev laser adalah tindakan dengan menggunakan Mesin Laser (light amplification by stimulated emission of radiation) berbasis teknologi Ndyag yang telah terbukti efektif secara medis dengan dengan gelombang 532nm 1064nm 665nm 595nm sesuai indikasi medis",
      ],
      indication: [
        "Meremajakan kulit",
        "Mengatasi pigmentasi (Freckless, PIH)",
        "Hair bleaching",
        "Mengecilkan pori",
        "Menghapus Tattoo",
        "Menghilangkan kerutan",
        "Mengurangi produksi minyak dan sebum",
        "Melasma",
        "Acne Redness atau Post Acne Redness, Active Acne",
        "Facial Flushing, Rosacea",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Fractional-Laser.webp",
      alt: "Service-620x720",
      title: "CO2 Fractional Laser",
      preview:
        "Fractional CO2 Laser adalah prosedur standar dalam merawat semua jenis jaringan parut kulit. Selain itu, juga memberikan pengencangan kulit yang fantastis, peremajaan dan pengurangan garis-garis halus dan kerutan...",
      category: { code: 3, title: "Medical" },
      description: [
        "Fractional CO2 Laser adalah prosedur standar dalam merawat semua jenis jaringan parut kulit. Selain itu, juga memberikan pengencangan kulit yang fantastis, peremajaan dan pengurangan garis-garis halus dan kerutan.",
        "Fractional CO2 Laser dapat digunakan untuk peremajaan kulit (rejuvenation), menyamarkan serta mengatasi bekas luka, bekas jerawat, bopeng atau scar dengan membentuk dan merangsang jaringan sel kulit baru.",
        "Laser CO2 adalah Mesin medis yang dalam penggunaanya memanfaatkan energi laser dengan panjang gelombang tertentu sesuai dengan penggunaanya dengan spot yang lebih kecil dan presisi yang besar serta bersifat ablative (memberikan perlukaan pada permukaan kulit yang terkontrol), serta memberikan efek panas pada lapisan dermis sehingga menstimulasi collagen.",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/LPT-1.webp",
      alt: "Service-620x720",
      title: "Light Pulsed Therapy (LPT)",
      preview:
        "Terapi menggunakan cahaya yang umumnya aman dan efektif untuk berbagai perawatan kulit seperti membantu mengurangi pigmentasi kulit, acne, dan rejuvenation serta sangat efektif menghilangkan rambut pada bagian tubuh tertentu (hair removal)...",
      category: { code: 3, title: "Medical" },
      description: [
        "Terapi menggunakan cahaya yang umumnya aman dan efektif untuk berbagai perawatan kulit seperti membantu mengurangi pigmentasi kulit, acne, dan rejuvenation serta sangat efektif menghilangkan rambut pada bagian tubuh tertentu (hair removal), Teknologi ini menggunakan sinar dengan panjang gelombang tertentu sesuai indikasi yang dikendalikan oleh tangan dan komputer, umumnya dengan rentang spektrum cahaya / panjang gelombang cahaya 400 – 1200 nm. (tergantung indikasi)",
      ],
      indication: [
        "Telangiectasea , Rosacea (kondisi pembuluh darah abnormal)",
        "Pigmentasi (melasma, freckless)",
        "Rejuvenation (pencerahan atau brightening)",
        "Acne (kemerahan radang pada acne maupun acne aktif)",
        "Mengecilkan pori-pori",
        "Hair Removal / Menghilangkan rambut pada bagian tubuh tertentu",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Yellow-Laser.webp",
      alt: "Service-620x720",
      title: "Dual Yellow Laser",
      preview:
        "Laser Kuning(YELLOW LASER), kombinasi lampu kuning dan hijau yang secara efektif mengatasi jerawat, pigmentasi, dan kemerahan. Lampu kuning dengan lembut menghancurkan bakteri jerawat dan memberantas jerawat aktif...",
      category: { code: 3, title: "Medical" },
      description: [
        "Laser Kuning(YELLOW LASER), kombinasi lampu kuning dan hijau yang secara efektif mengatasi jerawat, pigmentasi, dan kemerahan. Lampu kuning dengan lembut menghancurkan bakteri jerawat dan memberantas jerawat aktif sambil merangsang pertumbuhan kolagen.Lampu ini juga sangat mengurangi kelenjar sebaceous yang terlalu aktif dan produksi sebum.tempat bekas jerawat secara bertahap dihapus. Dual Yellow menggunakan teknologi sinar laser vaskular dengan mesin Dual Yellow (NORSELD) menggunakan element copper bromide dengan panjang gelombang 511 nm dan 578 nm yang menstimulasi photochemical reaction",
      ],
      indication: [
        "Rejuvenation and skin lightening",
        "Dispigmentasi (Noda pada wajah atau kulit)",
        "Masalah pigmentasi (Freckless, Melasma, PIH)",
        "Telangiectasia dan keratosis",
        "Port wine (Noda merah)",
        "Mengurangi penampakan jaringan vaskular pada permukaan kulit hidung",
        "Cherry Angioma dan residual strawberry (bintik bintik merah pada kulit)",
        "Acne redness and scar acne",
        "Stretch mark",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Exillis.webp",
      alt: "Service-620x720",
      title: "Exilis",
      preview:
        "Exilis bertujuan untuk mengikis lapisan lemak pada tubuh melalui pemanasan sel- sel lemak yang kemudian akan dibuang melalui sistem kimfatik.tindakan yang diguanakan mempergunakan metode ini...",
      category: { code: 3, title: "Medical" },
      description: [
        "Exilis bertujuan untuk mengikis lapisan lemak pada tubuh melalui pemanasan sel-sel lemak yang kemudian akan dibuang melalui sistem kimfatik. tindakan yang diguanakan mempergunakan metode ini memiliki efek samping yang minim karena termasuk tindakan non bedah sehingga pasien dapat merasa nyaman.",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Skin-Revive.webp",
      alt: "Service-620x720",
      title: "Skin Revive",
      preview:
        "Skin Revive (OmniLux, (Photo Therapeutics Ltd,Tamworth, UK) dan HEALITE (Lutronic, Korea)) merupakan jenis terapi sinar berbasis LED generasi terkini. Skin revive memfokuskan...",
      category: { code: 3, title: "Medical" },
      description: [
        "Skin Revive (OmniLux, (Photo Therapeutics Ltd,Tamworth, UK) dan HEALITE (Lutronic, Korea)) merupakan jenis terapi sinar berbasis LED generasi terkini. Skin revive memfokuskan dalam memperbaiki tekstur kulit agar lebih sempurna dan tetap terlihat natural dengan hasil yang instan.",
        "Kelebihan Skin Revive : Tidak ada kerusakan pada jaringan sub-kulit atau jaringan terluar kulit (epidermis), Tindakan ini nyaman tanpa rasa sakit,Tidak ada downtime, yang dapat diterapkan di berbagai golongan usia",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Hollywood-Peel.webp",
      alt: "Service-620x720",
      title: "Hollywood Peel",
      preview:
        "Hollywood laser peel merupakan perawatan kulit wajah yang menggabungkan teknologi laser spectra dan pengaplikasian lotion carbon.  Hollywood Peel juga menawarkan perawatan yang membuat wajah Anda...",
      category: { code: 3, title: "Medical" },
      description: [
        "Hollywood laser peel merupakan perawatan kulit wajah yang menggabungkan teknologi laser spectra dan pengaplikasian lotion carbon.  Hollywood Peel juga menawarkan perawatan yang membuat wajah Anda tampak lebih muda dan cantik layaknya selebriti Hollywood. Energi laser (spectra mode) akan menghangatkan lapisan karbon yang telah dioleskan di permukaan kulit.",
        "Selanjutnya, proses penembakan kembali pada lapisan carbon untuk pengelupasan sel kulit mati, pemecahan pigmen atau melanin, dan menstimulasi pembentukan kolagen. Hollywood laser peel direkomendasikan untuk pasien dengan kulit berminyak, pori-pori yang membesar, jerawat, dan kulit kusam. Laser carbon peel juga cocok untuk semua jenis kulit.",
      ],
      indication: [
        "Meremajakan kulit",
        "Mengatasi pigmentasi (Freckless, PIH)",
        "Mengangkat kulit mati",
        "Mencerahkan kulit",
        "Hair bleaching",
        "Mengecilkan pori",
        "Menghapus Tattoo",
        "Menghilangkan kerutan",
        "Mengurangi produksi minyak dan sebum",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Oxyjet-2.webp",
      alt: "Service-620x720",
      title: "Oxyjet",
      preview: "Description Coming Soon...",
      category: { code: 3, title: "Medical" },
      description: [""],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },

    // Spa
    {
      img: "/img/service/Electro-Ionto-Therapy.webp",
      alt: "Service-620x720",
      title: "Electro Iontophoresis Therapy (EIT)",
      preview:
        "Electro Ion Therapy (EIT), merupakan proses tindakan untuk memasukan serum kedalam kulit wajah dengan menggunakan mesin berteknologi electroforesis. Keunggulan teknik ini adalah memberikan penetrasi...",
      category: { code: 4, title: "Spa" },
      description: [
        "Electro Ion Therapy (EIT), merupakan proses tindakan untuk memasukan serum kedalam kulit wajah dengan menggunakan mesin berteknologi electroforesis. Keunggulan teknik ini adalah memberikan penetrasi serum kedalam kulit lebih baik sehingga hasil yang terlihat lebih signifikan, dengan pilihan serum sesuai dengan indikasi, dengan waktu perawatan yang efisien. ",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/DermaFace-Therapy.webp",
      alt: "Service-620x720",
      title: "Microdermabration",
      preview:
        "Mikrodermabrasi adalah prosedur kosmetik yang menggunakan handpiece diamond bertekstur kasar (grit) serta vakum untuk mengangkat sel kulit mati.Dapat digunakan pada wajah, leher, dada, punggung dan tangan...",
      category: { code: 4, title: "Spa" },
      description: [
        "Mikrodermabrasi adalah prosedur kosmetik yang menggunakan handpiece diamond bertekstur kasar (grit) serta vakum untuk mengangkat sel kulit mati.Dapat digunakan pada wajah, leher, dada, punggung dan tangan.Tujuannya adalah untuk mengurangi garis- garis halus, bekas luka kecil, kerutan dan bintik - bintik penuaan, serta membuat kulit lebih halus dan tampak lebih muda.Anda mungkin memerlukan lebih dari 1 perawatan.",
      ],
      indication: [
        "Mengangkat sel kulit mati sehingga mencerahkan serta menghaluskan tekstur kulit",
        "Mengangkat komedo",
        "Mengecilkan pori-pori",
        "Memudarkan hiperpigmentasi / flek ringan (PIH, Freckles)",
        "Memperbaiki scar / bopeng bekas jerawat ringan",
        "Permukaan kulit kasar",
        "Pori-pori besar dan kerutan halus",
        "Komedo dan Acne scar ringan",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/DermaFace-Therapy.webp",
      alt: "Service-620x720",
      title: "Derma Face Therapy (DFT)",
      preview:
        "Suatu rangkaian treatment terdiri dari perawatan kulit wajah yang bertujuan untuk mengangkat sel kulit mati, ekstraksi komedo sehingga kulit muka menjadi lebih bersih, pengaplikasian masker premium...",
      category: { code: 4, title: "Spa" },
      description: [
        "Suatu rangkaian treatment terdiri dari perawatan kulit wajah yang bertujuan untuk mengangkat sel kulit mati, ekstraksi komedo sehingga kulit muka menjadi lebih bersih, pengaplikasian masker premium serta ditutup dengan pengaplikasian serum dengan teknologi elektroforesis yang berfungsi untuk membantu penetrasi serum kedalam kulit sehingga memberikan hasil yang maksimal sesuai fungsi serum yang digunakan. Sangat baik di kombinasi dengan PDT (Biolite dan Celluma)",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Essential-Facial.webp",
      alt: "Service-620x720",
      title: "Essential Facial",
      preview:
        "Serangkaian ekstraksi komedo yang dilengkapi dengan aplikasi serum berlian yang berfungsi untuk melunakkan komedo sehingga proses ekstraksi terasa lebih nyaman...",
      category: { code: 4, title: "Spa" },
      description: [
        "Serangkaian ekstraksi komedo yang dilengkapi dengan aplikasi serum berlian yang berfungsi untuk melunakkan komedo sehingga proses ekstraksi terasa lebih nyaman.",
        "Berupa Face cleansing, pemijatan, ekstraksi komedo serta diakhiri dengan aplikasi Peel Off Mask",
      ],
      indication: [],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/Facial-Spa.webp",
      alt: "Service-620x720",
      title: "Essintial Facial Spa",
      preview:
        "Rangkaian treatment tradisional totok wajah dan pemijatan yang meliputi daerah wajah, leher, Pundak, bahu serta pengolesan serum di akhir treatment sesuai kebutuhan kulit dengan tujuan merelaksasikan waja...",
      category: { code: 4, title: "Spa" },
      description: [
        "Rangkaian treatment tradisional totok wajah dan pemijatan yang meliputi daerah wajah, leher, Pundak, bahu serta pengolesan serum di akhir treatment sesuai kebutuhan kulit dengan tujuan merelaksasikan wajah, memperlancar aliran darah serta limfatik. Dengan pilihan serum yang disesuaikan dengan kondisi kulit.",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/O2-Face-Therapy.webp",
      alt: "Service-620x720",
      title: "02 Face Therapy",
      preview:
        "Perawatan dengan serum oksigen tekanan tinggi yang dapat memberikan penetrasi maksimum agar serum bisa diserap ke dalam kulit, yang dikenal sangat efektif dalam menangani kulit dehidrasi, pigmentasi, kerutan dan kusam...",
      category: { code: 4, title: "Spa" },
      description: [
        "Perawatan dengan serum oksigen tekanan tinggi yang dapat memberikan penetrasi maksimum agar serum bisa diserap ke dalam kulit, yang dikenal sangat efektif dalam menangani kulit dehidrasi, pigmentasi, kerutan dan kusam.",
      ],
      source: "https://nmwclinic.co.id/service",
    },
    {
      img: "/img/service/PDT-Biolite.webp",
      alt: "Service-620x720",
      title: "Photo Dyamic Therapy (PDT)",
      preview:
        "Perawatan kecantikan dengan menggunakan proses penyinaran dengan teknologi lowlight PDT dengan panjang gelombang yang spesifik untuk kondisi kulit tertentu sesuai indikasi...",
      category: { code: 4, title: "Spa" },
      description: [
        "Perawatan kecantikan dengan menggunakan proses penyinaran dengan teknologi lowlight PDT dengan panjang gelombang yang spesifik untuk kondisi kulit tertentu sesuai indikasi. Treatment ini dapat dikombinasikan dengan tindakan lain seperti pasca facial, mikrodermabrasi atau tindakan lain yang dianjurkan oleh dokter.",
      ],
      indication: [
        "Mengurangi peradangan pada kulit pasca tindakan",
        "Meningkatkan sirkulasi darah",
        "Membantu regenerasi kulit",
        "Meningkatkan pembentukan kolagen",
        "Mengurangi hyperpigmentasi",
        "Membantu menyembuhkan jerawat",
      ],
      source: "https://nmwclinic.co.id/treatment",
    },
    {
      img: "/img/service/Cryolipo.webp",
      alt: "Service-620x720",
      title: "Cryolipolysis",
      preview:
        "Treatment Peluruh Lemak yang memanfaatkan energi dingin yang bekerja secara efektif mematikan produksi sel lemak pada area yang diinginkan yang kemudian akan dimetabolisme oleh tubuh...",
      category: { code: 4, title: "Spa" },
      description: [
        "Treatment Peluruh Lemak yang memanfaatkan energi dingin yang bekerja secara efektif mematikan produksi sel lemak pada area yang diinginkan yang kemudian akan dimetabolisme oleh tubuh.",
        "Benefit Ragam perawatan kecantikan wajah serta tubuh yang dilakukan oleh tenaga ahli kami dengan mempertimbangkan aspek medis dalam setiap perawatannya serta dalam supervisi Dokter kami",
      ],
      source: "https://nmwclinic.co.id/treatment",
    },
    {
      img: "/img/service/Face-Contouring.webp",
      alt: "Service-620x720",
      title: "Face & Body Contouring",
      preview:
        "MAXIMUS & INDIBA merupakan teknologi yang terkini dengan menggunakan radio frekuensi yang berfungsi untuk mengoptimalkan metabolisme sel, memperbaiki nutrisi sel dimana akan memberikan efek pengencangan pada bagian tubuh / tightening...",
      category: { code: 4, title: "Spa" },
      description: [
        "MAXIMUS RADIOFREKUENSI & INDIBA PROIONIC RADIOFREKUENSI",
        "MAXIMUS & INDIBA merupakan teknologi yang terkini dengan menggunakan radio frekuensi yang berfungsi untuk mengoptimalkan metabolisme sel, memperbaiki nutrisi sel dimana akan memberikan efek pengencangan pada bagian tubuh / tightening, shaping dan contouring.",
        "INDIBA selain untuk fungsi diatas mampu menyehatkan tubuh dengan mengurangi lemak visceral(lemak yang menyelimuti organ).Selain fungsi tersebut INDIBA mampu meremajakan kulit serta mengembalikan elastisitas kulit, dengan memperlancar peredaran darah dan merangsang pembentukan kolagen baru.",
        "Penggunaan INDIBA juga dapat digunakan untuk fisioterapi pasca berolahraga, cedera atau untuk relaksaksi terutama di area leher, punggung belakang, paha, lutut, dan pergelangan kaki.Alat ini sudah diakui sebagai alat standard yang dipakai di Olympiade untuk menunjang performa atletnya",
      ],
      indication: [
        "Double chin (dagu ganda) dan saggy skin",
        "Kerutan halus",
        "Kantong mata dan lingkaran di bawah mata",
        "Reshaping / contour pada perut",
        "Reshaping / contour pada bokong",
        "Pengencangan area payudara",
        "Membantu penyembuhan kram otot seperti kaki lelah, punggung yang nyeri",
      ],
      source: "https://nmwclinic.co.id/treatment",
    },
  ];

  return services;
}

export function DataCategory(limit, sort) {
  const category = [
    {
      id: 1,
      category: "Aesthetic",
      image: "/img/service/default_aesthetic.webp",
      alt: "Service-420x500",
    },
    {
      id: 2,
      category: "Clinical",
      image: "/img/service/default_medical.webp",
      alt: "Service-420x500",
    },
    {
      id: 3,
      category: "Medical",
      image: "/img/service/default_clinical.webp",
      alt: "Service-420x500",
    },
    {
      id: 4,
      category: "Spa",
      image: "/img/service/default_spa.webp",
      alt: "Service-620x720",
    },
  ];

  return category;
}

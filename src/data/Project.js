import JavaDesktop from "../assets/images/Project/Dekstop.webp";
import WebsiteGaleri from "../assets/images/Project/Portfolio.webp";

const projects = [
  {
    id: 1,
    category: "💻 Front End Development",

    projects: [
      {
        id: 1,
        title: "Aplikasi Desktop Pendataan Rumah",

        image: JavaDesktop,

        gallery: [JavaDesktop, JavaDesktop, JavaDesktop],

        tech: "Java Swing • MySQL",

        description:
          "Aplikasi desktop berbasis Java Swing untuk mengelola data rumah, mulai dari input, pencarian, pembaruan, hingga penghapusan data yang terhubung dengan database MySQL.",

        features: [
          "Menambahkan data rumah",
          "Menampilkan data rumah",
          "Mencari data rumah",
          "Memperbarui data rumah",
          "Menghapus data rumah",
          "Terhubung dengan database MySQL",
        ],

        technologies: ["Java", "Java Swing", "MySQL", "NetBeans"],

        demo: "https://example.com/demo-aplikasi-rumah",
        github: "https://github.com/MuhammadRamdani121/aplikasi-desktop-rumah",
      },

      {
        id: 2,
        title: "Website Galeri Kegiatan",

        image: WebsiteGaleri,

        gallery: [WebsiteGaleri, WebsiteGaleri, WebsiteGaleri],

        tech: "HTML • CSS • JavaScript",

        description:
          "Website galeri kegiatan yang menampilkan dokumentasi berbagai acara dengan tampilan card, gambar, deskripsi, dan halaman detail setiap kegiatan.",

        features: [
          "Menampilkan dokumentasi kegiatan",
          "Tampilan card kegiatan",
          "Halaman detail kegiatan",
          "Responsive layout",
        ],

        technologies: ["HTML", "CSS", "JavaScript"],

        demo: "https://example.com/demo-galeri",
        github: "https://github.com/MuhammadRamdani121/website-galeri",
      },

      {
        id: 3,
        title: "Dashboard Admin",

        image: WebsiteGaleri,

        gallery: [WebsiteGaleri, WebsiteGaleri, WebsiteGaleri],

        tech: "React",

        description:
          "Dashboard admin modern yang digunakan untuk menampilkan informasi dan data secara terstruktur.",

        features: [
          "Dashboard statistik",
          "Tampilan responsive",
          "Komponen reusable",
        ],

        technologies: ["React", "JavaScript", "Tailwind CSS"],

        demo: "https://example.com/demo-dashboard",
        github: "https://github.com/MuhammadRamdani121/dashboard-admin",
      },

      {
        id: 4,
        title: "Company Profile",

        image: WebsiteGaleri,

        gallery: [WebsiteGaleri, WebsiteGaleri, WebsiteGaleri],

        tech: "React",

        description:
          "Website company profile yang dirancang untuk menampilkan informasi perusahaan secara profesional.",

        features: [
          "Halaman informasi perusahaan",
          "Responsive design",
          "Navigasi antar halaman",
        ],

        technologies: ["React", "JavaScript", "Tailwind CSS"],

        demo: "https://example.com/demo-company-profile",
        github: "https://github.com/MuhammadRamdani121/company-profile",
      },
    ],
  },

  {
    id: 2,
    category: "🗄️ Database",

    projects: [
      {
        id: 1,
        title: "Sistem Informasi Data Rumah",

        image: JavaDesktop,

        gallery: [JavaDesktop, JavaDesktop, JavaDesktop],

        tech: "MySQL • Java",

        description:
          "Sistem pengelolaan data rumah menggunakan database MySQL yang terintegrasi dengan aplikasi desktop.",

        features: [
          "CRUD data rumah",
          "Pencarian data",
          "Penyimpanan data ke database",
          "Update data",
          "Delete data",
        ],

        technologies: ["MySQL", "Java", "Java Swing", "NetBeans"],

        demo: "https://example.com/demo-database",
        github: "https://github.com/MuhammadRamdani121/database-rumah",
      },

      {
        id: 2,
        title: "Database Penjualan",

        image: JavaDesktop,

        gallery: [JavaDesktop, JavaDesktop, JavaDesktop],

        tech: "MySQL",

        description:
          "Database sederhana untuk mengelola data produk, pelanggan, transaksi, dan detail penjualan.",

        features: [
          "Data produk",
          "Data pelanggan",
          "Data transaksi",
          "Relasi antar tabel",
          "Query database",
        ],

        technologies: ["MySQL", "SQL"],

        demo: "https://example.com/demo-database-penjualan",
        github: "https://github.com/MuhammadRamdani121/database-penjualan",
      },
    ],
  },

  {
    id: 3,
    category: "📊 Microsoft Excel",

    projects: [
      {
        id: 1,
        title: "Sales Performance Dashboard",

        image: WebsiteGaleri,

        gallery: [WebsiteGaleri, WebsiteGaleri, WebsiteGaleri],

        tech: "Microsoft Excel",

        description:
          "Dashboard analisis performa penjualan menggunakan Microsoft Excel untuk menampilkan data penjualan secara interaktif dan mudah dipahami.",

        features: [
          "Sales Performance Dashboard",
          "Pivot Table",
          "Pivot Chart",
          "XLOOKUP",
          "VLOOKUP",
          "Slicer",
          "KPI",
          "Data Analysis",
        ],

        technologies: [
          "Microsoft Excel",
          "Pivot Table",
          "Pivot Chart",
          "XLOOKUP",
          "VLOOKUP",
          "Slicer",
        ],

        demo: "https://1drv.ms/x/c/754d811dd91e4f26/IQBFXI7Fd_ziRYFkGYsKgg5_AQ6Juk4cavvry4DInXI1zzQ?e=Q4TQPn",

        github: "#",
      },

      {
        id: 2,
        title: "Inventory Management Excel",

        image: WebsiteGaleri,

        gallery: [WebsiteGaleri, WebsiteGaleri, WebsiteGaleri],

        tech: "Microsoft Excel",

        description:
          "File Excel untuk mengelola data stok barang, jumlah barang, subtotal, dan sisa stok secara terstruktur.",

        features: [
          "Data barang",
          "Stok barang",
          "Perhitungan subtotal",
          "Sisa stok otomatis",
          "Format mata uang IDR",
          "Conditional Formatting",
        ],

        technologies: [
          "Microsoft Excel",
          "Formula",
          "Conditional Formatting",
          "Data Validation",
        ],

        demo: "https://example.com/demo-inventory-excel",

        github: "#",
      },
    ],
  },
];

export default projects;

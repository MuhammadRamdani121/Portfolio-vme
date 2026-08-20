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

        // Gambar yang tampil di Home dan halaman Project
        image: JavaDesktop,

        // Gambar khusus halaman Detail
        // Sementara masih menggunakan gambar yang sama
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

        demo: "#asdasd",
        github: "#asdasd",
      },

      {
        id: 2,
        title: "Website Galeri Kegiatan",

        // Gambar yang tampil di Home dan halaman Project
        image: WebsiteGaleri,

        // Gambar khusus halaman Detail
        // Sementara masih menggunakan gambar yang sama
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

        demo: "#",
        github: "#",
      },

      {
        id: 3,
        title: "Dashboard Admin",

        // Sementara menggunakan gambar Website Galeri
        image: WebsiteGaleri,

        // Gambar khusus halaman Detail
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

        demo: "#",
        github: "#",
      },

      {
        id: 4,
        title: "Company Profile",

        // Sementara menggunakan gambar Website Galeri
        image: WebsiteGaleri,

        // Gambar khusus halaman Detail
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

        demo: "#",
        github: "#",
      },
    ],
  },

  {
    id: 2,
    category: "🗄️ Database",
    projects: [],
  },

  {
    id: 3,
    category: "📊 Microsoft Excel",
    projects: [],
  },
];

export default projects;

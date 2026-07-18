import JavaDesktop from "../assets/images/Project/Dekstop.webp";
import WebsiteGaleri from "../assets/images/Project/Portfolio.webp";

const projects = [{
        id: 1,
        category: "💻 Front End Development",
        projects: [{
                id: 3,
                title: "Aplikasi Desktop Pendataan Rumah",
                image: JavaDesktop,
                tech: "Java Swing • MySQL",
                description: "Aplikasi desktop berbasis Java Swing untuk mengelola data rumah, mulai dari input, pencarian, pembaruan, hingga penghapusan data yang terhubung dengan database MySQL.",
                demo: "#",
                github: "#",
            },
            {
                id: 2,
                title: "Website Galeri Kegiatan",
                image: WebsiteGaleri,
                tech: "HTML • CSS • JavaScript",
                description: "Website galeri kegiatan yang menampilkan dokumentasi berbagai acara dengan tampilan card, gambar, deskripsi, dan halaman detail setiap kegiatan.",
                demo: "#",
                github: "#",
            },
            {
                id: 3,
                title: "Dashboard Admin",
                image: WebsiteGaleri,
                tech: "React",
                description: "Dashboard admin modern.",
                demo: "#",
                github: "#",
            },
            {
                id: 4,
                title: "Company Profile",
                image: "/images/company.png",
                tech: "React",
                description: "Website company profile.",
                demo: "#",
                github: "#",
            },
        ],
    },

    {
        id: 2,
        category: "⚙️ Back End Development",
        projects: [],
    },

    {
        id: 3,
        category: "🗄️ Database",
        projects: [],
    },

    {
        id: 4,
        category: "📊 Microsoft Excel",
        projects: [],
    },
];

export default projects;
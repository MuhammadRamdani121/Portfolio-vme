import Sertifikat1 from "../assets/images/Project/Dekstop.webp";
import Sertifikat2 from "../assets/images/Project/Portfolio.webp";

const projects = [{
        id: 1,
        category: "💻 Front End Development",
        projects: [{
                id: 1,
                title: "Website Portfolio",
                image: Sertifikat1,
                tech: "React • Tailwind CSS",
                description: "Portfolio pribadi yang dibuat menggunakan React dan Tailwind CSS dengan desain responsif.",
                demo: "#",
                github: "#",
            },
            {
                id: 2,
                title: "Landing Page",
                image: Sertifikat2,
                tech: "HTML • CSS",
                description: "Landing page perusahaan.",
                demo: "#",
                github: "#",
            },
            {
                id: 3,
                title: "Dashboard Admin",
                image: Sertifikat2,
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
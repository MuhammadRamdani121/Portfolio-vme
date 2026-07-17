export const navigations = {
  portfolio: [
    {
      nama: "Home",
      path: "#home",
    },
    {
      nama: "Tentang Saya",
      path: "#about",
    },
    {
      nama: "Skills",
      path: "#skills",
    },
    {
      nama: "Projects",
      children: [
        {
          nama: "Front - End Dev",
          path: "#projects",
        },
        {
          nama: "Back - End Dev",
          path: "#projects",
        },
        {
          nama: "Database",
          path: "#projects",
        },
        {
          nama: "Ms Excel",
          path: "#projects",
        },
      ],
    },
    {
      nama: "Certificates",
      path: "#sertifikat",
    },
    {
      nama: "Contact",
      path: "#contact",
    },
  ],

  // dashboard: [],
  // ecommerce: [],
};

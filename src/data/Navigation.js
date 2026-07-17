export const navigations = {
  portfolio: [
    {
      nama: "Home",
      path: "/",
    },
    {
      nama: "Tentang Saya",
      path: "/about",
    },
    {
      nama: "Skills",
      path: "/about",
    },
    {
      nama: "Projects",
      children: [
        {
          nama: "Front - End Dev",
          path: "/projects/web",
        },
        {
          nama: "Back - End Dev",
          path: "/projects/ui-clone",
        },
        {
          nama: "Database",
          path: "/projects/academic",
        },
        {
          nama: "Ms Excel",
          path: "/projects/academic",
        },
      ],
    },
    {
      nama: "Certificates",
      path: "/certificates",
    },
    {
      nama: "Contact",
      path: "/contact",
    },
  ],

  // dashboard: [],
  // ecommerce: [],
};

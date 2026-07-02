export const navigations = {
  portfolio: [
    {
      nama: "Home",
      path: "/",
    },
    {
      nama: "About",
      path: "/about",
    },
    {
      nama: "Projects",
      children: [
        {
          nama: "Web Projects",
          path: "/projects/web",
        },
        {
          nama: "UI Clone",
          path: "/projects/ui-clone",
        },
        {
          nama: "Academic Projects",
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

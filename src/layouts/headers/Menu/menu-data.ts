import home_demo_1 from "@/assets/img/menu/home-1.jpg";
import home_demo_2 from "@/assets/img/menu/home-2.jpg";
import home_demo_3 from "@/assets/img/menu/home-3.jpg";

// menu data
const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    img_dropdown: false,
    has_dropdown: false,
  },

  {
  id: 2,
  title: "About Us",
  link: "/about-us",
  has_dropdown: true,
  submenu: [
     {
      id: 11,
      title: "Administration",
      link: "/administration",
    },
    {
      id: 12,
      title: "Management",
      link: "/management",
    },
   
  ],
},



  {
    id: 3,
    title: "Facilities",
    link: "/facilities",
  },

  {
    id: 5,
    title: "Curriculum",
    link: "/curriculum",
  },

  {
    id: 6,
    title: "Gallery",
    link: "/gallery",
  },

  {
    id: 7,
    title: "Admission",
    link: "/admission",
  },
  
  {
    id: 8,
    title: "News",
    link: "/news",
  },

  {
    id: 9,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

import type { NavListProps } from "~/components/templates/header/headerNav";

export const navLists: NavListProps[] = [
  {
    title: "About us",
    lists: [
      {
        title: "Why MyFundedFX",
        to: "/why-my-funded-fx",
        description: "Learn more about the history of MFFX and its creators",
        isComing: false,
      },
      {
        title: "Testimonials",
        to: "https://uk.trustpilot.com/review/myfundedfx.com",
        description: "Our features and advantages in the market",
        isComing: false,
        type:"external"
      },
      // {
      //   title: "Contact", 
      //   to: "mail:info@myfundedfx.com",
      //   description: "Our features and advantages in the market",
      //   isComing: true,
      // },
      // {
      //   title: "Comparison with competitors",
      //   to: "/compare",
      //   description: "We compare the leading prop firms with each other",
      //   isComing: true,
      // },
    ],
  },
  {
    title: "How it works",
    to: "/how-it-works",
  },
  {
    title: "FAQ",
    to: "https://intercom.help/myfundedfx/en",
    type: "external",
  },
  // {
  //   title: "Blog",
  //   to: "/blog",
  // },
  // {
  //   title: "Contact",
  //   to: "/contact",
  // },
];

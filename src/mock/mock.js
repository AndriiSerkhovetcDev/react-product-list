export const appSettings = {
    isLogin: true,
}

export const products = [
    {
        plan: "Free",
        monthtPrice: 0,
        userLimit: 10,
        memoryLimit: 2,
        suport: "Email",
        hasHelpCenter: true,
        btnTitle: "Sing up for free"
    },
    {
        plan: "Pro",
        monthtPrice: 15,
        userLimit: 20,
        memoryLimit: 10,
        suport: "Priority email",
        hasHelpCenter: true,
        btnTitle: "Get started"
    },
    {
        plan: "Enterprise",
        monthtPrice: 29,
        userLimit: 30,
        memoryLimit: 15,
        suport: "Phone and email",
        hasHelpCenter: true,
        btnTitle: "Contatct us"
    },
]

export const links = [
    { title: "Features", link: "#"},
    { title: "Enterprise", link: "#"},
    { title: "Support", link: "#" },
    { title: "Pricing", link: "#" }
]


export const footerNavBrandProps = {
    logoUrl: "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg",
    logoWidth: "24",
    logoHeight: "24",
    logoAltText: "footer-logo",
    copyright: "© 2017-2018"
}

export const footerLinks = [
  {
    title: "Features",
    links: [
      { text: "Cool stuff", link: "#" },
      { text: "Random feature", link: "#" },
      { text: "Team feature", link: "#" },
      { text: "Stuff for developers", link: "#" },
      { text: "Another one", link: "#" },
      { text: "Last time", link: "#" },
    ]
  },
  {
    title: "Resources",
    links: [
      { text: "Resource", link: "#" },
      { text: "Resource name", link: "#" },
      { text: "Another resource", link: "#" },
      { text: "Final resource", link: "#" },
    ]
  },
  {
    title: "About",
    links: [
      { text: "Team", link: "#" },
      { text: "Locations", link: "#" },
      { text: "Privacy", link: "#" },
      { text: "Terms", link: "#" },
    ]
  }
];

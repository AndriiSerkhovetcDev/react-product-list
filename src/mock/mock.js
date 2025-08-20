export const appSettings = {
    isLogin: false,
}

export const products = [
    {
        plan: "Free",
        monthPrice: 0,
        userLimit: 10,
        memoryLimit: 2,
        support: "Email",
        hasHelpCenter: "Yes",
        isSelectedPlan: false
    },
    {
        plan: "Pro",
        monthPrice: 15,
        userLimit: 20,
        memoryLimit: 10,
        support: "Priority email",
        hasHelpCenter: "Yes",
        isSelectedPlan: false
    },
    {
        plan: "Enterprise",
        monthPrice: 29,
        userLimit: 30,
        memoryLimit: 15,
        support: "Phone and email",
        hasHelpCenter: "Yes",
        isSelectedPlan: false
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


 export const compareTableParams = [
        {
            label: "Month Price ($)",
            key: "monthPrice",
            type: "number",
        },
        {
            label: "User Limit (users)",
            key: "userLimit",
            type: "number",
        },
        {
            label: "Memory storage (GB)",
            key: "memoryLimit",
            type: "number",
        },
        {
            label: "Support",
            key: "support",
            type: "string",
        },
        {
            label: "Help Center",
            key: "hasHelpCenter",
            type: "string",
        },
    ];
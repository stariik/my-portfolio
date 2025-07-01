export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack.",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a private order about Crypto Staking.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PayPal Payment with PHP",
    des: "Pay in any kind of online shop with paypal, smallest and fastest code for paypal payment using paypal API.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/stariik/paypal-payment-with-PHP",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
 {
  quote:
    "My journey began in 2019 at IT Step Academy, where I built a solid foundation in development. I learned C#, HTML, CSS, JavaScript, MySQL, SQLite, and a bit of PHP. That year gave me the confidence and curiosity to keep growing in tech, and it marked the start of my path as a developer.",
  name: "Web Developer in Progress",
  title: "2019-2020",
},
  {
  quote:
    "From 2020 to 2022, I deepened my technical expertise in cybersecurity, Linux administration, server management, penetration testing, Bash scripting, Python programming, and networking. This period equipped me with the skills to build and secure robust systems.",
  name: "Cybersecurity & Systems Administration",
  title: "2020–2022",
}
,
  {
  quote:
    "Between 2022 and 2024, I focused deeply on JavaScript — mastering the language beyond the basics. I learned modern frameworks, especially React.js, and became confident in building real-world web applications. I also worked extensively with APIs, learning how to integrate, build, and manage data flows. This phase shaped me into a solid front-end developer.",
  name: "Front-End Development with JavaScript & React",
  title: "2022–2024",
}
,
  {
  quote:
    "In 2025, I leveled up my front-end skills by diving into Next.js. I learned routing, server-side rendering (SSR), static site generation (SSG), API routes, middleware, dynamic metadata, file-based routing, and how to build full-featured apps. I also mastered TailwindCSS, component libraries, authentication with NextAuth and JWT, form handling with React Hook Form, state management with Context and Zustand, and deployment with Vercel. I now feel confident building production-grade, scalable front-end apps using Next.js.",
  name: "Next.js Developer & Modern Front-End Engineer",
  title: "2025",
}
,
  {
  quote:
    "I’m planning to expand my skills by learning Node.js and backend development to become a full-stack developer. At the same time, I want to continue advancing my career in cybersecurity, combining secure coding practices with software development to build robust, secure applications.",
  name: "Full-Stack Development & Cybersecuritys",
  title: "Future Plans ",
}
,
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in building interactive web applications using React.js, gaining hands-on experience with component-driven UI and API integration.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React Frontend Developer - JSM Tech",
    desc: "Designed and developed cross-platform mobile applications using React Native, delivering seamless user experiences on both iOS and Android.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance React Developer",
    desc: "Led end-to-end development of a client mobile app, from concept through deployment, focusing on responsive UI and API-driven data flows.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using React.js, Next.js, and TailwindCSS, implementing best practices for scalable, performant front-end apps.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

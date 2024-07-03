import {
  calculator,
  career,
  gcls,
  hotBeans,
  keeper,
  movie,
  portfolio,
  news,
  nike,
  todo,
  toDo,
  qr,
} from "../assets/images";

import { figma, js, react, sketch, wp, xd } from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export const services = [
  {
    id: "01",
    label: "Web Development",
    description:
      "With modern technologies, I will help you develope your fast dream website from start to finish in no time and ensure your satisfactions.",
  },
  {
    id: "02",
    label: "UI/UX Design",
    description:
      "With my vast experience in design, I can guarantee you a well structured and beautiful user interface design on your future projects.",
  },
  {
    id: "03",
    label: "Digital Marketing",
    description:
      "Promotion of brands to connect with potential customers using the internet and other forms of digital communication.",
  },
];

export const projects = [
  {
    label: "My Portfolio",
    description:
      "My minimalistic style portfolio you are viewing right now, based on a Figma design.",
    imgURL: portfolio,
  },
  {
    label: "Movie Browser",
    description:
      "Movie Browser is a comprehensive web application designed to make your movie discovery experience seamless. built using create-react-app",
    imgURL: movie,
  },
  {
    label: "Keeper",
    description:
      "Keeper is a note taking web application, keeper allows you to write down your thoughts and so much more...",
    imgURL: keeper,
  },
  {
    label: "Nike",
    description:
      "A Nike web app landing page built with React and Tailwind css",
    imgURL: nike,
  },
  {
    label: "To Do List App",
    description: "To Do list app, you can create tasks and organize your day",
    imgURL: todo,
  },
  {
    label: "Career Dev",
    description:
      "career dev registration form is a form for Registration to a RCCG youth career development program",
    imgURL: career,
  },
  {
    label: "Grace Lydia Care Services",
    description:
      "Grace Lydia care services is a care agency that provides care services to young people and adults.",
    imgURL: gcls,
  },
  {
    label: "QR code generator",
    description:
      "With Qr code scanner can generate Qr codes for any text or link",
    imgURL: qr,
  },
  {
    label: "Todo",
    description: "A Todo web application built with React and Tailwind css",
    imgURL: toDo,
  },
  {
    label: "Hot Beans Web",
    description: "A place to find tech jobs. Built with Express and Node JS",
    imgURL: hotBeans,
  },
  {
    label: "Calculator",
    description: "A Calculator web app, Built with vanilla javaScript",
    imgURL: calculator,
  },
  {
    label: "News",
    description:
      "A News Landing page from Font-end mentor challenge, styled with SCSS",
    imgURL: news,
  },
];

export const skills = [
  {
    label: "Figma",
    iconURL: figma,
  },
  {
    label: "JavaScript",
    iconURL: js,
  },
  {
    label: "React",
    iconURL: react,
  },
  {
    label: "Sketch",
    iconURL: sketch,
  },
  {
    label: "XD",
    iconURL: xd,
  },
  {
    label: "WordPress",
    iconURL: wp,
  },
];

import {
  AWS,
  Cplus,
  Firebase,
  Flutter,
  Java,
  MTC,
  MySQL,
  NexusInfo,
  Pr1,
  Pr2,
  Pr3,
  Python,
  TATA,
  backend,
  creator,
  css,
  figma,
  html,
  javascript,
  mobile,
  ngo,
  nodejs,
  reactjs,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: Flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
    
  },
  {
    name: "Cplus",
    icon: Cplus,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Firebase",
    icon: Firebase,
    
    
  },
  {
    name: "AWS",
    icon: AWS,
  },
];

const experiences = [
  {
    title: "Industrial Trainie",
    company_name: "TATA Steel",
    icon: TATA,
    iconBg: "#FFFFFF",
    date: "May 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Nexus Info",
    icon: NexusInfo,
    iconBg: "#000000",
    date: "April 2024 - May 2024",
    points: [
      "Building and maintaining web applications with React.js and related technologies, resulting in a 30% increase in site performance.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Ensuring responsive design and cross-browser compatibility, and reporting issues, achieving a 40% reduction in browser-related bugs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Summer Intern",
    company_name: "Kind Beings",
    icon: ngo,
    iconBg: "#FFFFFF",
    date: "Dec 2023 - March 2024",
    points: [
      "Supported the project management team in solving real-world problems, boosting project efficiency by 40%.",
      "Handled tough situations with strong communication and problem-solving skills, ensuring timely project completion.",
      "Led team initiatives, improving team cohesion and project outcomes",
      "Enhanced leadership and interpersonal skills through personality development sessions, contributing to team performance.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "MTC Pvt.Ltd",
    icon: MTC,
    iconBg: "#FFFFFF",
    date: "May 2023 - August 2023",
    points: [
      "Worked on projects and collaborated through an online virtual office platform, contributing to a 15% increase in user engagement.",
      "Interacted with team members and collaborated on project updates during regular meetings, ensuring alignment with team goals.",
      "Delivered presentations on progress and technical solutions, enhancing communication and project visibility.",
      "Gained corporate culture experience by coordinating with management to streamline workflows and integrate feedback.",
    ],
  },
];


const projects = [
  {
    name: "Real-Time code collaboration app",
    description:
      "The real-time code collaboration app enables simultaneous editing and interaction, supporting live coding sessions and synchronized updates across devices, fostering efficient remote teamwork and productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Pr2,
    source_code_link: "https://github.com/Bagiswari/Real-Time_code_collaboration_app",
  },
  {
    name: "Smart Material Gatepass System",
    description:
      "This demo web app provides a comprehensive demonstration of a Smart Material Gate Pass System, showcasing its capability to automate and streamline the issuance, tracking, and verification processes for materials.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Pr1,
    source_code_link: "https://github.com/Bagiswari/Smart_Material_Gatepass_System",
    
  },
  {
    name: "Movie streaming Website",
    description:
      "The movie streaming website features dynamic user interface, efficient state management, and customizable styling, offering seamless navigation and enhanced user engagement with a wide selection of movies.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Pr3,
    source_code_link: "https://github.com/Bagiswari/Movie_streaming_website",
  },
];

export { experiences, projects, services, technologies };


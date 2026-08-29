import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaSass,
  FaGitAlt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJquery,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiMongoose,
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";

import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiPython,
  SiTypescript,
  SiVite,
  SiHostinger,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

// interface Skills
interface Skills {
  name: string;
  icon: React.ReactNode;
}
// Data Skills
export const Skills: Skills[] = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Sass", icon: <FaSass className="text-pink-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-800" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-100" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-800" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-100" /> },
  { name: "Vercel", icon: <TbBrandVercel className="text-gray-200" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Hostinger", icon: <SiHostinger className="text-purple-600" /> },
];

///////////////////////////////////////

// interface Languages
interface Languages {
  icon: React.ReactNode;
  lang: string;
  color: string;
  hover: string;
}

// interface Projects And Languages
interface Projects {
  id: number;
  title: string;
  category: string;
  link: string;
  git: string;
  languages: Languages[];
}

export const Projects: Projects[] = [
  {
    id: 1,
    title: "Diamond Dental Centers",
    category: "Next",
    link: "https://www.diamond-dental-centers.com/",
    git: "https://github.com/omarelbadaweey/diamond-dental-centers",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
      {
        icon: <SiNextdotjs />,
        lang: "Next js ",
        color: "text-white-500",
        hover: "hover:text-gray-900",
      },
      {
        icon: <SiExpress />,
        lang: "Express",
        color: "text-gray-800",
        hover: "hover:text-gray-900",
      },
      {
        icon: <FaNodeJs />,
        lang: "Node js ",
        color: "text-green-600",
        hover: "hover:text-green-900",
      },
    ],
  },

  {
    id: 2,
    title: "American-council",
    category: "React",
    link: "https://www.american-council.com/",
    git: "https://github.com/omarelbadaweey/american-council",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },

  {
    id: 3,
    title: "MX-Store",
    category: "Next",
    link: "https://mx-blond.vercel.app/",
    git: "https://github.com/omarelbadaweey/MX",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
      {
        icon: <SiNextdotjs />,
        lang: "Next js ",
        color: "text-white-500",
        hover: "hover:text-gray-900",
      },
    ],
  },

  {
    id: 4,
    title: "Alekhlass",
    category: "React",
    link: "https://www.alekhllass.com/",
    git: "https://github.com/omarelbadaweey/Alekhlass",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },

  {
    id: 5,
    title: "orange-store",
    category: "React",
    link: "https://orange-store-theta.vercel.app/",
    git: "https://github.com/omarelbadaweey/Orange_Store",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },

  {
    id: 6,
    title: "omar-ecommece",
    category: "React",
    link: "https://omar-ecommece.vercel.app/",
    git: "https://github.com/omarelbadaweey/Omar-Ecommece",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
      {
        icon: <FaReact />,
        lang: "React js ",
        color: "text-blue-700",
        hover: "hover:text-blue-700",
      },
    ],
  },

  {
    id: 7,
    title: "badawey-store",
    category: "JS",
    link: "https://badawey-store.vercel.app/",
    git: "https://github.com/omarelbadaweey/Badawey-Store",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
      {
        icon: <RiTailwindCssFill />,
        lang: "tailwind",
        color: "text-sky-400",
        hover: "hover:text-sky-400",
      },
      {
        icon: <IoLogoJavascript />,
        lang: "java script ",
        color: "text-yellow-400",
        hover: "hover:text-yellow-400",
      },
    ],
  },

  {
    id: 8,
    title: "Simple-booking",
    category: "CSS",
    link: "https://simple-booking-five.vercel.app/",
    git: "https://github.com/omarelbadaweey/Simple-booking",
    languages: [
      {
        icon: <FaHtml5 />,
        lang: "html",
        color: "text-red-400",
        hover: "hover:text-red-400",
      },
      {
        icon: <FaCss3Alt />,
        lang: "css",
        color: "text-blue-500",
        hover: "hover:text-blue-500",
      },
    ],
  },
];

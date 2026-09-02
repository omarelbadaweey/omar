import React from "react";
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
  SiPython,
  SiTypescript,
  SiVite,
  SiHostinger,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

import { TbBrandVercel } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

// 1. تغيير أسماء الـ Interfaces لمنع التضارب
export interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export interface LanguageItem {
  icon: React.ReactNode;
  lang: string;
  color: string;
  hover: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  link: string;
  git: string;
  image: string;
  languages: LanguageItem[];
}

// 2. تصدير مصفوفة المهارات باسم واضح (skillsData)
export const skillsData: SkillItem[] = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Sass", icon: <FaSass className="text-pink-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", icon: <TbBrandVercel className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Hostinger", icon: <SiHostinger className="text-purple-600" /> },
];

// 3. تصدير مصفوفة المشاريع باسم واضح (projectsData)
export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Diamond Dental Centers",
    category: "Next",
    link: "https://www.diamond-dental-centers.com/",
    git: "https://github.com/omarelbadaweey/diamond-dental-centers",
    image: "/img/diamond-centers.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
      { icon: <FaReact />, lang: "React.js", color: "text-blue-400", hover: "hover:text-blue-400" },
      { icon: <SiNextdotjs />, lang: "Next.js", color: "text-white", hover: "hover:text-gray-300" },
      { icon: <SiExpress />, lang: "Express", color: "text-gray-300", hover: "hover:text-white" },
      { icon: <FaNodeJs />, lang: "Node.js", color: "text-green-500", hover: "hover:text-green-400" },
    ],
  },
  {
    id: 2,
    title: "American Council",
    category: "React",
    link: "https://www.american-council.com/",
    git: "https://github.com/omarelbadaweey/american-council",
    image: "/img/ameircam.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
      { icon: <FaReact />, lang: "React.js", color: "text-blue-400", hover: "hover:text-blue-400" },
    ],
  },
  {
    id: 3,
    title: "MX-Store",
    category: "Next",
    link: "https://mx-blond.vercel.app/",
    git: "https://github.com/omarelbadaweey/MX",
    image: "/img/mx-store.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
      { icon: <FaReact />, lang: "React.js", color: "text-blue-400", hover: "hover:text-blue-400" },
      { icon: <SiNextdotjs />, lang: "Next.js", color: "text-white", hover: "hover:text-gray-300" },
    ],
  },
  {
    id: 4,
    title: "Alekhlass",
    category: "React",
    link: "https://www.alekhllass.com/",
    git: "https://github.com/omarelbadaweey/Alekhlass",
    image: "/img/elekhlass.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
      { icon: <FaReact />, lang: "React.js", color: "text-blue-400", hover: "hover:text-blue-400" },
    ],
  },
  {
    id: 5,
    title: "Orange Store",
    category: "React",
    link: "https://orange-store-theta.vercel.app/",
    git: "https://github.com/omarelbadaweey/Orange_Store",
    image: "/img/orange.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
      { icon: <FaReact />, lang: "React.js", color: "text-blue-400", hover: "hover:text-blue-400" },
    ],
  },
  {
    id: 6,
    title: "Omar E-commerce",
    category: "React",
    link: "https://omar-ecommece.vercel.app/",
    git: "https://github.com/omarelbadaweey/Omar-Ecommece",
    image: "/img/eccomerce.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
      { icon: <FaReact />, lang: "React.js", color: "text-blue-400", hover: "hover:text-blue-400" },
    ],
  },
  {
    id: 7,
    title: "Badawey Store",
    category: "JS",
    link: "https://badawey-store.vercel.app/",
    git: "https://github.com/omarelbadaweey/Badawey-Store",
    image: "/img/badawey.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
      { icon: <RiTailwindCssFill />, lang: "Tailwind", color: "text-sky-400", hover: "hover:text-sky-400" },
      { icon: <IoLogoJavascript />, lang: "JavaScript", color: "text-yellow-400", hover: "hover:text-yellow-400" },
    ],
  },
  {
    id: 8,
    title: "Simple Booking",
    category: "CSS",
    link: "https://simple-booking-five.vercel.app/",
    git: "https://github.com/omarelbadaweey/Simple-booking",
    image: "/img/Simple.png",
    languages: [
      { icon: <FaHtml5 />, lang: "HTML", color: "text-red-400", hover: "hover:text-red-400" },
      { icon: <FaCss3Alt />, lang: "CSS", color: "text-blue-500", hover: "hover:text-blue-500" },
    ],
  }
];
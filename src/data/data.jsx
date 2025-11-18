import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiCanva } from "react-icons/si";

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Design Graphic",
    description: "Creating visual content to communicate messages effectively.",
    icon: "📱",
  },
  {
    id: 3,
    title: "Edit Foto & Video",
    description:
      "Enhancing and manipulating images and videos for various purposes.",
    icon: "📱",
  },
  {
    id: 4,
    title: "sosial media management",
    description:
      "Managing and optimizing social media platforms to increase engagement.",
    icon: "📱",
  },
];

export const ToolsItem = [
  {
    id: 1,
    icon: <FaHtml5 size={50} color="" className="text-gray-500 group-hover:text-[#E34F26] transition-all duration-200" />,
    name: "HTML & CSS",
    description: "Markup & Styling",
  },
  {
    id: 2,
    icon: <IoLogoJavascript size={50} color="" className="text-gray-500 group-hover:text-[#F7DF1E] transition-all duration-200" />,
    name: "JavaScript",
    description: "Programming Language",
  },
  {
    id: 3,
    icon: <FaReact size={50} color="" className="text-gray-500 group-hover:text-[#61DAFB] transition-all duration-200" />,
    name: "React",
    description: "Frontend Library",
  },
  {
    id: 4,
    icon: <FaNodeJs size={50} color="" className="text-gray-500 group-hover:text-[#339933] transition-all duration-200" />,
    name: "Node.js",
    description: "Backend Runtime Environment",
  },
  {
    id: 5,
    icon: <RiTailwindCssFill size={50} color="" className="text-gray-500 group-hover:text-[#38B2AC] transition-all duration-200" />,
    name: "tailwind CSS",
    description: "CSS Framework",
  },
  {
    id: 6,
    icon: <SiAdobephotoshop size={50} color="" className="text-gray-500 group-hover:text-[#00376b] transition-all duration-200" />,
    name: "Adobe Photoshop",
    description: "Design & Photo Editing",
  },
  {
    id: 7,
    icon: <SiCanva size={50} color="" className="text-gray-500 group-hover:text-[#004bad] transition-all duration-200" />,
    name: "Canva",
    description: "Design & Photo Editing",
  },
];



// src/data/TimelineData.js

export const ResumeData = [
  {
        id: 1,
        title: "TiM IT",
        company: "MI Nurul Huda",
        location: "Bandung",
        period: "2020 - 2021",
        description: "Managing and maintaining the school's IT infrastructure, including computer systems, networks, and software applications. Providing technical support to staff and students, ensuring smooth operation of all IT-related activities within the school environment.",
        type: "experience",
        alignment: "left"
    },
    {
        id: 2,
        title: "frontend developer",
        company: "Digital Inovation",
        location: "Bandung",
        period: "2022 - 2023",
        description: "I possess expertise in developing responsive and user-friendly user interfaces (UI) for various digital platforms, including creating the UI for an online Quran learning and testing web application. Furthermore, I have experience in building a company profile website for a Vocational High School (SMK) in Bandung, focusing on easy navigation and engaging information presentation. I am also skilled in designing a landing page website for a Telkom University event with the strategic goal of increasing participant registrations, and developing a company profile website for a tracking company, where the main emphasis is on transparent visualization of fund usage and service information.",
        type: "experience", 
        alignment: "right"
    },
    {
        id: 3,
        title: "design grafis",
        company: "OTWSAH Invitation",
        location: "bandung",
        period: "2023 - 2024",
        description: "Creating attractive and elegant wedding invitation designs using Adobe Photoshop and Canva applications. Responsible for designing various styles of wedding invitations according to client preferences, ensuring high-quality visual aesthetics, and delivering the final designs in a timely manner.",
        type: "experience",
        alignment: "left"
    },
    
   
   
];


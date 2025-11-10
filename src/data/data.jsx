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
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and enhancing user experience.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Creating mobile applications for Android and iOS platforms.",
    icon: "📱",
  },
  {
    id: 4,
    title: "Design Graphic",
    description: "Creating visual content to communicate messages effectively.",
    icon: "📱",
  },
  {
    id: 5,
    title: "Edit Foto & Video",
    description:
      "Enhancing and manipulating images and videos for various purposes.",
    icon: "📱",
  },
  {
    id: 6,
    title: "sosial media management",
    description:
      "Managing and optimizing social media platforms to increase engagement.",
    icon: "📱",
  },
];

export const skills = [
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
        title: "UI/UX Designer",
        company: "Google INC",
        location: "New York",
        period: "2011 - 2013",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "experience", 
        alignment: "left"
    },
    {
        id: 2,
        title: "Specialization Course",
        company: "Stanford University",
        location: "New York",
        period: "2017 - 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "education",
        alignment: "right"
    },
    {
        id: 3,
        title: "Web Designer",
        company: "Facebook INC",
        location: "New York",
        period: "2014 - 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "experience",
        alignment: "left"
    },
    {
        id: 4,
        title: "Web Designer",
        company: "Facebook INC",
        location: "New York",
        period: "2014 - 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "experience",
        alignment: "right"
    }
   
];


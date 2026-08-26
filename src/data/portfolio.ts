import profileImg from "@/assets/image3.jpeg";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import idiary from "@/assets/idairy.png";
import stfrancis from "@/assets/stfrancis.png";
import upauthority from "@/assets/upauthority.png";

export type Project = {
  name: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
};

export type Experience = {
  company: string;
  role: string;
  meta: string;
  responsibilities: string[];
};

export const profile = {
  name: "Arya Kumar Mishra",
  short: "Arya",
  greeting: "Hello, I'm",
  role: "Full Stack & Mobile App Developer",
  subRole: "",
  intro:
    "Full Stack & Mobile App Developer focused on building modern, efficient and user-friendly web and mobile applications. I enjoy turning ideas into practical digital experiences and continuously expanding my skills across frontend, backend and application development.",
  image: profileImg,
  location: "Delhi-NCR, India",
  email: "arya500245@gmail.com",
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=arya500245@gmail.com",
  phone: "+91 9525949013",
  resume:
    "https://drive.google.com/file/d/1jghv-H1vNCYhgZ4w5JqZjQCcOWFOaMKv/view?usp=sharing",
  github: "https://github.com/Arya9525",
  linkedin: "https://www.linkedin.com/in/arya-kumar-mishra-2a64421a1",
};

export const aboutParagraphs = [
  "I am Arya Kumar Mishra, a passionate Full Stack & Mobile App Developer based in Delhi-NCR. I enjoy building modern, user-friendly digital solutions and continuously improving my skills across web and application development.",
  "I love building impactful projects that solve real-world problems. My goal is to grow as a Software Engineer and contribute to innovative solutions in the IT industry.",
];

export const highlights = [
  {
    title: "Full Stack Development",
    text: "Building responsive and dynamic web applications using modern technologies and frameworks.",
  },
  {
    title: "Problem Solver",
    text: "Passionate about solving real-world challenges through innovative and efficient software solutions.",
  },
  {
    title: "Career Goals",
    text: "Aspiring to become a Software Engineer, collaborate with dynamic teams, and contribute to impactful IT projects.",
  },
  {
    title: "Continuous Learner",
    text: "Always exploring new technologies, improving my development skills, and turning new ideas into practical solutions.",
  },
];

export const skillGroups = [
  {
    label: "Salesforce",
    items: [
      "Apex",,
      "LWC",
      "Flows",
      "Validation Rules",
      "Relationships",
      "Profiles",
      "Permission Sets",
      "Sharing Rules",
      "Role Hierarchy",
    ],
  },
  {
    label: "Languages",
    items: ["Java", "C#","Python", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "React.js", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "ASP.NET"],
  },
  {
    label: "Database",
    items: ["MongoDB", "SQL", "SOQL", "SOSL"],
  },
  {
    label: "Tools",
    items: ["VS Code", "Postman", "GitHub", "Salesforce Developer Console"],
  },
];

export const process = [
  { step: "01", title: "Research", text: "Understand the problem, users and the real need behind the idea." },
  { step: "02", title: "Planning", text: "Map features, data models and the structure of the application." },
  { step: "03", title: "Development", text: "Build the interface and logic with React, JavaScript and modern tooling." },
  { step: "04", title: "Integration", text: "Wire up Node.js / Express APIs and databases such as MongoDB or SQL." },
  { step: "05", title: "Testing", text: "Check flows, fix issues and refine the experience across devices." },
  { step: "06", title: "Deployment", text: "Ship the project live and keep improving it over time." },
];

export const projects: Project[] = [
  {
    name: "iDiary Teacher Management App",
    description:
      "A teacher-focused school management mobile application designed to help teachers handle everyday school activities from a centralized mobile dashboard.",
    tech: ["React Native"],
    image: idiary,
    github: "https://github.com/Arya9525/idiary-teacher-app.git",
    live: "https://play.google.com/store/apps/details?id=com.iDiary.teacherapp",
  },
  {
    name: "St. Francis Secondary School Website",
    description:
      "A responsive school website developed for St. Francis Secondary School, presenting school information, administration, messages, gallery and contact sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: stfrancis,
    github: "https://github.com/Arya9525/st-francis-school.git",
    live: "https://st-francis-school-gc6j.vercel.app",
  },
  {
    name: "UP Authority Charge / Plot Tax Collection System",
    description:
      "A prototype dashboard for a government development authority to manage schemes, plots, allotments, charges, demand, collection, payments and reports.",
    tech: ["TypeScript"],
    image: upauthority,
    github: "https://github.com/Arya9525/up-authority-charge-flow.git",
    live: "https://up-authority-charge-flow.vercel.app",
  },
  {
    name: "FITNESS-TRACER MASTER",
    description:
      "Built a full-stack fitness tracking app with workout logging, calorie tracking, and progress monitoring using the MERN stack.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: project1,
    github: "https://github.com/Arya9525/Fitness-Tracker",
  },
  {
    name: "MANTRA JAP",
    description:
      "Created a mantra-chanting app with a real-time counter, timer, and saved progress.",
    tech: ["React Native", "JavaScript"],
    image: project2,
    github: "https://github.com/Arya9525/MantraJap",
    live: "https://mantrajap.netlify.app/",
  },
  {
    name: "AI IMAGE GENERATOR",
    description:
      "Developed an app that creates AI images from text prompts using OpenAI's DALL·E API. Added features like image preview, search, download, and sharing posts publicly.",
    tech: ["React", "Node.js", "Express.js", "OpenAI API"],
    image: project3,
    github: "https://github.com/Arya9525/GemAi",
  },
];

export const capabilities = [
  {
    title: "Full Stack Web Apps",
    text: "End-to-end applications built with the MERN stack — from the React interface to the Express API and database layer.",
  },
  {
    title: "API & Backend Integration",
    text: "Connecting interfaces to real data and third-party services, like the OpenAI DALL·E API used in my image generator.",
  },
  {
    title: "Interfaces That Feel Right",
    text: "Responsive, accessible layouts built with Tailwind CSS and Bootstrap that hold up on every screen size.",
  },
];

export const education = [
  {
    place: "SRM Institute of Science and Technology",
    role: "Master of Computer Applications (MCA)",
    meta: "Delhi-NCR",
    detail:
      "Completed MCA with a strong foundation in software engineering, full stack development, databases, and modern application development.",
    tags: ["Software Engineering", "Web Development", "Databases"],
  },
];

export const experience: Experience[] = [
  {
    company: "i-Diary IT Solutions Pvt. Ltd.",
    role: "Mobile App Developer",
    meta: "Dec 2025 – Present",
    responsibilities: [
      "Developed mobile applications using React Native.",
      "Built and improved app features with a focus on smooth and user-friendly experiences.",
      "Worked on school website development and responsive web interfaces.",
      "Contributed to a UP Government web application/project.",
      "Worked on a PTM ERP portal for managing Parent-Teacher Meeting workflows and related features.",
      "Integrated APIs and handled application data and functionality.",
    ],
  },
];

export const certifications = [
  {
    title: "Web Development",
    issuer: "Codec Technologies",
  },
  {
    title: "Cloud Foundation",
    issuer: "AWS",
  },
  {
    title: "Career Edge Program",
    issuer: "Tata",
  },
  {
    title: "Developer Experience",
    issuer: "Accenture",
  },
];

export const activities = [
  {
    title: "SRM-IST Hackathon",
    description:
      "Participated in a hackathon organized by SRM-IST and developed a prototype for a smart fitness tracker system.",
  },
];

export const softSkills = [
  { title: "Problem Solving", text: "Strong problem-solving abilities applied to real-world challenges." },
  { title: "Team Collaboration", text: "Eager to collaborate in dynamic teams on impactful projects." },
  { title: "Continuous Learning", text: "A keen interest in emerging technologies and constant skill improvement." },
  { title: "Adaptability", text: "Comfortable moving across languages, frameworks and project types." },
];

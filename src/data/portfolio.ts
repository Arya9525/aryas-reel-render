import profileImg from "@/assets/image3.jpeg";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

export const profile = {
  name: "Arya Kumar Mishra",
  short: "Arya",
  greeting: "Hello, I'm",
  role: "Full Stack Web Developer",
  subRole: "MCA Student at SRM Institute of Science and Technology",
  intro:
    "A passionate and dedicated Full Stack Web Developer and current MCA student at SRM Institute of Science and Technology, with a strong academic foundation. Enthusiastic about building efficient, user-friendly applications and eager to grow as a Software Engineer.",
  image: profileImg,
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "arya500245@gmail.com",
  phone: "+91 9525949013",
  resume:
    "https://drive.google.com/file/d/1jghv-H1vNCYhgZ4w5JqZjQCcOWFOaMKv/view?usp=sharing",
  github: "https://github.com/Arya9525",
  linkedin: "https://www.linkedin.com/in/arya-kumar-mishra-2a64421a1",
};

export const aboutParagraphs = [
  "I am Arya Kumar Mishra, a passionate Full Stack Web Developer and current MCA student at SRM Institute of Science and Technology, Ghaziabad, Delhi-NCR. I am continuously improving my skills to build better digital solutions.",
  "I love building impactful projects that solve real-world problems. My future goal is to grow as a Software Engineer and contribute to innovative solutions in the IT industry.",
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
];

export const skillGroups = [
  { label: "Programming", items: ["C", "C#", "Java", "Python"] },
  {
    label: "Frontend",
    items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "EJS", "MongoDB", "SQL", "ASP.NET"],
  },
  { label: "Tools", items: ["Git / GitHub", "VS Code"] },
];

export const process = [
  { step: "01", title: "Research", text: "Understand the problem, users and the real need behind the idea." },
  { step: "02", title: "Planning", text: "Map features, data models and the structure of the application." },
  { step: "03", title: "Development", text: "Build the interface and logic with React, JavaScript and modern tooling." },
  { step: "04", title: "Integration", text: "Wire up Node.js / Express APIs and databases such as MongoDB or SQL." },
  { step: "05", title: "Testing", text: "Check flows, fix issues and refine the experience across devices." },
  { step: "06", title: "Deployment", text: "Ship the project live and keep improving it over time." },
];

export const projects = [
  {
    name: "FITNESS-TRACER MASTER",
    description:
      "Built a full-stack fitness tracking app with workout logging, calorie tracking, and progress monitoring using the MERN stack.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: project1,
    github: "https://github.com/Arya9525",
  },
  {
    name: "MANTRA JAP",
    description:
      "Created a mantra-chanting app with a real-time counter, timer, and saved progress.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: project2,
    github: "https://github.com/Arya9525",
  },
  {
    name: "AI IMAGE GENERATOR",
    description:
      "Developed an app that creates AI images from text prompts using OpenAI's DALL·E API. Added features like image preview, search, download, and sharing posts publicly.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: project3,
    github: "https://github.com/Arya9525",
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
    meta: "Ghaziabad, Delhi-NCR",
    detail:
      "Currently pursuing MCA with a strong and solid academic foundation, focused on software engineering and full stack development.",
    tags: ["Software Engineering", "Web Development", "Databases"],
  },
];

export const softSkills = [
  { title: "Problem Solving", text: "Strong problem-solving abilities applied to real-world challenges." },
  { title: "Team Collaboration", text: "Eager to collaborate in dynamic teams on impactful projects." },
  { title: "Continuous Learning", text: "A keen interest in emerging technologies and constant skill improvement." },
  { title: "Adaptability", text: "Comfortable moving across languages, frameworks and project types." },
];

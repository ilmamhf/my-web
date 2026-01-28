import "./App.css";
// import Navbar from "./components/NavBar";
// import Hero from "./sections/Hero";
import reactIcon from "./assets/row-1/react.svg";
import tailwindIcon from "./assets/row-1/Tailwind.svg";
import nextIcon from "./assets/row-1/Nextjs.svg";
import typescriptIcon from "./assets/row-1/Typescript.svg";
import javascriptIcon from "./assets/row-1/Javascript.svg";

import firebaseIcon from "./assets/row-2/Firebase.svg";
import minioIcon from "./assets/row-2/MinIO.svg";
import mongoDBIcon from "./assets/row-2/MongoDB.svg";
import sqLiteIcon from "./assets/row-2/SQLite.svg";
import supabaseIcon from "./assets/row-2/Supabase.svg";

import pyIcon from "./assets/row-3/Python.svg";
import n8nIcon from "./assets/row-3/n8n.svg";
import flutterIcon from "./assets/row-3/Flutter.svg";
import arduinoIcon from "./assets/row-3/Arduino.svg";
import onnxIcon from "./assets/row-3/Onnx.svg";
import awsEC2Icon from "./assets/row-3/Aws ec2.svg";

import newsMapImg1 from "./assets/projects-img/NewsMapID/1.png";
import newsMapImg2 from "./assets/projects-img/NewsMapID/2.png";

import labCamImg1 from "./assets/projects-img/LabSurveillance/1.webp";
import labCamImg2 from "./assets/projects-img/LabSurveillance/2.jpg";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";
import { motion } from "framer-motion";

const techstackRow1 = [
  { icon: reactIcon, name: "React" },
  { icon: tailwindIcon, name: "Tailwind CSS" },
  { icon: nextIcon, name: "NextJS" },
  { icon: typescriptIcon, name: "Typescript" },
  { icon: javascriptIcon, name: "Javascript" },
];

const techstackRow2 = [
  { icon: mongoDBIcon, name: "MongoDB" },
  { icon: supabaseIcon, name: "Supabase" },
  { icon: minioIcon, name: "MinIO" },
  { icon: firebaseIcon, name: "Firebase" },
  { icon: sqLiteIcon, name: "SQLite" },
];

const techstackRow3 = [
  { icon: pyIcon, name: "Python" },
  { icon: n8nIcon, name: "n8n" },
  { icon: flutterIcon, name: "Flutter" },
  { icon: arduinoIcon, name: "Arduino" },
  { icon: onnxIcon, name: "Onnx" },
  { icon: awsEC2Icon, name: "AWS EC2" },
];

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "DOT Indonesia",
    period: "June 2025 - November 2025",
    desc: "Completed 4 Rnd & PoC projects in 5 months consisted of AI Vision, LLM API, and automation with it's interface. Most techstack used: n8n, NextJS, Python",
  },
];

const projects = [
  {
    name: "NewsMapID",
    images: [newsMapImg1, newsMapImg2],
    desc: "NewsMap ID is an interactive full-stack dashboard featuring a responsive SVG map of Indonesia that provides real-time, province-specific news via the GNews API. Built with React, TypeScript, and Node.js (Express), the application features advanced zoom-pan navigation, custom keyword filtering, and efficient local storage caching to optimize performance.",
    techstack: "Techstack: React Tailwind - NodeJS - GNews API",
  },
  {
    name: "Labcam",
    images: [labCamImg1, labCamImg2],
    desc: "I contributed to the development of the face recognition module, prototyped the uniform detection system, deployed the recognition pipeline on AWS EC2, and built the web prototype for system integration. The hybrid AIoT solution combines ESP32-CAM for local uniform detection with cloud-based face recognition, achieving 97% accuracy in facial recognition and 88.8% accuracy in uniform detection with response times under 2 seconds. The project earned 3rd place at the Capstone Graduation Showcase 2025 (AIoT Theme), highlighting innovation in intelligent laboratory security.",
    techstack: "Techstack: Esp32-Cam, Edge Impulse, C++, Python, AWS, React",
  },
];

function App() {
  return (
    <div className="relative isolate bg-linear-to-b from-[#090713] to-[#291616]  text-[#eaeaf3]">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <AnimatedBackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* <Navbar /> */}
        <div className="sticky top-0 z-20 border-b border-[#3B3B3B] bg-[#160917]/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 py-7 items-center">
            <div className="col-span-1">Ilmam</div>

            <ul className="flex col-span-3 justify-end gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Experiences</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* <Hero /> */}
        <section className="py-40">
          <div className="max-w-7xl mx-auto flex flex-col gap-4 px-6">
            <h1 className="text-6xl font-bold leading-16 max-w-2xl">
              Hello! I'm Ilmam, Software Engineer
            </h1>

            <p className="text-xl max-w-2xl">
              A software engineer specializing in building reliable,
              user-focused applications and transforming ideas into well-crafted
              digital solutions.
            </p>

            <div className="flex flex-row gap-10">
              <button className="bg-linear-to-b from-[#FF1E6D] to-[#FF1B51] px-9 py-3 rounded-xl">
                Projects
              </button>
              <button className="bg-[#8B8B8B]/20 outline-2 -outline-offset-2 outline-[#414446] px-9 py-3 rounded-xl">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* About / Techstack */}
        <section className="py-40">
          <div className="flex flex-col max-w-7xl mx-auto px-6 items-center gap-4">
            <div className="text-5xl font-bold">My Stack</div>
            <div className="min-w-2xs max-w-2xl h-0.5 bg-amber-50 m-5"></div>
            <div className="text-xl max-w-4xl text-center">
              I primarily work with web technologies to build complete
              solutions. I enjoy exploring different tools and stacks to deliver
              software that is both reliable and visually polished.
            </div>
            <div className="flex flex-col gap-10 py-6">
              <div className="flex flex-row gap-10 justify-center">
                {techstackRow1.map((tech) => (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-14 h-14"
                  />
                ))}
              </div>
              <div className="flex flex-row gap-10 justify-center">
                {techstackRow2.map((tech) => (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12"
                  />
                ))}
              </div>
              <div className="flex flex-row gap-10 justify-center">
                {techstackRow3.map((tech) => (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="py-40"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-5xl font-bold mb-4">Experience</h2>
              <p className="text-[#b5b5c7] max-w-xl">
                A short overview of my journey in professional world.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col gap-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-[#FF1E6D]/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1 group-hover:text-[#FF1E6D] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-[#9ca3af]">{exp.company}</p>
                    </div>

                    <span className="text-sm text-[#b5b5c7]">{exp.period}</span>
                  </div>

                  <p className="mt-4 text-[#c9c9da] leading-relaxed max-w-3xl">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-40">
          <div className="max-w-7xl mx-auto px-6 gap-4 flex flex-col items-center">
            <div className="text-5xl font-bold">Projects</div>
            <div className="min-w-2xs max-w-2xl h-0.5 bg-amber-50 m-5"></div>
            {projects.map((project) => (
              <div className="flex flex-col gap-4 pb-6">
                <div className="font-bold text-4xl">{project.name}</div>
                <div className="grid grid-cols-2 gap-10">
                  {project.images.map((img, index) => (
                    <img
                      src={img}
                      alt={`${project.name} image ${index}`}
                      className="w-full rounded-xl"
                    />
                  ))}
                </div>
                <p>{project.desc}</p>
                <div className="font-bold text-xl">{project.techstack}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-40">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl max-w-2xl text-gray-300">
                Have a project in mind or just want to chat? Feel free to reach
                out! I'm always open to discussing new ideas and opportunities.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              <a
                href="mailto:ilmamhf643@gmail.com"
                className="flex items-center gap-4 p-6 rounded-2xl bg-[#2f1a1f]/40 hover:bg-[#3a1f26]/40 transition"
              >
                <Mail size={36} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-300">ilmamhf643@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#2f1a1f]/40 hover:bg-[#3a1f26]/40 transition">
                <MapPin size={36} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-300">Bekasi, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                className="p-4 bg-[#421c27]/50 rounded-xl hover:scale-110 transition"
              >
                <Linkedin size={28} />
              </a>

              <a
                href="https://github.com"
                className="p-4 bg-[#421c27]/50 rounded-xl hover:scale-110 transition"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

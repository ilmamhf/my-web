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

function App() {
  return (
    <div className="flex flex-col bg-linear-to-b from-[#252525] to-[#291616]  text-[#eaeaf3]">
      {/* <Navbar /> */}
      <div className="sticky top-0 z-50 border-b border-[#3B3B3B] bg-[#262323]/90">
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
            A software engineer specializing in building reliable, user-focused
            applications and transforming ideas into well-crafted digital
            solutions.
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
            I primarily work with web technologies to build complete solutions.
            I enjoy exploring different tools and stacks to deliver software
            that is both reliable and visually polished.
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

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 gap-4 flex flex-col items-center">
          <div className="text-5xl font-bold">Projects</div>
          <div className="min-w-2xs max-w-2xl h-0.5 bg-amber-50 m-5"></div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-4xl">NewsMap ID</div>
            <div className="grid grid-cols-2 gap-10">
              <img
                src={newsMapImg1}
                alt="NewsMap ID image 1: popover hover feature"
                className="w-full rounded-xl"
              />
              <img
                src={newsMapImg2}
                alt="NewsMap ID image 2: detailed news list feature"
                className="w-full rounded-xl"
              />
            </div>
            <p>
              NewsMap ID is an interactive full-stack dashboard featuring a
              responsive SVG map of Indonesia that provides real-time,
              province-specific news via the GNews API. Built with React,
              TypeScript, and Node.js (Express), the application features
              advanced zoom-pan navigation, custom keyword filtering, and
              efficient local storage caching to optimize performance.
            </p>
            <div className="font-bold text-xl">
              Techstack: React Tailwind - NodeJS - GNews API
            </div>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-5xl font-bold py-6">Get in Touch</div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <p>
                Have a project in mind or just want to chat? Feel free to reach
                out! I'm always open to discussing new projects, creative ideas,
                or opportunities.
              </p>
              <div>Email: ilmamhf643@gmail.com</div>
              <div className="flex flex-row gap-6">
                <div>Linkedin</div>
                <div>Github</div>
              </div>
            </div>
            <div>
              <div>Name</div>
              <div>Email</div>
              <div>Message</div>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

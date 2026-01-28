
import newsMapImg1 from "../assets/projects-img/NewsMapID/1.png";
import newsMapImg2 from "../assets/projects-img/NewsMapID/2.png";

import labCamImg1 from "../assets/projects-img/LabSurveillance/1.webp";
import labCamImg2 from "../assets/projects-img/LabSurveillance/2.jpg";

const projects = [
    {
        name: "NewsMapID",
        images: [newsMapImg1, newsMapImg2],
        desc: "NewsMap ID is an interactive full-stack dashboard featuring a responsive SVG map of Indonesia that provides real-time, province-specific news via the GNews API. Built with React, TypeScript, and Node.js (Express), the application features advanced zoom-pan navigation, custom keyword filtering, and efficient local storage caching to optimize performance.",
        techstack: ["React", "TailwindCSS", "NodeJS", "GNews API"],
    },
    {
        name: "Labcam",
        images: [labCamImg1, labCamImg2],
        desc: "I contributed to the development of the face recognition module, prototyped the uniform detection system, deployed the recognition pipeline on AWS EC2, and built the web prototype for system integration. The hybrid AIoT solution combines ESP32-CAM for local uniform detection with cloud-based face recognition, achieving 97% accuracy in facial recognition and 88.8% accuracy in uniform detection with response times under 2 seconds.",
        techstack: ["Esp32-Cam", "Edge Impulse", "C++", "Python", "AWS", "React"],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-l-4 border-primary pl-6">
                                <h3 className="font-bold text-3xl md:text-4xl">{project.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techstack.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/10 text-text-muted">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.images.map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-video md:aspect-[16/10] group">
                                        <img
                                            src={img}
                                            alt={`${project.name} image ${i}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            <p className="text-text-muted leading-relaxed text-lg max-w-4xl">
                                {project.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

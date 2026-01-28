import { motion } from "motion/react";

const experiences = [
    {
        role: "AI Engineer Intern",
        company: "DOT Indonesia",
        period: "June 2025 - November 2025",
        desc: "Completed 4 Rnd & PoC projects in 5 months consisted of AI Vision, AI API Integration, and automation with its interface. Most techstack used: n8n, NextJS, Python",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        A short overview of my journey in professional world.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 hover:border-primary/40 transition-all overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-white/80">{exp.company}</p>
                                    </div>

                                    <span className="text-sm font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-text-muted leading-relaxed">
                                    {exp.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

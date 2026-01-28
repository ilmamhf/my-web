import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
                        Available for work
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hello! I'm Ilmam, <br className="hidden md:block" />
                    Software Engineer
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A software engineer specializing in building reliable,
                    user-focused applications and transforming ideas into well-crafted
                    digital solutions.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-4 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#projects" className="group bg-gradient-to-b from-primary to-primary-dark px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="px-8 py-4 rounded-xl font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

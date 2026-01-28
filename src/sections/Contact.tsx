
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-black/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 text-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-lg md:text-xl max-w-2xl text-text-muted mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach
                        out! I'm always open to discussing new ideas and opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    <a
                        href="mailto:ilmamhf643@gmail.com"
                        className="flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all group text-left"
                    >
                        <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors text-primary">
                            <Mail size={32} />
                        </div>
                        <div>
                            <p className="font-semibold text-lg mb-1">Email</p>
                            <p className="text-text-muted group-hover:text-white transition-colors break-all">ilmamhf643@gmail.com</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-left">
                        <div className="p-4 bg-primary/10 rounded-xl text-primary">
                            <MapPin size={32} />
                        </div>
                        <div>
                            <p className="font-semibold text-lg mb-1">Location</p>
                            <p className="text-text-muted">Bekasi, Indonesia</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 mt-8">
                    <a
                        href="https://linkedin.com"
                        className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-[#0077b5] hover:border-transparent hover:-translate-y-1 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={28} />
                    </a>

                    <a
                        href="https://github.com"
                        className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-[#333] hover:border-transparent hover:-translate-y-1 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github size={28} />
                    </a>
                </div>

                <footer className="mt-20 text-text-muted text-sm">
                    © {new Date().getFullYear()} Ilmam H. Built with React & Tailwind CSS.
                </footer>
            </div>
        </section>
    );
};

export default Contact;

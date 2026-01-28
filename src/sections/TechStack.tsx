
// Import icons (need to make sure we import them from the assets correctly in the main file or pass them as props, 
// OR we can move the imports here if we know the paths. 
// Given the original file had imports, I will copy them here to ensure it works self-contained, 
// assuming I can access the assets from here. 
// The paths in App.tsx were relative to src (./assets). Here we are in src/sections, so we need ../assets)

import reactIcon from "../assets/row-1/react.svg";
import tailwindIcon from "../assets/row-1/Tailwind.svg";
import nextIcon from "../assets/row-1/Nextjs.svg";
import typescriptIcon from "../assets/row-1/Typescript.svg";
import javascriptIcon from "../assets/row-1/Javascript.svg";

import firebaseIcon from "../assets/row-2/Firebase.svg";
import minioIcon from "../assets/row-2/MinIO.svg";
import mongoDBIcon from "../assets/row-2/MongoDB.svg";
import sqLiteIcon from "../assets/row-2/SQLite.svg";
import supabaseIcon from "../assets/row-2/Supabase.svg";

import pyIcon from "../assets/row-3/Python.svg";
import n8nIcon from "../assets/row-3/n8n.svg";
import flutterIcon from "../assets/row-3/Flutter.svg";
import arduinoIcon from "../assets/row-3/Arduino.svg";
import onnxIcon from "../assets/row-3/Onnx.svg";
import awsEC2Icon from "../assets/row-3/Aws ec2.svg";

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

interface TechItem {
    icon: string;
    name: string;
}

interface MarqueeProps {
    items: TechItem[];
    direction?: "left" | "right";
    speed?: "fast" | "slow";
}

const Marquee = ({
    items,
    direction = "left",
    speed = "fast",
}: MarqueeProps) => {
    const displayItems = [...items, ...items, ...items]; // Triple for smoother loop on wide screens

    return (
        <div
            className="scroller overflow-hidden"
            data-direction={direction}
            data-speed={speed}
        >
            <div className="scroller__inner flex gap-8 py-4 w-max animate-scroll">
                {displayItems.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 group min-w-[80px]">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all p-3">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TechStack = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-black/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My Stack</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        I primarily work with web technologies to build complete solutions.
                    </p>
                </div>

                <div className="w-full max-w-4xl flex flex-col gap-8 mask-linear-fade">
                    <Marquee items={techstackRow1} direction="left" speed="slow" />
                    <Marquee items={techstackRow2} direction="right" speed="slow" />
                    <Marquee items={techstackRow3} direction="left" speed="slow" />
                </div>
            </div>
        </section>
    );
};

export default TechStack;

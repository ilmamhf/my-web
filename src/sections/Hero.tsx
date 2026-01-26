const Hero = () => {
  return (
    <section className="h-screen flex flex-col gap-4 px-28 bg-amber-400 justify-center">
      <div className="text-[64px] font-bold">
        Hello! I'm Ilmam, Software Engineer
      </div>
      <div>
        A software engineer specializing in building reliable, user-focused
        applications and transforming ideas into well-crafted digital solutions.
      </div>
      <div className="flex flex-row gap-10">
        <div className="bg-linear-to-b from-[#FF1E6D] to-[#FF1B51] px-9 py-3 rounded-xl">
          Projects
        </div>
        <div className="bg-[#8B8B8B]/20 border-2 border-[#414446] px-9 py-3 rounded-xl">
          Contact Me
        </div>
      </div>
    </section>
  );
};

export default Hero;

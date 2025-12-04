const About = () => {
  return (
    <section id="about" className="
      w-full min-h-screen px-6 md:px-16 pt-[10rem] md:pt-[12rem]
      bg-[#0d0d11] text-white flex flex-col md:flex-row 
      items-start gap-12 md:gap-16
    ">
      
      {/* LEFT HEADING AREA */}
      <div className="max-w-xl space-y-4 text-center md:text-left">
        <p className="text-[12px] md:text-[14px] tracking-widest font-semibold text-purple-400/90">
          ABOUT ME
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building the Future,<br className="hidden md:block"/>
          One Line at a Time
        </h1>
      </div>

      {/* RIGHT TEXT CONTENT */}
      <div className="max-w-xl space-y-6 text-gray-300 leading-relaxed 
                      text-[16px] md:text-xl">

        <p>
        With nearly a year of hands-on experience in full-stack development, 
        I focus on building clean, responsive, and user-friendly web applications. 
        I enjoy creating digital products that blend modern design with practical functionality.
        </p>

        <p>
         My approach is rooted in writing clean, maintainable code, 
         understanding user needs, and continuously improving through learning and experimentation. 
         I stay updated with the latest trends in web development to deliver meaningful and efficient solutions.
        </p>

        <p>
        When I’m not coding, I’m exploring new tools and technologies, 
        improving my problem-solving skills, or working on personal projects to push my 
        creativity and technical abilities further.
        </p>

      </div>

    </section>
  );
};

export default About;

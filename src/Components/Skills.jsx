const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen px-10 md:px-20 pt-[10rem] bg-[#0d0d11] text-white">

      {/* Title Block */}
      <p className="text-purple-400 text-[13px] tracking-widest font-semibold">
        SKILLS & EXPERTISE
      </p>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
        Technical Proficiency
      </h1>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 pl-30 pr-30">

        {/* Frontend */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Frontend Development</h2>
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> React & Next.js</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> JavaScript </li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Tailwind CSS </li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Responsive UI / Design</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> BootStrap</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Backend Development</h2>
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Node.js & Express</li>
            {/* <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Python</li> */}
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> REST APIs</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Postgre SQL / MySQL / Oracle DB</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Database Design</li>
          </ul>
        </div>

        {/* Tools & Practices */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Tools & Practices</h2>
          <div className="h-[1px] w-full bg-white/10 mb-4"></div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Git & GitHub</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> VS Code / Postman</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> SVN </li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Testing Concepts</li>
            <li className="flex items-center gap-2"><span className="text-purple-400 text-xl">•</span> Agile / Team Collaboration</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default Skills;

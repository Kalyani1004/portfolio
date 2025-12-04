import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen px-10 md:px-20 pt-[10rem] bg-[#0d0d11] text-white">

      {/* Top Title */}
      {/* <p className="text-purple-400 text-[13px] tracking-widest font-semibold">
        PORTFOLIO
      </p> */}

      <h1 className="text-xl md:text-5xl font-extrabold mt-2">
        My Work
      </h1>

      {/* PROJECT LIST WRAPPER */}
      <div className="mt-8 space-y-14 p-9">

        {/* PROJECT ITEM */}
        <div className="flex items-start flex-col md:flex-row gap-55 ">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
              Vehicle Number Detection System
              <FaExternalLinkAlt size={16} className="text-gray-400 hover:text-white transition"/>
            </h2>

            <p className="text-gray-400 mt-2 max-w-2xl text-[15px]">
              Developed a Vehicle Number Detection System using Python, 
              OpenCV and Tesseract OCR to accurately detect, extract and recognize vehicle number plates from images 
              under varying angles and lighting conditions.
            </p>

            {/* TECHNOLOGY TAGS */}
            <div className="flex gap-3 flex-wrap mt-4">
              {["Python", "OpenCV", "Tesseract (OCR)"].map(tag => (
                <span key={tag} className="
                  px-4 py-1 rounded-full bg-white/5 
                  text-gray-200 border border-white/10
                  hover:text-purple-400 hover:border-purple-500 transition text-sm
                ">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* YEAR */}
          <p className="text-gray-300 mt-4 md:mt-0 text-lg">
            2024
          </p>

        </div>
  <div className="flex items-start flex-col md:flex-row gap-55 ">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">
              Diamond Hunter Game
              <FaExternalLinkAlt size={16} className="text-gray-400 hover:text-white transition"/>
            </h2>

            <p className="text-gray-400 mt-2 max-w-2xl text-[15px]">
             Developed Diamond Hunter, a Java-based game using Swing for UI, 
             AWT Graphics for rendering, and a backtracking algorithm for maze navigation, 
             including two-player mode with alternating turns for an engaging gameplay experience.
            </p>

            {/* TECHNOLOGY TAGS */}
            <div className="flex gap-3 flex-wrap mt-4">
              {["Java", "Java Swing", "AWT Graphics", "Backtracking"].map(tag => (
                <span key={tag} className="
                  px-4 py-1 rounded-full bg-white/5 
                  text-gray-200 border border-white/10
                  hover:text-purple-400 hover:border-purple-500 transition text-sm
                ">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* YEAR */}
          <p className="text-gray-300 mt-4 md:mt-0 text-lg">
            2024
          </p>

        </div>
      </div>

    </section>
  );
};

export default Projects;

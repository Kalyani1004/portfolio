import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";


const Home = () => {
  return (
    
    <section id="home" className="w-full min-h-screen pt-[8rem] px-50 bg-[#0d0d11] text-white flex items-center justify-between gap-10">
      {/* LEFT TEXT CONTENT */}
      <div className="max-w-xl space-y-5">
        
        <p className="text-[24px] tracking-wider font-semibold text-purple-400/90">
          FULL STACK DEVELOPER
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold">
         Innovating 
          <span className="block text-purple-400">Through Code </span>
        </h1>

        <p className="text-gray-400 leading-relaxed text-[20px]">
         I’m a dedicated full-stack developer who builds smooth, 
         modern, and high-impact digital experiences. 
         I bring ideas to life with clean thinking, bold execution, 
         and a user-first mindset.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-4">
          {/* <button className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-md font-medium shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition">
            View My Work →
          </button> */}

          <button className="bg-purple-500 hover:bg-purple-600 border border-white/20 hover:border-purple-400 
          px-6 py-2 rounded-md font-medium hover:text-purple-400 transition"  onClick={() => window.open('/assets/Kalyani_Bharsat.pdf', '_blank')}>
            Download CV 
          </button>
        </div>
         <div className="flex gap-5 pt-6">
          {/* Github */}
          <a href="https://github.com/Kalyani1004" target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full 
            hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] 
            transition hover:scale-110 cursor-pointer">
            <FaGithub size={20}/>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kalyani-bharsat-807910136/" target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full 
            hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] 
            transition hover:scale-110 cursor-pointer">
            <FaLinkedin size={20}/>
          </a>

          {/* Email */}
          <a href="mailto:kalyanibharsat123@gmail.com"
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full 
            hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] 
            transition hover:scale-110 cursor-pointer">
            <FaEnvelope size={19}/>
          </a>

          {/* Instagram */}
          {/* <a href=""
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full 
            hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] 
            transition hover:scale-110 cursor-pointer">
            <FaInstagram size={19}/>
          </a> */}
        </div>
      </div>

      {/* RIGHT SIDE PHOTO CARD */}
      <div className="hidden md:flex items-center justify-center w-[380px] h-[450px] 
        rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1a23] to-[#0b0b11]
        shadow-[0_0_40px_rgba(120,60,255,0.4)] relative overflow-hidden">

        <img 
          src="/assets/Kalyani.jpg"  
          className="w-[80%] rounded-2xl object-cover opacity-95 hover:opacity-100 transition"
        />

        {/* subtle purple glow behind img */}
        <div className="absolute w-[300px] h-[300px] bg-purple-600/40 blur-3xl -z-10"></div>
      </div>

    </section>
  );
};

export default Home;

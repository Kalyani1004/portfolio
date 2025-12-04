import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen px-10 md:px-20 pt-[14rem] bg-[#0d0d11] text-white text-center flex flex-col items-center justify-start">

      {/* Top Heading */}
      <p className="text-purple-400 text-[13px] tracking-widest font-semibold">
        GET IN TOUCH
      </p>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
        Let's Work Together
      </h1>

      <p className="text-gray-300 mt-4 text-[15px] md:text-lg max-w-2xl">
        I'm always interested in hearing about new projects and opportunities.  
        Whether you have a question or just want to say hello, feel free to reach out.
      </p>

      {/* Button */}
      <a 
        href="mailto:kalyanibharsat123@gmail.com"
        className="mt-10 px-8 py-3 rounded-lg bg-[#b257f3] hover:bg-[#a247e9] 
        text-white font-semibold flex items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.4)]
        hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition"
      >
        Start a Conversation <FaEnvelope size={18}/>
      </a>

      {/* Bottom line */}
      <div className="w-full border-t border-white/10 mt-20"></div>

      {/* Footer */}
      <p className="text-gray-400 text-sm py-6">
        © 2025 Kalyani Bharsat. All rights reserved.
      </p>

    </section>
  );
};

export default Contact;

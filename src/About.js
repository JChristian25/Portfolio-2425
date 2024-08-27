import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import React from 'react';

function About() {
  return (
    <div
      id="about-me"
      className="flex flex-col h-full min-h-screen bg-gradient-to-br from-slate-950 to-slate-800 px-4 py-8"
    >
      {/* Section Title */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-white font-mono font-extrabold">ABOUT ME</h1>
      </section>

      {/* Technologies and Bio Section */}
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0 px-8">
        {/* Technologies Card */}
        <div className="flex-1 bg-slate-900 hover:bg-slate-950 hover:rounded-2xl transition-all shadow-lg rounded-md p-4 max-w-xs mx-auto md:mx-0">
          <h2 className="text-lg md:text-xl text-white text-center font-mono font-extrabold mb-4">Technologies</h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              <FaReact />, <FaJava />, <FaHtml5 />, <FaCss3Alt />,
              <FaBootstrap />, <FaPython />, <IoLogoJavascript />, <RiTailwindCssFill />
            ].map((Icon, index) => (
              <li key={index} className="flex items-center justify-center">
                {React.cloneElement(Icon, { size: 48, color: "white" })}
              </li>
            ))}
          </ul>
        </div>

        {/* Hobbies Card */}
        <div className="flex-1 bg-slate-900 hover:bg-slate-950 hover:rounded-2xl transition-all shadow-lg rounded-md p-4 max-w-xs mx-auto md:mx-0">
          <h2 className="text-lg md:text-xl text-center text-white font-mono font-extrabold mb-4">Hobbies</h2>
          <ul className="text-white text-center space-y-2">
            {["Reading", "Coding", "Gaming"].map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Experience and Certifications Section */}
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0 px-8 my-8">
        {/* Experience Card */}
        <div className="flex-1 bg-slate-900 hover:bg-slate-950 hover:rounded-2xl transition-all shadow-lg rounded-md p-4 max-w-xs mx-auto md:mx-0">
          <h2 className="text-lg md:text-xl text-white text-center font-mono font-extrabold mb-4">Experience</h2>
          {/* Add your experience content here */}
        </div>

        {/* Certifications Card */}
        <div className="flex-1 bg-slate-900 hover:bg-slate-950 hover:rounded-2xl transition-all shadow-lg rounded-md p-4 max-w-xs mx-auto md:mx-0">
          <h2 className="text-lg md:text-xl text-center text-white font-mono font-extrabold mb-4">Certifications</h2>
          {/* Add your certifications content here */}
        </div>
      </div>

      {/* Bio Section */}
      <section className="flex flex-col items-center mt-8 px-4">
        <hr className="w-2/3 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h2 className="text-xl md:text-2xl text-white font-mono font-extrabold mb-4">BIO</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-white text-base md:text-lg text-center">
            I'm John Christian, a passionate IT student with a love for coding and technology. Currently pursuing a BSIT degree at the Polytechnic University of the Philippines.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;

import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaLinkedin, FaFacebook, FaGithub, FaArrowDown } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useScroll } from "framer-motion";

import React from "react";

function Hero() {
  const [text] = useTypewriter({
    words: ["John Christian"], // Words you want to type
    loop: 1, // Number of times to loop; set to 0 for infinite loop
    delaySpeed: 1000, // Delay in milliseconds between words
    typeSpeed: 100, // Speed in milliseconds for typing
    deleteSpeed: 50, // Speed in milliseconds for deleting
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen 
        bg-gradient-to-tr from-slate-950 to-slate-800">
      
      <div className="mockup-browser shadow-2xl bg-slate-950 w-[45vh] md:w-[70%] lg:w-[60%] xl:w-[50%] 
        lg:h-[38%] md:h-[34%] xl:h-[34%] h-[32vh]">

        <div className="block sm:hidden mockup-browser-toolbar border-b border-slate-800 pb-2">
          <div className="input">https://jclinaban.vercel.app</div>
        </div>

        <div className="bg-slate-950 flex flex-col text-center items-center justify-center">
              <h1 className="text-lg md:text-2xl font-extrabold font-mono bg-gradient-to-r 
            from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Hello World! I am
              </h1>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-mono bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                <span className="inline-block"> {/* Inline block to keep text and cursor together */}
                  {text}
                  <Cursor cursorBlinking="True" cursorStyle="|" cursorColor="white" />
                </span>
              </h1>

              <h1 className="text-base md:text-lg lg:text-2xl font-bold mt-2 font-mono text-slate-400">
                a BSIT Freshman
              </h1>

              <h1 className="text-sm md:text-lg font-bold font-mono text-slate-400">
                at Polytechnic University of the Philippines
              </h1>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-[60%] md:w-[40%] lg:w-[30%] h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />

      {/* Description Section */}
      <div
        className="mt-2 w-11/12 md:w-[60%] lg:w-[40%] rounded-3xl flex flex-col items-center justify-center p-4">
        <section className="text-center">
          <p className="text-base md:text-lg text-gray-300">
            I have a deep love for learning, especially in the field of computer
            studies, particularly programming.
          </p>
        </section>
      </div>



      {/* Social Media Links */}
      <section className="text-center mt-6">
        <ul className="flex flex-row list-none space-x-4">
          <li className="bg-slate-950 shadow-md rounded-3xl hover:bg-orange-600 hover:rounded-xl 
            transition-all p-3 md:p-4">
            <a href="https://www.facebook.com/profile.php?id=100076374909798">
              <FaFacebook size="32" color="white" />
            </a>
          </li>
          <li className="bg-slate-950 shadow-md rounded-3xl hover:bg-orange-600 hover:rounded-xl 
            transition-all p-3 md:p-4">
            <a href="https://www.linkedin.com/in/john-christian-linaban-9073a7316/">
              <FaLinkedin size="32" color="white" />
            </a>
          </li>
          <li className="bg-slate-950 shadow-md rounded-3xl hover:bg-orange-600 hover:rounded-xl 
            transition-all p-3 md:p-4">
            <a href="https://github.com/JChristian25">
              <FaGithub size="32" color="white" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

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

function Proj() {
  return (
    <div
      id="proj"
      className="bg-gradient-to-tr from-slate-950 to-slate-800 min-h-screen"
    >
      <div className="flex flex-col px-4 py-8">
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl text-white font-mono font-extrabold">
            PROJECTS & RESEARCH
          </h1>
        </section>
      </div>
    </div>
  );
}


function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 to-yellow-500"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <About />
      <Proj />
    </div>
  );
}
export default App;

import { 
  FaReact,
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaPython, 
  FaLinkedin, 
  FaFacebook, 
  FaGithub
} from "react-icons/fa";
import { 
  useTypewriter,
  Cursor
} from "react-simple-typewriter";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { 
  motion,
  useScroll
} from "framer-motion";

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
      
      <div className="mockup-browser shadow-2xl bg-slate-950 w-[50vh] md:w-[70%] lg:w-[60%] xl:w-[50%] 
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
      className="flex flex-col bg-gradient-to-tr from-slate-950 to-slate-800 px-4 py-8"
    >
      {/* Section Title */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent
        font-mono font-extrabold">ABOUT ME</h1>
      </section>
      <div className="flex flex-col items-center justify-center space-y-6">

        <div className="flex flex-col md:flex-row rounded-lg shadow-xl p-4 bg-slate-950 w-[95%] md:w-[80%] items-center">
          <h2 className="text-xl md:text-xl bg-gradient-to-r 
              from-purple-500 to-cyan-400 bg-clip-text text-transparent
              font-mono font-extrabold m-6">Skill & Technologies</h2>
          <div className="flex flex-col">
            <ul className="flex flex-wrap items-center gap-4 m-2">
              <span className="font-bold text-white">Programming</span>
              {[
                <FaPython />, <FaJava />
              ].map((Icon, index) => (
                <li key={index} className="flex items-center justify-center">
                  {React.cloneElement(Icon, { size: 48, color: "white" })}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap items-center gap-6 m-2">
              <span className="font-bold text-white">Web Development</span>
              {[
                <FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />,
                <FaReact />, <RiTailwindCssFill />, <FaBootstrap/>
              ].map((Icon, index) => (
                <li key={index} className="flex items-center justify-center">
                  {React.cloneElement(Icon, { size: 48, color: "white" })}
                </li>
              ))}
            </ul>   
          </div>
        </div>


        <div className="flex flex-col md:flex-row rounded-lg shadow-xl p-4 bg-slate-950 w-[95%] md:w-[80%] items-center">
          <h2 className="
          text-xl md:text-xl bg-gradient-to-r 
              from-purple-500 to-cyan-400 bg-clip-text text-transparent
              font-mono font-extrabold m-6">
            Experience
          </h2>
          <div className="flex-1 md:pl-10">
            <ul className="text-gray-400 font-mono">
              <h3 className="md:text-xl sm:text-lg bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent font-mono font-extrabold">
                Commission on Audit | Information Technology Office (Intern)
              </h3>
              <h4 className="md:text-lg sm:text-sm text-white font-mono font-bold">
                February 2024 - March 2024
              </h4>
              <li>* Assisted on the Development of OJT Information Management System.</li>
              <li>
                * Upgraded the platform of sites for enhanced security, including migrating data from the old to the new site and updating the site’s design:
                <ul className="text-cyan-700 lg:indent-4 indent-2">
                  <li><a href="https://web.coa.gov.ph/iaro/">https://web.coa.gov.ph/iaro/</a></li>
                  <li><a href="https://web.coa.gov.ph/sdg/">https://web.coa.gov.ph/sdg/</a></li>
                  <li><a href="https://web.coa.gov.ph/imp/">https://web.coa.gov.ph/imp/</a></li>
                  <li><a href="https://web.coa.gov.ph/praise/">https://web.coa.gov.ph/praise/</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col md:flex-row rounded-lg shadow-xl p-4 bg-slate-950 w-[95%] md:w-[80%] items-center">
          <h2 className="text-xl md:text-xl bg-gradient-to-r 
              from-purple-500 to-cyan-400 bg-clip-text text-transparent
              font-mono font-extrabold m-6">
            Education
          </h2>
          <div className="flex-1">
            <div className="flex-1 md:pl-10">
              <h3 className="md:text-xl sm:text-lg bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent font-mono font-extrabold">Holy Spirit National High School</h3>
              <h4 className="md:text-lg sm:text-sm text-white font-mono font-semibold">2022-2024 (Grade XI & XII)</h4>
              <p className="md:text-base sm:text-sm text-gray-400 font-mono font-light">
                <i>Graduated with Honors, Best Presenter in Student Open Academic
                Research (SOAR), Awardee in Work Immersion, Awardee for Innovation.</i> 
              </p>
              
              <hr className="w-[100%] h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              
              <h3 className="md:text-xl sm:text-lg bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent font-mono font-extrabold  ">Garden of Life School</h3>
              <h4 className="md:text-lg sm:text-sm text-white font-mono font-semibold">2028-2021 (Grade VII - X)</h4>
              <p className="md:text-base sm:text-sm text-gray-400 font-mono font-light">
                <i>Graduated with Honors.</i>
              </p>

            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row rounded-lg shadow-xl p-4 bg-slate-950 w-[95%] md:w-[80%] items-center">
          <h2 className="text-xl md:text-xl bg-gradient-to-r 
              from-purple-500 to-cyan-400 bg-clip-text text-transparent
              font-mono font-extrabold m-6">
            Certifications
          </h2>
          <div className="flex-1">
            <div className="flex-1 md:pl-10">  
              <ul className="flex md:items-start sm:items-center flex-col">
                <li><a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/04464f492056d29bed756fa1ae58b7de2f3fff72">DATACAMP - INTRODUCTION TO PYTHON</a></li>
                <li><a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/041e787d4faf44f39016313dc72a213137c9a306">DATACAMP - INTERMEDIATE  PYTHON</a></li>
                <li><a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/1e3c12c1c946cc2672e3cc678673fbd259f453d6">DATACAMP - WEBSCRAPING IN PYTHON</a></li>
                <li><a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/cccfea077835b160d83ba8c4607c0a291fd44ffd">DATACAMP - DATA MANIPULATION WITH PANDAS</a></li>
                <li><a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/1f2b714a69218dbd94af5d4d36820e6a5eb9d6f1">DATACAMP - INTRODUCTION TO CHATGPT</a></li>
                <li><a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/0733066b479ac4e88d7063b9179b7c32a4744aa4">DATACAMP - UNDERSTANDING PROMPT ENGINEERING</a></li>
              </ul>
              <p className="text-gray-400 text-sm text-center mt-2">More to come ^^</p>
            </div>
          </div>
        </div>


      </div>

      {/* Bio Section */}
      <section className="flex flex-col items-center mt-8 px-4">
        <hr className="w-2/3 h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h2 className="text-xl md:text-2xl bg-gradient-to-r from-orange-600 to-yellow-500 
            bg-clip-text text-transparent
            font-mono font-extrabold mb-4">A Short Bio...</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 md:text-lg text-justify indent-4 font-mono">
            I'm currently pursuing a Bachelor's degree in Information Technology. My journey began when I was 9 years old and first discovered programming with Visual Basic 6.0. I immediately fell in love with it! Learning how to create programs was fascinating to me, and it sparked my curiosity to explore more. Over time, I learned various programming languages and technologies. 

            However, I eventually stopped actively learning programming around the age of 13, and only dabbled in it occasionally. Then, during my Work Immersion in Senior High School, my passion for programming was reignited. I resumed my studies in programming and everything related to computer science, and now I'm learning at a faster pace than ever before!
          </p>
        </div>
      </section>
    </div>
  );
}

function Proj() {
  return (
    <div id="proj" className="bg-gradient-to-br from-slate-950 to-slate-800 min-h-screen">
      <section className="text-center mb-8 px-4 py-8">
          <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent
          font-mono font-extrabold">
            PROJECTS & RESEARCH
          </h1>
      </section>
      <div className="flex items-center justify-center">
        <h2 className="text-xl text-white font-mono">(Placeholder)</h2>
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
      <Proj />
      <About />
    </div>
  );
}
export default App;
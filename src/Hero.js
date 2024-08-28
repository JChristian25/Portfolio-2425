import { FaLinkedin, FaFacebook, FaGithub, FaArrowDown } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";


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
      <div className="bg-slate-950 shadow-2xl w-11/12 md:w-[70%] lg:w-[60%] xl:w-[50%] 
        md:h-[35%] sm:h-[25%]  rounded-3xl flex flex-col items-center justify-center p-6">
        <section className="text-center">
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
          <h1
            className="text-base md:text-lg lg:text-2xl font-bold mt-2 font-mono text-slate-400">
            a BSIT Freshman
          </h1>
          <h1
            className="text-sm md:text-lg font-bold font-mono text-slate-400">
            at Polytechnic University of the Philippines
          </h1>
        </section>
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

export default Hero;

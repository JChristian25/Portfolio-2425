import { FaLinkedin, FaFacebook, FaGithub, FaArrowDown } from "react-icons/fa";


function Hero() {
  return(
    <div className="flex flex-col items-center justify-center
      h-screen bg-gradient-to-tr from-slate-950
        to-slate-800">
          <div className="bg-slate-950 shadow-2xl w-[60%] h-[35%] rounded-3xl flex flex-col items-center justify-center">
              <section className="text-center">
                <h1 className="text-2xl font-extrabold font-mono bg-gradient-to-r
                from-purple-500 to-cyan-400 bg-clip-text
                  text-transparent">
                  Hello World! I am
                </h1>          
                <h1 className="text-6xl font-extrabold font-mono bg-gradient-to-r
                from-orange-600 to-yellow-500 bg-clip-text
                  text-transparent">
                  John Christian
                </h1>
                <h1 className="text-2xl font-bold mt-2
                font-mono text-slate-400">
                  a BSIT Freshmen
                </h1>
                <h1 className="text-lg font-bold font-mono
                text-slate-400">
                  at Polytechnic University of the Philippines
                </h1>
              </section>
          </div>

          <hr class="w-[40%] h-1 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>

          <div className="mt-2 w-[30%] rounded-3xl flex flex-col items-center justify-center">
            <section className="text-center">
                <p className="text-lg text-gray-300">
                  I have a deep love for learning, especially in the field of computer studies, particularly programming.
                </p>
              </section>
          </div>

          

          <section className="text-center mt-6 ">
            <ul className="flex flex-row list-none space-x-4">
              <li className="bg-slate-950 shadow-md rounded-3xl hover:bg-orange-600 hover:rounded-xl transition-all p-4"><a href="https://www.facebook.com/profile.php?id=100076374909798"><FaFacebook size="32" color="white"/></a></li>
              <li className="bg-slate-950 shadow-md rounded-3xl hover:bg-orange-600 hover:rounded-xl transition-all p-4"><a href="https://www.linkedin.com/in/john-christian-linaban-9073a7316/"><FaLinkedin size="32" color="white"/></a></li>
              <li className="bg-slate-950 shadow-md rounded-3xl hover:bg-orange-600 hover:rounded-xl transition-all p-4"><a href="https://github.com/JChristian25"><FaGithub size="32" color="white"/></a></li>
            </ul>       
          </section>
      </div>
  );
}

export default Hero;

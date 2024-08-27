function Nav() {
  return (
    <div
      className="flex xl:h-20 items-center justify-center py-4 w-full 
      bg-gradient-to-l from-black to-slate-950 shadow-xl text-white"
    >
      <div className="flex items-center justify-center md:justify-between w-full px-4">
        {/* Logo and Contact Information */}
        <div className="flex flex-col md:mr-6 sm:text-center">
          <h2
            className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text 
            text-transparent text-3xl font-extrabold font-mono text-center md:text-start"
          >
            JeyZ.dev
          </h2>
          <p
            className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text 
            text-transparent text-sm font-light font-mono text-center md:text-start"
          >
            jcl.void@outlook.com
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex flex-row space-x-6 md:space-x-12">
          <li>
            <a
              href="./"
              className="hover:text-orange-600 hover:text-2xl text-xl transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="hover:text-orange-600 hover:text-2xl text-xl transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#proj"
              className="hover:text-orange-600 hover:text-2xl text-xl transition-all"
            >
              Projects & Research
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

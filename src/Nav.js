function Nav() {
    return (
      <div className="flex h-20 items-center justify-center
            p-4 w-full bg-gradient-to-l from-black
            to-slate-950 shadow-xl text-white">
        <div className="flex justify-between mx-4 w-full">
          {/* Navigation Links */}
          <ul className="flex flex-row space-x-12">
            <li>
              <a href="./" className="hover:text-orange-600 hover:text-3xl text-2xl
               transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#about-me" className="hover:text-orange-600 hover:text-3xl text-2xl
                transition-all">
                About
              </a>
            </li>
            <li>
              <a href="./" className="hover:text-orange-600 hover:text-3xl text-2xl
                transition-all">
                Projects & Research
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Nav;

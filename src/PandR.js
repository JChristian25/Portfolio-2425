function SectOne() {
    return (
      <div className="flex flex-col md:flex-row justify-around items-center md:items-stretch">
        {/* Technologies Section */}
        <div className="bg-slate-950 rounded-xl mx-2 shadow-lg hover:bg-slate-900 hover:rounded-3xl transition-all my-4 h-[60vh] md:h-[80vh] w-[90%] md:w-[30%] flex justify-center items-center">
          <h1 className="text-xl p-8 text-white font-mono font-extrabold">
            Technologies
          </h1>
        </div>
  
        {/* Project Description Section */}
        <div className="bg-slate-950 rounded-xl mx-2 shadow-lg hover:bg-slate-900 hover:rounded-3xl transition-all my-4 h-[60vh] md:h-[80vh] w-[90%] md:w-[70%] flex flex-col justify-center">
          {/* Image could be added here */}
          <h1 className="text-xl md:text-2xl mt-4 pl-8 text-white font-mono font-extrabold">
            QRID-SAMS: Quick Response Code ID-based Student Attendance Monitoring System
          </h1>
          <hr className="w-[40%] h-1 ml-8 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
          <p className="text-white text-base md:text-lg pl-8">
            Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum in another
          </p>
        </div>
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
          <div className="flex flex-col items-center justify-center">
            <SectOne />
          </div>
        </div>
      </div>
    );
  }
  
  export default Proj;
  
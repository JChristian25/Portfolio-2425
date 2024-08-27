

function SectOne() {
    return (
        <div className="flex flex-row justify-around">
            <div className="bg-slate-950 rounded-xl mx-2 shadow-lg hover:bg-slate-900 hover:rounded-3xl transition-all my-4 h-[80vh] w-[30%] flex justify-center">
                <h1 className="text-2xl p-8 text-white font-mono font-extrabold">
                    Technologies
                </h1>
            </div>
            <div className="bg-slate-950 flex-col rounded-xl mx-2 shadow-lg hover:bg-slate-900 hover:rounded-3xl transition-all my-4 h-[80vh] w-[70%] flex justify-center">
                
                {/*Image here*/}
                <h1 className="text-4xl mt-4 pl-8 text-white font-mono font-extrabold">
                    QRID-SAMS: Quick Response Code ID-based Student Attendance Monitoring System
                </h1>
                <hr class="w-[40%] h-1 ml-8  my-2 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
                <p className="text-white text-lg pl-8">
                Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum   in another             
                </p>
            </div>
        </div>
    );
}

function Proj () {
    return (
    <div className="bg-gradient-to-tr from-slate-950 to-slate-800 ">
        <div className="flex flex-col px-4 py-8">
            <section className="text-center mb-8">
                <h1 className="text-6xl text-white font-mono font-extrabold">PROJECTS & RESEARCH</h1>
            </section>
            <div className="flex flex-col items-center justify-center">
                <SectOne />
                <SectOne />
                <SectOne />
                <SectOne />
            </div>
        </div>
     </div>
    );
}

export default Proj
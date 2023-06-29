import home_page1 from "../../assets/home_page1.png"
import Navbar from "../navbar/Navbar"
import logo_big from "../../assets/logo_big.svg"


const Container1 = () => {
    return (
        <div className='h-screen relative'>

            <div className="h-full">
                <img className="h-full object-cover" src={home_page1} alt="alt" />
            </div>

            <div className="absolute inset-0 bg-slate-950/60 flex flex-col ">
                <Navbar />

                <div className="flex-1 flex justify-center items-center flex-col">
                    <img src={logo_big} alt="img" />
                    <p className="text-lg text-white mt-10 mb-14 font-semibold">КУРСЫ СОВРЕМЕННЫХ ПРОФЕССИЙ</p>
                    <button className="border text-lg text-customYellow py-4 px-12 relative group">
                        <span className="group-hover:opacity-0 transition-all ">LEARN MORE</span>
                        <span className="absolute right-0 left-0 bottom-0 bg-customYellow  text-black flex justify-center items-center h-0 group-hover:h-full transition-all overflow-hidden opacity-0 group-hover:opacity-100">LEARN MORE</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Container1
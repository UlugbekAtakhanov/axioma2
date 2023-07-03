import home_page1 from "../../assets/home_page1.png"
import Navbar from "../navbar/Navbar"
import logo_big from "../../assets/logo_big.svg"
import YellowButton from "../YellowButton"
import { motion } from "framer-motion"


const Container1 = () => {
    return (
        <div className='h-screen relative'>

            <div className="h-full">
                <img className="h-full object-cover" src={home_page1} alt="alt" />
            </div>

            <div className="absolute inset-0 bg-slate-950/60 flex flex-col ">
                <Navbar />

                <div className="flex-1 flex justify-center items-center flex-col">
                    <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4, delay: 3.5, type: "spring", stiffness: 150 }}
                        src={logo_big} alt="img" />
                    <p className="text-lg text-white mt-10 mb-14 font-semibold">КУРСЫ СОВРЕМЕННЫХ ПРОФЕССИЙ</p>
                    <YellowButton title="LEARN MORE" />
                </div>

            </div>

        </div>
    )
}

export default Container1
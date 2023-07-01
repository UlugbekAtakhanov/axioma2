import { motion } from "framer-motion"
import fields1 from "../../assets/fields1.jpg"

const Container2 = () => {
    return (
        <div className="main-container py-[80px]">

            <div className="text-white mb-16 ml-14">
                <h1 className="saira text-5xl">OUR</h1>
                <h1 className="sonsie text-3xl">COURSES</h1>
            </div>

            <div className="flex h-screen ml-14">
                <ul className="flex-1">
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">COMPUTER LITERACY</motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">3DS MAX & AUTOCAD </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">WEB PROGRAMMING </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">PRO DESIGN </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">FOUNDATION </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">PYTHON </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">BACK-END </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">ANDROID & IOS PROGRAMMING </motion.li>
                    <motion.li whileHover={{ x: 35, scale: 1.1, color: "#F8EB25" }} transition={{ type: "spring", stiffness: 150, delay: 0 }} className=" text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer">IT-ENGLISH </motion.li>
                </ul>
                <div className="flex-1 flex justify-center items-start">
                    <img className="w-[75%] object-cover" src={fields1} alt="img" />
                </div>
            </div>

            <button className="border border-customYellow text-lg text-customYellow py-4 px-12 relative group ml-14">
                <span className="group-hover:opacity-0 transition-all ">ВСЕ ПОДРОБНОСТИ</span>
                <span className="absolute right-0 left-0 bottom-0 bg-customYellow  text-black flex justify-center items-center h-0 group-hover:h-full transition-all overflow-hidden opacity-0 group-hover:opacity-100">ВСЕ ПОДРОБНОСТИ</span>
            </button>

        </div>
    )
}

export default Container2

import { motion } from "framer-motion"

interface YellowButtonProps {
    title: string
}
const YellowButton = ({ title }: YellowButtonProps) => {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} className="border border-customYellow text-lg text-customYellow py-4 px-12 relative group">
            <span className="group-hover:opacity-0 transition-all ">{title}</span>
            <span className="absolute right-0 left-0 bottom-0 bg-customYellow  text-black flex justify-center items-center h-0 group-hover:h-full transition-all overflow-hidden opacity-0 group-hover:opacity-100">{title}</span>
        </motion.button>
    )
}

export default YellowButton
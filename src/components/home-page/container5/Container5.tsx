
import { useState } from "react"
import { motion } from "framer-motion"

import t1 from "../../../assets/t1.png"
import t2 from "../../../assets/t2.png"
import t3 from "../../../assets/t3.png"
import t4 from "../../../assets/t4.png"
import t5 from "../../../assets/t5.png"

const list = [
    { id: 1, img: t1, title: "lorem 123", desc: "lorem lorem lorem lorem", position: false },
    { id: 2, img: t2, title: "lorem 123", desc: "lorem lorem lorem lorem", position: true },
    { id: 3, img: t3, title: "lorem 123", desc: "lorem lorem lorem lorem", position: false },
    { id: 4, img: t4, title: "lorem 123", desc: "lorem lorem lorem lorem", position: true },
    { id: 5, img: t5, title: "lorem 123", desc: "lorem lorem lorem lorem", position: false },
    { id: 1, img: t1, title: "lorem 123", desc: "lorem lorem lorem lorem", position: true },
    { id: 2, img: t2, title: "lorem 123", desc: "lorem lorem lorem lorem", position: false },
    { id: 3, img: t3, title: "lorem 123", desc: "lorem lorem lorem lorem", position: true },
    { id: 4, img: t4, title: "lorem 123", desc: "lorem lorem lorem lorem", position: false },
    { id: 5, img: t5, title: "lorem 123", desc: "lorem lorem lorem lorem", position: true },
]

const Container5 = () => {
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState(list)

    const prevHandler = () => {
        setCount(prev => prev - 100)
        const newArr = arr.map(item => ({ ...item, position: !item.position }))
        setArr(newArr)
    }

    const nextHandler = () => {
        setCount(prev => prev + 100)
        const newArr = arr.map(item => ({ ...item, position: !item.position }))
        setArr(newArr)
    }

    return (
        <div className="main-container py-[80px]">

            <div className="text-white mb-16 ml-14">
                <h1 className="saira text-5xl">OUR TEAM</h1>
            </div>

            <div className="w-[270px]">
                <motion.div className="flex items-start w-screen">
                    {arr.map((item, index) => (
                        <motion.div animate={{
                            translateX: `-${count}%`,
                            translateY: item.position ? 40 : 0
                        }} transition={{ type: "spring" }} key={index}
                            className="relative shrink-0 w-[270px] p-2">
                            <img className="w-full" src={item.img} alt="img" />
                            <div className="text-white absolute inset-0 bg-gradient-to-t from-black flex flex-col justify-end p-4">
                                <p className="text-lg font-semibold">{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="text-white space-x-4 mt-10">
                <button disabled={count <= 0} onClick={prevHandler} className="cursor-pointer hover:text-white/50 disabled:text-white/50 disabled:cursor-auto"><i className="fa-solid fa-chevron-left"></i></button>
                <button disabled={count >= (list.length - 1) * 100} onClick={nextHandler} className="cursor-pointer hover:text-white/50 disabled:text-white/50 disabled:cursor-auto"><i className="fa-solid fa-chevron-right"></i></button>
            </div>

        </div >
    )
}

export default Container5
import classNames from "classnames"
import { motion } from "framer-motion"
import { Fragment, useState } from "react"
import c3 from "../../../assets/c3.png"
import fields1 from "../../../assets/fields1.jpg"
import YellowButton from "../../YellowButton"
import Card from "./Card"
import List from "./List"

const arr = [
    { id: 1, title: "COMPUTER LITERACY", img: fields1 },
    { id: 2, title: "3DS MAX & AUTOCAD", img: c3 },
    { id: 3, title: "WEB PROGRAMMING", img: fields1 },
    { id: 4, title: "PRO DESIGN", img: c3 },
    { id: 5, title: " FOUNDATION", img: fields1 },
    { id: 6, title: "PYTHON ", img: c3 },
    { id: 7, title: " BACK - END", img: fields1 },
    { id: 8, title: "ANDROID & IOS PROGRAMMING", img: fields1 },
    { id: 9, title: "IT - ENGLISH", img: c3 },
]


const Container2 = () => {
    const [isInViewId, setIsInViewId] = useState<number | null>(null)

    return (
        <div className="main-container py-[80px]">

            <div className="text-white mb-16 ml-14">
                <h1 className="saira text-5xl">OUR</h1>
                <h1 className="sonsie text-3xl">COURSES</h1>
            </div>

            <div className="flex ml-14 mb-12 items-start">
                <ul className="flex-1 py-[50vh]">
                    {arr.map((item) => (
                        <li key={item.id} className="">
                            <List itemId={item.id} setIsInViewId={setIsInViewId}>
                                {item.title}
                            </List>
                        </li>
                    ))}
                </ul>

                <div className="flex-1 p-4 sticky top-0 flex h-screen items-center">
                    <div className="w-full aspect-square text-white rounded-3xl overflow-hidden">
                        <Card gradient="from-slate-900 to-black">
                            {arr.map((item) => (
                                <Fragment key={item.id}>
                                    {isInViewId === item.id ? <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} src={item.img} alt="img" className={classNames(
                                        "w-full h-full rounded-3xl",
                                    )} /> : null}
                                </Fragment>
                            ))}
                        </Card>
                    </div>
                </div>

            </div>

            <div className="ml-14">
                <YellowButton title="ВСЕ ПОДРОБНОСТИ" />
            </div>

        </div>
    )
}

export default Container2
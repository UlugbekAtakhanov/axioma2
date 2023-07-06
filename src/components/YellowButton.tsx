
import classNames from "classnames"
import { animate, motion, stagger, useAnimate } from "framer-motion"

const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

interface YellowButtonProps {
    title: string
}

type AnimationSequenceProps = Parameters<typeof animate>[0]

const YellowButton = ({ title }: YellowButtonProps) => {

    const [scope, animate] = useAnimate()

    const animateHandler = () => {
        const sparkles = Array.from({ length: 20 })

        const sparklesAnimation: AnimationSequenceProps = sparkles.map((_, index) => ([
            `#sparkle-${index}`,
            {
                x: randomNumberBetween(-100, 100),
                y: randomNumberBetween(-100, 100),
                scale: randomNumberBetween(1.5, 2.5),
                opacity: 1
            },
            { duration: .3, at: "<" }
        ]))
        const sparklesAnimationFadeOut: AnimationSequenceProps = sparkles.map((_, index) => ([
            `#sparkle-${index}`,
            {
                opacity: 0,
                scale: 0
            },
            { duration: .3, at: "<" }
        ]))
        const sparklesAnimationReset: AnimationSequenceProps = sparkles.map((_, index) => ([
            `#sparkle-${index}`,
            {
                x: 0,
                y: 0,
            },
            { duration: .0001 }
        ]))

        animate([
            ...sparklesAnimationReset,
            ["#letter", { y: -30 }, { duration: .3, delay: stagger(.05) }],
            ...sparklesAnimation,
            ["#letter", { y: 0 }, { duration: .000001, at: "<" }],
            ...sparklesAnimationFadeOut,
        ])
    }
    return (
        <motion.button ref={scope} onClick={animateHandler} whileTap={{ scale: .9 }} className="border border-customYellow text-lg text-customYellow hover:bg-customYellow/30 py-4 px-12 relative group">
            <span className="sr-only">{title}</span>
            <div className="overflow-hidden">
                {title.split("").map((item, index) => (
                    <span
                        id="letter"
                        key={index}
                        data-letter={item}
                        className={classNames(
                            "inline-block relative after:absolute after:left-0 after:top-[108%] after:content-[attr(data-letter)]",
                            item === " " ? "mr-2" : ""
                        )}
                        aria-hidden>{item}</span>
                ))}
            </div>
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, index) => (
                    <i key={index} id={`sparkle-${index}`} className="fa-solid text-[4px] text-customYellow opacity-0 fa-star absolute top-1/2 left-1/2 "></i>
                ))}
            </div>
        </motion.button>
    )
}

export default YellowButton
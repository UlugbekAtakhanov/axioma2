import { useEffect } from "react"
import classNames from 'classnames'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ListProps {
    children: React.ReactNode
    itemId: number
    setIsInViewId: React.Dispatch<React.SetStateAction<number | null>>
}

const List = ({ children, itemId, setIsInViewId }: ListProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { margin: "-50% 0px -50% 0px" })
    useEffect(() => {
        if (inView) {
            setIsInViewId(itemId)
        }
    }, [inView])

    return (
        <p ref={ref} className={classNames(
            "text-wrap py-14 text-border tracking-wider text-5xl font-bold  mb-4 cursor-pointer",
            inView ? "!text-customYellow" : "text-black"
        )}>{children}</p>
    )
}

export default List
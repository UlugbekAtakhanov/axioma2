import classNames from "classnames"

interface CardProps {
    gradient: string
    children: React.ReactNode
}
const Card = ({ gradient, children }: CardProps) => {
    return (
        <div className={classNames(
            "bg-gradient-to-br h-full w-full",
            gradient
        )}>{children}</div>
    )
}

export default Card
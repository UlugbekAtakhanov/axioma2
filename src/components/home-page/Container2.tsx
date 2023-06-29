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
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">COMPUTER LITERACY</li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">3DS MAX & AUTOCAD </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">WEB PROGRAMMING </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">PRO DESIGN </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">FOUNDATION </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">PYTHON </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">BACK-END </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">ANDROID & IOS PROGRAMMING </li>
                    <li className="text-border tracking-wider text-5xl font-bold  mb-4 hover:text-customYellow transition-all duration-500 cursor-pointer hover:pl-8">IT-ENGLISH </li>
                </ul>
                <div className="flex-1 flex justify-center items-start">
                    <img className="w-[75%] object-cover" src={fields1} alt="img" />
                </div>
            </div>

            <button className="border border-customYellow text-lg text-customYellow py-4 px-12 relative group">
                <span className="group-hover:opacity-0 transition-all ">ВСЕ ПОДРОБНОСТИ</span>
                <span className="absolute right-0 left-0 bottom-0 bg-customYellow  text-black flex justify-center items-center h-0 group-hover:h-full transition-all overflow-hidden opacity-0 group-hover:opacity-100">ВСЕ ПОДРОБНОСТИ</span>
            </button>

        </div>
    )
}

export default Container2
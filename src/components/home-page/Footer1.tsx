
const Footer1 = () => {
    return (
        <div className='main-container mt-2 grid grid-cols-3 items-center py-[50px] border-b border-customYellow'>

            <div className="text-white ml-14">
                <h1 className="saira text-5xl">JOIN OUR</h1>
                <h1 className="sonsie text-3xl">NEWSLETTER</h1>
            </div>

            <div className="text-customYellow divide-y divide-customYellow flex flex-col items-center">
                <p className=" p-1 text-lg">Свяжитесь с нами:</p>
                <p className=" p-1 text-xl"><i className="fa-solid fa-phone"></i>+9989 95 300 11 99</p>
            </div>

            <div className="flex justify-center">
                <button className="border border-customYellow text-customYellow py-4 px-12 relative group mr-14">
                    <span className="group-hover:opacity-0 transition-all ">SIGN UP</span>
                    <span className="absolute right-0 left-0 bottom-0 bg-customYellow  text-black flex justify-center items-center h-0 group-hover:h-full transition-all overflow-hidden opacity-0 group-hover:opacity-100">SIGN UP</span>
                </button>
            </div>


        </div>
    )
}

export default Footer1
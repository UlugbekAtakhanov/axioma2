import fields1 from "../../assets/fields1.jpg"

const Container3 = () => {
    return (
        <div className="main-container py-[80px]">

            <div className="text-white mb-16 ml-14">
                <h1 className="saira text-5xl">OUR</h1>
                <h1 className="sonsie text-3xl">achievements</h1>
            </div>

            <div className="w-[60%] ml-auto">
                <h1 className="text-customYellow text-2xl mb-4">Sorem ipsum dolor sit amet</h1>
                <p className="text-white mb-8">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                <button className="border border-customYellow text-lg text-customYellow py-4 px-12 relative group">
                    <span className="group-hover:opacity-0 transition-all ">УЗНАТЬ БОЛЬШЕ</span>
                    <span className="absolute right-0 left-0 bottom-0 bg-customYellow  text-black flex justify-center items-center h-0 group-hover:h-full transition-all overflow-hidden opacity-0 group-hover:opacity-100">УЗНАТЬ БОЛЬШЕ</span>
                </button>
            </div>

        </div>
    )
}

export default Container3
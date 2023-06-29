
import t1 from "../../assets/t1.png"
import t2 from "../../assets/t2.png"
import t3 from "../../assets/t3.png"
import t4 from "../../assets/t4.png"
import t5 from "../../assets/t5.png"

const Container5 = () => {
    return (
        <div className="main-container py-[80px]">

            <div className="text-white mb-16 ml-14">
                <h1 className="saira text-5xl">OUR TEAM</h1>
            </div>

            <div className="flex items-start gap-7">
                <div className="relative">
                    <img className="w-full" src={t1} alt="img" />
                    <div className="text-white absolute inset-0 flex flex-col justify-end p-4">
                        <p className="text-lg font-semibold">lorem ipson</p>
                        <p>lorem ipson</p>
                    </div>
                </div>
                <div className="relative mt-12">
                    <img className="w-full" src={t2} alt="img" />
                    <div className="text-white absolute inset-0 flex flex-col justify-end p-4">
                        <p className="text-lg font-semibold">lorem ipson</p>
                        <p>lorem ipson</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full" src={t3} alt="img" />
                    <div className="text-white absolute inset-0 flex flex-col justify-end p-4">
                        <p className="text-lg font-semibold">lorem ipson</p>
                        <p>lorem ipson</p>
                    </div>
                </div>
                <div className="relative mt-12">
                    <img className="w-full" src={t4} alt="img" />
                    <div className="text-white absolute inset-0 flex flex-col justify-end p-4">
                        <p className="text-lg font-semibold">lorem ipson</p>
                        <p>lorem ipson</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full" src={t5} alt="img" />
                    <div className="text-white absolute inset-0 flex flex-col justify-end p-4">
                        <p className="text-lg font-semibold">lorem ipson</p>
                        <p>lorem ipson</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Container5
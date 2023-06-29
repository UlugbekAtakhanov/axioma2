
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"

const Container4 = () => {
    return (
        <div className="main-container py-[80px]">

            <div className="text-white mb-16 ml-14">
                <h1 className="saira text-5xl">OUR</h1>
                <h1 className="sonsie text-3xl">achievements</h1>
            </div>

            <div className="flex gap-7">
                <div><img className="w-full object-cover" src={c1} alt="img" /></div>
                <div><img className="w-full object-cover" src={c3} alt="img" /></div>
                <div className="self-end"><img className="w-full object-cover" src={c2} alt="img" /></div>
            </div>

        </div>
    )
}

export default Container4
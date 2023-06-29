
const Footer2 = () => {
    return (
        <div className='main-container mt-2 grid grid-cols-3 items-start py-[50px] border-b border-customYellow'>

            <div className=" text-white ml-14 flex flex-col ">
                <p className="text-lg text-customYellow">О центре AXIOMA LINE</p>
                <a className="hover:underline" href="#">Бесплатный открытый урок</a>
                <a className="hover:underline" href="#">Стажировка</a>
                <a className="hover:underline" href="#">Контакты</a>
            </div>

            <div className=" text-white flex flex-col pl-20">
                <p className="text-lg text-customYellow">Поддержка</p>
                <a className="hover:underline" href="#">Написать менеджеру</a>
                <a className="hover:underline" href="#">Заявка на консультацию</a>
                <a className="hover:underline" href="#">Жалобы и пожелания</a>
            </div>

            <div className=" text-white flex flex-col pl-16">
                <p className="text-lg text-customYellow">Наши андреса:</p>
                <p>г.Наманган, </p>
                <p> ул. Алишера Навои дом 62</p>
            </div>

        </div>
    )
}

export default Footer2
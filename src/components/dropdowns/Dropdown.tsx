import { Menu, Transition } from '@headlessui/react'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import arrow_down from "../../assets/arrow_down.svg"


const dropdownList = [
    { title: "КОМПЬЮТЕРНАЯ ГРАММОТНОСТЬ", icon: <i className="fa-solid fa-computer"></i>, url: "/reception" },
    { title: "3DS MAX & AUTOCAD", icon: <DocumentDuplicateIcon />, url: "/reception/list" },
    { title: "ВЕБ ПРОГРАММИРОВАНИЕ", icon: <i className="fa-solid fa-code"></i>, url: "/statistics" },
    { title: "PYTHON", icon: <i className="fa-brands fa-python"></i>, url: "/statistics" },
    { title: "FOUNDATION", icon: <i className="fa-brands fa-slack"></i>, url: "/statistics" },
    { title: "BACK-END", icon: <i className="fa-solid fa-sitemap"></i>, url: "/statistics" },
    { title: "PRO DESIGN", icon: <i className="fa-brands fa-figma"></i>, url: "/statistics" },
    { title: "ANDROID & IOS РАЗРАБОТКА", icon: <i className="fa-brands fa-android"></i>, url: "/statistics" },
    { title: "IT-ENGLISH", icon: <i className="fa-solid fa-flag-usa"></i>, url: "/statistics" },
]

const menuItemClass = (active: boolean, disabled: boolean) => ` ${disabled ? "text-gray-400  pointer-events-none" : active ? "bg-black text-customYellow" : null} flex items-center gap-2 cursor-pointer m-[1px] rounded-md py-2 px-2 whitespace-nowrap text-sm`


const Dropdown = () => {
    return (
        <div className=''>
            <Menu as="div" className="relative">

                {({ open }) => (
                    <>
                        <Menu.Button className="rounded-md flex items-center gap-1 hover:text-customYellow ">
                            КУРСЫ
                            <img src={arrow_down} alt="img" className={`${open ? "-rotate-180" : "rotate-0"} transition-all`} />
                        </Menu.Button>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items static className="grid grid-cols-3 w-max absolute left-0 z-10 top-0 mt-2 bg-[#1F1F1F] text-white p-1 rounded-md outline-none ">

                                {dropdownList.map((item, index) => (
                                    <Menu.Item key={index} >
                                        {({ active, disabled }) => (
                                            <Link to={item.url} className={menuItemClass(active, disabled)}>
                                                <span className='w-4'>
                                                    {item.icon}
                                                </span>
                                                {item.title}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}

                            </Menu.Items>
                        </Transition>
                    </>
                )}

            </Menu>

        </div >
    )
}

export default Dropdown
import { useState, useEffect } from "react"
import { createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import HomePageLayout from './layouts/HomePageLayout'
import HomePage from './pages/HomePage'

import { motion } from "framer-motion"

import logo from "./assets/logo.png"

const App = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3000);
	}, [])

	return (
		<div>
			<motion.div animate={{ opacity: isLoading ? 1 : 0, pointerEvents: "none" }} className="fixed inset-0 z-10 bg-black flex justify-center items-center overflow-hidden">
				<motion.div
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{ duration: 2, ease: "linear", repeat: Infinity }}
					className=" border-8 border-t-customYellow border-r-customYellow w-[200px] h-[200px] p-3 rounded-full flex justify-center items-center">
				</motion.div>
				<img className="absolute " src={logo} alt="img" />
			</motion.div>

			<Outlet />

		</div>
	)
}

export default App

export const routes = createRoutesFromElements(
	<Route path="/" element={<App />} >

		{/* home page */}
		<Route path="/" element={<HomePageLayout />}>
			<Route index element={<HomePage />} />
		</Route>

	</Route>
)

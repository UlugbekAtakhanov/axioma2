import { createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import HomePageLayout from './layouts/HomePageLayout'
import HomePage from './pages/HomePage'

const App = () => {
	return (
		<div>
			<Outlet />
			{/* <div className="h-screen"></div> */}
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

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
const TopPage = lazy(() => import("pages/TopPage"))
const App = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/myPage" element={<TopPage />} />
						<Route path="/" element={<TopPage />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	)
}

export default App

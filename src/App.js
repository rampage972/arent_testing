//LIB
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

//COMPONENT
import ScrollTopButton from "components/ButtonScrollTop"
import Footer from "components/Footer"
import MyRecord from "pages/MyRecord"
import Header from "./components/Header"

//STYLE
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "react-circular-progressbar/dist/styles.css"

//Lazy Component
const TopPage = lazy(() => import("pages/TopPage"))

const App = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/myPage" element={<TopPage />} />
						<Route path="/myPage" element={<TopPage />} />
						<Route path="/myRecord" element={<MyRecord />} />
						<Route path="/" element={<TopPage />} />
					</Routes>
					<ScrollTopButton />
					<Footer />
				</BrowserRouter>
			</Suspense>
		</div>
	)
}

export default App

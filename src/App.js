//LIB
import { lazy, Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"

//COMPONENT
import ScrollTopButton from "components/ButtonScrollTop"
import Footer from "components/Footer"
import Column from "pages/Column"
import MyRecord from "pages/MyRecord"
import Header from "./components/Header"

//STYLE
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "react-circular-progressbar/dist/styles.css"
import "./App.css"

//Lazy Component
const TopPage = lazy(() => import("pages/TopPage"))

const App = () => {
	const location = useLocation()

	return (
		<div>
			<Suspense
				fallback={
					<div className="w-100 h-100 content__middle">
						<div className="spinner-border text-warning" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				}
			>
				<Header />
				<TransitionGroup>
					<CSSTransition key={location.pathname} classNames="fade" timeout={300}>
						<Routes>
							<Route path="/myPage" element={<TopPage />} />
							<Route path="/myPage" element={<TopPage />} />
							<Route path="/myRecord" element={<MyRecord />} />
							<Route path="/column" element={<Column />} />
							<Route path="/" element={<TopPage />} />
						</Routes>
					</CSSTransition>
				</TransitionGroup>
				<ScrollTopButton />
				<Footer />
			</Suspense>
		</div>
	)
}

export default App

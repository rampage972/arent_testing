import { useState } from "react"
import { FaAngleUp } from "react-icons/fa"

export default function ScrollTopButton() {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	window.addEventListener("scroll", toggleVisible)

	return (
		<div className="scrollTop__btn content__middle" style={{ display: visible ? "flex" : "none" }}>
			<FaAngleUp onClick={scrollToTop} style={{ fontSize: "1.2em" }} />
		</div>
	)
}

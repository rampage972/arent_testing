import { useEffect, useState } from "react"
import { Fade } from "react-reveal"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
	{ text: "自分の記録", icon: "/asset/image/icon_memo.png", url: "/myRecord" },
	{ text: "チャレンジ", icon: "/asset/image/icon_challenge.png" },
	{ text: "お知らせ", icon: "/asset/image/icon_info.png" },
]

const dropdownItems = [
	{ text: "自分の記録", url: "/myRecord" },
	{ text: "体重グラフ", url: "" },
	{ text: "目標", url: "" },
	{ text: "選択中のコース", url: "" },
	{ text: "コラム一覧", url: "/column" },
	{ text: "設定", url: "" },
]

export default function Header() {
	const location = useLocation()
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (e.target.id !== "dropDownEl") {
				setIsOpenMenu(false)
			}
		}
		document.addEventListener("click", handleClickOutside, true)
		return () => {
			document.removeEventListener("click", handleClickOutside, true)
		}
	}, [])

	return (
		<div style={{ backgroundColor: "#414141", height: 64 }}>
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<Link to="/myPage">
							<img src="/asset/image/logo.png" alt="" height={64} />
						</Link>
					</div>
					<div className="col-md-7 position-relative d-flex justify-content-between align-items-center">
						{menuItems.map((item, key) => (
							<Link to={item.url} key={key} className="text-decoration-none">
								<img src={item.icon} alt="" className="me-2" />
								<span style={{ color: location.pathname.includes(item.url) ? "#ff963c" : "white", transition: "0.3s ease-in-out" }}>{item.text}</span>
							</Link>
						))}
						<div className="btn-group">
							<Fade key={isOpenMenu}>
								<img id="dropDownEl" onClick={() => setIsOpenMenu(!isOpenMenu)} src={`/asset/image/${isOpenMenu ? "icon_close" : "icon_menu"}.png`} alt="" style={{ cursor: "pointer", transition: "0.3s ease-in-out" }} />
							</Fade>
						</div>
						<Fade when={isOpenMenu}>
							<div className="dropdown__menu__container" style={{ backgroundColor: "#777777", width: 280 }}>
								<ul className="list-unstyled mb-0" style={{ listStyleType: "none" }}>
									{dropdownItems.map((item, key) => (
										<div key={key}>
											<li className=" dropdown__menu__item">
												<Link to={item.url} key={key} className="text-decoration-none text-white ">
													{item.text}
												</Link>
											</li>
										</div>
									))}
								</ul>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	)
}

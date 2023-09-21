//LIB
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import DarkUnica from "highcharts/themes/dark-unica"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"

//CONSTANT
import { optionChartBodyFatExample } from "constant"
import { useState } from "react"
import { Fade } from "react-reveal"

DarkUnica(Highcharts)

const iconItems = [
	{ text: "morning", icon: "/asset/image/icon_knife.png" },
	{ text: "lunch", icon: "/asset/image/icon_knife.png" },
	{ text: "dinner", icon: "/asset/image/icon_knife.png" },
	{ text: "snack", icon: "/asset/image/icon_cup.png" },
]

const galleryItems = [
	{ text: "05.21.Morning", imgSrc: "/asset/photo/m01.jpg" },
	{ text: "05.21.Lunch", imgSrc: "/asset/photo/l03.jpg" },
	{ text: "05.21.Dinner", imgSrc: "/asset/photo/d01.jpg" },
	{ text: "05.21.Snack", imgSrc: "/asset/photo/l01.jpg" },
	{ text: "05.20.Morning", imgSrc: "/asset/photo/m01.jpg" },
	{ text: "05.20.Lunch", imgSrc: "/asset/photo/l02.jpg" },
	{ text: "05.20.Dinner", imgSrc: "/asset/photo/d02.jpg" },
	{ text: "05.20.Snack", imgSrc: "/asset/photo/s01.jpg" },
]

export default function TopPage() {
	const [galleryList, setGalleryList] = useState(galleryItems)

	const handleLoadMoreGallery = () => {
		setGalleryList((props) => {
			return props.concat(galleryItems)
		})
	}
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-5 m-0 p-0">
						<Fade>
							<div style={{ height: 312, overflow: "hidden", backgroundImage: "url('/asset/image/banner.jpg')", backgroundPosition: "center" }} className="position-relative content__middle">
								<div className="" style={{ width: 181 }}>
									<CircularProgressbarWithChildren value={75} styles={buildStyles({ pathColor: "white", trailColor: "transparent" })} strokeWidth={3}>
										<div className="d-flex align-items-end text-white">
											<span style={{ fontSize: "1em" }} className="me-2">
												05/21
											</span>
											<span style={{ fontSize: "2em", lineHeight: "1.1em" }}>75%</span>
										</div>
									</CircularProgressbarWithChildren>
								</div>
							</div>
						</Fade>
					</div>
					<div className="col-md-7 m-0 p-0">
						<Fade delay={100}>
							<HighchartsReact highcharts={Highcharts} options={optionChartBodyFatExample} style={{ maxHeight: 312, overflow: "hidden" }} />
						</Fade>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				<div className="row mb-4">
					<div className="col-12 d-flex justify-content-around">
						{iconItems.map((item, key) => (
							<Fade bottom delay={100 * key} key={key}>
								<div style={{ height: 136, width: 136 }} className="position-relative">
									<svg viewBox="0 1 444 511" height="136px" width="136px" y="7em">
										<defs>
											<linearGradient id="gradient">
												<stop offset="0%" stopColor="#FFCC21" />
												<stop offset="100%" stopColor="#FF963C" />
											</linearGradient>
										</defs>
										<polygon fill="url(#gradient)" points="222.054,6.667 5.548,131.667 5.548,381.667 222.054,506.667 438.561,381.667 438.561,131.667" />
									</svg>
									<div className="absolute__middle text-center">
										<img src={item.icon} alt="" style={{ display: "block", margin: "0 auto" }} />
										<span className="text-white text-capitalize">{item.text}</span>
									</div>
								</div>
							</Fade>
						))}
					</div>
				</div>
				<div className="row overflow-y-auto mb-4" style={{ maxHeight: 660 }}>
					{galleryList.map((item, key) => (
						<div className="col-md-3 mt-3" key={key}>
							<Fade bottom delay={100 * (key % 8)}>
								<div className="position-relative overflow-hidden" style={{ height: 250 }}>
									<img src={item.imgSrc} alt="" className="absolute__middle h-100" style={{ width: "120%" }} />
									<div>
										<span className="position-absolute pt-2 pb-2 pe-3 ps-2 text-white" style={{ backgroundColor: "#FFCC21", bottom: 0 }}>
											{item.text}
										</span>
									</div>
								</div>
							</Fade>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-12 text-center mt-4 mb-5">
						<div className="content__middle loadMore__btn" onClick={handleLoadMoreGallery}>
							<span className="text-white">記録をもっと見る</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

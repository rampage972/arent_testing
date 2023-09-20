//LIB
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import DarkUnica from "highcharts/themes/dark-unica"
//STYLE
import "./index.css"
import { optionChartBodyFatExample } from "constant"
import { createExerciseList } from "constant"
import { createDiaryList } from "constant"

DarkUnica(Highcharts)

const recordList = [
	{
		imgSrc: "/asset/photo/MyRecommend-1.jpg",
		title: "BODY RECORD",
		buttonText: "自分のカラダの記録",
	},
	{
		imgSrc: "/asset/photo/MyRecommend-2.jpg",
		title: "MY EXERCISE",
		buttonText: "自分の運動の記録",
	},
	{
		imgSrc: "/asset/photo/MyRecommend-3.jpg",
		title: "MY DIARY",
		buttonText: "自分の日記",
	},
]

export default function MyRecord() {
	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 record__list">
					{recordList.map((item, key) => (
						<div key={key} className="record__container  position-relative mt-5 mb-5">
							<div className="record__body" style={{ background: `url(${item.imgSrc}) no-repeat center` }}></div>
							<div className=" absolute__middle">
								<p className="content__text  w-100">{item.title}</p>
								<div className="content__btn">{item.buttonText}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="row mb-5">
				<div className="col-12 mb-5">
					<HighchartsReact highcharts={Highcharts} options={optionChartBodyFatExample} style={{ maxHeight: 312, overflow: "hidden" }} />
				</div>

				<div className="col-12 mb-5">
					<div style={{ backgroundColor: "#414141" }}>
						<div className="table__body">
							<div className="table__title">
								<div className="d-flex">
									<h3 className="table__title--text">MY EXERCISE</h3>
									<h3 className="table__title--date">2021.05.21</h3>
								</div>
							</div>
						</div>
						<div className="table__content">
							<table className="w-100">
								<tbody>
									{createExerciseList(20).map((item, key) => (
										<tr key={key}>
											<td>
												<div className="text-white table__column">
													<div className="d-flex w-100">
														<span className="me-2">●</span>
														<div style={{ flexGrow: 1 }}>
															<div className="d-flex justify-content-between">
																<p className="mb-1 table__column__title mb-1">{item.title}</p>
																<p className="table__column__duration mb-0">{item.duration + "min"}</p>
															</div>
															<p className="table__column__calories mb-1">{item.calories + "kcal"}</p>
														</div>
													</div>
												</div>
											</td>
											<td>
												<div className="text-white table__column">
													<div className="d-flex w-100">
														<span className="me-2">●</span>
														<div style={{ flexGrow: 1 }}>
															<div className="d-flex justify-content-between">
																<p className="mb-1 table__column__title mb-1">{item.title}</p>
																<p className="table__column__duration mb-0">{item.duration + "min"}</p>
															</div>
															<p className="table__column__calories mb-1">{item.calories + "kcal"}</p>
														</div>
													</div>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<p style={{ fontSize: 22, color: "#414141" }}> MY DIARY</p>
				{createDiaryList(8).map((item, key) => (
					<div className="col-md-3 mt-3">
						<div className="diary__container">
							<div style={{ padding: 16 }}>
								<p style={{ fontSize: 18, width: 140 }}>{item.date}</p>
								<p className="diary__desc">{item.desc}</p>
							</div>
						</div>
					</div>
				))}
				<div className="col-12 text-center mt-5 mb-5">
					<div className="content__middle loadMore__btn">
						<span className="text-white">自分の日記をもっと見る</span>
					</div>
				</div>
			</div>
		</div>
	)
}

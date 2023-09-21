//LIB
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import DarkUnica from "highcharts/themes/dark-unica"

//STYLE
import { createDiaryList, createExerciseList, optionChartBodyWeightFatExample } from "constant"
import { useState } from "react"
import { Fade } from "react-reveal"
import "./index.css"

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
const listButtonChart = ["日", "週", "月", "年"]

export default function MyRecord() {
	const [diaryList, setDiaryList] = useState(() => {
		return createDiaryList(8)
	})
	const [typeChart, setTypeChart] = useState("年")

	const handleLoadMoreDiary = () => {
		setDiaryList((props) => {
			const result = props.concat(createDiaryList(8))
			return result
		})
	}

	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 record__list">
					{recordList.map((item, key) => (
						<Fade key={key} bottom delay={100 * key}>
							<div className="record__container  position-relative mt-5 mb-5">
								<div className="record__body" style={{ background: `url(${item.imgSrc}) no-repeat center` }}></div>
								<div className=" absolute__middle">
									<p className="content__text  w-100">{item.title}</p>
									<div className="content__btn">{item.buttonText}</div>
								</div>
							</div>
						</Fade>
					))}
				</div>
			</div>
			<div className="row">
				<div className="col-12 mb-5">
					<Fade bottom delay={300}>
						<div className="position-relative">
							<div className="record__chart__title">
								<div className="table__title">
									<div className="d-flex">
										<p className="table__title--text">BODY RECORD</p>
										<p className="table__title--date">2021.05.21</p>
									</div>
								</div>
							</div>
							<HighchartsReact highcharts={Highcharts} options={optionChartBodyWeightFatExample} style={{ maxHeight: 312, overflow: "hidden" }} />
							<div className="record__chart__btn__container">
								<div className="d-flex">
									{listButtonChart.map((item, key) => (
										<div className={`record__chart__btn__item ${typeChart === item && "active"}`} key={key} onClick={() => setTypeChart(item)}>
											<span className="record__chart__btn__text">{item}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</Fade>
				</div>

				<div className="col-12 mb-5">
					<div style={{ backgroundColor: "#414141" }}>
						<div className="table__body">
							<div className="table__title">
								<div className="d-flex">
									<p className="table__title--text mb-0">MY EXERCISE</p>
									<p className="table__title--date mb-0">2021.05.21</p>
								</div>
							</div>
						</div>
						<div className="table__content">
							<table className="w-100">
								<tbody>
									{createExerciseList(20).map((item, key) => (
										<tr key={key} style={{ display: "table" }} className="w-100">
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
			</div>

			<p style={{ fontSize: 22, color: "#414141" }}> MY DIARY</p>
			<div className="row overflow-y-auto" style={{ maxHeight: 660 }}>
				{diaryList.map((item, key) => (
					<div className="col-md-3 mt-3" key={key}>
						<div className="diary__container">
							<div style={{ padding: 16 }}>
								<p style={{ fontSize: 18, width: 140 }}>{item.date}</p>
								<p className="diary__desc">{item.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="row">
				<div className="col-12 text-center mt-5 mb-5">
					<div className="content__middle loadMore__btn" onClick={handleLoadMoreDiary}>
						<span className="text-white">自分の日記をもっと見る</span>
					</div>
				</div>
			</div>
		</div>
	)
}

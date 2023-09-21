//FUNCTION
import { createColumnList } from "constant"

//STYLE
import { useState } from "react"
import "./index.css"

const recommendedList = [
	{
		title: "RECOMMENDED COLUMN",
		subText: "オススメ",
	},
	{
		title: "RECOMMENDED DIET",
		subText: "ダイエット",
	},
	{
		title: "RECOMMENDED BEAUTY",
		subText: "美容",
	},
	{
		title: "RECOMMENDED HEALTH",
		subText: "健康",
	},
]

export default function Column() {
	const [columnList, setColumnList] = useState(() => {
		return createColumnList(8)
	})

	const handleLoadMoreColumn = () => {
		setColumnList((props) => {
			const result = props.concat(createColumnList(8))
			return result
		})
	}

	return (
		<div className="container">
			<div className="row mb-4">
				{recommendedList.map((item, key) => (
					<div key={key} className="col-md-3" style={{ marginTop: 56 }}>
						<div style={{ backgroundColor: " #2E2E2E" }}>
							<p className="recommend__title">{item.title}</p>
							<p className="recommend__desc">{item.subText}</p>
						</div>
					</div>
				))}
			</div>
			<div className="row mb-4 overflow-y-auto" style={{ maxHeight: 600 }}>
				{columnList.map((item, key) => (
					<div className="col-md-3 mt-3" key={key}>
						<div className="position-relative overflow-hidden" style={{ height: 200 }}>
							<img src={item.imgSrc} alt="" className="absolute__middle h-100" style={{ width: "120%" }} />
							<div>
								<span className="position-absolute pt-2 pb-2 pe-3 ps-2 text-white" style={{ backgroundColor: "#FFCC21", bottom: 0 }}>
									{item.date}
								</span>
							</div>
						</div>
						<p className="gallery__title">{item.title}</p>
						{item.tags.map((tag, key) => (
							<span key={key} className="me-3 gallery__tag">
								#{tag}
							</span>
						))}
					</div>
				))}
			</div>
			<div className="row mb-4">
				<div className="col-12 text-center mb-5">
					<div className="content__middle loadMore__btn" onClick={handleLoadMoreColumn}>
						<span className="text-white">コラムをもっと見る</span>
					</div>
				</div>
			</div>
		</div>
	)
}

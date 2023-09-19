import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import DarkUnica from "highcharts/themes/dark-unica"
DarkUnica(Highcharts)
const options = {
	credits: {
		enabled: false,
	},
	chart: {
		type: "line",
		height: 320,
		spacing: [10, 40, 15, 40],
	},
	title: {
		text: "",
	},

	xAxis: {
		reversed: false,
		gridLineWidth: 1,
	},
	yAxis: {
		visible: false,
		categories: false,
		title: {
			enabled: false,
			text: "Custom with <b>simple</b> <i>markup</i>",
			style: {
				fontWeight: "normal",
			},
		},
	},
	legend: { enabled: false },
	series: [
		{
			name: "Body fat",
			data: [6, 6, 2, 1, 3, 6],
			color: "#ffcc21",
			lineWidth: 4,
			marker: {
				radius: 8,
			},
		},
		{
			name: "Body weight",
			data: [6, 2, 1, 4, 3, 2],
			lineWidth: 4,
			marker: {
				radius: 8,
			},
			color: "#8fe9d0",
		},
	],
}
export default function TopPage() {
	return (
		<div className="container-fluid p-0">
			<div className="row">
				<div className="col-md-5 m-0 p-0">
					<div style={{ height: 320, overflow: "hidden" }} className="position-relative">
						<img src="/asset/image/banner.jpg" alt="" className="w-100 position-absolute" style={{ top: "-50%" }} />
					</div>
				</div>
				<div className="col-md-7 m-0 p-0">
					<HighchartsReact highcharts={Highcharts} options={options} style={{ maxHeight: 320, overflow: "hidden" }} />
				</div>
			</div>
		</div>
	)
}

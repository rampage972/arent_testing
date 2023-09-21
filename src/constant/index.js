const randomArr = (length) => {
	const result = []
	const min = 1
	const max = 20
	for (let i = 0; i < length; i++) result.push(Math.floor(Math.random() * (max - min) + min))
	return result
}

const categoriesXExample = ["6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5"]

export const optionChartBodyFatExample = {
	credits: {
		enabled: false,
	},
	chart: {
		type: "line",
		backgroundColor: "#414141",
		height: 312,
		spacing: [10, 40, 15, 40],
	},
	title: {
		text: "",
	},

	xAxis: {
		gridLineWidth: 1,
		labels: {
			formatter: function (props) {
				return categoriesXExample[props.pos] + "月"
			},
		},
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
			data: randomArr(12),
			color: "#ffcc21",
			lineWidth: 4,
			marker: { symbol: "circle", radius: 8 },
		},
		{
			name: "Body weight",
			data: randomArr(12),
			color: "#8fe9d0",
			lineWidth: 4,
			marker: { symbol: "circle", radius: 8 },
		},
	],
}

export const optionChartBodyWeightFatExample = {
	credits: {
		enabled: false,
	},
	chart: {
		type: "line",
		backgroundColor: "#414141",
		height: 312,
		spacing: [60, 40, 60, 40],
		
	},
	title: {
		text: "",
	},

	xAxis: {
		gridLineWidth: 1,
		labels: {
			formatter: function (props) {
				return categoriesXExample[props.pos] + "月"
			},
		},
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
			data: randomArr(12),
			color: "#ffcc21",
			lineWidth: 4,
			marker: { symbol: "circle", radius: 8 },
		},
		{
			name: "Body weight",
			data: randomArr(12),
			color: "#8fe9d0",
			lineWidth: 4,
			marker: { symbol: "circle", radius: 8 },
		},
	],
}

export const createExerciseList = (length) => {
	const result = []
	for (let i = 0; i < length; i++)
		result.push({
			title: "家事全般（立位・軽い）",
			duration: 10,
			calories: 26,
		})
	return result
}

export const createDiaryList = (length) => {
	const result = []
	for (let i = 0; i < length; i++)
		result.push({
			date: "2021.05.21 23:25",
			desc: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`,
		})
	return result
}

export const createColumnList = (length) => {
	const result = []
	for (let i = 0; i < length; i++) result.push({ date: "2021.05.17 23:25", imgSrc: `/asset/photo/column-${i + 1}.jpg`, title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ", tags: ["魚料理", "和食", "DHA"] })
	return result
}

const menuItems = ["会員登録", "運営会社", "利用規約", "個人情報の取扱について", "特定商取引法に基づく表記", "お問い合わせ"]

export default function Footer() {
	return (
		<div className="d-flex align-items-center" style={{ backgroundColor: "#414141", height: 128 }}>
			<div className="container">
				<div className="row">
					<div className="col d-flex  justify-content-around">
						{menuItems.map((item, key) => (
							<span className="text-white" key={key}>{item}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

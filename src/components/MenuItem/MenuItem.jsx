import "./MenuItem.css";

function MenuItem({ title, price, tags }) {
	return (
		<div className="app__menuItem">
			<div className="app__menuItem-head">
				{/* item name */}
				<div className="app__menuItem-name">
					<p className="p__cormorant" style={{ color: "#DCCA87" }}>
						{title}
					</p>
				</div>

				{/* seprator dash */}
				<div className="app__menuItem-dash" />

				{/* item price */}
				<div className="app__menuItem-price">
					<p className="p__cormorant">{price}</p>
				</div>
			</div>

			{/* item sub tags */}
			<div className="app__menuItem-sub">
				<p className="p__opensans" style={{ color: "#AAA" }}>
					{tags}
				</p>
			</div>
		</div>
	);
}

export default MenuItem;

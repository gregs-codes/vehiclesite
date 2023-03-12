const Car = ({ car }) => {
	const {
		id,
		make,
		model,
		submodel,
		engine,
		transmission,
		year,
		color,
		colorHex,
		image } = car
	return (
			<li className="car" key={car.id}>
				<img src={image} alt={make} />
				{/*<a style={`background-color:${colorHex}`} href='#'>{colorHex}</a>*/}
				<p>{year}&nbsp;{make}&nbsp;{model}</p>
				<p>{engine}&nbsp;{transmission}</p>
			<span style={{ background: car.colorHex, width: `10px`, height: `10px` }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<p>{color}</p>
			</li>
		
	);
}
export default Car;
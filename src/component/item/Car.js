import React from 'react';
import '../../cars.css'


function Car({ car }) {
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
			<li className="car" key={id}>
				<img src={image} alt={make} />
				{/*<a style={`background-color:${colorHex}`} href='#'>{colorHex}</a>*/}
				<h3>{year}&nbsp;{make}&nbsp;{model}</h3>
				<dd>{engine}&nbsp;{transmission}</dd>
				<dd style={{ background: car.colorHex, width: `10px`, height: `10px` }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</dd>
				<dd>{color}-{colorHex}</dd>
			</li>
		
	);
}
export default Car;
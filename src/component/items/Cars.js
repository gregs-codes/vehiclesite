import React from 'react';
import Car from '../item/Car'
import '../../cars.css'

function Cars({ data }) {
	const { cars } = data

return (
<ul className="carList">
    {cars.map(car => (
      <Car car={car} />
      ))}
</ul>
);
}

export default Cars;
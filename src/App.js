import Car from './Car'
import './App.css';
import './cars.css'
import useFetch from './useFetch'

function App() {

  const { data, loading, error } = useFetch('https://yegorka78.github.io/gscars/data/db.json')
  if (loading) return <h1> LOADING ... </h1>
  if (error) console.log(error);

  const cars = data.cars

  return (
    <div className="App">
      <h1>Here it is</h1>
      <ul className="carList">
      {cars.map(car => (
				<Car car={car} />
			))}
      
      </ul>
    </div>
  );
}

export default App;

import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Test from './components/Test';
function App() {

  const [movies, setMovies] = useState([])
  const [chartData, setChartData] = useState([])
  const [person, setPerson] = useState({})
  return (
    <div className='contained'>
      <Navbar updateMovies = {setMovies} updateChartData = {setChartData} updatePerson = {setPerson}/>
      <Test movies = {movies} chartData = {chartData} person = {person}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Test from './components/Test';
function App() {

  const [movies, setMovies] = useState([])

  return (
    <div className='contained'>
      <Navbar updateMovies = {setMovies}/>
      <Test movies = {movies}/>
    </div>
  );
}

export default App;

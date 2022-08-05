import { useEffect, useState } from 'react';
import './App.css';
import './components/Loading'
import Loading from './components/Loading';
import Tours from './components/Tours';

function App() {
  const url ='https://course-api.com/react-tours-project'

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }


  const fetchTours = async ()=>{
    setLoading(true);
    const response = await fetch(url)
    const tours = await response.json()
    setTours(tours)
    setLoading(false)
    console.log(tours)
  }

  useEffect(()=>{
    fetchTours()
  }, [])
  if(loading){
    return(
      <Loading />
    )
  }
  if (tours.length ===0){
    return(
      <div className='no-tours-div'>
        <h1>No more tours</h1>
        <button className='reset-btn' onClick={()=>fetchTours() }>Reset</button>
      </div>
    )
  }
  return (
    <body>
      <div className='container'>
        <h1>Our Tours</h1>
        <Tours tours={tours} removeTour={removeTour} />
      </div>

    </body>
  );
}

export default App;

import { useEffect } from 'react'
import Home from './pages/Home/Home';
import './App.css'

function App() {

  const apiKey = '75b3638de1381b405aed785be9389af3'

  const getData = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
      const data = await res.json();
      console.log(data);
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <>
      <Home />
    </>
  )
}

export default App

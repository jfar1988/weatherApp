
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import { useEffect, useState } from 'react';
import './App.css'
import Loading from './components/Loading';

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const success = pos =>{
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const apiKey = '49997984f7cac5c6c5601df5413de70f'
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`)      
      .then(res => {
        setWeather(res.data)
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const faranheit = (celsius *(9/5) + 32).toFixed(1)
        setTemp({celsius,faranheit})

      })
      .catch(err => console.log())
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
        <WeatherCard
      weather= {weather}
      temp = {temp}
      />:
      <Loading/>
      }
    </div>
  )
}

export default App

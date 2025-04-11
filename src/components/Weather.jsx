import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="search-icon" />
      </div>

      <img src={clear_icon} alt="clear clouds" className='weather-icon'/>
      <p className='temperature'>28°C</p>
      <p className='location'>Alor Setar</p>

      <div className="weather-data">
        <div className="col">
            <img src={humidity_icon} alt="humidity icon" />
            <div>
                <p>50%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={wind_icon} alt="wind icon" />
            <div>
                <p>4.2 Km/hr</p>
                <span>Wind Speed</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather

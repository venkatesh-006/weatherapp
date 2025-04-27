import React, { useEffect, useState } from 'react'
import './Wheather.css'
const Wheather = () => {

    const [input, setInput] = useState('')
    const [weather, setWeather] = useState("")
    const [error, setError] = useState("")
    const apiKey = '3ba2a0935853819956da40d44f2f8bfc';

    const handleclick = () => {
        fetchdata();
    }

    const fetchdata = async () => {
        if (!input) {
            setWeather(null);
            return;
        }
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            console.log(data);
            setWeather(data)

        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to fetch a quote.');
        }
    };


    return (
        <div>
            <h1>Weather Dashboard</h1>
            <input type="text" value={input} id="city" onChange={(e) => setInput(e.target.value)} placeholder="Enter City Name" />
            <button onClick={handleclick} id="getWeatherbtn">Get Weather</button>

            {weather && <div>
                <h3>Weather in {weather.name}</h3>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Weather: {weather.weather[0].description}</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div> }
        </div>
    )
}

export default Wheather
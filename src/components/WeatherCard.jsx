import React, { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  const [itCelsius, setItCelsius] = useState(true);
  
  const handleClick=()=>setItCelsius(!itCelsius)
  return (
    <article className="card">
      <header className="card__header">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">
          {weather?.name}, {weather?.sys.country}
        </h2>
      </header>
      <section className="card__icon-container">
        <img
          className="card__icon"
          src={
            weather &&
            `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
          }
          alt="image_weather"
        />
      </section>
      <section className="card__info">
        <h3 className="card__description">
          "{weather?.weather[0].description}"
        </h3>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__span">Wind Speed</span> {weather?.wind.speed}
          </li>
          <li className="card__item">
            <span className="card__span">Clounds</span> {weather?.clouds.all} %
          </li>
          <li className="card__item">
            <span className="card__span">Pressure</span>{" "}
            {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <h3 className="card__temp">
          {itCelsius ? `${temp?.celsius} °C` : `${temp?.faranheit} °F`}
        </h3>
      <footer className="card__footer">
        <button onClick={handleClick} className="card__btn">Change to {itCelsius?'°F':'°C'}</button>
      </footer>
    </article>
  );
};

export default WeatherCard;

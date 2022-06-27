import { useEffect, useState } from "react";
import styled from "styled-components";

//Styled-components
const WeatherWidget = styled.div`
  padding: 20px;

  p {
    margin: 0;
  }

  .date {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #6096ba;
  }

  .day {
    margin-bottom: 10px;
  }

  .degree-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 50px;
      font-weight: 700;
    }

    img {
      width: 180px;
      margin-right: 10px;
    }

    @media screen and (max-width: 576px) {
      p {
        font-size: 40px;
      }

      img {
        width: 150px;
      }
    }
  }
`;

//Component
const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [degree, setDegree] = useState(0);

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  );
  const date = new Date().getDate();
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  );

  //Functions for Fetch API
  const success = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data.name);
        setCountry(data.sys.country);
        setIconUrl(
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
        );
        setDegree(Math.floor(data.main.temp));
      });
  };

  const error = () => {
    alert("If you want to use Weather Widget, please allow us.");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <WeatherWidget>
      <p className="date">
        {month} {date}
      </p>
      <p className="day">{day}</p>
      <p className="city">
        {city}, {country}
      </p>
      <div className="degree-icon">
        <p>{degree}&#8451;</p>
        <img src={iconUrl} alt="weather-img" />
      </div>
    </WeatherWidget>
  );
};

export default Weather;

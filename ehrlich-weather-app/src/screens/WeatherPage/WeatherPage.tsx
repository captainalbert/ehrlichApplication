// WeatherPage screen of the website

// react
import { useEffect, useState } from "react";

// package
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// style
import "./WeatherPage.css";

// component
import WeatherTable from "./WeatherComponents/WeatherTable";
import Button from "../../components/Button/Button";

// shared
import { ButtonTexts } from "../../shared/enums/contants";

const WeatherPage = () => {
  const { location } = useParams(); // extract location params from router
  const navigate = useNavigate(); // for handling navigation
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "5610e3dc5ba197fe827701f8821b4269";

  // Function to fetch geolocation data
  const fetchGeolocationData = async () => {
    try {
      const geolocationApiKey = API_KEY;
      const geoLocationApi = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${geolocationApiKey}`;
      const geolocationResponse = await axios.get(geoLocationApi);
      if (geolocationResponse.data.length === 0) return; // No need to call fetchWeatherData if there's no geoLocation.

      const { lat, lon } = geolocationResponse.data[0]; // Extract latitude and longitude from the geolocation response

      fetchWeatherData(lat, lon); // Use latitude and longitude to fetch weather data
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
  };

  // Function to fetch weather data from the weather API
  const fetchWeatherData = async (latitude: string, longitude: string) => {
    try {
      const weatherApiKey = API_KEY;
      const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`;
      const weatherResponse = await axios.get(weatherApi);

      // Update the state with the fetched weather data
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (location === "") return; // If location if empty, no need to fetch data
    fetchGeolocationData(); // Call the fetchGeolocationData function when the component mounts
  }, [location]);

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in the history stack
  };

  return (
    <div className={"weather-page"}>
      {!weatherData ? (
        <div>Loading...</div>
      ) : (
        <div>
          <WeatherTable weatherData={weatherData} />
          <Button
            title={ButtonTexts.BACK}
            onClick={handleGoBack}
            style={{ float: "right", marginTop: 60 }}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherPage;

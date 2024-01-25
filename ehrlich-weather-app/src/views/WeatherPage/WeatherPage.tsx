import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./WeatherPage.css";
import WeatherTable from "./WeatherComponents/WeatherTable";

const WeatherPage = () => {
  const { location } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch geolocation data
  const fetchGeolocationData = async () => {
    try {
      const geolocationApiKey = "5610e3dc5ba197fe827701f8821b4269";
      const geolocationResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${geolocationApiKey}`
      );

      // Extract latitude and longitude from the geolocation response
      // const { latitude, longitude } = geolocationResponse.data;

      console.log("geolocationResponse.data", geolocationResponse.data);

      const { lat, lon } = geolocationResponse.data[0];
      // Use latitude and longitude to fetch weather data
      fetchWeatherData(lat, lon);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
  };

  // Function to fetch weather data from the weather API
  const fetchWeatherData = async (latitude: string, longitude: string) => {
    try {
      const weatherApiKey = "5610e3dc5ba197fe827701f8821b4269";
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`
      );

      // Update the state with the fetched weather data
      console.log("weatherResponse.data", weatherResponse.data);
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    // Call the fetchGeolocationData function when the component mounts
    fetchGeolocationData();
  }, [location]);

  return (
    <div className={"weather-page"}>
      {!weatherData ? (
        <div>Loading...</div>
      ) : (
        <WeatherTable weatherData={weatherData} />
      )}
    </div>
  );
};

export default WeatherPage;

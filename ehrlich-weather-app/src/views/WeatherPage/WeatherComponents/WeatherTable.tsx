// WeatherTable.js

import "./WeatherTable.css"; // Import the CSS file

import { kelvinToFahrenheit } from "../../../utils/helper/temperatureConverter";
import { formatDateToday } from "../../../utils/helper/dateToday";

interface WeatherTableProps {
  weatherData: any;
}

const WeatherTable = ({ weatherData }: WeatherTableProps) => {
  const { weather, main } = weatherData;
  const { description, main: weatherMain } = weather[0];
  const { temp, humidity, pressure } = main;

  const formattedDateToday = formatDateToday();

  return (
    <table>
      <thead>
        <tr>
          <th>Date (mm/dd/yy)</th>
          <th>Temperature (F)</th>
          <th className="desktop-view">Description</th>
          <th className="desktop-view">Main</th>
          <th className="desktop-view">Pressure</th>
          <th className="desktop-view">Humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{formattedDateToday}</td>
          <td>{Math.round(kelvinToFahrenheit(temp))}</td>
          <td className="desktop-view">{description}</td>
          <td className="desktop-view">{weatherMain}</td>
          <td className="desktop-view">{pressure}</td>
          <td className="desktop-view">{humidity}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;

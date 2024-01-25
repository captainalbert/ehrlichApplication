// WeatherTable.js

import "./WeatherTable.css"; // Import the CSS file

import { kelvinToFahrenheit } from "../../../shared/utils/helper/temperatureConverter";
import { formatDateToday } from "../../../shared/utils/helper/dateToday";
import { Labels } from "../../../shared/enums/contants";

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
          <th>{Labels.DATE}</th>
          <th>{Labels.TEMPERATURE}</th>
          <th className="desktop-view">{Labels.DESCRIPTION}</th>
          <th className="desktop-view">{Labels.MAIN}</th>
          <th className="desktop-view">{Labels.PRESSURE}</th>
          <th className="desktop-view">{Labels.HUMIDITY}</th>
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

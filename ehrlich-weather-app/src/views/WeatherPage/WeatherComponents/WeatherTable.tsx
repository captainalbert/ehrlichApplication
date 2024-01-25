// WeatherTable.js

import "./WeatherTable.css"; // Import the CSS file

interface WeatherTableProps {
  weatherData: any;
}

const WeatherTable = ({ weatherData }: WeatherTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date (mm/dd/yy)</th>
          <th>Temperature</th>
          <th className="desktop-view">Description</th>
          <th className="desktop-view">Main</th>
          <th className="desktop-view">Pressure</th>
          <th className="desktop-view">Humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2022-01-01</td>
          <td>25°C</td>
          <td className="desktop-view">Clear sky</td>
          <td className="desktop-view">Sunny</td>
          <td className="desktop-view">1015 hPa</td>
          <td className="desktop-view">50%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;

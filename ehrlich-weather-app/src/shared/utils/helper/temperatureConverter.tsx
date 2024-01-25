function kelvinToCelsius(kelvin: number) {
  return kelvin - 273.15;
}

function celsiusToFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

export function kelvinToFahrenheit(kelvin: number) {
  const celsius = kelvinToCelsius(kelvin);
  const fahrenheit = celsiusToFahrenheit(celsius);
  return fahrenheit;
}

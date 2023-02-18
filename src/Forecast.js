import axios from "axios";

export default function Forecast(props) {
  let longtitude = props.longtitude;
  let latitude = props.latitude;
  let apiKey = "2065f51b78f51fb9f65c3557ebb73d5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);

  function callDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function displayForecast(response) {
    let forecastItems = response.data.daily;

    forecastItems.forEach((day, index) => {
      if (index < 6) {
        return callDay(day.time);
      }
    });
  }

  return <div>{displayForecast}</div>;
}

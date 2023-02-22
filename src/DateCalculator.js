import React from "react";

export default function DateCalculator(props) {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = addZero(props.date.getHours());
  let minutes = addZero(props.date.getMinutes());

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}

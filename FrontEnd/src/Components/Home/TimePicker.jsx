import React from "react";

function TimePicker({ minTime, maxTime, stepInMinutes, onChange }) {
  // Parse the input minTime and maxTime values to Date objects

  const minTimeDate = new Date(`1970-01-01T${minTime}`);
  const maxTimeDate = new Date(`1970-01-01T${maxTime}`);

  // Convert the stepInMinutes value to seconds

  const stepInSeconds = stepInMinutes * 60;

  // Create an array of Date objects representing each time option

  const timeOptions = [];
  let currTime = minTimeDate;
  while (currTime <= maxTimeDate) {
    timeOptions.push(new Date(currTime));
    currTime = new Date(currTime.getTime() + stepInSeconds * 1000);
  }

  // Format each Date object into a string for display in the option element

  const formattedTimeOptions = timeOptions.map((time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  });

  return (
    <select onChange={onChange}>
      {formattedTimeOptions.map((timeStr) => (
        <option key={timeStr} value={timeStr}>
          {timeStr}
        </option>
      ))}
    </select>
  );
}
export default TimePicker;

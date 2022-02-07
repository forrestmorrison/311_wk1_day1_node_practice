// import moment here; use this package in each function
var moment = require('moment'); // require

const today = () => {
  // write code for dates.today
  let currentDay = new Date();
  let dayNumber = currentDay.getDay();
  let dayString = "";

  if (dayNumber === 0) {
    dayString = "Sunday";
  } else if (dayNumber === 1) {
    dayString = "Monday";
  } else if (dayNumber === 2) {
    dayString = "Tuesday";
  } else if (dayNumber === 3) {
    dayString = "Wednesday";
  } else if (dayNumber === 4) {
    dayString = "Thursday";
  } else if (dayNumber === 5) {
    dayString = "Friday";
  } else if (dayNumber === 6) {
    dayString = "Saturday";
  }
  return dayString;
}

console.log(today());

const calendar = () => {
  // write code for dates.calendar
  let theDate = moment().format("MMMM D, YYYY");
  console.log(theDate);
  return theDate;
}

const currentTime = () => {
  // write code for dates.currentTime
  let theTime = moment().format("HH:mm:ss A");
  console.log(theTime);
  return theTime;
}

module.exports = {
  today,
  calendar,
  currentTime
}
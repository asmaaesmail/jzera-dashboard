// Digital Clock
setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = "";
  
    // Checking for AM/PM
    if (hours > 12) {
      hours = hours - 12;
      amPm = "م";
    } else if (hours == 0) {
      hours = 12;
      amPm = "ص";
    } else {
      amPm = "ص";
    }
  
    // Prepending 0 if less than 10
    hours = hours > 10 ? hours : "0" + hours;
    minutes = minutes > 10 ? minutes : "0" + minutes;
    seconds = seconds > 10 ? seconds : "0" + seconds;
  
    // Adding the time in the DOM
    document.getElementById(
      "digital-clock"
    ).innerHTML = `${hours}:${minutes}<span>${amPm}</span>`;
  }, 1000);
  
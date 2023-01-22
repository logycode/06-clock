let hours = "";
let minutes = "";
let seconds = "";

setInterval(() => {
  const date = new Date();
  hours = "00" + date.getHours();
  hours = hours.substring(hours.length - 2);

  minutes = "00" + date.getMinutes();
  minutes = minutes.substring(minutes.length - 2);

  seconds = "00" + date.getSeconds();
  seconds = seconds.substring(seconds.length - 2);

  const hoursText = document.createTextNode(hours);
  document.querySelector(".hours").textContent = hoursText.textContent;
  document
    .querySelector(".hand-hours")
    .style.setProperty("--hours", angle(12, hours) + "deg");

  const minutesText = document.createTextNode(minutes);
  document.querySelector(".minutes").textContent = minutesText.textContent;
  document
    .querySelector(".hand-minutes")
    .style.setProperty("--minutes", angle(60, minutes) + "deg");

  const secondsText = document.createTextNode(seconds);
  document.querySelector(".seconds").textContent = secondsText.textContent;
  document
    .querySelector(".hand-seconds")
    .style.setProperty("--seconds", angle(60, seconds) + "deg");
}, 1000);

// blinking separators
setInterval(() => {
  document.querySelectorAll(".colon").forEach((el) => {
    el.classList.toggle("colon-off");
  });
}, 1000);

const angle = (range, dimension) => {
  return (360 / range) * dimension;
};

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

  const minutesText = document.createTextNode(minutes);
  document.querySelector(".minutes").textContent = minutesText.textContent;

  const secondsText = document.createTextNode(seconds);
  document.querySelector(".seconds").textContent = secondsText.textContent;
}, 1000);

// blinking separators
setInterval(() => {
  document.querySelectorAll(".colon").forEach((el) => {
    el.classList.toggle("colon-off");
  });
}, 1000);

// [x] add 0 in front of time digits and use substring (or similar) to always have a two digit display
// todo [] add blinking colons

/* ------- */

// todo [] add analog clock by dynamically setting the angle of the hands so that they can be used with css {transform: rotate}

let hours = "";
let minutes = "";
let seconds = "";

clockInit();

setInterval(() => {
  const date = new Date();

  setTime(date, "hours", hours);
  setTime(date, "minutes", minutes);
  setTime(date, "seconds", seconds);
}, 1000);

// blinking separators
setInterval(() => {
  document.querySelectorAll(".colon").forEach((el) => {
    el.classList.toggle("colon-off");
  });
}, 1000);

function clockInit() {
  console.log("init");

  for (let i = 1; i <= 12; i++) {
    const div = document.createElement("div");
    div.classList.add("hour-indicators");
    document.querySelector(".analog").appendChild(div);
    div.style.transform = "rotate(" + angle(12, i) + "deg) translateX(790%)";
  }
}

function angle(range, dimension) {
  return (360 / range) * dimension;
}

function setTime(date, dimension, output) {
  let range = 0;

  if (dimension === "hours") {
    output = date.getHours();
    range = 12;
  }
  if (dimension === "minutes") {
    output = date.getMinutes();
    range = 60;
  }
  if (dimension === "seconds") {
    output = date.getSeconds();
    range = 60;
  }

  output = "00" + output;
  output = output.substring(output.length - 2);

  const text = document.createTextNode(output);
  document.querySelector("." + dimension).textContent = text.textContent;
  document
    .querySelector(".hand-" + dimension)
    .style.setProperty("--" + dimension, angle(range, output) + "deg");
}

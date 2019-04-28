const e_hour = document.querySelector(".hour-hand");
const e_min = document.querySelector(".min-hand");
const e_sec = document.querySelector(".second-hand");

setInterval(() => changeTime(), 1000); //milliseconds

function changeTime() {
  const date = new Date();

  const sec_deg = (date.getSeconds() / 60) * 360;
  const min_deg = (date.getMinutes() / 60) * 360;
  const hr_deg = (date.getHours() / 12) * 360;

  //temporarily set transition to null when it goes from 360 deg to 0 deg
  sec_deg == 0
    ? (e_sec.style.transition = "null")
    : (e_sec.style.transition = "all 0.8s");
  min_deg == 0
    ? (e_min.style.transition = "null")
    : (e_min.style.transition = "all 0.8s");
  hr_deg == 0
    ? (e_hour.style.transition = "null")
    : (e_hour.style.transition = "all 0.8s");

  e_sec.style.transform = `rotate(${sec_deg + 90}deg)`;
  e_min.style.transform = `rotate(${min_deg + 90}deg)`;
  e_hour.style.transform = `rotate(${hr_deg + 90}deg)`;
}

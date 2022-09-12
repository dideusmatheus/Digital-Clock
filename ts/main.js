let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = checkAM_PM(h);

  //convert 24hr click to 12h clock
  convertAM_PM();

  //add 0 before single digit number
  h = add0(h);
  m = add0(m);
  s = add0(s);

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  //12 hours clock
  hh.style.strokeDashoffset = 440 - (440 * h)/12;
  //60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m)/60;
  //60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s)/60;

  // 360 / 12 = 30
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  // 360 / 60 = 6
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;

  function convertAM_PM() {
    if (h > 12) {
      h = h - 12;
    }
  }

  function add0(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  function checkAM_PM(h){
    if( h >= 12){
        return "PM";
    }
    return "AM";
  }

});

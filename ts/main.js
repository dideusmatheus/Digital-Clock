let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

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

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

  //12 hours clock
  hh.style.strokeDashoffset = 440 - (440 * h)/12;
  //60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m)/60;
  //60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s)/60;

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

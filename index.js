let start = document.getElementById("start-btn");
let reset = document.getElementById("reset-btn");

let minsEl = document.getElementById("minutes");
let secsEl = document.getElementById("seconds");
let rndsEl = document.getElementById("rounds");
let restTime = document.getElementById("rest");
let startTimer = null;
let rnds = rndsEl;
let mins = minsEl;
let secs = secsEl;
function countdown() {
  if (
    mins.value == 0 &&
    secs.value == 0 &&
    rnds.value == 0 &&
    restTime.value == 0
  ) {
    mins.value = 0;
    secs.value = 0;
    rnds.value = 0;
    restTime.value = 0;
  } else if (secs.value == 0 && mins.value == 0 && restTime.value != 0) {
    restTime.value--;
  } else if (secs.value != 0) {
    secs.value--;
  } else if (mins.value != 0 && secs.value == 0) {
    secs.value = 59;
    mins.value--;
  } else if (mins.value == 0 && secs.value == 0 && rnds.value != 0) {
    removeRound();
  } else if (
    mins.value == 0 &&
    secs.value == 0 &&
    restTime.value == 0 &&
    rnds.value != 0
  ) {
    countdown();
  }
}
function stopTimer() {
  clearInterval(startTimer);
}
start.addEventListener("click", function () {
  let userMins = document.getElementById("minutes").value;
  let userSecs = document.getElementById("seconds").value;
  let userRest = document.getElementById("rest").value;
  let userRounds = document.getElementById("rounds").value;

  function startInterval() {
    startTimer = setInterval(function () {
      countdown();
    }, 1000);
  }
  startInterval();
});

reset.addEventListener("click", function () {
  mins.value = 0;
  secs.value = 0;
  rnds.value = 0;
  restTime.value = 0;
  stopTimer();
});

function removeRound() {
  stopTimer();
  rnds.value = rnds.value - 1;
}

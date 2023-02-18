var countDownDate;
var countdownTimer;

document.getElementById("countdown-btn").addEventListener("click", function() {
  countDownDate = new Date().getTime() + 75000;
  countdownTimer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 75)) / 1000);
    document.getElementById("countdown").innerHTML = "Time remaining: " + seconds + "s";
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Time's up!";
    }
  }, 1000);
});

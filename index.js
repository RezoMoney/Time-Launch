const countdownDate = new Date("Feb 1, 2024 16:58:00").getTime();
const x = setInterval(function () {
  const current = new Date().getTime();
  const distance = countdownDate - current;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);

  if (distance < 0) {
    clearInterval(x);
    $("#days").html("00");
    $("#hours").html("00");
    $("#minutes").html("00");
    $("#seconds").html("00");
  }
}, 1000);

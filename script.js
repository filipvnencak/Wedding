//CountDown
var massStart = new Date("July 1, 2023 16:00:00").getTime();
var massEnd = new Date("July 1, 2023 16:40:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = massStart - now;
  var distance2 = massEnd - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countDown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    document.getElementById("countDown").innerHTML = "Omša sa začala";
  }
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = " Už sme manželia";
  }
}, 1000);
// animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

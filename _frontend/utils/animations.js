import $ from "jquery";
import anime from "animejs";

export function fadeInOnReadyElement(selector, classToRemove) {
  $(document).ready(function () {
    $(selector).each(function (i) {
      $(this).animate({ opacity: "1" }, 1000);
    });
  });
}

export function splitTextOnReadyElement(selector) {
  var textWrapper = document.querySelector(selector);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}

export function animationOnHeroMounted(options = {}) {
  splitTextOnReadyElement(".title");
  splitTextOnReadyElement(".subtitle");

  const timeline = anime.timeline();
  timeline
    .add({
      targets: ".title .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".subtitle .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 950,
      delay: (el, i) => 20 * (i + 1),
    })
    .add({
      targets: ".cta",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 900,
    });

  window.onload = function () {
    timeline.play();
  };
}

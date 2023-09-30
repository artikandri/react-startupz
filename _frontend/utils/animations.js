import anime from "animejs";

export function splitTextOnReadyElement(selector) {
  var textWrapper = document.querySelector(selector);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>",
  );
}

export function animationOnHeroMounted() {
  splitTextOnReadyElement(".landing-hero .title");
  splitTextOnReadyElement(".landing-hero .subtitle");

  const timeline = anime.timeline();
  timeline
    .add({
      targets: ".landing-hero .title .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".landing-hero .subtitle .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 950,
      delay: (el, i) => 20 * (i + 1),
    })
    .add({
      targets: ".landing .cta",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 900,
    });

  window.onload = function () {
    timeline.play();
  };
}

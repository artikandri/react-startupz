import $ from "jquery";
import anime from "animejs";

export function fadeInOnReadyElement(selector, classToRemove) {
  $(document).ready(function () {
    $(selector).each(function (i) {
      $(this).animate({ opacity: "1" }, 1000);
    });
  });
}

export function animatePath(options = {}) {
  const config = {
    targets: "path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 3000,
    direction: "alternate",
    loop: true,
  };

  window.onload = function () {
    anime({
      ...config,
      ...options,
    });
  };
}

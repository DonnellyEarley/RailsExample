document.addEventListener("DOMContentLoaded", function () {
  const switchElement = document.getElementById("mode_switch");
  const htmlTag = document.documentElement;

  let isOn = false;

  switchElement.addEventListener("click", function () {
    isOn = !isOn;
    if (isOn) {
      htmlTag.setAttribute("data-bs-theme", "dark");
    } else {
      htmlTag.setAttribute("data-bs-theme", "light");
    }
  });
});
debugger;

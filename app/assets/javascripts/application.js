document.addEventListener("turbo:load", function () {
  const htmlTag = document.documentElement;
  const switchElement = document.getElementById("mode_switch");
  const modeSwitchLabel = document.getElementById("mode_switch_label");

  let isOn = false;

  switchElement.addEventListener("click", function () {
    isOn = !isOn;
    if (isOn) {
      htmlTag.setAttribute("data-bs-theme", "dark");
      modeSwitchLabel.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
      htmlTag.setAttribute("data-bs-theme", "light");
      modeSwitchLabel.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    }
  });
});
// debugger;

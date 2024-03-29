function hasNetwork(online) {
  const element = document.querySelector(".status");

  if (online) {
    element.classList.remove("offline");
    element.classList.add("online");
    element.innerText = "Wifi";
  } else {
    element.classList.remove("online");
    element.classList.add("offline");
    element.innerText = "No -Wifi";
  }
}

window.addEventListener("load", () => {
  hasNetwork(navigator.onLine);

  window.addEventListener("online", () => {
    hasNetwork(true);
  });

  window.addEventListener("offline", () => {
    hasNetwork(false);
  });
});

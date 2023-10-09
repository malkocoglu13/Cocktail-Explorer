
function refreshPage() {
    location.reload();
  }
  // Add a click event listener to the button
  const refreshButton = document.getElementById("refreshButton");
  if (refreshButton) {
    refreshButton.addEventListener("click", refreshPage);
  }
  
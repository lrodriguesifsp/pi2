document.addEventListener("DOMContentLoaded", function () {
  const data = JSON.parse(localStorage.getItem("alert"));

  if (data) {
    const { alertType, alertMessage } = data;
    showAlert(alertMessage, alertType);

    localStorage.removeItem("alert");
  }
});

function login() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}

function sendSOS() {
  document.getElementById("status").innerText = "🚨 Emergency Alert Sent!";
  alert("SOS Sent Successfully!");
}

function logout() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
}

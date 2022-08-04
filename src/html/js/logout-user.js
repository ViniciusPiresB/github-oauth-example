const button = document.getElementById("logout-btn");

button.onclick = () => {
  document.cookie = "userToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  window.location.replace("/");
};

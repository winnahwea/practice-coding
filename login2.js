function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var invalid = document.querySelector(".invalid");

  if (username == "admin" && password == "admin123") {
    return true;
  } else {
    document.getElementById("password").value = "";
    invalid.style.display = "inline-block";
    return false;
  }
}

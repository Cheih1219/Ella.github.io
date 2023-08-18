var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/cat.jpg");
  } else {
    myImage.setAttribute("src", "images/cat1.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "Welcome, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Welcome, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};







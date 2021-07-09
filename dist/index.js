"use strict";
var selectors = {
  container: document.querySelector(".header-container"),
  container_items: document.querySelector(".container-items-todo"),
  inputt: document.querySelector(".inp"),
  buttonMas: document.getElementById("buttonPlus"),
  buttonMinus: document.getElementById("buttonMinus"),
};
var addElement = function (e) {
  var externalSeleAdd = selectors;
  var getValTask = document.querySelector("#valTask").value;
  var getValCategory = document.querySelector("#valCategory").value;
  //checks if the input is empty or not
  if (!getValTask || !getValCategory) {
    alert("You must type a task in the input field");
    return;
  } else {
    var contItem = document.createElement("div");
    contItem.classList.add("todoClone");
    contItem.id = "todoIdClone";
    var item =
      '\n      <div class="categoryContainter"><p>' +
      getValCategory +
      '</p></div>\n      <div class="taskContainer">\n      <p>Task:</p>\n      <li class="liClone" id="liCloneId">' +
      getValTask +
      '</li>\n      <button class="buttonClone" id="buttonPlusCloneId">V</button>\n      <button class="buttonClone" id="buttonMinusCloneId">X</button>\n      </div>\n      ';
    contItem.innerHTML = item;
    //appending the new div to the body of html
    selectors.container_items.appendChild(contItem);
    document.querySelector("#valTask").value = "";
    document.querySelector("#valCategory").value = "";
  }
};
var doneOrDeleteItem = function (e) {
  var target = e.target;
  var parent = target.parentNode.parentNode || null;
  if (target.id === "buttonMinusCloneId") {
    parent.remove();
  } else if (target.id === "buttonPlusCloneId") {
    parent.classList.toggle("taskDone");
  }
};
var listenerEvent = (function () {
  // this if stament handles the key press envent
  window.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addElement(e);
    }
  });
  selectors.container_items.addEventListener("click", doneOrDeleteItem);
  selectors.buttonMas.addEventListener("click", addElement);
})();

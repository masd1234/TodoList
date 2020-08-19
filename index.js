const container = document.querySelector(".todo1");
const inputt = document.querySelector(".inp");
const buttonMas = document.querySelector(".buttonPlus");
const buttonMinus = document.querySelector(".buttonMinus");

/* this function create a li element if you type a value in the input field  and click the buttom +, if 
there is no value no list element will be added */

const addElement = (event) => {
  const getVal = document.querySelector("#val");
  // html elements creation
  const creatCont = document.createElement("div");
  const creatLi = document.createElement("li");
  const creatButtonPlus = document.createElement("button");
  const creatButtonMinus = document.createElement("button");

  //adding classes to html elements

  const classCont = creatCont.classList.add("todoClone");
  const classLi = creatLi.classList.add("liClone");
  const classPlus = creatButtonPlus.classList.add("buttonPlusClone");
  const classMinus = creatButtonMinus.classList.add("buttonMinusClone");

  // adding id
  creatCont.id = "todoIdClone";
  creatButtonPlus.id = "buttonPlusCloneId";
  creatButtonMinus.id = "buttonMinusCloneId";
  creatLi.id = "liCloneId";
  // read the input field
  const valueInpt = document.querySelector("#val").value;
  creatLi.innerHTML = getVal.value;

  //adding inner texts to html elements
  creatButtonPlus.innerText = "v";
  creatButtonMinus.innerText = "x";

  if (valueInpt === "" || valueInpt === null) {
    event.stopPropagation();
    alert("You must type a task in the input field");
  } else {
    //appending the new div to the body of html
    container.appendChild(creatCont);
    //appending the inner elements to the div
    creatCont.appendChild(creatLi);
    creatCont.appendChild(creatButtonPlus);
    creatCont.appendChild(creatButtonMinus);
    getVal.value = "";
  }
};

// this function remove a list element from the bottom click the buttom -
const removeElement = () => {
  if (container.lastElementChild === buttonMinus) {
    event.stopPropagation();
  } else {
    container.removeChild(container.lastElementChild);
  }
};

// this function removes the current list element if you click the buttom - or check the same list element if is complete
container.addEventListener("click", (e) => {
  if (e.target.id == "buttonMinusCloneId") {
    e.target.parentNode.remove();
  } else if (e.target.id == "buttonPlusCloneId") {
    e.target.parentNode.classList.toggle("taskDone");
  }
});

buttonMas.addEventListener("click", addElement);
buttonMinus.addEventListener("click", removeElement);

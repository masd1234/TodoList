// iife that creates the selectors for every necessary html element
const selectorExposer = (() => {
  let selectors = {
    container: document.querySelector(".todo1"),
    inputt: document.querySelector(".inp"),
    buttonMas: document.querySelector(".buttonPlus"),
    buttonMinus: document.querySelector(".buttonMinus"),
  };
  return {
    selectorPublic() {
      return {
        selectors,
      };
    },
  };
})();

const addElement = (e) => {
  const externalSeleAdd = selectorExposer.selectorPublic().selectors;

  // html elements creation

  const containerCreator = {
    creatCont: document.createElement("div"),
    creatLi: document.createElement("li"),
    creatButtonPlus: document.createElement("button"),
    creatButtonMinus: document.createElement("button"),
  };

  const {
    creatCont,
    creatLi,
    creatButtonPlus,
    creatButtonMinus,
  } = containerCreator;

  //adding classes to html elements

  const classAdder = {
    classCont: creatCont.classList.add("todoClone"),
    classLi: creatLi.classList.add("liClone"),
    classPlus: creatButtonPlus.classList.add("buttonPlusClone"),
    classMinus: creatButtonMinus.classList.add("buttonMinusClone"),
  };

  // adding id

  creatCont.id = "todoIdClone";
  creatButtonPlus.id = "buttonPlusCloneId";
  creatButtonMinus.id = "buttonMinusCloneId";
  creatLi.id = "liCloneId";

  // reading the input field

  const getVal = {
    getValue: document.querySelector("#val"),
  };

  const valueInpt = getVal.getValue.value;
  creatLi.innerHTML = getVal.getValue.value;

  //adding inner texts to html elements
  creatButtonPlus.innerText = "v";
  creatButtonMinus.innerText = "x";

  //checks if the input is empty or not
  if (valueInpt === "" || valueInpt === null) {
    e.stopPropagation();
    alert("You must type a task in the input field");
  } else {
    //appending the new div to the body of html
    externalSeleAdd.container.appendChild(creatCont);
    //appending the inner elements to the div
    creatCont.appendChild(creatLi);
    creatCont.appendChild(creatButtonPlus);
    creatCont.appendChild(creatButtonMinus);
    getVal.getValue.value = "";
  }
};

// this function remove a list element from the bottom click the buttom
const removeElement = (e) => {
  const externalSelecListener = selectorExposer.selectorPublic().selectors;
  if (
    externalSelecListener.container.lastElementChild ===
    externalSelecListener.buttonMinus
  ) {
    e.stopPropagation();
  } else {
    externalSelecListener.container.removeChild(
      externalSelecListener.container.lastElementChild
    );
  }
};

// this function removes the current list element if you click the buttom - or check  if the same list element is complete

const checkValue = (e) => {
  if (e.target.id == "buttonMinusCloneId") {
    e.target.parentNode.remove();
  } else if (e.target.id == "buttonPlusCloneId") {
    e.target.previousSibling.classList.toggle("taskDone");
  }
};

const listenerEvent = (() => {
  const externalSelecListener = selectorExposer.selectorPublic().selectors;
  // this if stament handles the key press envent
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addElement(e);
    }
  });

  externalSelecListener.container.addEventListener("click", checkValue);
  externalSelecListener.buttonMas.addEventListener("click", addElement);
  externalSelecListener.buttonMinus.addEventListener("click", removeElement);
})();

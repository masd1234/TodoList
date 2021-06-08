// iife that creates the selectors for every necessary html element
const selectorExposer = (() => {
  let selectors = {
    container: document.querySelector(".header-container"),
    container_items: document.querySelector(".container-items-todo"),
    inputt: document.querySelector(".inp"),
    buttonMas: document.getElementById("buttonPlus"),
    buttonMinus: document.getElementById("buttonMinus"),
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
  let getValTask = document.querySelector("#valTask").value;
  let getValCategory = document.querySelector("#valCategory").value;
  //checks if the input is empty or not

  if (getValTask === "" || getValCategory === "") {
    e.stopPropagation();
    alert("You must type a task in the input field");
  } else {
    const contItem = document.createElement("div");
    contItem.classList.add("todoClone");
    contItem.id = "todoIdClone";

    const item = `
    <div class="categoryContainter"><p>${getValCategory}</p></div>
    <div class="taskContainer">
    <p>Task:</p>
    <li class="liClone" id="liCloneId">${getValTask}</li>
    <button class="buttonClone" id="buttonPlusCloneId">V</button>
    <button class="buttonClone" id="buttonMinusCloneId">X</button>
    </div>
    `;

    contItem.innerHTML = item;
    //appending the new div to the body of html
    externalSeleAdd.container_items.appendChild(contItem);
    document.querySelector("#valTask").value = "";
    document.querySelector("#valCategory").value = "";
  }
};

const doneOrDeleteItem = (e) => {
  if (e.target.id === "buttonMinusCloneId") {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.id === "buttonPlusCloneId") {
    e.target.parentNode.parentNode.classList.toggle("taskDone");
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

  externalSelecListener.container_items.addEventListener(
    "click",
    doneOrDeleteItem
  );
  externalSelecListener.buttonMas.addEventListener("click", addElement);
})();

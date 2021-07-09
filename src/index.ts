let selectors = {
  container: document.querySelector(".header-container") as HTMLSelectElement,
  container_items: document.querySelector(".container-items-todo") as HTMLSelectElement,
  inputt: document.querySelector(".inp") as HTMLSelectElement,
  buttonMas: document.getElementById("buttonPlus") as HTMLSelectElement,
  buttonMinus: document.getElementById("buttonMinus") as HTMLSelectElement,
};

const addElement = (e:Event) => {
  const externalSeleAdd = selectors;
  let getValTask = (<HTMLInputElement>document.querySelector("#valTask")).value;
  let getValCategory = (<HTMLInputElement>document.querySelector("#valCategory")).value;
  //checks if the input is empty or not
  if (!getValTask || !getValCategory) {
    alert("You must type a task in the input field");
    return
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
    selectors.container_items.appendChild(contItem);
    (<HTMLInputElement>document.querySelector("#valTask")).value = "";
    (<HTMLInputElement>document.querySelector("#valCategory")).value = "";
  }
};
  
const doneOrDeleteItem = (e:Event) => {
  const target = e.target as Element;
  const parent = target.parentNode as HTMLElement || null
  if (target.id === "buttonMinusCloneId") {
    parent.remove();
  } else if (target.id === "buttonPlusCloneId") {
    parent.classList.toggle("taskDone");
  }
}; 
  
const listenerEvent = (() => {
    
  // this if stament handles the key press envent
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addElement(e);
    }
  });

  selectors.container_items.addEventListener(
    "click",
    doneOrDeleteItem
  );
  selectors.buttonMas.addEventListener("click", addElement);
})(); 
const container = document.querySelector(".todo1");
const inputt = document.querySelector(".inp");
const buttonMas = document.querySelector(".buttonPlus");
const buttonMinus= document.querySelector(".buttonMinus");

  




const addElement = function(){
    // html elements creation
    const creatCont= document.createElement("div");
    const creatInput= document.createElement("input");
    const creatButtonPlus= document.createElement("button");
    const creatButtonMinus = document.createElement("button");

    

    //adding classes to html elements
    creatCont.classList.add("todoClone");
    creatInput.classList.add("inpClone");
    creatButtonPlus.classList.add("buttonPlusClone");
    creatButtonMinus.classList.add("buttonMinusClone");


    //adding inner texts to html elements
    creatButtonPlus.innerText = 'v';
    creatButtonMinus.innerText = 'x';
    
    //appending the new div to the body of html
    document.body.appendChild(creatCont);

    //appending the inner elements to the div
    creatCont.appendChild(creatInput);
    creatCont.appendChild(creatButtonPlus);
    creatCont.appendChild(creatButtonMinus);

  

   
    
    console.log('this was add');

   
    
    
};


const removeElement = function(){
   const todoClo = document.querySelector('.todoClone');
   todoClo.parentNode.removeChild(todoClo)
    

   

    console.log('this was deleted');
    
    
};





buttonMas.addEventListener("click", addElement)
buttonMinus.addEventListener("click", removeElement)





const container = document.querySelector(".todo1");
const inputt = document.querySelector(".inp");
const buttonMas = document.querySelector(".buttonPlus");
const buttonMinus= document.querySelector(".buttonMinus");




const addElement = function(event){

    
    
  
    let getVal = document.querySelector("#val");
    // html elements creation
    const creatCont= document.createElement("div") ;
    const creatLi= document.createElement("li");
    creatLi.innerHTML = getVal.value;
    const creatButtonPlus= document.createElement("button");
    const creatButtonMinus = document.createElement("button");
    // read the input field
    const x = document.querySelector("#val").value;
    
    //adding classes to html elements
    const classCreate = {
      classCont: creatCont.classList.add("todoClone"),
      classLi: creatLi.classList.add("liClone"),
      classPlus:creatButtonPlus.classList.add("buttonPlusClone"),
      classMinus: creatButtonMinus.classList.add("buttonMinusClone")
    };
    


    //adding inner texts to html elements
    creatButtonPlus.innerText = 'v';
    creatButtonMinus.innerText = 'x';

    // adding id
    creatCont.id = 'todoIdClone';

    
    
    
    
    if(x === '' || x === null){
        alert("You must type a task")

    } else {
        //appending the new div to the body of html
        document.body.appendChild(creatCont);
        //appending the inner elements to the div
        creatCont.appendChild(creatLi);
        creatCont.appendChild(creatButtonPlus);
        creatCont.appendChild(creatButtonMinus);
        getVal.value = "";  
      
    }

    
    console.log('this was add');

    



   

    if(buttonMinus.style.display ='none'){
        buttonMinus.style.display ='inline-block';

        
    };

   

    
   
    
    
};


const removeElement = function(){
   
   document.body.removeChild(document.body.lastElementChild)


   if(document.body.lastElementChild === container ){
    buttonMinus.style.display ='none';
   }
    console.log(addElement.todoClo);
};









buttonMas.addEventListener("click" , addElement )
buttonMinus.addEventListener("click", removeElement)






let number = ""
let input = document.getElementById("input")
let display = ""
const funct = document.getElementById("funct")

function noze(){
     input.textContent = number +="0"
}

function noon(){
     input.textContent = number +="1"
}

function notw(){
     input.textContent = number +="2"
}

function noth(){
     input.textContent = number +="3"
}

function nofo(){
     input.textContent = number +="4"
}

function nofi(){
     input.textContent = number +="5"
}

function nosi(){
     input.textContent = number +="6"
}

function nose(){
     input.textContent = number +="7"
}

function noei(){
     input.textContent = number +="8"
}

function noni(){
     input.textContent = number +="9"
}



function add(){
     number += "+"
     input.textContent += "+"
}

function subtract(){
     number += "-"
     input.textContent +=  "-"
}


function multiply(){
      number += "*"
     input.textContent += "*"
}

function divide(){
     number += "/"
     input.textContent +=  "/"
}

function decimal(){
     input.textContent = number += "."

}

function del() {
  number = number.slice(0, -1);   
  input.textContent = number  
}

function rem(){
     number = ""
     input.textContent = number
     input.textContent = number + "0"
}

function equal(){

    if (number === "2009") {
  document.body.className = "bg-green-900 flex flex-col justify-center items-center h-screen transition-all duration-700";
  document.body.innerHTML = "";
  const secretMessage = document.createElement("div");
  secretMessage.textContent = "🔒 Hidden Calculator Mode Activated!";
  secretMessage.className = "text-white text-5xl font-bold text-center animate-pulse mb-10";
  document.body.appendChild(secretMessage);
  const returnBtn = document.createElement("button");
  returnBtn.textContent = "Return to Calculator";
  returnBtn.className = "bg-white text-green-900 text-xl font-bold px-6 py-3 rounded-3xl hover:bg-green-200 transition-all duration-300";
  document.body.appendChild(returnBtn);
  returnBtn.onclick = function () {
    location.reload(); 
  };

  
  const continueBtn = document.createElement("button"); 
   continueBtn.className = "bg-white text-green-900 text-xl font-bold px-6 py-3 rounded-3xl hover:bg-green-200 transition-all duration-300 mt-5"
   continueBtn.textContent = "NEXT"
   document.body.appendChild(continueBtn)
   continueBtn.onclick = function (){
     document.body.innerHTML = ""
     document.body.className = "bg-gray-900 "
     const context = document.createElement("div")
     context.className = "flex items-center justify-center mt-50 text-white"
     document.body.appendChild(context)
     const contMess = document.createElement("p")
     contMess.textContent = "WOW! YOU FOUND AN EASTER EGG, JUST HOVER HALOWEEN SPECIAL."
     contMess.className = "animate-fade-in text-[#ffffff] font-bold text-4xl"
     context.appendChild(contMess)

     const prize = document.createElement("div")
     prize.className = "bg-[#ffffff] h-50 w-50 rounded-xl block mx-auto mt-3 hover:bg-[url('images/prize.webp')]"
     document.body.appendChild(prize)
     const redirectBtn = document.createElement("button")
     redirectBtn.textContent = "CONTINUE"
     redirectBtn.className = "bg-[#ffffff] w-40 h-10 text-green-600 font-bold rounded-4xl block mx-auto mt-9"
     document.body.appendChild(redirectBtn)
     redirectBtn.onclick = function(){
          window.location.href = "money.html"
     }

   }

   

}
     
     try{
          let result = eval(number)
          input.textContent = result
          number = result.toString()
     }catch(error){
          input.textContent = "syntax error"
     }
}
 

function square() {
  const secondFunction = document.createElement("div");
  const deleteBtn = document.createElement("button")

  secondFunction.className = "w-130 h-20 bg-white rounded-2xl block mx-auto my-4 p-3 flex items-center gap-10";
  const text = document.createElement("p")
  secondFunction.appendChild(text)
  secondFunction.appendChild(deleteBtn)
  funct.appendChild(secondFunction);

  text.textContent = "ERROR YOUR PAPA WAN DIE NI"
   text.className = "text-red-500 font-bold text-xl";
   deleteBtn.className = "bg-green-300 p-2 rounded-4xl  "
   deleteBtn.innerText = "delete"
   
deleteBtn.onclick = function(){
     funct.removeChild(secondFunction)

  }
}

const muster = document.querySelectorAll(".muster");

function redirect() {
  
  for (let input of muster) {
    if (input.value.trim() === "") {
      alert("Please fill all parts of this form");
      return; 
    }
  }

  
  window.location.href = "abuse.html";
}



const display = document.getElementById("display");

const h1 = document.getElementById('h1')
console.log(h1)


 
function appendToDisplay(input){

display.value += input;


}

//function to habdle clearing the disolay screen
function clearDispaly(){
    display.value = "";

}

//function evaluate the numbers and throw an error if wrong input added
function calculate(){
    try{
        display.value = eval(display.value)

    }
    catch(error){
        console.log(error)
        display.value = "error"
    }

}
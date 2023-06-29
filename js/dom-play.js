alert("Hi from Dom play");

/*

With a single click, highlight (bold or otherwise) all lines for a specific actor in a play

Un-highlight (normal or otherwise) all lines from all other actors in the play

The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page

The page must do the work without page re-loads (i.e. it must be done via JavaScript and the DOM)


We can change the HTML as needed

*/

//document.querySelector(".hamlet").style.backgroundColor = "yellow";

function highlight(el) {

    if(el.style.backgroundColor =='white'){//change to blue
        el.style.backgroundColor='blue';
    }else{//chanhge to white
        el.style.backgroundColor='white';
    }




    

}


function myalert(){
    alert("I'm clicked!");
}

const spans = document.querySelectorAll("#play span")

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click,myAlert");

}



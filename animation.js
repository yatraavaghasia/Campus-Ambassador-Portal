function displayText() {
    document.querySelector(".pts-text").innerHTML = "Points";
  }
  
function countTo(){
    let from = 0;
    let to = 79;
    let step = to > from ? 1 : -1;
    let interval = 50;

    if(from == to){
        document.querySelector(".val").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        if(from==0){
            displayText();
        }
        from += step;
        document.querySelector(".val").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();


function show(){
    let shown=document.getElementsByTagName("nav")
}
function show(){
    let x=document.getElementById("show-menu");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }       
}

const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',  function(){
    this.classList.toggle('is-active');
})    

// SMOOTH SCROLL ............
$(".navbar-nav li a").click(function(){
    let currentSection = $( $(this).attr("href") ).offset().top;
    $("html, body").animate({ scrollTop: currentSection}, 500);
})




// OPENING NAVBAR...............
$(".wrapper").click(() => {
    $("#myNav").animate({left: "0px"}, 800);
    $(".main-content").animate({"margin-left": "250px"}, 800);
})
// CLOSING NAVBAR...............
$("#closeIcon").click(()=> {
    $("#myNav").animate({left: "-250px"}, 800);
    $(".main-content").animate({"margin-left": "0px"}, 800)
})



// ACCORDION SECTION ........
$(".singers-info h3").click (function(){
    let nextParagraph = $(this).next();
    nextParagraph.slideToggle();
    $(".singers-info p").not(nextParagraph).slideUp();
})


// FORM MESSAGE LETTERS ...........

$("#messageArea").keyup(countLetters);
function countLetters(){
    let counter = 100;
    let userValue = $(this).val();
    let letters = userValue.length;
    let countElement = document.querySelector("#counter");

    counter = counter - letters;
    countElement.innerHTML = counter;


    if(counter <= 0){
        countElement.innerHTML = `your available character finished `;
        userValue = userValue.substring(0, 100);
    }
}


// COUNT DOWN FUNCTION..........
let partyDate = new Date("June 16, 2023 12:00:00").getTime();

function partyTime(){
    let currentTime = new Date().getTime();
    let timeLeft = partyDate - currentTime;
    
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor ( (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    let minutes = Math.floor ( (timeLeft % (1000 * 60 * 60 )) / (1000 * 60 ) );
    let seconds = Math.floor ( (timeLeft % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML = days + " D";
    document.querySelector("#hours").innerHTML = hours + " H";
    document.querySelector("#minutes").innerHTML = minutes + " M";
    document.querySelector("#seconds").innerHTML = seconds + " S";

    if(timeLeft < 0){
        clearInterval(partyTime);
        document.querySelector(".bg").innerHTML = 
        `
            <div class="container">
                <div class="row text-white">
                    <h1 class="text-uppercase col-md-5 mx-auto text-center">party time</h1>
                </div>
            </div>
        `
    }
}
setInterval(partyTime);


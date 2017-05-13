/**************** JAVASCRIPT ****************/


/**************** CLOCK ****************/

function main() { // START OF MAIN FUNCTION

function myDate() {
    
    var calander = new Date()
    var date = calander.getDate();
    var month = calander.getMonth();
    var year = calander.getFullYear();
    var hours = calander.getHours();
    var minutes = calander.getMinutes();
    var seconds = calander.getSeconds();
    var theDate = date + "/" + month + "/" + year;
    var theTime = hours + ":" + minutes + ":" + seconds;
    var date_time = theTime + " - " + theDate;
    var update = setTimeout(myDate, 1000);
    document.getElementById("current_date").innerHTML = date_time + " &copy; 2016 Solent Pizza's All rights reserved.";
}

myDate();

/**************** IMAGE ROLLOVER ****************/
var imageOne;
var imageTwo;
var imageThree;

function imageRollover() {
    var imageOne = document.getElementsById("first");
    var imageTwo = document.getElementsById("second");
    var imageThree = document.getElementsById("third");

    imageOne.addEventListener("mouseover", hoverOn);
    imageOne.addEventListener("mouseout", hoverOff);
    imageTwo.addEventListener("mouseover", hoverOn);
    imageTwo.addEventListener("mouseout", hoverOff);
    imageThree.addEventListener("mouseover", hoverOn);
    imageThree.addEventListener("mouseout", hoverOff);
}

function hoverOn() {
    imageOne.style.backgroundImage = "url('../img/pizzaplateedit.jpg')"
    imageTwo.style.backgroundImage = "url('../img/chipsedit.jpg')"
    imageThree.style.backgroundImage = "url('../img/boardedit.jpg')"
}

function hoverOff() {
    imageOne.style.backgroundImage = "url('../img/pizzaplate.jpg')"
    imageOne.style.backgroundImage = "url('../img/chips.jpg')"
    imageOne.style.backgroundImage = "url('../img/board.jpg')"
}

/**************** CAROUSEL ****************/

var theIndex = 0;
autoCarousel();

function autoCarousel() {
    var i;
    var htmlSlides = document.getElementsByClassName("slides");
    for (i = 0; i < htmlSlides.length; i++) {
        htmlSlides[i].style.display = "none";
    }
    theIndex++;
    if (theIndex > htmlSlides.length) {
        theIndex = 1
        }
    htmlSlides[theIndex-1].style.display = "block";
    setTimeout(autoCarousel, 3000);
}

/**************** CONTACT FORM ****************/


/**************** ORDER FORM ****************/


/**************** ORDER SUMMARY ****************/

} // END OF MAIN FUNCTION
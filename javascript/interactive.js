/**************** JAVASCRIPT ****************



*******************************************/

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

imageRollover();

function imageRollover() {
    var imageOne = document.getElementById("first");
    var imageTwo = document.getElementById("second");
    var imageThree = document.getElementById("third");

    imageOne.addEventListener("mouseover", hoverOn);
    imageOne.addEventListener("mouseout", hoverOff);
    imageTwo.addEventListener("mouseover", hoverOn);
    imageTwo.addEventListener("mouseout", hoverOff);
    imageThree.addEventListener("mouseover", hoverOn);
    imageThree.addEventListener("mouseout", hoverOff);
}

function hoverOn() {
    document.getElementById("first").src ="img/pizzaplateedit.jpg";
    document.getElementById("second").src ="img/chipsedit.jpg";
    document.getElementById("third").src ="img/boardedit.jpg";
}

function hoverOff() {
    document.getElementById("first").src ="img/pizzaplate.jpg";
    document.getElementById("second").src ="img/chips.jpg";
    document.getElementById("third").src ="img/board.jpg";
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
} // END OF MAIN
/**************** CONTACT FORM ****************/

function validationCore() {

    var contactForm = document.getElementById("contact_form");
    contactForm.addEventListener("submit", coreFormValidation);
}

function coreFormValidation(event) {
    var valid = true;
    var contactForm = document.getElementById("contact_form");

    if (contactForm.firstname.value == "") {
        valid = false;
        document.getElementById("errorMessageFirst").style.display = "block";
        event.preventDefault();
    } else {
        document.getElementById("errorMessageFirst").style.display = "none";
    }

    if (contactForm.lastname.value == "") {
        valid = false;
        document.getElementById("errorMessageSecond").style.display = "block";
        event.preventDefault();
    } else {
        document.getElementById("errorMessageSecond").style.display = "non";
    }

    if (contactForm.email.value == "") {
        valid = false;
        document.getElementById("errorMessageEmail").style.display = "block";
        event.preventDefault();
    } else {
        document.getElementById("errorMessageEmail").style.display = "non";
    }

if (contactForm.message.value == "") {
        valid = false;
        document.getElementById("errorMessage").style.display = "block";
        event.preventDefault();
    } else {
        document.getElementById("errorMessage").style.display = "non";
    }

}



/**************** ORDER FORM ****************/



/**************** ORDER SUMMARY ****************/



 // END OF MAIN FUNCTION
/**************** JAVASCRIPT ****************



*******************************************/

/**************** PERSONALISED DYNAMIC CONTENT ****************/

function hello() {
   var response = window.prompt("Hello, what is your name?");
   document.getElementById("userName").innerHTML = response;
}

function main() {

/**************** CLOCK ****************/

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
// fix this because I've got rid of main() function on html page
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
}
/**************** CONTACT FORM ****************/

// Core validation

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

// Intermediate and advanced validation

function validationInt() {

    var contactForm = document.getElementById("contact_form");
    contactForm.firstname.addEventListener("blur", validateFirstName);
    contactForm.lastname.addEventListener("blur", validateSecondName);
    contactForm.email.addEventListener("blur", validateEmail);
    contactForm.message.addEventListener("blur", validateMessage);

    contactForm.addEventListener("submit", validationInt);
}

function validateForm(event) {
    if (validateFirstName() == "" || validateSecondName() == "" || validatEmail() == "" || validateMessage() == "") {
        event.preventDefault(); 
    }

    event.preventDefault();
}

function validateFirstName(event) {
    var contactForm = document.getElementById("contact_form");

    if (contactForm.firstname.value == "") {
        contactForm.firstname.style.backgroundColor = "#FF7F7F";
        document.getElementById("firstNameRed").style.display = "inline-block";
        document.getElementById("firstNameGreen").style.display = "none";
        
        return false;
    } else {
        contactForm.firstname.style.backgroundColor = "lightgreen";
        document.getElementById("firstNameGreen").style.display = "inline-block";
        document.getElementById("firstNameRed").style.display = "none";
        return true;
    }
}

function validateSecondName(event) {
    var contactForm = document.getElementById("contact_form");

    if (contactForm.lastname.value == "") {
        contactForm.lastname.style.backgroundColor = "#FF7F7F";
        document.getElementById("lastNameRed").style.display = "inline-block";
        document.getElementById("lastNameGreen").style.display = "none";
        
        return false;
    } else {
        contactForm.lastname.style.backgroundColor = "lightgreen";
        document.getElementById("lastNameGreen").style.display = "inline-block";
        document.getElementById("lastNameRed").style.display = "none";
        return true;
    }
}

function validateEmail(event) {
    var contactForm = document.getElementById("contact_form");

    if (contactForm.email.value == "") {
        contactForm.email.style.backgroundColor = "#FF7F7F";
        document.getElementById("emailRed").style.display = "inline-block";
        document.getElementById("emailGreen").style.display = "none";
        
        return false;
    } else {
        contactForm.email.style.backgroundColor = "lightgreen";
        document.getElementById("emailGreen").style.display = "inline-block";
        document.getElementById("emailRed").style.display = "none";
        return true;
    }
}

function validateMessage(event) {
    var contactForm = document.getElementById("contact_form");

    if (contactForm.message.value == "") {
        contactForm.message.style.backgroundColor = "#FF7F7F";
        document.getElementById("messageRed").style.display = "inline-block";
        document.getElementById("messageGreen").style.display = "none";
        
        return false;
    } else {
        contactForm.message.style.backgroundColor = "lightgreen";
        document.getElementById("messageGreen").style.display = "inline-block";
        document.getElementById("messageRed").style.display = "none";
        return true;
    }
}

/**************** ORDER FORM ****************/

// Core validation

function orderValidation() {
    var orderForm = document.getElementById("order_form");
    order_form.addEventListener("submit", validateForms);

}

function validateForms(event) {
    var valid = true;
    var orderForm = document.getElementById("order_form");
    if (orderForm.base.value == "" || orderForm.topping.value == "") {
        valid = false;
        document.getElementById("errorMessage2").style.display = "block";
        event.preventDefault(); 
    } else {
        console.log("Order placed");
        document.getElementById("errorMessage2").style.display = "none";
    }
}

// Real time total

function total() {
    var totalForm = document.getElementById("order_form");
    totalForm.addEventListener("change", totalUpdate);
}

function totalUpdate(event) {
    var totalForm = document.getElementById("order_form");
    var total = 0;
    var choices = ""

    for(var index = 0; index < totalForm.extras.length; index++) {

        if (totalForm.extras[index].checked) {
        var itemPrice = parseInt(totalForm.extras[index].dataset.price);
        total = total + itemPrice;
        document.getElementById("selection").innerHTML = choices;
        document.getElementById("inputTotal").innerHTML = itemPrice;
        }
        
    }
}

// Additional toppings and extras 

// Order summary



/**************** END OF JAVASCRIPT ****************/
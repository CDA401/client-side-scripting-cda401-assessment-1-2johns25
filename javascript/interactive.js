/**************** JAVASCRIPT ****************/


/**************** CLOCK ****************/

function main() {

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

}
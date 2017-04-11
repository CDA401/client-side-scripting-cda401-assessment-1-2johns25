/**************** JAVASCRIPT ****************/


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
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    var update = setTimeout(myDate, 1000);
    document.getElementById("current_date").innerHTML = date_time;
}
    function addZero(n) {
        if (n < 10) {
            n = "0" + n
        };
            return n;
        }
myDate();

/**************** IMAGE ROLLOVER ****************/


/**************** CAROUSEL ****************/


/**************** CONTACT FORM ****************/


/**************** ORDER FORM ****************/


/**************** ORDER SUMMARY ****************/


/**************** FOR FORM IN LESSON ONLY ****************/
/*

function main() {
    console.log("Page has loaded");
    var form = document.getElementById("demoForm");
    form.addEventListener("submit",validateForm);
}

function validateForm(event) {
    event.preventDefault();
    console.log("form submitted");
    var form =document.getElementById("demoForm")

    if(form.userName.value == "") {
        document.getElementById("nameError").style.display = "block";
        event.preventDefault(); 
    } else {
        document.getElementById("nameError").style.display = "none"
    }

}
*/
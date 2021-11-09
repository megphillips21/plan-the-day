var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");

var hour = moment().hours();
var userInput;


// retrieve current date and time from moment.js
var currentDay = function () {
    currentDayEl = $("#currentDay");
    currentTimeEl = $("#currentTime");
    var dayLive = moment();
    dayLive = moment().format("dddd, MMMM Do YYYY");
    var timeLive = moment();
    timeLive = moment().format("h:mm a");
    currentDayEl.text(dayLive);
    currentTimeEl.text(timeLive)
    console.log(timeLive);

}
currentDay()

// retireve any event data from local storage
var getStorage = function (){

    var get9 = JSON.parse(localStorage.getItem("9 AM"));
    console.log(get9);
    nine.val(get9);

    var get10 = JSON.parse(localStorage.getItem("10 AM"));
    console.log(get10);
    ten.val(get10);

    var get11 = JSON.parse(localStorage.getItem("11 AM"));
    console.log(get11);
    eleven.val(get11);

    var get12 = JSON.parse(localStorage.getItem("12 PM"));
    twelve.val(get12);

    var get13 = JSON.parse(localStorage.getItem("1 PM"));
    one.val(get13);

    var get14 = JSON.parse(localStorage.getItem("2 PM"));
    two.val(get14);

    var get15 = JSON.parse(localStorage.getItem("3 PM"));
    three.val(get15);

    var get16 = JSON.parse(localStorage.getItem("4 PM"));
    four.val(get16);

    var get17 = JSON.parse(localStorage.getItem("5 PM"));
    five.val(get17);
}

// color code time blocks based on current time
function setPage() {
    console.log("Current Hour " + hour);
    $(function () {
        $("textarea").each(function () {
            var textarea_id = $(this).attr('id');
            
            if (hour > textarea_id) {
                  $(this).addClass("past");
                } else if (hour < textarea_id) {
                    $(this).addClass("future");
             } else {
                   $(this).addClass("present");
                 }
        });
    });
}
setPage();
getStorage()

// when add button is clicked store event data into local storage
$(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".event-input").val().trim();
    
    var addHour = $(this).siblings(".hour").text().trim();
   
    localStorage.setItem(addHour, JSON.stringify(userInput));
})

// clear day button that clears local storage and reloads the page
$("#clearDay").on("click", function(){
    localStorage.clear();
    getStorage()
  });
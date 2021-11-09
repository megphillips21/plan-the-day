var nine = $("9");
var ten = $("#hour10");
var eleven = $("#hour11");
var twelve = $("#hour12");
var one = $("#hour13");
var two = $("#hour14");
var three = $("#hour15");
var four = $("#hour16");
var five = $("#hour17");

var hour = moment().hours();
var userInput;



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

var getStorage = function (){

    var get9 = JSON.parse(localStorage.getItem("9 AM"));
    console.log(get9);
    nine.val(get9);
}
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

$(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".event-input").val().trim();
    
    var addHour = $(this).siblings(".hour").text().trim();
   
    localStorage.setItem(addHour, JSON.stringify(userInput));
})
$("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  });
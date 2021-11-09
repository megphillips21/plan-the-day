var nine = $("#hour9");
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

function setPage() {
    console.log("Current Hour " + hour);
    $(function () {
        $("textarea").each(function () {
            var textarea_id = $(this).attr('id');
            console.log(textarea_id);
            if (hour > textarea_id) {
                  $(this).addClass("past");
                } else if (hour < textarea_id) {
                    $(this).addClass("future");
             } else {
                   $(this).addClass("present");
                 }
        });
    });
    //$(".from-control").each(function () {
      //  var timeCheck = $("#9")
      //  hour = parseInt(hour);
      //  console.log(timeCheck);
      //  console.log(hour);
        //
   // });
}
setPage()


$(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
})
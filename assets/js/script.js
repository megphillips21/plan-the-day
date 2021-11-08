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
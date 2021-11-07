$(document).ready(function () {
    //Getting current today
        var currentTimeEL = $("#currentDay");
        var timeNow = moment();
        timeNow = moment().format("dddd, MMM DD, YYYY");
        currentTimeEL.text(timeNow);
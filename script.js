const currentDayEL = $("#currentDay");
const nineAMEL = $(".9AM");
const tenAMEL = $(".10AM");
const elevenAMEL = $(".11AM");
const twelvePMEL = $(".12PM");
const onePMEL = $(".1PM");
const twoPMEL = $(".2PM");
const threePMEL = $(".3PM");
const fourPMEL = $(".4PM");
const fivePMEL = $(".5PM");
const saveBtnEL = $(".saveBtn");

let hourTime = parseInt(moment().format("HH"));
let scheduleARR = [];

//display current day/time
currentDayEL.html(moment().format("dddd, MMMM Do YYYY"));

pastPresent();

//past, present, future text color displays
function pastPresent() {
  if ((hourTime > 8) & (hourTime < 18)) {
    if (hourTime === 9) {
      nineAMEL.addClass("present");
      $(".10AM, .11AM, .12PM, .1PM, .2PM, .3PM, .4PM, .5PM").addClass("future");
    }
    if (hourTime === 10) {
      tenAMEL.addClass("present");
      $(".9AM").addClass("past");
      $(".11AM, .12PM, .1PM, .2PM, .3PM, .4PM, .5PM").addClass("future");
    }
    if (hourTime === 11) {
      elevenAMEL.addClass("present");
      $(".9AM, .10AM").addClass("past");
      $(".12PM, .1PM, .2PM, .3PM, .4PM, .5PM").addClass("future");
    }
    if (hourTime === 12) {
      twelvePMEL.addClass("present");
      $(".9AM, .10AM, .11AM").addClass("past");
      $(".1PM, .2PM, .3PM, .4PM, .5PM").addClass("future");
    }
    if (hourTime === 13) {
      onePMEL.addClass("present");
      $(".9AM, .10AM, .11AM, .12PM").addClass("past");
      $(".2PM, .3PM, .4PM, .5PM").addClass("future");
    }
    if (hourTime === 14) {
      twoPMEL.addClass("present");
      $(".9AM, .10AM, .11AM, .12PM, .1PM").addClass("past");
      $(".3PM, .4PM, .5PM").addClass("future");
    }
    if (hourTime === 15) {
      threePMEL.addClass("present");
      $(".9AM, .10AM, .11AM, .12PM, .1PM, .2PM").addClass("past");
      $(".4PM, .5PM").addClass("future");
    }
    if (hourTime === 16) {
      fourPMEL.addClass("present");
      $(".9AM, .10AM, .11AM, .12PM, .1PM, .2PM, .3PM").addClass("past");
      $(".5PM").addClass("future");
    }
    if (hourTime === 17) {
      fivePMEL.addClass("present");
      $(".9AM, .10AM, .11AM, .12PM, .1PM, .2PM, .3PM, .4PM").addClass("past");
    }
  } else {
    $(".9AM,.10AM, .11AM, .12PM, .1PM, .2PM, .3PM, .4PM, .5PM").addClass(
      "past"
    );
  }
}

saveBtnEL.on("click", function () {
  let currentText = $(this).closest(".row").children(".col-md-10").val();

  if ($(this).closest(".row").children(".col-md-10").hasClass("9AM")) {
    scheduleARR[0] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("10AM")) {
    scheduleARR[1] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("11AM")) {
    scheduleARR[2] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("12PM")) {
    scheduleARR[3] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("1PM")) {
    scheduleARR[4] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("2PM")) {
    scheduleARR[5] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("3PM")) {
    scheduleARR[6] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("4PM")) {
    scheduleARR[7] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
  if ($(this).closest(".row").children(".col-md-10").hasClass("5PM")) {
    scheduleARR[8] = currentText;
    localStorage.setItem("schedules", JSON.stringify(scheduleARR));
  }
});

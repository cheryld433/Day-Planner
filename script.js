$(document).ready(function() {
  // declare variables
var currentDay;
var calendarContainer;
var time;
var calendarEvent;
var saveBtn;

$("#currentDay").text(m.format("dddd, MMMM Do"));

//ready function;
$(document).ready(function(){
   //local storage 
})

// current day displayed in the header
const getDateAndTime = () => {
   let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
   dateElement.innerHTML = dateAndTime;
 }
 

/*
function realTime() {
   var dateTime = moment().format("LLLL");
   console.log(dateTime);
   $("#currentDay").append(dateTime);
}
 realTime();
 console.log(realTime);
 
 var timeHour;
 var hour;



//scroll down bar on side.


//timeblock for standard business hours
   //block for each time 9am -5pm (9,10,11,12,1,2,3,4,5)
   /*color code time blocks as followed:
   time past as grey
   present time as red
   future time as green */

/* user must be able to do the following in each time block:
    enter an event into the timeblock
    save the event in  local storage*/


    // when page is refreshed the event must be saved. 
});


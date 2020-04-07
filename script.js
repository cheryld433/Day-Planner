//<----------------------------------CLEAN UP ALL THE NOTES AND VALIDATE THE WORK.-------------------------------------->
//<----- use class instead id to identify the row ( possible ) an possibly the textarea as well.---->

// Variables:
let m = moment();

// Date to be displayed in the  heading:
console.log(m.format('MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(m.format('MMMM Do YYYY, h:mm:ss a'));

$(document).ready(function() {
  changeColor();
  getText();
});

// color code time blocks
// need to change depending on the time of day
// may use if/ else statement.( if current hour, else current hour +1, else past hour )

function changeColor() {
   var realTime = moment().hours();
    // console.log("Time test" + timeTest);
    console.log("Current Time" + realTime);



     // 1. btn click:
   $('.saveBtn').on('click', function(){
      var value = $(this).siblings(".note").val();

     //2 get the text value
     //3- save that to local storage
     //4- track time, and change colors  
   });  
     


}

function getText() {


}



//refreshing page

//1 get  value from localstorage
//2-show that value to the corp text box







 


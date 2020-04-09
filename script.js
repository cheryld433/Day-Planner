//variables:
const m = moment();

let words;
let hourInfo;

// Current day in header:
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

// functions:

$(document).ready( function() {
    colorChange ();
    getText ();
});
// Color coding calendar:

function colorChange () {
    
    let realTime = moment().hours();

    console.log("Current Time" + realTime);
    
    $(".note").each(function () {
        let timeTest = parseInt($(this).attr("id"));

        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// Save buttons:
$(".saveBtn").click(function() {
    words = $(this).siblings(".note").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    getText ();
})

function getText () {
  let saveText9 = JSON.parse(localStorage.getItem("9:00am"));
  $("#9").val("");
  $("#9").val(saveText9);
  
  let saveText10 = JSON.parse(localStorage.getItem("10:00am"));
  $("#10").val("");
  $("#10").val(saveText10);
  
  let saveText11 = JSON.parse(localStorage.getItem("11:00am"));
  $("#11").val("");
  $("#11").val(saveText11);
  
  let saveText12 = JSON.parse(localStorage.getItem("12:00pm"));
  $("#12").val("");
  $("#12").val(saveText12);
  
  let saveText1 = JSON.parse(localStorage.getItem("1:00pm"));
  $("#13").val("");
  $("#13").val(saveText1);
  
  let saveText2 = JSON.parse(localStorage.getItem("2:00pm"));
  $("#14").val("");
  $("#14").val(saveText2);
  
  let saveText3 = JSON.parse(localStorage.getItem("3:00pm"));
  $("#15").val("");
  $("#15").val(saveText3);
  
  let saveText4 = JSON.parse(localStorage.getItem("4:00pm"));
  $("#16").val("");
  $("#16").val(saveText4);
  
  let saveText5 = JSON.parse(localStorage.getItem("5:00pm"));
  $("#17").val("");
  $("#17").val(saveText5);




  //// Save data to the current local store
  // localStorage.setItem("username", "John");

  // Access some stored data
  // alert("username = " + localStorage.getItem("username"));
  
  //var cat = localStorage.getItem('myCat');

  // Clear all items
  // localStorage.clear();


  //nction style (number){
    let saveText4 = JSON.parse(localStorage.getItem('4:00p'));
    $('#'+number).val('');
    $('#'+number).val(saveText4);

  
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $(".saveBtn").click(function() {
        console.log(this)
        var hourKey=$(this).parent().attr("id");
        console.log(hourKey);
        var activity=$(this).siblings(".description").val();
        console.log(activity);
        localStorage.setItem(hourKey,activity);
    //this will show you where you are
        })
        // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
        var currentHour=dayjs().hour();
        console.log(currentHour);
        $(".time-block").each(function(){
            console.log(this);
        var rowHour= parseInt($(this).attr("id").split("-")[1]);
        console.log(rowHour);
        if (rowHour<currentHour) {
        $(this).removeClass("future")
        $(this).removeClass("present")
        $(this).addClass("past")
        }
        else if (rowHour===currentHour){
            $(this).removeClass("future")
            $(this).removeClass("past")
            $(this).addClass("present")  
        }
        else {   
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")  
        }
        })
        
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id

    // attribute of each time-block be used to do this?
    for (var i=9; i<18; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
    }
    
    // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM DD, YYYY"))
  });
  

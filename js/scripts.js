var pname = '';
var choice = '';

//send flair selection to bot
function sendflair() {
  //checks if flair is selected
  if (choice === '') {
    alert ("Select a flair first!");
    //prevents window from opening
    return;
  }

  txt = (document.getElementById("text").value);
  window.open("http://www.reddit.com/message/compose/?to=anton_bot&subject=flair&message=" + choice + "," + txt);
}



//CURRENT SELECTION
function fselect(vnum) {
  var current = document.getElementsByName(vnum)[0];

  //Remove all
  $('.selected').removeClass('selected');

  //Add to current
  current.className += " selected";
  	
  //Updates current flair selection preview
   document.getElementById("flair").className = "flair flair-" + vnum;
   choice = vnum;
}


//FILTER
function flairFilter() {

  var filter = new RegExp(document.getElementById("filter").value, "i");

  var id = document.getElementById("content");
  var x = id.getElementsByClassName("flair");
  
  for (var i=0;i<x.length;i++) {
    if (filter.test(x[i].getAttribute("name"))) {
      x[i].style.display="";
    } else {
      x[i].style.display="none";
    }   
  }
    
}


$(document).ready(function() {
  $('#backtop').hide();
  
  //back to top scroll button
  $(window).scroll(function() {

      if ($(this).scrollTop()>0)
       {
          $('#backtop').fadeIn();
       }
      else
       {
        $('#backtop').fadeOut();
       }
   });



  //clears search form after enter
  $('form').submit(function() {
      $('#search').val(''); // clear the message box
  });
});
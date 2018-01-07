$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 580) + 40;
      traY = ((4 * mouseY) / 580) + 50;
      console.log(traX);
      $("h1").css({"background-position": traX + "%" + traY + "%"});
    });
  });
  
  
  // about tab content section
  
  function openLink(evt, aboutSection) {
      // Declare all variables
      var i, tabcontent, tablinks;
  
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(aboutSection).style.display = "block";
      evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();
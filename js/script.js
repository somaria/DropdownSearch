
$(document).ready(function() {
   // Add smooth scrolling to all links
   $("#hidden").hover(function(event) { 
      $(this).css("color", "red")     // Make sure this.hash has a value before overriding default behavior
      console.log("hovered")
   },

   function(event) {
      $(this).css("color", "black")
      //hide the hidden div
      $(this).hide();
   });
   
});
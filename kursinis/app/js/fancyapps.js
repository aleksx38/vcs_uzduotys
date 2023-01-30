document.addEventListener("DOMContentLoaded", () => {
    
    // MYGTUKAS gristi i puslapio virsu
    
    let mybutton = document.getElementById("myBtn");
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
    
    // When the user clicks on the button, scroll to the top of the document
/*    function virsun() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    */
    })
    
    
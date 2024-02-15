window.onload = function () {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    };
    document.getElementById('hamburger').onclick = () => {
        const nav = document.getElementById('nav');
        const updatedClass = nav.className === 'visible' ? '' : 'visible'
        nav.className = updatedClass;
      };

    
    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
} 


};

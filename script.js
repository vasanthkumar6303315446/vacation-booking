// script.js for JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get modal element
    var modal = document.getElementById("bookingModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Add event listener to all "book now" buttons
    var bookButtons = document.querySelectorAll(".botton");
    bookButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link navigation
            modal.style.display = "block"; // Show the modal
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
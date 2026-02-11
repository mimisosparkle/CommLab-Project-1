//sets up initial behavior when the page loads
document.addEventListener('DOMContentLoaded', signActions);

function signActions() {
    //gets og image 
    let exitSign = document.getElementById('exitSign');

    //events: 1- when mouse hovers, exit sign lights up. 2- moving mouse away returns the image to its og one. 3- clicking triggers it to scroll to topof page
    exitSign.addEventListener('mouseover', turnOnExit);
    exitSign.addEventListener('mouseout', turnOffExit);
    exitSign.addEventListener('click', scrollToTop);
}

//changes to lit up image
function turnOnExit() {
    let exitSign = document.getElementById('exitSign');
    exitSign.src = 'exitSignLight.jpg'; //image changes to sign that lights up bc i assigned a new value(image) to the variable
}

//changes back to normal image
function turnOffExit() {
    let exitSign = document.getElementById('exitSign');
    exitSign.src = 'exitSign.jpg'; //changes to normal sign
}

//fake exit where it scrolls back to top of page
function scrollToTop() {
    window.scrollTo(0, 0); // this worked yayy! (x=0,y=0) bc thats the very top of the page!
}
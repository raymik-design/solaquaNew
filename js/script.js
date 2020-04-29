toggle = document.querySelectorAll('.toggle')[0];
nav = document.querySelectorAll('nav')[0];
toggle_open_text = 'Menu';
toggle_close_text = 'Close';

toggle.addEventListener(
        'click',
        function () {
                nav.classList.toggle('open');

                if (nav.classList.contains('open')) {
                        toggle.innerHTML = toggle_close_text;
                } else {
                        toggle.innerHTML = toggle_open_text;
                }
        },
        false
);

setTimeout(function () {
        nav.classList.toggle('open');
}, 800);

// bg video speed
document.getElementById('video_bg').playbackRate = 0.8;


// button back to top

const backToTopButton = document.querySelector("#back-to-top-btn");

addEventListener("scroll", scrollFuntion);

function scrollFuntion() {
        if (pageYOffset > 300) { //Show backToTopButton on scroll- can use scrollY instead of pageYOffset, but thats not wrokign in IE explorer. 
                if (!backToTopButton.classList.contains("btnEntrance")) {
                        backToTopButton.classList.remove("btnExit"); //remove new class
                        backToTopButton.classList.add("btnEntrance"); //add new class

                        backToTopButton.style.display = "block";
                }
        }
        else { //Hide backToTopButton
                if (backToTopButton.classList.contains("btnEntrance")) {
                        backToTopButton.classList.remove("btnEntrance"); //remove new class
                        backToTopButton.classList.add("btnExit"); //add new class
                        setTimeout(function () {
                                backToTopButton.style.display = "none";

                        }, 250);

                }
        }

}

backToTopButton.addEventListener("click", backToTop);
function backToTop() {
        scrollTo(0, 0);
}

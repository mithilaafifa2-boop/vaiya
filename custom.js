
/* =========================================
   SKILL SLIDER
========================================= */

const slides = document.querySelectorAll(".skill-slide");

let slideIndex = 0;

function changeSlide() {

    if (slides.length === 0) return;

    slides[slideIndex].classList.remove("active");

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("active");
}

if (slides.length > 1) {
    setInterval(changeSlide, 3000);
}


/* =========================================
   DATE AND TIME
========================================= */

function updateTime() {

    const now = new Date();

    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    if (dateElement) {
        dateElement.textContent =
            now.toLocaleDateString();
    }

    if (timeElement) {
        timeElement.textContent =
            now.toLocaleTimeString();
    }
}

updateTime();

if (
    document.getElementById("date") ||
    document.getElementById("time")
) {
    setInterval(updateTime, 1000);
}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================
   TYPING EFFECT
========================================= */

const texts = [
    "Cyber Security Expert",
    "Digital Risk Analyst",
    "Social Media Security Specialist",
    "Cyber Security Specialist"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typingText");

function typingEffect() {

    if (!typingText) return;

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) % texts.length;

            charIndex = 0;
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 80
    );
}

if (typingText) {
    typingEffect();
}


/* =========================================
   SKILL PROGRESS BAR ANIMATION
========================================= */

const progressBars = document.querySelectorAll(
    ".skill-progress .progress-bar"
);

if ("IntersectionObserver" in window) {

    const progressObserver = new IntersectionObserver(

        function(entries, observer) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const targetWidth = bar.dataset.width;

                    if (targetWidth) {
                        bar.style.width = targetWidth;
                    }

                    observer.unobserve(bar);
                }
            });

        },

        {
            threshold: 0.3
        }
    );

    progressBars.forEach(function(bar) {
        progressObserver.observe(bar);
    });

} else {

    progressBars.forEach(function(bar) {

        if (bar.dataset.width) {
            bar.style.width = bar.dataset.width;
        }

    });

}

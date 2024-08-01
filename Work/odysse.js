gsap.registerPlugin(ScrollTrigger);

        gsap.from(".page2 h1", {
            scrollTrigger: {
                trigger: ".page2 h1",
                start: "top 80%", // Trigger when top of the element hits 80% of viewport height
                end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
                scrub: true, // Scrub the animation with the scroll
                markers: true // Enable markers for debugging
            },
            y: 50, // Move the element 50px down initially
            opacity: 0, // Start with opacity 0
            duration: 1, // Duration of the animation
            ease: "ease.out" // Animation easing
        });

        gsap.from(".page2 p", {
            scrollTrigger: {
                trigger: ".page2 p",
                start: "top 80%", // Trigger when top of the element hits 80% of viewport height
                end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
                scrub: true, // Scrub the animation with the scroll
                markers: true // Enable markers for debugging
            },
            y: 50, // Move the element 50px down initially
            opacity: 0, // Start with opacity 0
            duration: 1, // Duration of the animation
            ease: "ease.out" // Animation easing
        })

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let airplane = document.querySelector('.airplane');
    let airplane2 = document.querySelector('.airplane2');
    let cloudsleft = document.querySelector('.clouds-left');
    let cloudsright = document.querySelector('.clouds-right');

    // Adjust the position of airplane based on scroll
    airplane.style.transform = `translateX(${scrollPosition * -0.50}px)`;
    
    // Move airplane2 from left to right
    airplane2.style.transform = `translateX(${scrollPosition * 0.5}px)`;

    // Scale and opacity for clouds
    let scale = 1 + scrollPosition * 0.001;
    let opacity = 1 - scrollPosition * 0.001;
    cloudsleft.style.transform = `translateY(-50%) scale(${scale})`;
    cloudsleft.style.opacity = opacity;
    cloudsright.style.transform = `translateY(-50%) scale(${scale})`;
    cloudsright.style.opacity = opacity;
});




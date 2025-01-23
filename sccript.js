// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.set("#page1", {
    y: "100vh",
    scale: 0.5
});

// First animation: Move to 30vh
tl.to("#page1", {
    y: "20vh",
    duration: 1,
    delay: 1
});

// Second animation: Rotate and scale back to normal
tl.to("#page1", {
    y:"0vh",
    rotate: 360,
    scale: 1,
    duration: 1
});


const tl = gsap.timeline();
const tl2 = gsap.timeline()

const menuIcon = document.querySelector('.nav i')
const closeIcon = document.querySelector('.cross i')

tl.to('.menu', {
    right: 0,
    duration: 0.6,
})

tl2.from('.menu h2', {
    x: '100px',
    opacity: 0,
    stagger:0.3,
}, '+=0.7')

tl.pause();
tl2.pause();

menuIcon.addEventListener('click', function() {
    // console.log('hello world');
    tl.play()
    tl2.play()
})

closeIcon.addEventListener('click', function() {
    // console.log('hello world');
    // tl.kill()
    tl.reverse()
})
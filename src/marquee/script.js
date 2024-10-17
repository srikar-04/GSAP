const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        markers: true,
        start: 'top 30%',
        end: 'top -10%',
    }
})

tl.to('.page2 div', {
    x: '-30%',
    duration: 10,
    ease: 'linear',
    repeat: -1,
})

const marquee = document.querySelector('.page2 div');

marquee.addEventListener('mouseenter', function() {
    tl.pause();
    // console.log('enter');
    
})
marquee.addEventListener('mouseleave', function() {
    tl.resume();
    // console.log('leave');
    
})
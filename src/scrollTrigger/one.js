gsap.to('.head', {
    transform: 'translate(-150%)',
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        scrub: 1,
        markers: true,
        pin: true,
        start: 'top 0%',
        end: 'top -200%'
    }
})
const tl = gsap.timeline()

tl.from('.name', {
    y: '50%',
    opacity: 0,
    duration: 0.5,
    delay:0.3
})

tl.from('.bookmarks', {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay:0.3,
    stagger: 0.5
})


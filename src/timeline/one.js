const tl = gsap.timeline({repeat: 1, yoyo: true})

tl.to('.box1', {
    x: 1000,
    duration: 0,
    animationTimingFunction: Linear
})
tl.to('.box2', {
    x: 800,
    duration: 2
}, '<+=25%')
tl.to('.box3', {
    x: 600,
    duration: 2
})

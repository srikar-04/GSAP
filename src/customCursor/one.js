const cursor = document.querySelector('.cursor')

const container = document.querySelector('.container')

container.addEventListener('mousemove', function(dets) {
    // console.log(dets);
    gsap.to(cursor, {
        x: dets.x - 10,
        y: dets.y - 10,
        // ease: "none"
    })
})
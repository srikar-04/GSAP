let initialPath = `M 10 100 Q 500 100 990 100`

let finalPath = `M 10 100 Q 500 100 990 100`;

const container = document.querySelector('.container')

container.addEventListener('mousemove', (dets) => {
    console.log(dets.y);
    // initialPath =  `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
        attr: {d: `M 10 100 Q 500 ${dets.y} 990 100`},
        duration: 0.3
    })
})


container.addEventListener('mouseleave', () => {
    console.log('leaved');
    
    gsap.to('svg path', {
        attr: {d: finalPath},
        ease: "elastic.out(1.2,0.2)",
        duration: 1.5
    })
})
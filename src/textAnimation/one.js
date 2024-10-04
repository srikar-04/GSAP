const h1 = document.querySelector('h1')

const text = h1.innerHTML

const splittedText = text.split('')

// console.log(splittedText);

let clutter = ''

splittedText.forEach(function(elem, id) {
    if(id < splittedText.length/2) {
        clutter += `<span class="a ">${elem}</span>`
    } else {
        clutter += `<span class="b ">${elem}</span>`
    }
})

h1.innerHTML = clutter

// console.log(text);

// console.log(document.querySelector('h1').innerHTML);

gsap.from('.a', {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6, 
    delay: 0.5
})
gsap.from('.b', {
    y: 50,
    opacity: 0,
    stagger: -0.15,
    duration: 0.8, 
    delay: 0.5
})




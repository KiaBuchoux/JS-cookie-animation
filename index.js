const tl = gsap.timeline({default:{duration:3, ease:Power1.easeOut}});
tl.fromTo(".cookie-container",{scale:0}, {scale:1, ease: Elastic.easeOut.config(1, 0.3), duration:1.5})
tl.fromTo(".cookie", {opacity:0, x:50, rotation:"-45deg"}, {opacity:1, x:0, rotation:"0deg"}, "<30%")
tl.fromTo(".text", {x:30, opacity:0}, {x: 0, opacity:1}, "<")

document.querySelector("button").addEventListener("click", ()=>{
    tl.to(".cookie-container", {opacity: 0, y:50})
})
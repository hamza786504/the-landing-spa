document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline();
    tl.to(".hero-imgs > img", {
        duration: 2,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "power4.inOut",
        stagger: 0.25,
    })
        .to(".hero", {
            scale: 1.3,
            ease: "power3.inOut",
            duration: 3,
        }, "-=0.75")


     // JavaScript for toggling sidebar
     const toggleOpen = document.getElementById("toggleOpen");
     const toggleClose = document.getElementById("toggleClose");
     const sidebar = document.getElementById("sidebar");

     toggleOpen.addEventListener("click", () => {
         sidebar.classList.toggle("hidden");
     });

     toggleClose.addEventListener("click", () => {
         sidebar.classList.add("hidden");
     });
});


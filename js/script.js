document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    // Hide all images initially
    gsap.set(".hero-imgs > img", { opacity: 0 });

    // Animate each image
    tl.staggerTo(".hero-imgs > img", 2, {
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        stagger: 0.25,
    }, 0.25)
        .to(".hero", {
            opacity: 0,
            duration: 1,
            onComplete: function () {
                document.querySelector(".hero").style.display = "none";
            }
        }, "-=1.5")
        .to(".white-bg", {
            opacity: 1,
            duration: 1,
            onComplete: function () {
                document.querySelector(".preloader").style.display = "none";

                const contentSections = document.querySelectorAll(".content-section");
                contentSections.forEach((section) => {
                    section.classList.add("show");
                });
            }
        }, "-=0.5");

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


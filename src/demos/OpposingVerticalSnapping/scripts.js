gsap.registerPlugin(ScrollTrigger);

const footer = document.querySelector(".footer")
const verticalContainer = document.getElementById("verticalContainer");
const leftSection = verticalContainer.querySelector(".left-section");
const rightSection = verticalContainer.querySelector(".right-section");

// const containers = gsap.utils.toArray(".left-section .w-full");
// const snapPoints = containers.map((_, i) => {
//   return i / (containers.length - 1);
// });

window.addEventListener("DOMContentLoaded", () => {
  gsap.set(rightSection, {
    y: window.innerHeight - leftSection.clientHeight
  });
  gsap
    .timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: verticalContainer,
        start: "top top",
        end: "+=" + (footer.offsetTop + window.innerHeight),
        pin: true,
        invalidateOnRefresh: true,
        markers: true,
        scrub: true,
        // snap: snapPoints
      }
    })
    .to(leftSection, {
      y: window.innerHeight - leftSection.clientHeight
    })
    .to(
      rightSection,
      {
        y: 0
      },
      0
    );
});

import { Expo, gsap } from "gsap";

const tl = gsap.from(".box", {
	opacity: 0,
	scale: 0,
	duration: 1,
	ease: Expo.out,
	// repeat: -1,
	// yoyo: true,
	// yoyoEase: true,
});

const buttonEl = document.querySelector("#btn");

buttonEl.addEventListener("click", function () {
	tl.restart();
});

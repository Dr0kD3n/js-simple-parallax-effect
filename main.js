
window.addEventListener("scroll", ()=>paralax());
let paralax = () => {
	document.getElementsByClassName("wrapper--header")[0]
		.style.backgroundPosition = `center ${-110+(.5*window.scrollY)}px`;
	document.getElementsByClassName("wrapper--main--box")[0]
		.style.top = `${-2.5+(.03*window.scrollY)}em`;
};
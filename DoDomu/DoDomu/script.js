const burger = document.querySelector('.burger');
const sidemenu = document.querySelector('.sidemenu');

burger.addEventListener('click', function (e) {
	sidemenu.style.display = "block";
})

const close = document.querySelector('.sidehead-icon');
close.addEventListener('click', function (e) {
	sidemenu.style.display = "none";
})

const catalog = document.getElementsByClassName('menu_link');
const arrow = document.querySelectorAll('.arrow');

let rotate = 0;
catalog[2].addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.catalog').classList.toggle('open-menu');
	rotate += 180;
	arrow[0].style.transform = "rotate(" + rotate + "deg)";
	arrow[0].style.transitionDuration = "500ms";
})

let rotatec = 0;

catalog[3].addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.contacts').classList.toggle('open-menu');
	rotatec += 180;
	arrow[1].style.transform = "rotate(" + rotatec + "deg)";
	arrow[1].style.transitionDuration = "500ms";
})



const container = document.querySelector('.popular-container');
let Grabbed = false;
let fX;
let scrollLeft;



container.addEventListener('mousedown', handleMouseDown = (event) => {
	Grabbed = true;
	fX = event.pageX - container.offsetLeft;
	scrollLeft = container.scrollLeft;
	container.style.cursor = 'grabbing';
});
container.addEventListener('mouseup', handleMouseUp = () => {
	Grabbed = false;
	container.style.cursor = 'grab';
});
container.addEventListener('mousemove', handleMouseMove = (e) => {
	if (!Grabbed) return;
	e.preventDefault();
	const x = e.pageX - container.offsetLeft;
	container.scrollLeft = scrollLeft - (x - fX);
});



const special = document.querySelector('.special-container');
let Grabpec = false;
let specx;
let scrollspec;

const SpechandleMouseDown = (event) => {
	Grabpec = true;
	specx = event.pageX - special.offsetLeft;
	scrollspec = special.scrollLeft;
	special.style.cursor = 'grabbing';
};

const SpechandleMouseUp = () => {
	Grabpec = false;
	container.style.cursor = 'grab';
};


const SpechandleMouseMove = (e) => {
	if (!Grabpec) return;
	e.preventDefault();
	const x = e.pageX - special.offsetLeft;
	special.scrollLeft = scrollspec - (x - specx);
};

special.addEventListener('mousedown', SpechandleMouseDown);
special.addEventListener('mouseup', SpechandleMouseUp);
special.addEventListener('mousemove', SpechandleMouseMove);



// -----------------------------------------------------------//

const books = document.querySelector('.books');
let isGrabbed = false;
let startX;
let scrollLeft;


const handleMouseDown = (event) => {
	isGrabbed = true;
	startX = event.pageX - books.offsetLeft;
	scrollLeft = books.scrollLeft;
	books.style.cursor = 'grabbing';
};

const handleMouseUp = () => {
	isGrabbed = false;
	books.style.cursor = 'grab';
};


const handleMouseMove = (e) => {
	if (!isGrabbed) return;
	e.preventDefault();
	const x = e.pageX - books.offsetLeft;
	books.scrollLeft = scrollLeft - (x - startX);
};

books.addEventListener('mousedown', handleMouseDown);
books.addEventListener('mouseup', handleMouseUp);
books.addEventListener('mousemove', handleMouseMove);


// ---------------------------





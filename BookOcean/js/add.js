const bookname = document.querySelector('.bookname');
const bookorigin = document.querySelector('.bookorigin');
const bookauthor = document.querySelector('.bookauthor');
const bookdescr = document.querySelector('.bookdescr');
const bookyear = document.querySelector('.bookyear');
const form = document.querySelector('.add__form');
const genrename = document.querySelector('.genrename');
const genreselect = document.querySelector('.genreselect');
const bookcover = document.querySelector('.cover');
const previewImage = document.getElementById("previewImage");
const bookfile = document.querySelector('.bookfile');

let button = document.getElementById('go');
let use = false;

form.addEventListener('submit', function (e) {
	e.preventDefault();
	check(bookname);
	checkname(bookauthor);
	checknumb(bookyear);
	check(bookdescr);
	checkgenre(genrename);
	check(bookcover);
	check(bookfile);
	if (!Checkclass(bookname) && !Checkclass(bookauthor) && !Checkclass(bookyear) && !Checkclass(bookdescr) && !Checkclass(genrename) && !Checkclass(bookcover) && !Checkclass(bookfile)) {
		const booktitle = document.querySelector('.book__tittle');
		booktitle.textContent = bookname.value;
		const bookator = document.querySelector('.author__name');
		bookator.textContent = bookauthor.value;
		const year = document.querySelector('.year');
		year.textContent = bookyear.value;
		const genre = document.querySelector('.book__genres');
		genre.textContent = genres;
		const descript = document.querySelector('.book__descr');
		descript.textContent = bookdescr.value;
	}
});

function Checkclass(e) {
	return e.classList.contains('error');
}

// bookname.onfocus = function () {
// 	let error = e.nextElementSibling;
// 	bookname.classList.remove('error');
// 	error.textContent = "";
// }
// bookname.onblur = check(bookname);


function checknumb(e) {
	let error = e.nextElementSibling;
	if (!e.value) {
		e.classList.add('error');
		error.textContent = "Це поле має бути заповненим";
	}
	else if (e.value.match(/^-?\d+$/) == null) {
		e.classList.add('error');
		error.textContent = "рік треба вказувати числом";
	}
	else if (Number(e.value) <= 0) {
		e.classList.add('error');
		error.textContent = "рік треба вказувати числом більше нуля";
	}
	else {
		e.classList.remove('error');
		error.textContent = "";
	}
}

function check(e) {
	let error = e.nextElementSibling;
	if (!e.value) {
		e.classList.add('error');
		error.textContent = "Це поле має бути заповненим";
	}
	else {
		e.classList.remove('error');
		error.textContent = "";
	}
}

function checkgenre(e) {
	let error = e.nextElementSibling;
	if (!use) {
		e.classList.add('error');
		error.textContent = "Це поле має бути заповненим";
	}
	else {
		e.classList.remove('error');
		error.textContent = "";
	}
}

function checkname(e) {
	let error = e.nextElementSibling;
	if (!e.value) {
		e.classList.add('error');
		error.textContent = "Це поле має бути заповненим";
	}
	else if (e.value.match(/\d/g) != null) {
		e.classList.add('error');
		error.textContent = "Автора треба вказувати без чисел та інших символів";
	}
	else {
		e.classList.remove('error');
		error.textContent = "";
	}

}


let genres = "";
genrename.addEventListener('input', function () {
	use = true;
	let gselected = genrename.options[genrename.selectedIndex];
	const genreBlock = document.createElement("div");
	genreBlock.classList.add("genresel");
	const genreText = document.createElement("p");
	const deleteIcon = document.createElement("img");
	genreText.textContent = genrename.value;
	deleteIcon.src = "img/delicon.svg";
	deleteIcon.alt = "Delete Icon";
	genreBlock.appendChild(genreText);
	genreBlock.appendChild(deleteIcon);
	genres += genreText.textContent + ", ";
	deleteIcon.addEventListener("click", function () {
		let option = new Option(genreText.textContent, genreText.textContent);
		genrename.append(option);
		genreBlock.remove();
	});
	genreselect.appendChild(genreBlock);
	genrename.removeChild(gselected);
})




bookcover.addEventListener("change", function () {
	const file = bookcover.files[0];

	if (file) {
		readAndPreview(file);
	}
});

function readAndPreview(file) {
	const reader = new FileReader();

	reader.onloadend = function () {
		previewImage.src = reader.result;
	};
	if (file) {
		reader.readAsDataURL(file);
	} else {
		previewImage.src = "";
	}
}
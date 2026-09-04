

const pColor = document.querySelector('p');
const newColour = function () {
	pColor.style.color = 'blue';
}
newColour();

const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.border = "2px dotted black";
pColor.insertAdjacentElement("beforebegin", div);

let top1;
let left1;

const moving = function () {

	top1 = div.offsetTop;
	left1 = div.offsetLeft;
	div.style.left = (left1 + 30) + 'px';
	div.style.top = (top1 + 30) + 'px';
	if (top1 >= 270) {
		clearInterval(move);
	}

}

const move = setInterval(moving, 1000);


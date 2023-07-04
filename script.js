const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart); // The dragged element has two functions assigned where the elemnt is the value of 'this'
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0); // Setting the element invisible in its own container, setTimeout to set the new className in the new call stack
}
function dragEnd() {
  this.className = 'fill';
}
function dragOver(e) {
  e.preventDefault(); // To prevent the dragging progress from rejection
}

function dragEnter(e) {
  e.preventDefault(); // To prevent the dragging progress from rejection
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill); // To append the element in the HTML as a child
}

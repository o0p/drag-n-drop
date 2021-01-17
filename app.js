const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('dragdrop', dragDrop);

for (const empty of empties) {
    fill.addEventListener('dragover', dragOver);
    fill.addEventListener('dragenter', dragEnter);
    fill.addEventListener('dragleave', dragLeave);
    fill.addEventListener('drop', dragDrop);

}

function dragStart() {
    this.className = this.className + ' hold';
    setTimeout(() => this.className = 'invisible', 0);
    
}

function dragEnd() {
    this.className = 'fill';
} 

function dragOver() {

}

function dragEnter() {

}

function dragLeave() {

}

function dragDrop() {

}
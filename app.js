const base = document.querySelector('.base');
const box = document.querySelectorAll('.case');

// Ajout des événements
base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);

// Création des fonctions
function dragStart(){
    // Ajout de la class tenu
    this.className += ' tenu';
    // disparaitre l'image derriere avec le timeout 
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEnd(){
    this.className = 'base';
}

// ajouts d'événement aux box 
for (const vide of box){
    // quand on prend l'element
    vide.addEventListener('dragover', dragOver);

    // quand on rentre dans une autre case
    vide.addEventListener('dragenter', dragEnter);

    // quand on quite un evenement 
    vide.addEventListener('dragleave', dragLeave);

    // quand on lache l'element
    vide.addEventListener('drop', dragDrop);

}

function dragOver(e){
    //enleve l'action par defaut
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
    //ajout de la class hovered
    this.className += ' hovered';
}

function dragLeave(){
    // remet la class case 
    this.className = 'case';
}

function dragDrop(){
    this.className = 'case'; 
    //sur la nouvelle box on met la class de l'image
    this.append(base);
}
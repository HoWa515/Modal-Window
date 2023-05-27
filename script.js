'use strict';
 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// show the hidden modal, by removing the 'hidden' class 
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}



// by clicking the 'X' or side area , close modal window again, by adding hidden
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click',closeModal)

//click Esc to close modal window
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {closeModal();}
})




 
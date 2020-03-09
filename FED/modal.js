//Get modal element

var modal = document.getElementById('simpleModal');

//get open modal button
var modalBtn = document.getElementById('modalBtn');

//get close button
var closebtn = document.getElementById('closebtn');

//listen for open click
modalBtn.addEventListener('click', openModal);


//listen for close click
closebtn.addEventListener('click', closeModal);


//listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal

function openModal() {
    modal.style.display = 'block';

}

//function to close modal

function closeModal() {
    modal.style.display = 'none';

}
//function to close modal

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }


}
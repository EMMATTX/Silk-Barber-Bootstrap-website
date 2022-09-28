//navbar scroll and positioning
// var myNav = document.getElementById('navbar');

// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600 ) {
//         myNav.classList.add("fixed-top");
        
//     } 
//     else {
//         myNav.classList.remove("fixed-top");
//     }
// };


//modal autofocus HTML attribute
const myModal = document.getElementById('myModal')
const myInput  = document.getElementById('myInput')

myModal.addEventListener('show.bs.modal', () =>{
    myInput.focus()
})
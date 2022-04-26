import { getByTitle } from '@testing-library/dom';
import './less/index.less'

// Your code goes here!

// mouseenter/leave
const logoHead = document.querySelector('.logo-heading');

logoHead.style.color = "#8DB600";
logoHead.addEventListener('mouseenter', (e)=>{
    e.target.style.color = '#00CED1';
});
logoHead.addEventListener('mouseleave', (e)=>{
    e.target.style.color = "#8DB600";
});


// mouseover/out
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link => {
    link.addEventListener('mouseover', (e)=>{
    e.target.style.transform = "scale(1.2)";
    e.stopPropagation();
    });
});
navLink.forEach(link => {
    link.addEventListener('mouseout', (e) => {
    e.target.style.transform = "scale(1)";
    });
});



// dblclick/mouseleave
const goImg = document.querySelector(".content-section .img-content img");

goImg.addEventListener('dblclick', (e)=>{
    e.target.src = "https://images.unsplash.com/photo-1618083707368-b3823daa2726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFkdmVudHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80";
});
goImg.addEventListener('mouseleave', (e)=>{
    e.target.src = "http://localhost:9000/img/adventure.jpg";
});



// resize
const signUp = document.querySelectorAll('.btn');

signUp.forEach(sign =>{
   window.addEventListener('resize', () => { 
    sign.style.backgroundColor ="#8DB600"; 
    sign.style.color = "#FFFAFA";
    });
});




// keydown t to scroll to top of page
const headerT = document.querySelector('.intro');

function scrollToTop(){
    headerT.scrollIntoView(true);
};

document.addEventListener('keydown', (e)=>{
    console.log(e.key);
    if (e.key == 't') {
        scrollToTop();
    };
});


// keydown b to scroll to bottom of page
const footerB = document.querySelector('.footer');

function scrollToBottom(){
    footerB.scrollIntoView(true);
};

document.addEventListener('keydown', (e)=>{
    console.log(e);
    if (e.key == 'b') {
        scrollToBottom();
    }
});




//WHEEL EVENT
function zoom(e){
    // e.preventDefault(); -- issue where wheel evenent listener is passive. link in doc.

    if(e.deltaY<0){
    // Zoom in
    scale *= e.deltaY * -1;
    }
    else {
    // Zoom out
    scale /= e.deltaY * 1;
    }

    // Restrict scale
    scale = Math.min(Math.max(.5, scale), 1);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.intro img');
document.onwheel = zoom;





//MAKING A FORM: 
// sign-in paragraph
const signIn = document.createElement('p');

document.querySelector('.intro').appendChild(signIn);



// I selected all p's in the intro header. Then I selected the second p and gave it a class name so I can acess it
const signInP = document.querySelectorAll('.intro p');

signInP[1].classList.add('sign-in');



//now i can access this p by its class name and then I can create an h4 element as the sign-in class's child
const headingSignIn = document.createElement('h4');
headingSignIn.textContent = 'Sign In';
document.querySelector('.sign-in').appendChild(headingSignIn);




// adding a form as a child under sign-in class
const formElem = document.createElement('form');
formElem.text = 'e-mail';
document.querySelector('.sign-in').appendChild(formElem)




//now add a form with email and password boxes - children of form
const formEmail = document.createElement('input');
formEmail.type="text";
formEmail.placeholder="e-mail";
document.querySelector('.sign-in form').appendChild(formEmail);

const formPassword = document.createElement('input');
formPassword.type="password";
formPassword.placeholder="password";
document.querySelector('.sign-in form').appendChild(formPassword);




// use focusin/focusout event on the form boxes 
const passwordBox = document.querySelector('.sign-in form');

passwordBox.addEventListener('focusin', (e) => {
    e.target.style.background = '#00CED1';
  });

  passwordBox.addEventListener('focusout', (e) => {
    e.target.style.background = '';
  });


// make a 'go' button under sign in ... link will be # bc dk where it'll go ..like a submit. find an event type. 



//load event: shows up in console
window.onload = (e) => {
    console.log('Page is fully loaded!');
    // alert('welcome!');
  };





//select event:
document.addEventListener("mouseup", whatYouSelected);

function whatYouSelected(){
  var selectedText = window.getSelection().toString();
  if (selectedText){
    console.log("Selected Text: " + selectedText);
  } 
// else {
//     console.log("No Text Selected");
//   } i guess i could keep this if I wanted to see clicks...
}



//copy event
const source = document.querySelector('body');

source.addEventListener('copy', (event) => {
   event.preventDefault(); 
   const selection = document.getSelection();
   event.clipboardData.setData('text/plain', selection.toString());
    console.log(selection.toString());
});
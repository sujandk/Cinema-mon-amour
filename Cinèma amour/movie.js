





const xxx = JSON.parse(localStorage.getItem('movieDetail'));
// const xxxx = JSON.parse(localStorage.getItem('movieDetai'));
document.title = xxx.movieName;
const title= document.querySelector('h1');
const rating= document.querySelector('.rating');
const genre= document.querySelector('.genre');
const language= document.querySelector('.language');
const director= document.querySelector('.directors');
const synopsis= document.querySelector('.synopsis-flex');
const stars= document.querySelector('.stars');
const runTime= document.querySelector('.run-time');
const poster= document.querySelector('.poster-here');
title.innerText = xxx.movieName;
rating.innerText = xxx.rating; 
language.innerText = `Language : ${xxx.language}`;   
genre.innerText = `Genre : ${xxx.genre}`;
director.innerText = `Director : ${xxx.director}`;
synopsis.innerText = `${xxx.synopsis}`;
stars.innerText = `Stars : ${xxx.stars}`;
runTime.innerText = `Run Time : ${xxx.runTime}`;

// javascript code for the margin top of flex box 

const element = document.querySelector('.poster-container span');
const height = element.offsetHeight;
const element2 = document.querySelector('.info-container');
element2.style.marginTop= `${height + 50}px `;
 
// end of the style of flex margin 


let intermediateposter= xxx.movieName.split(" ").join('');
intermediateposter = intermediateposter.toLowerCase();
intermediateposter= `${intermediateposter}.jpg`;


let attributes = `
background-image: url(${intermediateposter});
background-repeat: no-repeat;
background-size: 100% 100%;
background-position: center;
`;

poster.setAttribute('style' , attributes); 
let teamDetails = [{
    fullName : 'Loveth Omokaro',
    image : '../img/Loveth.png',
    bestFood : 'Starch with black soup',
    complexion : 'Caramel',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Engraved Herein',
    age : '23'
}, {
    fullName : 'Charles Onyemenam',
    image : '../img/charles-circle.png',
    bestFood : 'Plaintain and Egg',
    complexion : 'Dark',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Game of Thrones',
    age : '24'
}, {
    fullName : 'Anyanwu Chukwuemeka Clinton',
    image : '../img/Khrisemeka-circle.png',
    bestFood : 'anything but amala',
    complexion : 'Dark',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Engraved Herein',
    age : '23'
}, {
    fullName : 'Ogaga Andrew',
    image : '../img/drew-circle.png',
    bestFood : 'Rice and stew',
    complexion : 'Dark',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Rapunzel',
    age : '26'
}, {
    fullName : 'Ifeoma Okafor',
    image : '../img/e4ma-circle.png',
    bestFood : 'Rice and beans',
    complexion : 'Dark',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Kingdom',
    age : '23'
}, {
    fullName : 'Kasie Ugwu',
    image : '../img/kasie-circle.png',
    bestFood : 'Yam and beans',
    complexion : 'Caramel',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Toys',
    age : '23'
}, {
    fullName : 'Shodipe Oladele',
    image : '../img/ladel-circle.png',
    bestFood : 'Pepper soup',
    complexion : 'Dark',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'The little mermaid',
    age : '26'
}, {
    fullName : 'Stanley Chijioke',
    image : '../img/stanley-circle.png',
    bestFood : 'Fried rice ',
    complexion : 'Caramel',
    thingsLearnt : 'I learnt about Html, css & Js',
    bestMovie : 'Spartacus',
    age : '26'
}
]

let nameLocation = document.querySelectorAll('.loveth-name');
let imageLocation = document.querySelectorAll('.img-box');
let trackLocation = document.querySelectorAll('.track');
let bestFoodLocation = document.querySelectorAll('.best-food');
let complexionLocation = document.querySelectorAll('.complexion');
let thingsLearntLocation = document.querySelectorAll('.things-learnt');
let bestMovieLocation = document.querySelectorAll('.best-movie');
let ageLocation = document.querySelectorAll('.age');
let buttonClick = document.querySelectorAll('.btn');



for (i = 0; i<teamDetails.length; i++){
    let names = teamDetails[i].fullName;
    nameLocation[i].innerHTML += names;

    // For Images
    let images = `<img src="${teamDetails[i].image}" alt="stanley img" class="img-fluid loveth-img rounded-circle w-75">`;
    imageLocation[i].innerHTML += images;


    // For best Food
    let food = `<i class="fa-solid fa-check pe-2"></i> <span class ="fw-bold">Best Food : </span> ${teamDetails[i].bestFood}`;
    bestFoodLocation[i].innerHTML += food;

    // For complexion

    let complexions = `<i class="fa-solid fa-check pe-2"></i> <span class ="fw-bold">Complexion : </span> ${teamDetails[i].complexion}`;
    complexionLocation[i].innerHTML += complexions;

    // for things learnt 
    let thingsLearned = `<i class="fa-solid fa-check pe-2"></i> <span class ="fw-bold">Things Learnt : </span> ${teamDetails[i].thingsLearnt}`
    thingsLearntLocation[i].innerHTML += thingsLearned;

    // For best movie
    let movies = `<i class="fa-solid fa-check pe-2"></i> <span class ="fw-bold">Best Movie : </span> ${teamDetails[i].bestMovie}`;
    bestMovieLocation[i].innerHTML += movies;

    // For age

    let allAge = `<i class="fa-solid fa-check pe-2"></i> <span class ="fw-bold">Age : </span> ${teamDetails[i].age}`;
    ageLocation[i].innerHTML += allAge;

    // For button
    buttonClick[i].addEventListener('click', function(){
        alert(names);
    }
    );
}




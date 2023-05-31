//const { cloningSteps } = require("jsdom/lib/jsdom/living/helpers/internal-constants");

console.log('%c HI', 'color: firebrick')

//URLS for Fetch
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

//Fetches
fetch(imgUrl)
    .then(res => res.json())
    .then(dogPics => {
        dogsInKennel(dogPics);
    });
fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        breedList(breeds);
    });

//Attach dog images to DOM
function dogsInKennel(dogImg) {
    const kennel = document.getElementById("dog-image-container");
    dogImg.message.forEach(dog => {
        img = document.createElement('img');
        img.src = `${dog}`;
        kennel.append(img);
    });
};

//Filters between single and multi word dog names
function breedList(breed) {
    const listOfBreeds = breed.message
    for (let dog in listOfBreeds) {
        if (listOfBreeds[dog].length > 0) {
            for (let dogBreed of listOfBreeds[dog]) {
            fullName = `${dogBreed} ${dog}`;
            renderBreedList(fullName);
            };
        }else {
            renderBreedList(dog);
        }
    };
};  

//Attaches dog list to DOM
function renderBreedList(dog) {
    const dogListUL = document.getElementById('dog-breeds');
    const listItem = document.createElement('li');
    listItem.innerText = dog;
    listItem.className = 'list-of-dogs'
    dogListUL.append(listItem);
}
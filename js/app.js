
//==================================================
//    ASSIGNING VARIABLES TO THE IMAGE TAGS IN THE DOM
//==================================================

//Tell the browser to look for an image that is the child of a section element. Assign the first one of those found as the value of a variable called leftImg 
const leftImg = document.querySelector('section img:first-child');
//Now tell it to look for an image that is the child of a section element once again, but assign the second of those found as the value of a variable called middleImg
const middleImg = document.querySelector('section img:nth-child(2)');
//And lastly, tell it to look for an image that is the child of a section element one more time, and assign the third of those <img> elements found as the value of a variable called rightImg
const rightImg = document.querySelector('section img:nth-child(3)');




//=================================================
//    SETTING UP THE OBJECTS TO BE DISPLAYED
//=================================================

//Create constructor function
function ProposedProject(name, src){
    //Add instances for each proposed project giving the property names and their values
    this.name = name;
    this.src = src;
}

//Create the list of 19 proposed projects by assigning the constructor to each.
//Pass in their desired string labels and the paths to their respective images as strings since it will be placed in the HTML file where the img element expects a string.
let suitcase = new ProposedProject('Star Wars Suitcase', './img/bag.jpg');
let bananaCutter = new ProposedProject('Banana Cutter', './img/banana.jpg');
let bathroomDeviceHolder = new ProposedProject('Bathroom Mobile Device Holder', './img/bathroom.jpg');
let boots = new ProposedProject('Boots', './img/boots.jpg');
let breakfastMaker = new ProposedProject('Breakfast Maker', './img/breakfast.jpg');
let meatGum = new ProposedProject('Meatball Gum', './img/bubblegum.jpg');
let chair = new ProposedProject('Chair', './img/chair.jpg');
let cthulhu = new ProposedProject('Cthulhu figurine', './img/cthulhu.jpg');
let dogDuck = new ProposedProject('Doggie Duck Lips', './img/dog-duck.jpg');
let dragon = new ProposedProject('Dragon Meat', './img/dragon.jpg');
let pens = new ProposedProject('Utensil Pens', './img/pen.jpg');
let petSweeper = new ProposedProject('Pet Sweeper', './img/pet-sweep.jpg');
let scissors = new ProposedProject('Pizza Cutter', './img/scissors.jpg');
let shark = new ProposedProject('Shark Sleeping Bag', './img/shark.jpg');
let sweepBaby = new ProposedProject('Baby Dust Mop', './img/sweep.png');
let tauntaun = new ProposedProject('Start Wars Sleeping Bag', './img/tauntaun.jpg');
let unicorn = new ProposedProject('Unicorn Meat', './img/unicorn.jpg');
let waterCan = new ProposedProject('Self Watering Can', './img/water-can.jpg');
let wineGlass = new ProposedProject('Wine Glass', './img/wine-glass.jpg');

//Create an array of all 19 proposed projects
let projects = [suitcase, bananaCutter, bathroomDeviceHolder, boots, breakfastMaker, meatGum, chair, cthulhu, dogDuck, dragon, pens, petSweeper, scissors, shark, sweepBaby, tauntaun, unicorn, waterCan, wineGlass];





//====================================================
//    SHOW 3 IMAGES ON THE SCREEN
//====================================================

//Create a function so that the projects can show up on the user's screen
function renderProjects(){
    //show the first proposal in the lefthand image area
leftImg.setAttribute('src', projects[0].src);
    //show the second proposal the middle image area
middleImg.setAttribute('src', projects[1].src);
    //show the third proposal in the righthand image area
rightImg.setAttribute('src', projects[2].src);
}

//Call on the function to show the project photos on the screen
renderProjects();


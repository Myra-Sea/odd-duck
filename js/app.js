'use strict';

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
//    ASSIGNING VARIABLES TO THE VIEW RESULTS BUTTON AREA
//=================================================
const viewResults = document.querySelector('button');
const ulElem = document.querySelector('ul');


//=================================================
//   SETTING UP THE CLICK COUNTER
//=================================================
let firstProject = null;
let secondProject = null;
let thirdProject = null;
let clickCounter = 0;
const maxClicks = 25;


//=================================================
//    SETTING UP THE OBJECTS TO BE DISPLAYED
//=================================================

let currentProjects = [];

//Create constructor function
function ProposedProject(name, src){
    //Add instances for each proposed project giving the property names and their values
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
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
let allProjects = [suitcase, bananaCutter, bathroomDeviceHolder, boots, breakfastMaker, meatGum, chair, cthulhu, dogDuck, dragon, pens, petSweeper, scissors, shark, sweepBaby, tauntaun, unicorn, waterCan, wineGlass];

const projectsNames = ['suitcase', 'bananaCutter', 'bathroomDeviceHolder', 'boots', 'breakfastMaker', 'meatGum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pens', 'petSweeper', 'scissors', 'shark', 'sweepBaby', 'tauntaun', 'unicorn', 'waterCan', 'wineGlass'];



//====================================================
//  RANDOMIZING THE ARRAY LIST
//====================================================

// shuffleArray(currentProjects);

//Using the Fisher-Yates shuffle algorithm
function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        //Generate a random index from 0 to i
        const j= Math.floor(Math.random() * (i + 1));
        //Swap the elements at i and j
        [array[i], array[j]] = [array [j], array[i]];
    }
}



//==================================================
//    SHOW 3 IMAGES ON THE SCREEN
//    THEN REMOVE THOSE FROM THE NEXT LIST
//  ALSO, LIMIT THE NUMBER OF ROUNDS TO 25 (IE. TO MAXCLICKS)
//==================================================

//Create a function so that the projects can show up on the user's screen
function renderProjects(){
    //Check whether the clickCounter has reached the maximum number of 25
    if(clickCounter == maxClicks){
        //Make the View Results button viewable
        viewResults.hidden = false;
        //If it has then make the View Results button clickable
        viewResults.addEventListener('click', handleViewResultsClick);
        //Also when that max has been reached, disable the images from being clickable anymore
        leftImg.removeEventListener('click', handleLeftProjectClick);
        middleImg.removeEventListener('click', handleMiddleProjectClick);
        rightImg.removeEventListener('click', handleRightProjectClick);
    }

    if(currentProjects.length <= 2) {
        currentProjects = allProjects.slice();
        shuffleArray(currentProjects);
    }

    //For performance reasons, it is better to remove from the end instead of the start of an array
    //.pop will choose the last item left in the array AND then remove it from the array after using it. Using that to set the final item to be firstProject and then removing it from the list is:
    firstProject = currentProjects.pop();

    //With the removal of the previous last image, there is now a new final image. So let's choose that one to be secondProject and then remove it from the list
    secondProject = currentProjects.pop();

    //And then grab the brand new final image remaining in the list, set it as thirdProject, and then remove it
    thirdProject = currentProjects.pop();


    //Now show that first proposed project in the lefthand image area
    leftImg.setAttribute('src', firstProject.src);
    //Show that second proposed project in the middle image area
    middleImg.setAttribute('src', secondProject.src);
    //And show that third proposed project in the righthand image area
    rightImg.setAttribute('src', thirdProject.src);


    firstProject.views += 1;
    secondProject.views += 1;
    thirdProject.views += 1;
}




//==================================================
//  LISTEN FOR THE CLICKS & TALLY THE VOTES
//==================================================

//Create the lefthand click counter
function handleLeftProjectClick() {
    // Tally the votes for this image
    firstProject.clicks += 1;
    clickCounter += 1;
    // Go to the next round of images
    renderProjects();
}

//Create the middle click counter
function handleMiddleProjectClick() {
    // Tally the votes for this image
    secondProject.clicks += 1;
    clickCounter += 1;
    // Go to the next round of images
    renderProjects();
}

//Create the righthand click counter
function handleRightProjectClick() {
    // Tally the votes for this image
    thirdProject.clicks += 1;
    clickCounter += 1;
    // Go to the next round of images
    renderProjects();
}

function handleViewResultsClick() {
    renderResults();
}

leftImg.addEventListener('click', handleLeftProjectClick);
middleImg.addEventListener('click', handleMiddleProjectClick);
rightImg.addEventListener('click', handleRightProjectClick);


//===================
//Call on the function to show the project photos on the screen
renderProjects();
//===================


//==================================================
//   ENABLE THE VIEW RESULTS BUTTON
//==================================================
function renderResults(){
    for(let i=0; i<allProjects.length; i++) {
        const currentProject = allProjects[i];
        const result = `${currentProject.name} was shown ${currentProject.views} times and received ${currentProject.clicks} votes.`;
        const liElem = document.createElement('li');
        liElem.textContent = result;
        ulElem.appendChild(liElem);
    }
}


//=================================================
//   ADD CANVAS BAR CHART
//=================================================
function renderChart(){
    const proposedProducts = [];
    const productVotes = [];
    const productViews = [];

    for(let i=0; i<allProjects.length; i++){
        const currentProject = allProjects[i];
        const productCounter = currentProject.name;
        const voteCounter = currentProject.clicks;
        const viewCounter = currentProject.views;

        proposedProducts.push(productCounter);
        productVotes.push(voteCounter);
        productViews.push(viewCounter);
    } 

    //   Basics of the code structure below was copied from https://www.chartjs.org/docs/latest/getting-started/    
    //   as provided by the CodeFellows repo at https://github.com/codefellows/seattle-code-201d106/blob/main/class-12/demo/charts-click-tracker/index.html 
  const data = {
    labels: proposedProducts,
    datasets: [{
      label: 'Votes',
      data: productVotes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    },
    {
      label: 'Views',
      data: productViews,
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }]
  };

  //Copied from https://www.chartjs.org/docs/latest/charts/bar.html
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  let canvasChart = document.getElementById('myChart');
  const myChart = new Chart(canvasChart, config);
}


//Below added as a particular coding quirk JB showed us during Lab 11 review on 11/7 as something that he likes to use
function startApp(){
    renderProjects();
}

startApp();
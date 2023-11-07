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


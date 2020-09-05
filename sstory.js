//storyInsertions
let name = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let house = ["the soup kitchen", "Disneyland", "the White House"];
let storyLine = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];   

//StoryText
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Constructor Function for rondomising through arrays
function randomValue(array){
    let newArray = Math.floor(Math.random()*array.length);
    return array[newArray];
}

//Selecting DOM
let dataInput = document.querySelector('.myData');
let mydiv = document.querySelector('#storyBox');
let button = document.getElementById('mybutton');

// Event Listener to the button;
    button.addEventListener('click', genStory);

// Defining the Major function
function genStory(){

// Randomising Array Insertions;   
    let newStoryText = storyText;
    let newName = randomValue(name);
    let newHouse = randomValue(house);
    let newStoryLine = randomValue(storyLine);
    let myRadio = document.getElementById('uk');

// Replacing with arrays
    newStoryText = newStoryText.replace(':insertx:', newName);
    newStoryText = newStoryText.replace(':insertx:', newName);
    newStoryText = newStoryText.replace(':inserty:', newHouse);
    newStoryText = newStoryText.replace(':insertz:', newStoryLine);

// What if the value is checked on UK!
    if(myRadio.checked){
        let temp = Math.round((94-32)* 5 / 9) + ' centigrade';
        let weight = Math.round(300*0.0714286);
        let fixWeight = weight.toFixed(0) + ' stones';

// change metric units       
        newStoryText = newStoryText.replace('94 fahrenheit', temp);
        newStoryText = newStoryText.replace('300 pounds', fixWeight);
    }
// What if a name is entered
    if(dataInput.value !== ''){
        let newDataInput = dataInput.value;
        newStoryText = newStoryText.replace('Bob', newDataInput);
    }
// Calling & applying the Function on click!
mydiv.textContent = newStoryText;
mydiv.style.visibility = 'visible';
}
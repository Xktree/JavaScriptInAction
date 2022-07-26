// 1: Days of the Week 

let dayOfWeek;
dayOfWeek = 'Monday';
console.log(dayOfWeek);

dayOfWeek = 'Friday';
console.log(`I can't wait for ${dayOfWeek}!`);

// 2: User Input 

// let animalInput = prompt('What is your name?');
// let colorInput = prompt('What is your favorite color?');
// console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// 3: Conditionals

    // 1. Meals

// Favorite Breakfast: Pancakes with Omelet
// Favorite Lunch: Chicken Sandwich
// Favorite Dinner: Sushi 

let timeOfDay = 1300;
let favoriteMeal;

if(timeOfDay < 1200) {
    favoriteMeal = 'Pancakes with Omelet';
}
else if(timeOfDay > 1200 && timeOfDay < 1700) {
    favoriteMeal = 'Chicken Sandwich';
}
else if(timeOfDay > 1700) {
    favoriteMeal = 'Sushi'; 
}

console.log(favoriteMeal);

    // 2. Random Number 


    let randomNumber = Math.floor(Math.random() * 11); 
    
if(randomNumber >= 0 && randomNumber <= 2) {
    console.log('Beatles');
}
else if(randomNumber >= 3 && randomNumber <= 5) {
     console.log('Stones');
}
else if(randomNumber >= 6 && randomNumber <= 8) {
    console.log('Floyd');
}
else if(randomNumber === 9 || randomNumber === 10) {
    console.log('Hendrix');
}  


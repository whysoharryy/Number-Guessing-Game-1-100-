let random = Math.floor(Math.random() * 100) + 1;
let input = prompt("Enter a number between 1 and 100 | Type 'Quit' to exit:");

while (true) {
    if (input === "Quit") {
        console.log("Quitting....");
        break;
    }

    let number = parseInt(input);

    if (isNaN(number)) {
        input = prompt("NaN! Please enter a valid number or type 'Quit' to exit:");
        continue;
    }

    if (number === random) {
        console.log("Congratulations! You won 10cr");
        break;
    } else if (number > random) {
        input = prompt("Try Again! You are very ahead of the number:");
    } else if (number < random) {
        input = prompt("Try Again! You are very behind the number:");
    }
}

var output = document.querySelector(".output");
var clearButton = document.querySelector(".clear-button");


clearButton.addEventListener("click", () => {
    output.innerText = "";
});

////////////// Problem 1 //////////////

function problem1() {
    var problem1Num1 = prompt("Enter First number");
    var problem1Num2 = prompt("Enter Second number");

    if (problem1Num1 > problem1Num2) {
        output.innerText = "First number is greater than Second number.";
    } else if (problem1Num1 < problem1Num2) {
        output.innerText = "Second number is greater than First number.";
    } else if (problem1Num1 == problem1Num2) {
        output.innerText = "Both numbers are equal.";
    } else {
        output.innerText = "You have not entered a number.";
    }
}


////////////// Problem 2 //////////////

function problem2() {
    var problem2Num1 = Number(prompt("Enter First Number."));
    var problem2Num2 = Number(prompt("Enter Second Number."));
    var problem2Num3 = Number(prompt("Enter Third Number."));

    if (problem2Num1 > problem2Num2 && problem2Num1 > problem2Num3) {
        output.innerText = "First Number is the Greatest Number.";
    } else if (problem2Num2 > problem2Num1 && problem2Num2 > problem2Num3) {
        output.innerText = "Second Number is the Greatest Number.";
    } else if (problem2Num3 > problem2Num1 && problem2Num3 > problem2Num2) {
        output.innerText = "Third Number is the Greatest Number.";
    } else if (problem2Num1 == problem2Num2 && problem2Num1 == problem2Num3) {
        output.innerText = "All numbers are equal.";
    } else if (problem2Num1 == problem2Num2) {
        output.innerText = "First and Second numbers are equal.";
    } else if (problem2Num2 == problem2Num3) {
        output.innerText = "Second and Third numbers are equal.";
    } else if (problem2Num1 == problem2Num3) {
        output.innerText = "First and Third numbers are equal.";
    }
};


////////////// Problem 3 //////////////

function problem3() {
    var problem3Num = prompt("Enter number");

    if (problem3Num > 0) {
        output.innerText = "Number is Positive.";
    } else if (problem3Num < 0) {
        output.innerText = "Number is Negative.";
    } else {
        output.innerText = "Number is Zero.";
    };
};


////////////// Problem 4 //////////////

function problem4() {
    var problem4Num = prompt("Enter number");

    if (problem4Num % 5 == 0) {
        output.innerText = "Number is Divisible by 5.";
    } else if (problem4Num % 11 == 0) {
        output.innerText = "Number is Divisible by 11.";
    } else {
        output.innerText = "Number is not Divisible by 5 or 11.";
    };
}


////////////// Problem 5 //////////////

function problem5() {
    var problem5Num = prompt("Enter number");

    if (problem5Num % 2 == 0) {
        output.innerText = "Number is Even.";
    } else {
        output.innerText = "Number is Odd.";
    };
}


////////////// Problem 6 //////////////

function problem6() {
    var problem6Num = prompt("Enter any Year");

    if (problem6Num % 2 == 0) {
        output.innerText = "Year is Leap Year.";
    } else {
        output.innerText = "Year is not Leap Year.";
    };
}


////////////// Problem 7 //////////////

function problem7() {
    var problem7varter = prompt("Enter any Alphabet");

    if (problem7varter == "a" || problem7varter == "A" && problem7varter == "e" || problem7varter == "E" && problem7varter == "i" || problem7varter == "I" && problem7varter == "o" || problem7varter == "O" && problem7varter == "u" || problem7varter == "U") {
        output.innerText = "Alphabet is Vowel.";
    } else {
        output.innerText = "Alphabet is Consonant.";
    };
}


////////////// Problem 8 //////////////

function problem8() {
    var problem8varter = prompt("Enter any Alphabet");

    if (problem8varter >= "A" && problem8varter <= "Z") {
        output.innerText = "Alphabet is UpperCase.";
    } else if (problem8varter >= "a" && problem8varter <= "z") {
        output.innerText = "Alphabet is UpperCase.";
    } else {
        output.innerText = "Character is not an Alphabat.";
    };
}


////////////// Problem 9 //////////////

function problem9() {
    var problem9Num = prompt("Enter any Number between 1-7");

    if (problem9Num == 1) {
        output.innerText = "Monday";
    } else if (problem9Num == 2) {
        output.innerText = "Tuesday";
    } else if (problem9Num == 3) {
        output.innerText = "Wednesday";
    } else if (problem9Num == 4) {
        output.innerText = "Thursday";
    } else if (problem9Num == 5) {
        output.innerText = "Friday";
    } else if (problem9Num == 6) {
        output.innerText = "Saturday";
    } else if (problem9Num == 7) {
        output.innerText = "Sunday";
    } else { output.innerText = "Number is out of Range." };
}


////////////// Problem 10 //////////////

function problem10() {
    var problem10Num = prompt("Enter Month Number");

    if (problem10Num == 1) {
        output.innerText = "31";
    } else if (problem10Num == 2) {
        output.innerText = "28 (29 if Leap Year)";
    } else if (problem10Num == 3) {
        output.innerText = "31";
    } else if (problem10Num == 4) {
        output.innerText = "30";
    } else if (problem10Num == 5) {
        output.innerText = "31";
    } else if (problem10Num == 6) {
        output.innerText = "30";
    } else if (problem10Num == 7) {
        output.innerText = "31";
    } else if (problem10Num == 8) {
        output.innerText = "31";
    } else if (problem10Num == 9) {
        output.innerText = "30";
    } else if (problem10Num == 10) {
        output.innerText = "31";
    } else if (problem10Num == 11) {
        output.innerText = "30";
    } else if (problem10Num == 12) {
        output.innerText = "31";
    } else { output.innerText = "Number is out of Range." };
};


////////////// Problem 11 //////////////

function problem11() {
    var amount = Number(prompt("Enter Amount"));
    var minNotes = 0;

    if (amount >= 5000) {
        minNotes += (amount - (amount % 5000)) / 5000;
        amount = amount % 5000;
    }
    if (amount >= 1000) {
        minNotes += (amount - (amount % 1000)) / 1000;
        amount = amount % 1000;
    }
    if (amount >= 500) {
        minNotes += (amount - (amount % 500)) / 500;
        amount = amount % 500;
    }
    if (amount >= 100) {
        minNotes += (amount - (amount % 100)) / 100;
        amount = amount % 100;
    }
    if (amount >= 50) {
        minNotes += (amount - (amount % 50)) / 50;
        amount = amount % 50;
    }
    if (amount >= 20) {
        minNotes += (amount - (amount % 20)) / 20;
        amount = amount % 20;
    }
    if (amount >= 10) {
        minNotes += (amount - (amount % 10)) / 10;
        amount = amount % 10;
    }
    if (amount >= 5) {
        minNotes += (amount - (amount % 5)) / 5;
        amount = amount % 5;
    }
    if (amount >= 2) {
        minNotes += (amount - (amount % 2)) / 2;
        amount = amount % 2;
    }
    if (amount >= 1) {
        minNotes += amount;
        amount = 0;
    }

    output.innerText = "Minimum Number of Notes is " + minNotes + ".";
    console.log(minNotes);
}


////////////// Problem 12 //////////////

function problem12() {
    var problem12Num1 = Number(prompt("Enter Marks of Physics 1-100"));
    var problem12Num2 = Number(prompt("Enter Marks of Chemistry 1-100"));
    var problem12Num3 = Number(prompt("Enter Marks of Biology 1-100"));
    var problem12Num4 = Number(prompt("Enter Marks of Mathematics 1-100"));
    var problem12Num5 = Number(prompt("Enter Marks of Computer 1-100"));
    var percentage = problem12Num1 + problem12Num2 + problem12Num3 + problem12Num4 + problem12Num5 / 500 * 100;


    if (percentage >= 90) {
        output.innerText = "A";
    } else if (percentage >= 80) {
        output.innerText = "B";
    } else if (percentage >= 70) {
        output.innerText = "C";
    } else if (percentage >= 60) {
        output.innerText = "D";
    } else if (percentage >= 40) {
        output.innerText = "E";
    } else if (percentage < 40) {
        output.innerText = "F";
    } else { output.innerText = "Number is out of Range." };
};


////////////// Problem 13 //////////////

function problem13() {
    var salary = Number(prompt("Enter Your Salary"));

    if (salary <= 10000) {
        var hra = (20 / 100) * salary;
        var da = (80 / 100) * salary;
        var grossSalary = salary + hra + da;
        output.innerText = "Your Gross Salary is " + grossSalary;
    } else if (salary <= 20000) {
        var hra = (25 / 100) * salary;
        var da = (90 / 100) * salary;
        var grossSalary = salary + hra + da;
        output.innerText = "Your Gross Salary is " + grossSalary;
    } else if (salary > 20000) {
        var hra = (30 / 100) * salary;
        var da = (95 / 100) * salary;
        var grossSalary = salary + hra + da;
        output.innerText = "Your Gross Salary is " + grossSalary;
    } else { output.innerText = "Number is out of Range." };
};


////////////// Problem 14 //////////////

function problem14() {
    var units = Number(prompt("Enter Your Electricity Units"));
    var unit
    var bill
    var surcharge

    if (units <= 50) {
        unit = 0.50
        bill = units * unit
        surcharge = units / unit * 20
        output.innerText = "Your Electricity Bill is Rs/" + bill + ".";
    } else if (units <= 150) {
        unit = 0.75
        bill = units * unit
        surcharge = units / unit * 20
        output.innerText = "Your Electricity Bill is Rs/" + bill + ".";
    } else if (units <= 250) {
        unit = 1.20
        bill = units * unit
        surcharge = units / unit * 20
        output.innerText = "Your Electricity Bill is Rs/" + bill + ".";
    } else if (units > 250) {
        unit = 1.50
        bill = units * unit
        surcharge = units / unit * 20
        output.innerText = "Your Electricity Bill is Rs/" + bill + ".";
    } else { output.innerText = "Number is out of Range." };
};
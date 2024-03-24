#! /usr/bin/env node


import inquirer from 'inquirer'
import chalk from 'chalk'
let blue = chalk.blue.bold.italic
let green = chalk.green.bold.italic
let red = chalk.red.bold.italic
let white = chalk.white.bold.italic


console.log(white("\nWELCOME TO NUMBER GUESSING GAME MADE BY MUHAMMAD ADIL\n"));



async function startGame() {

    let prompt = await inquirer.prompt([
        {
            name: "user",
            type: "string",
            message: blue("Enter number between 1 to 10")
        }
    ])
    if (prompt.user === "") {
        console.log(red("\nIncorrect Number ! Enter number between 1 to 10"));
        return
    }
    let randomNum = Math.floor(Math.random() * 10)

    if (prompt.user == randomNum) {
        console.log(green("\n Congratulations You Won tha GAME"));
    }
    else {
        console.log(red("\nYou are Loss the Game You guess wrong number"));
    }
}



async function userAnswer() {


    let isExit = false
    do {
        let userStart = await inquirer.prompt([
            {
                name: "choose",
                type: "list",
                choices: ["StartGame", "Exit"]
            }
        ])

        switch (userStart.choose) {
            case "StartGame":
                startGame();
                isExit = true
                break;
            case "Exit":
                console.log(green("\nTHANKS FOR VISITING THE NUMBER GUESSING GAME"));
                isExit = true
        }
    } while (!isExit)


}
userAnswer()






























import { checkWinner } from "./checkWinner.js";
let symbol = "X"


const Player = (char) => {
    let symbol = char;
    const getSymbol = () => symbol;
    const setSymbol = (char) => {
        symbol = char;
        return;
    }

    let gamesWon = 0;
    const getGamesWon = () => gamesWon;
    const setGamesWon = () => gamesWon++;

    let choice;
    const getChoice = () => choice;
    const setChoice = (symbol) => {
        choice = symbol;
        return;
    }

    const clearEventListeners = () => {
        const element = document.getElementById(".game-board");

    }

    return {getSymbol, setSymbol, getGamesWon, setGamesWon, getChoice, setChoice};

}
const gameBoard = (() => {
    let board = ['','','','','','','','',''];
    const render = (board) => {
        const game = document.querySelector(".game-board");
        while(game.firstChild) {
            game.firstChild.remove();
        }
        //game.innerHTML = '';
        for(let i = 0; i < 9; i++) {
            //console.log(board[0]);
            const square = document.createElement("div");
            
            if (board[i] !== '') {
                square.textContent = board[i];
            }
            
            square.setAttribute("id", String(i));
            square.addEventListener("click", function() {
                clickHandler(square.id);
            });
            game.appendChild(square);

        }
    }
    const getBoard = () => board;
    const setBoard = (char, index) => {
        if (board[index] === '') {
            board[index] = char;
            return true;
        } else {
            return false;
        }
    }

    const clearBoard = () => {
        board = ['','','','','','','','',''];
    }

    let gameOver = false;
    const getGameOver = () => gameOver;
    const setGameOver = () => {
        gameOver = !gameOver;
        return;
    }
    return{getBoard, setBoard, getGameOver, setGameOver,render, clearBoard};
})();


let clickHandler = function(square) {
    let id = square;
    let empty;
    if (symbol === "X") {
        if(gameBoard.getBoard()[Number(id)] === "") {
            empty = true;
            playerOne.setChoice(Number(id));
            gameBoard.setBoard("X",playerOne.getChoice());
            gameBoard.render(gameBoard.getBoard());
            symbol = "O";
            document.querySelector(".body").style.backgroundColor = "#fc8686";
            document.querySelector(".scoreOne").style.fontWeight = "normal";
            document.querySelector(".scoreTwo").style.fontWeight = "bold";
        } else {
            empty = false
        }
    } else {
        if(gameBoard.getBoard()[Number(id)] === "") {
            empty = true;
            playerTwo.setChoice(Number(id));
            gameBoard.setBoard("O",playerTwo.getChoice());
            gameBoard.render(gameBoard.getBoard());
            symbol = "X";
            document.querySelector(".body").style.backgroundColor = "#86dffc";
            document.querySelector(".scoreOne").style.fontWeight = "bold";
            document.querySelector(".scoreTwo").style.fontWeight = "normal";
        } else {
            empty = false
        }
        
    }
    if (empty) {
        let result = checkWinner(gameBoard.getBoard());
        if (result != "") {
            if (result === "X") {
                playerOne.setGamesWon(playerOne.getGamesWon() + 1);
                gameBoard.clearBoard();
                gameBoard.render(gameBoard.getBoard());
                const score = document.querySelector(".scoreOne");
                console.log(playerOne.getGamesWon());
                score.textContent = "Player 1 - " + String(playerOne.getGamesWon());
                symbol = "X";
                document.querySelector(".body").style.backgroundColor = "#86dffc";
                document.querySelector(".scoreOne").style.fontWeight = "bold";
                document.querySelector(".scoreTwo").style.fontWeight = "normal";
            } else if (result === "O") {
                playerTwo.setGamesWon(playerTwo.getGamesWon() + 1);
                gameBoard.clearBoard();
                gameBoard.render(gameBoard.getBoard());
                const score = document.querySelector(".scoreTwo");
                score.textContent = "Player 2 - " + String(playerOne.getGamesWon());
                symbol = "O";
                document.querySelector(".body").style.backgroundColor = "#fc8686";
                document.querySelector(".scoreOne").style.fontWeight = "normal";
                document.querySelector(".scoreTwo").style.fontWeight = "bold";
            } else {
                gameBoard.clearBoard();
                gameBoard.render(gameBoard.getBoard());
                symbol = "X";
                document.querySelector(".body").style.backgroundColor = "#86dffc";
                document.querySelector(".scoreOne").style.fontWeight = "bold";
                document.querySelector(".scoreTwo").style.fontWeight = "normal";
            }
    }
    console.log("done");
    return;
    }
}
const playerOne = Player("X");
const playerTwo = Player("O");
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    gameBoard.clearBoard()
    gameBoard.render(gameBoard.getBoard());
    const scoreOne = document.querySelector(".scoreOne");
    const scoreTwo = document.querySelector(".scoreTwo");
    console.log(scoreOne.textContent);
    scoreOne.textContent = "Player 1 - 0";
    scoreTwo.textContent = "Player 2 - 0";
    symbol = "X"
    document.querySelector(".body").style.backgroundColor = "#86dffc";
    document.querySelector(".scoreOne").style.fontWeight = "bold";
    document.querySelector(".scoreTwo").style.fontWeight = "normal";
})

gameBoard.render(gameBoard.getBoard());
export const checkWinner = (board) => {
    console.log("checking");
    //console.log(typeof(board[0]));
    //console.log(typeof(board[1]));
    //console.log(typeof(board[2]));
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== "") {
        console.log(board[0]);
        if (board[0] == "X") {
            return 'X';
        } else if (board[0] == 'O') {
            return 'O';
        }
    }
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
        if (board[3] == 'X') {
            return 'X';
        } else if (board[3] == 'O') {
            return 'O';
        }
    }
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
        if (board[6] == 'X') {
            return 'X';
        } else if (board[6] == 'O') {
            return 'O';
        }
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
        if (board[0] == 'X') {
            return 'X';
        } else if (board[0] == 'O') {
            return 'O';
        }
    }
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
        if (board[1] == 'X') {
            return 'X';
        } else if (board[1] == 'O') {
            return 'O';
        }
    }
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
        if (board[2] == 'X') {
            return 'X';
        } else if (board[2] == 'O') {
            return 'O';
        }
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
        if (board[0] == 'X') {
            return 'X';
        } else if (board[0] == 'O') { 
            return 'O';
        }
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
        if (board[2] == 'X') {
            return 'X';
        } else if (board[2] == 'O') {
            return 'O';
        }
    }
    let count = 0;
    for (let i = 0; i < 9; i++) {
        if(board[i] !== "") {
            count++;
        }
    }
    if (count === 9) {
        return "1";
    }
    return '';
};
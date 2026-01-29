const grid = document.getElementById("sudoku-grid");

// Create 6x6 grid using DOM
for (let i = 0; i < 36; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 6;
    input.classList.add("cell");
    grid.appendChild(input);
}

// Get board values
function getBoard() {
    const cells = document.querySelectorAll(".cell");
    let board = [];

    for (let i = 0; i < 6; i++) {
        board.push([]);
        for (let j = 0; j < 6; j++) {
            let val = cells[i * 6 + j].value;
            board[i][j] = val === "" ? 0 : parseInt(val);
        }
    }
    return board;
}

// Set solved board to DOM
function setBoard(board) {
    const cells = document.querySelectorAll(".cell");

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            cells[i * 6 + j].value = board[i][j];
        }
    }
}

// Check if number is valid
function isValid(board, row, col, num) {

    // Row & column check
    for (let i = 0; i < 6; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    // 2x3 subgrid
    let startRow = row - row % 2;
    let startCol = col - col % 3;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true;
}

// Backtracking solver
function solve(board) {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {

            if (board[row][col] === 0) {

                for (let num = 1; num <= 6; num++) {

                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;

                        if (solve(board)) return true;

                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Solve button
function solveSudoku() {
    let board = getBoard();

    if (solve(board)) {
        setBoard(board);
    } else {
        alert("No solution exists!");
    }
}

// Clear button
function clearGrid() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.value = "";
    });
}

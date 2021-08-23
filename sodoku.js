let sudoko =  [
    [ 0,0,0,2,6,0,7,0,1 ],  // 0 is indicate a Empty value  
    [ 6,8,0,0,7,0,0,9,0 ],
    [ 1,9,0,0,0,4,5,0,0 ],
    [ 8,2,0,1,0,0,0,4,0 ],
    [ 0,0,4,6,0,2,9,0,0 ],
    [ 0,5,0,0,0,3,0,2,8 ],
    [ 0,0,9,3,0,0,0,7,4 ],
    [ 0,4,0,0,5,0,0,3,6 ],
    [ 7,0,3,0,1,8,0,0,0 ] 
];
// function will search for empty position  0 // this function find empty value 
function EmptySpot(sudoko){
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoko[i][j] === 0)
            return [i,j];
        }
    }
    return [-1,-1];
} // if the board is full of empty 0 then it will return [-1,-1] 

// The checkRow function takes the board as an argument , the row that would like to check value that we want to add to this row

function checkRow(sudoko, row, value) {
    for(let i = 0; i < sudoko.length; i++) {  
        if (sudoko[row][i] === value) {
            return false;
        }
    }
     return true;
};

// It itrates over the requested row and return false in case this row alraady contain this value 
// otherwise it returns true which means that this row is valid 

// in Same way we can check the check column function

function checkColumn(sudoko,column,value) {
    for (let i = 0; i < sudoko.length; i++) {
        if(sudoko[i][column] === value) {
            return false;
        } 
    }
    return true;
};
// To get the first cell of the square by using Math.floor() we divide the row and column by 3 convert it to the largest
// integer less than or equal to the result and then we multiply this number with 3 in order to get the most upper row of the square

function checkSquare(sudoko , row , column , value) {
    boxRow = Math.floor(row / 3 )  * 3;
    boxCol = Math.floor(column / 3)  * 3;
    let r , c ;
    while(r < 3){
        r = 0;
        r++;
        while(c < 3){
            c = 0;
            c++;
                 if(sudoko[boxRow + r][boxCol + c] === value)
                 return false;
        }
    }
    return true;
};

function checkValue(sudoko , row , column , value) {
    if(checkRow(sudoko , row , value) && 
        checkColumn(sudoko , column , value) && 
        checkSquare(sudoko , row , column , value)) {
            return true;
           }
       return false;
};

// Now we need to try every possible number from 1 to 9 and check if it is valid 
function solve(sudoko) {
     let emptySpot = EmptySpot(sudoko);
     let row = emptySpot[0];
     let col = emptySpot[1];
     if (row === -1 ){
         return sudoko;
     }
    for (let num = 1; num<=9; num++){
        if(checkValue(sudoko , row , col , num)){
            sudoko[row][col] = num;
            solve(sudoko);
        }
    }
    if ( EmptySpot (sudoko)[0] !== -1)
    sudoko[row][col] = 0;
    return sudoko;

 }
console.log("Sodoku");
console.log(sudoko);
console.log("Solved Sudoku");    
console.log(solve(sudoko));                
         

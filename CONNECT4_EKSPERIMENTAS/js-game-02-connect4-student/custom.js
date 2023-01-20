document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div'); // paciups visus divus, esancius "grid" klases viduje, t.y. blokus zaidime
    const result = document.querySelector('#result'); // talpinamas resultatas cia bus
    const displayCurrentPlayer = document.querySelector('#current-player'); // parinkimas esancio zaidejo
    let currentPlayer = 1;

/* ******************************************************************

    const winningArrays = [ // visų įmanomų laiminčių laukelių derinių sąrašas
[0, 1, 2, 3],
[41, 40, 39, 38],
[7, 8, 9, 10],
[34, 33, 32, 31],
[14, 15, 16, 17],
[27, 26, 25, 24],
[21, 22, 23, 24],
[20, 19, 18, 17],
[28, 29, 30, 31],
[13, 12, 11, 10],
[35, 36, 37, 38],
[6, 5, 4, 3],
[0, 7, 14, 21],
[41, 34, 27, 20],
[1, 8, 15, 22],
[40, 33, 26, 19],
[2, 9, 16, 23],
[39, 32, 25, 18],
[3, 10, 17, 24],
[38, 31, 24, 17],
[4, 11, 18, 25],
[37, 30, 23, 16],
[5, 12, 19, 26],
[36, 29, 22, 15],
[6, 13, 20, 27],
[35, 28, 21, 14],
[0, 8, 16, 24],
[41, 33, 25, 17],
[7, 15, 23, 31],
[34, 26, 18, 10],
[14, 22, 30, 38],
[27, 19, 11, 3],
[35, 29, 23, 17],
[6, 12, 18, 24],
[28, 22, 16, 10],
[13, 19, 25, 31],
[21, 15, 9, 3],
[20, 26, 32, 38],
[36, 30, 24, 18],
[5, 11, 17, 23],
[37, 31, 25, 19],
[4, 10, 16, 22],
[2, 10, 18, 26],
[39, 31, 23, 15],
[1, 9, 17, 25],
[40, 32, 24, 16],
[9, 17, 25, 33],
[8, 16, 24, 32],
[11, 17, 23, 29],
[12, 18, 24, 30],
[1, 2, 3, 4],
[5, 4, 3, 2],
[8, 9, 10, 11],
[12, 11, 10, 9],
[15, 16, 17, 18],
[19, 18, 17, 16],
[22, 23, 24, 25],
[26, 25, 24, 23],
[29, 30, 31, 32],
[33, 32, 31, 30],
[36, 37, 38, 39],
[40, 39, 38, 37],
[7, 14, 21, 28],
[8, 15, 22, 29],
[9, 16, 23, 30],
[10, 17, 24, 31],
[11, 18, 25, 32],
[12, 19, 26, 33],
[13, 20, 27, 34],
]

function restart() {
    setTimeout(function() {
        document.location.href = ""
    }, 5000)
}

function checkBoard() {
    for(let y =0; y < winningArrays.length; y++) {
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]
    

    if ( 
        square1.classList.contains('player-one') && 
        square2.classList.contains('player-one') && 
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')) 
        {
            result.innerHTML = 'Player One Wins!';
            restart();
        } 

        if ( 
            square1.classList.contains('player-two') && 
            square2.classList.contains('player-two') && 
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two')) 
            {
                result.innerHTML = 'Player Two Wins!';
                restart();
            } 
}
*/
// *******************************************************************************//

const eil1 = [0, 1, 2, 3, 4, 5, 6];
const eil2 = [7, 8, 9, 10, 11, 12, 13];
const eil3 = [14, 15, 16, 17, 18, 19, 20];
const eil4 = [21, 22, 23, 24, 25, 26, 27,];
const eil5 = [28, 29, 30, 31, 32, 33, 34];
const eil6 = [35, 36, 37, 38, 39, 40, 41];
// const eil7 = [42, 43, 44, 45, 46, 47, 48];

/*
const eil1 = [0, 1, 2, 3, 4, 5];
const eil2 = [6, 7, 8, 9, 10, 11];
const eil3 = [12, 13, 14, 15, 16, 17];
const eil4 = [18, 19, 20, 21, 22, 23];
const eil5 = [24, 25, 26, 27, 28, 29];
const eil6 = [30, 31, 32, 33, 34, 35];
const eil7 = [36, 37, 38, 39, 40, 41];
*/

function restart() {
    setTimeout(function() {
        document.location.href = ""
    }, 5000)
}

function checkBoard() {                   
    for(let y =0; y < squares.length; y++) {              
        let horizontalR = [y, (y+1), (y+2), (y+3)];
        let a =0;
        let b =0;
        let c =0;
        let d =0;

// "HORIZONTAL RIGHT" CHECK, IF ANY PLAYER WON        

                // !!!!!!!!!!
                // Patikrinti, ar išmeta vertes, kurių mums reikia.
                // Pagal viską, reikia, kad šios reikšmės būtų skaičiai, kad galima būtų atlikti patikrinimus.
        if (
        squares[y].classList.contains('player-one') && 
        squares[y+1].classList.contains('player-one') && 
        squares[y+2].classList.contains('player-one') &&
        squares[y+3].classList.contains('player-one')) 


            {let horizontalCheck1 = squares[y];
            let horizontalCheck2 = squares[y+1];
            let horizontalCheck3 = squares[y+2];
            let horizontalCheck4 = squares[y+3];
            {

                // !!!!!!!!!!
                console.log(horizontalR);
                console.log(eil6.includes(horizontalCheck1));
                console.log(eil6.includes(horizontalCheck2));
                console.log(eil6.includes(horizontalCheck3));
                console.log(eil6.includes(horizontalCheck4));
                console.log(horizontalCheck1);
                console.log(horizontalCheck2);
                console.log(horizontalCheck3);
                console.log(horizontalCheck4);
                console.log(squares[y]);
                console.log(squares[y+1]);
                console.log(squares[y+2]);
                console.log(squares[y+3]);

    for(let z=0; z < 3; z++) 
                
    // "HORIZONTAL RIGHT" SEARCH (IF 4 ELEMENTS ARE FROM THE SAME PLAYER)
                    
    // MAKING THE CHECK, IF THE ELECTED NUMBERS ARE "INLINE" in row 1
                    if(
                    eil1.includes(horizontalCheck1) == true &&
                    eil1.includes(horizontalCheck2) == true &&
                    eil1.includes(horizontalCheck3) == true &&
                    eil1.includes(horizontalCheck4) == true) 
                    {
                        result.innerHTML = 'Player One Wins!';              
                        restart(); 
                    }
                    // MAKING THE CHECK, IF THE ELECTED NUMBERS ARE "INLINE" in row 2
                    if(
                    eil2.includes(horizontalCheck1) == true &&
                    eil2.includes(horizontalCheck2) == true &&
                    eil2.includes(horizontalCheck3) == true &&
                    eil2.includes(horizontalCheck4) == true)
                    {
                        result.innerHTML = 'Player One Wins!';              
                        restart();
                    }
                    // MAKING THE CHECK, IF THE ELECTED NUMBERS ARE "INLINE" in row 3
                    if(
                    eil3.includes(horizontalCheck1) == true &&
                    eil3.includes(horizontalCheck2) == true &&
                    eil3.includes(horizontalCheck3) == true &&
                    eil3.includes(horizontalCheck4) == true)
                    {
                        result.innerHTML = 'Player One Wins!';              
                        restart();
                    }
                    // MAKING THE CHECK, IF THE ELECTED NUMBERS ARE "INLINE" in row 4
                    if(
                    eil4.includes(horizontalCheck1) == true &&
                    eil4.includes(horizontalCheck2) == true &&
                    eil4.includes(horizontalCheck3) == true &&
                    eil4.includes(horizontalCheck4) == true)
                    {
                        result.innerHTML = 'Player One Wins!';              
                        restart();
                    }
                    // MAKING THE CHECK, IF THE ELECTED NUMBERS ARE "INLINE" in row 5
                    if(
                    eil5.includes(horizontalCheck1) == true &&
                    eil5.includes(horizontalCheck2) == true &&
                    eil5.includes(horizontalCheck3) == true &&
                    eil5.includes(horizontalCheck4) == true)
                    {
                    result.innerHTML = 'Player One Wins!';              
                    restart();
                    }
                    // MAKING THE CHECK, IF THE ELECTED NUMBERS ARE "INLINE" in row 6
                    if(
                    eil6.includes(horizontalCheck1) == true &&
                    eil6.includes(horizontalCheck2) == true &&
                    eil6.includes(horizontalCheck3) == true &&
                    eil6.includes(horizontalCheck4) == true)
                    {
                        result.innerHTML = 'Player One Wins!';              
                        restart();
                    }           
                    }
            }        

// "VERTICAL DOWN" SEARCH -> WORKS!
        if (
        squares[y].classList.contains('player-one') &&
        squares[y+7].classList.contains('player-one') &&
        squares[y+14].classList.contains('player-one') &&
        squares[y+21].classList.contains('player-one')) 
            {
                result.innerHTML = 'Player Two Wins!';
                restart();
            }

        //
//DIAGONAL (UP-RIGHT) SEARCH -> WORKS!
        if (
            squares[y].classList.contains('player-one') && 
            squares[y-6].classList.contains('player-one') && 
            squares[y-12].classList.contains('player-one') &&
            squares[y-18].classList.contains('player-one')) 
            {    
                result.innerHTML = 'Player One Wins!';              
                restart();
            }

//DIAGONAL (DOWN-RIGHT) SEARCH -> WORKS!
        if (
            squares[y].classList.contains('player-one') && 
            squares[y+8].classList.contains('player-one') &&  
            squares[y+16].classList.contains('player-one') &&
            squares[y+24].classList.contains('player-one')) 
            {    
                result.innerHTML = 'Player One Wins!';              
                restart();
            }


    } // THIS BRACKET IS FOR "FOR LOOP" CLOSING
}   // THIS BRACKET IS FOR CLOSING THE FUNCTION
             

// ********************************************************************* //




    for(let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            if (squares[ i+7 ].classList.contains("taken") && !squares[i].classList.contains("taken")) { // .classList -> function for looking at assigned class / .contains -> function to check assgined class
                if (currentPlayer == 1) {
                    squares[i].classList.add("taken");
                    squares[i].classList.add("player-one");
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                 } else if (currentPlayer == 2) {
                    squares[i].classList.add("taken");
                    squares[i].classList.add("player-two");
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                 }
            } else {
                alert("Cannot go here!");
            }
            checkBoard();
        }

    }




})
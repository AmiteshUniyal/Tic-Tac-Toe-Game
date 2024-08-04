let toggle = true;
let i = 0;
let board = document.getElementsByClassName('board');
let reset = document.getElementById('reset');
let cell = document.querySelectorAll('.cell');
let result = document.getElementById('result');
let over = false;

cell.forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === '' && !over) {
            if(toggle ) {
                box.innerHTML = 'X';
                CheckWinner();
            }else {
                box.innerHTML = 'O';
                CheckWinner();
            }
            toggle = !toggle;
        }
    });
});

reset.addEventListener('click', () => {
    cell.forEach(box => {
        box.innerHTML = '';
    });
    over = false;
    result.innerHTML = '';
});

CheckWinner = () => {
    let winner = '';
    let X = 'X';
    let O = 'O';
    if(cell[0].innerHTML === X && cell[1].innerHTML === X && cell[2].innerHTML === X) {winner=X;}
    if(cell[3].innerHTML === X && cell[4].innerHTML === X && cell[5].innerHTML === X) {winner =X;}
    if(cell[6].innerHTML === X && cell[7].innerHTML === X && cell[8].innerHTML === X) {winner =X;}
    if(cell[0].innerHTML === X && cell[3].innerHTML === X && cell[6].innerHTML === X) {winner =X;}
    if(cell[1].innerHTML === X && cell[4].innerHTML === X && cell[7].innerHTML === X) {winner =X;}
    if(cell[2].innerHTML === X && cell[5].innerHTML === X && cell[8].innerHTML === X) {winner =X;}
    if(cell[0].innerHTML === X && cell[4].innerHTML === X && cell[8].innerHTML === X) {winner =X;}
    if(cell[2].innerHTML === X && cell[4].innerHTML === X && cell[6].innerHTML === X) {winner =X;}
    if(cell[0].innerHTML === O && cell[1].innerHTML === O && cell[2].innerHTML === O) {winner =O;}
    if(cell[3].innerHTML === O && cell[4].innerHTML === O && cell[5].innerHTML === O) {winner =O;}
    if(cell[6].innerHTML === O && cell[7].innerHTML === O && cell[8].innerHTML === O) {winner =O;}
    if(cell[0].innerHTML === O && cell[3].innerHTML === O && cell[6].innerHTML === O) {winner =O;}
    if(cell[1].innerHTML === O && cell[4].innerHTML === O && cell[7].innerHTML === O) {winner =O;}
    if(cell[2].innerHTML === O && cell[5].innerHTML === O && cell[8].innerHTML === O) {winner =O;}
    if(cell[0].innerHTML === O && cell[4].innerHTML === O && cell[8].innerHTML === O) {winner =O;}
    if(cell[2].innerHTML === O && cell[4].innerHTML === O && cell[6].innerHTML === O) {winner =O;}
    if(winner !== '') {
        result.innerHTML = `🎊 ${winner} is the winner 🎊`;
        over = true;
    }
    if(cell[0].innerHTML !== '' && cell[1].innerHTML !== '' && cell[2].innerHTML !== '' && cell[3].innerHTML !== '' && cell[4].innerHTML !== '' && cell[5].innerHTML !== '' && cell[6].innerHTML !== '' && cell[7].innerHTML !== '' && cell[8].innerHTML !== '' && winner === '') 
    {
        result.innerHTML = ` It's a Draw `;
        over = true;
    }
}
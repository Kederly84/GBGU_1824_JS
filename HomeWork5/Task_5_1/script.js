(function chess(){
    let chess = document.querySelector('.chess');
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let num = 0;
    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 9; x++) {
            console.log(num);
            if (0 < num && num <= 8) {
                let letter = document.createElement("div");
                letter.textContent = letters[x-1];
                letter.className = "chess-new text"
                chess.appendChild(letter)
            } else if (num % 2 === 0 && x !== 0) {
                chess.innerHTML += '<div class="chess-new black"></div>';
            } else if (num % 2 !== 0 && x !== 0) {
                chess.innerHTML +='<div class="chess-new"></div>';
            } else if (x === 0) {
                if (i>0) {
                    let letter = document.createElement("div");
                    letter.textContent = i;
                    letter.className = "chess-new text"
                    chess.appendChild(letter)
                } else {
                    chess.innerHTML +='<div class="chess-new"></div>';
                }
            }
            num++;
        }
    }
})()
function getComputerChoise() {
    let math = Math.random();

    if (math > 0 && math < 1/3) {
        return "Rock";
    }   else if (math > 1/3 && math < 2/3) {
        return "Paper";
    }   else if (math > 2/3 && math < 1) {
        return "Scissors";
    }
}
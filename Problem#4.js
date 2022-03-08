let sandwitch_calculator = function (bread) {
    if (bread % 2 == 0) {
        return bread / 2;
    }
    else {
        return "breads is not enough";
    }
}
console.log("Amount of breads is: 10 so, sandwitches  mades: ", sandwitch_calculator(10));
function sandwitch_calcu(bread, cheese) {
    if (bread % 2 == 0 && cheese > 1) {
        return bread / 2;
    }
    else if (bread % 2 == 0 && cheese == 1) {
        return 1;
    }
    else {
        return "breads is not enough";
    }
}
console.log("Amount of entered breads is: 10 and cheese: 1 so sandwitch mades: ", sandwitch_calcu(10, 1));
        
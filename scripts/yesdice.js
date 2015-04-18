/**
 * Main YesDice component / library
 * @todo Add / use require.js: http://requirejs.org/docs/start.html
 */


/** yesDice lib initiation object */
function yesDice(){

    // current games
    var diceGames = undefined;


    /** main diceGame object, represents one session of dice throwing*/
    function diceGame(){

    }

    /** dicePool object, represents dice on the 'table' in this diceGame */
    function dicePool(){

    }



}

/** DicePool object, represents dice on the 'table' in this diceGame */
function DicePool(){
    this.dices = [];
}
DicePool.prototype = {
    constructor: Dice,

    addDice:function(dice,number){
       for (var added = 1; added <= number; added++) {
           this.dices.push(dice);
       }
    },
    roll:function(){
        this.dices.forEach(function(dice) {
            consoleLog(dice.roll());
        });
    }
}

/** Dice object, represents a single die */
function Dice()
{
    this.diceSides = [];
}
Dice.prototype = {
    constructor: Dice,

    addSide:function(value){
        this.diceSides.push(new DiceSide(value));
    },
    roll:function(){
        var resultSide = getRandomInt(0,this.diceSides.length -1);
        return this.diceSides[resultSide].value;
    }
}

/** DiceSide object, represents a side or facing of a die */
function DiceSide(value) {
    this.value = value;
}
DiceSide.prototype = {
    constructor: DiceSide
}





/** @section randomization functions */

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/** @section debug help */
function consoleLog(output){
    console.log(output);
}
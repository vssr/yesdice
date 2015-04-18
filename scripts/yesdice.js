/**
 * Main YesDice component / library
 * @todo Add / use require.js: http://requirejs.org/docs/start.html
 */


/** YesDice app object */
function YesDice(){
    // current games
    this.diceGames = [];
    // available dice
    this.diceBox = undefined;
}
YesDice.prototype = {
    constructor : YesDice,

    addDiceGame:function(diceGame){
        this.diceGames.push(diceGame);
    },
    setDiceBox:function(diceBox){
        this.diceBox = diceBox;
    }

}



/** main DiceGame object, represents one session of dice throwing*/
function DiceGame(){
    this.dicePool = undefined;
}
DiceGame.prototype = {
    constructor: DiceGame,

    setDicePool:function(dicePool){
       this.dicePool = dicePool;
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
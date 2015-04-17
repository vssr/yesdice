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

    /** diceSide object, represents a side or facing of a die */
    function diceSide() {

    }

}


/** dice object, represents a single die */
function Dice()
{
    this.diceSides = [];
}

Dice.prototype = {
    constructor: Dice,

    roll:function(){
        consoleLog(getRandomInt(1,6));
    }
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
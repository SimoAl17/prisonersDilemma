const BaseBot = require("./baseBot.js");

class BandaBassotti extends BaseBot{

    constructor(){
        super();
        this.gameHistory = [];
    }

    newGeneration(){
        super.newGeneration();
    }

    play(){
        if (this.gameHistory.length < 5) {
            return 0;
        } else if (this.gameHistory[this.gameHistory.length -1] === 0){
            return 0;
        } else if (this.gameHistory[this.gameHistory.length -1] === 1){
            return 0;
        }
    }




    memorize(number){
        this.gameHistory.push(number);
    }

}

module.exports = BandaBassotti;
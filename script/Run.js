import Game from "./Game.js";
import BetButton from "./Bet.js";
document.addEventListener('DOMContentLoaded',()=>{
    const game = new Game();

    new BetButton(document.getElementById('bet1'), game, 1);
    new BetButton(document.getElementById('bet2'), game, 2);
    new BetButton(document.getElementById('bet3'), game, 3);
})
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, prevRoll;

init();

//console.log(dice);
// document gives access to the DOM
// Returns the first element that is a descendant of node that matches selectors.
// can only change plain text
//document.querySelector('#current-' + activePlayer).textContent = dice;

// Sets HTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// style method, then CSS property, then CSS property equals the value


//function btn() {}

//btn();
//                                  Listens for the event of a mouse click on the 'btn-roll' class
//                                                   onClick, call btn function
//                                                           btn does not have (), because we do not call it here
//                                                                                 the eventListener does
//document.querySelector('.btn-roll').addEventListener('click',btn);

document.querySelector('.btn-roll').addEventListener('click', function() {
        // Do something here... example of anonymous inner function 
        if(gamePlaying)
        {
            // 1. produce random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // if active player roll and last roll are both sixes, his entire score is set to 0
        if((dice + activePlayer.prevRoll) === 12) 
        {
            scores[activePlayer] = 0;
            //set previous dice roll for next roll
            activePlayer.prevRoll = dice;
            nextPlayer();
        }
        // 3. update the round score if the rolled number was not a 1
        if(dice !== 1)
        {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            //set previous dice roll for next roll
            activePlayer.prevRoll = dice;
        }
        else
        {
            //set previous dice roll for next roll
            activePlayer.prevRoll = dice;
            nextPlayer();
        }   
        }
        
});

document.querySelector('.btn-hold').addEventListener('click', function()
{
    if(gamePlaying)
    {
    // add current score to total score
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if(scores[activePlayer] >= document.querySelector(".form").textContent)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else
    // next player
    nextPlayer();
}
});

function nextPlayer()
{
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // classList: allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
    scores = [95, 95];
    roundScore = 0;
    prevRoll = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//document.querySelector('#name-1').textContent = 'Player 1';
//document.querySelector('#name-2').textContent = 'Player 2';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
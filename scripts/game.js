// New game created
let player = 1;
const turn = $('.turns');
const winner = $('.winner');
const board = $('.board');
let endGame = false;

$('.box').click(function(){
    box = $(this);

    // Checks if the box is empty
    if ((!(box.hasClass('token1') || box.hasClass('token2'))) && (!endGame)){

        assignToken (player,box);
        
        turn.html('Player '+player+' turn')

        if (checkWinner (board, token)){
            winner.html('Player '+player+ ' has won :)')
            endGame = true;
            return endGame

        } else if (checkDraw ()){
            winner.html('Draw!')
            return 
        } 
        else {
            player = nextPlayer (player);
            displayPlayer (turn, player)
        }
    }

    $('#play-again').click(function(e){
        e.preventDefault();
        $('.box > img').remove();
        player = 1;
        return
    })
});


// Sets next player
function nextPlayer (player){
    if(player === 1){
        return player = 2;
    } else {
        return player = 1;
    }
}
// Assigns token to each player
function assignToken(player,box){

    const p1 = $('<img src="images/alien-x.png" alt="angry alien">');
    const p2 = $('<img src="images/alien-o.png" alt="happy alien">');

    if(player === 1){
        box.addClass('token1').append(p1);
        token = 'token1';
        return token
    }else {
        box.addClass('token2').append(p2);
        token = 'token2';
        return token
    }
}

// Displays next player turn

function displayPlayer (turn, player){
    turn.html('Player '+player+' turn')
}

//  Checks winner
function checkWinner (board, token){
    let won = 0;
    if (board.find('.b00').hasClass(token) && board.find('.b01').hasClass(token) && board.find('.b02').hasClass(token)){
        won = 1;
    } else if (board.find('.b00').hasClass(token) && board.find('.b10').hasClass(token) && board.find('.b20').hasClass(token)){
        won = 1;
    } else if (board.find('.b00').hasClass(token) && board.find('.b11').hasClass(token) && board.find('.b22').hasClass(token)){
        won = 1;
    } else if (board.find('.b01').hasClass(token) && board.find('.b11').hasClass(token) && board.find('.b21').hasClass(token)){
        won = 1;
    } else if (board.find('.b02').hasClass(token) && board.find('.b12').hasClass(token) && board.find('.b22').hasClass(token)){
        won = 1;
    } else if (board.find('.b02').hasClass(token) && board.find('.b11').hasClass(token) && board.find('.b20').hasClass(token)){
        won = 1;
    } else if (board.find('.b10').hasClass(token) && board.find('.b11').hasClass(token) && board.find('.b12').hasClass(token)){
        won = 1;
    } 
    else if (board.find('.b20').hasClass(token) && board.find('.b21').hasClass(token) && board.find('.b22').hasClass(token)){
        won = 1;
    } 
    return won
}
// Checks if draw

function checkDraw (){
    let draw = 1;
    if(($('.board .box.token1').length === 5) && ($('.board .box.token2').length === 4)){
        draw = 1;
        return draw
    }
}

// $('#play-again').click(function(e){
//     e.preventDefault();
//     $('.box > img').remove();
//     player = 1;
// })

$('#btn-start-game').click(function(e){
    e.preventDefault();
    $('body').addClass('show-game-screen');
});
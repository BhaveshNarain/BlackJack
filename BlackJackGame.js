$("#dealBtn").on("click", function(){
    init();
});

$("#hitBtn").on("click", function(){
    hit();
    checkWin();
});



var dealerScore = 0;
var playerScore = 0;

function init() {

    $("#dealBtn").attr("disabled", true);
    dealerScore = dealerScore + dealCard();
    $("#dealerScore").text(dealerScore);

    playerScore = playerScore + dealCard();
    $("#playerScore").text(playerScore);
    
}

function dealCard() {
    return Math.floor(Math.random() * 13)+1;
}

function hit() {
	playerScore = playerScore + dealCard();
    $("#playerScore").text(playerScore, function() {
        checkWin();
    });
}

function stand() {
    dealerPlay();
}

function checkWin(){
    //does the player have 21?
    if (playerScore === 21) {
        alert("Winner");
    } else if (playerScore > 21) {
        alert("Lost");
    }
}
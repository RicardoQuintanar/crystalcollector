// Crsystal Game
// 4 crystal with with random values each game and a random value to match
//Every crystals value is random between 1-12
// Game reset shows a new random value to match and crystal are valued differently
//When you click on a crystal it adds the previous result until it equals the random value
// IF you go over the random value, you lose and lose counter adds one.
// IF you match the random value, you win and win counter goes up



// global variables
var randomValue;
var wins = 0;
var losses = 0;
var lastValue = 0;


var startAndReset = function () {
    $(".crystals").empty();
    $("#score").text(0);
    var images = [
        "assets/images/crystal1.jpeg",
        "assets/images/crystal2.jpeg",
        "assets/images/crystal3.jpeg",
        "assets/images/crystal5.jpg",
    ]

    randomValue = Math.floor(Math.random() * 102) + 19;
    $("#result").html('Random Value: ' + randomValue);

    for (var i = 0; i < 4; i++) {
        var crystal = $("<div>");
        var value = Math.floor(Math.random() * 12) + 1;
        console.log(value);
        crystal.attr({
            "class": 'crystal',
            "crystal-value": value
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

        $(".crystals").append(crystal);
        console.log("hello");
    }
}
startAndReset();

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('crystal-value'));
    lastValue += num;
    $("#score").text(lastValue);
    console.log(this);
    if (lastValue > randomValue) {
        alert("You over crystalized!");
        losses = losses + 1;
        $("#losses").text(losses);
        lastValue = 0;
        startAndReset();
    }
    else if (lastValue === randomValue) {
        alert("Shine on you crazy Diamond!")
        wins = wins + 1;
        $("#wins").text(wins);
        lastValue = 0;
        startAndReset();
    }

});


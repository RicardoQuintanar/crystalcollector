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
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi26_2g38ngAhVqzoMKHRkfAGkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-pink-floyd-advert-for-event-at-londons-crystal-palace-bowl-in-may-57575216.html&psig=AOvVaw3OSeOrGhMSK-JSW4B1NtPB&ust=1550732348601517",
        "https://www.discogs.com/Pink-Floyd-Crystal-Palace-1971/release/7949941",
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwih8Ye338ngAhWm6oMKHTHlA_gQjRx6BAgBEAU&url=https%3A%2F%2Fwww.discogs.com%2FPink-Floyd-Crystal-Palace-1971%2Frelease%2F7949941&psig=AOvVaw3OSeOrGhMSK-JSW4B1NtPB&ust=1550732348601517",
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjWtqXB38ngAhUC9YMKHVGvCfcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F97742254387936829%2F&psig=AOvVaw3OSeOrGhMSK-JSW4B1NtPB&ust=1550732348601517",
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


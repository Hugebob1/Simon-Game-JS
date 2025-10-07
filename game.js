
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).on("click", function() {
        var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
        audio.play();
        $("#" + randomChosenColour).addClass("pressed");
        setTimeout(function() {
            $("#" + randomChosenColour).removeClass("pressed");
        }, 100);
    });
}
nextSequence();


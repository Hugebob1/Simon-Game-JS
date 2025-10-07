const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let clickedIndex = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function flash(color) {
  const $el = $("#" + color);
  try { await new Audio("sounds/" + color + ".mp3").play(); } catch (e) {}
  $el.addClass("pressed");
  await sleep(100);
  $el.removeClass("pressed");
  await sleep(400); 
}

async function playSimon() {
  for (const color of gamePattern) {
    await flash(color);
  }
}

async function nextSequence() {
  userClickedPattern = [];
  clickedIndex = 0;
  level++;
  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  await playSimon();
}

function gameOver() {
  new Audio("sounds/wrong.mp3").play().catch(()=>{});
  $("body").addClass("game-over");
  setTimeout(() => $("body").removeClass("game-over"), 200);
  $("#level-title").text("Game Over, Press Any Key to Restart");

  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  clickedIndex = 0;
}

$(document).on("keydown", async function () {
  if (!started) {
    started = true;
    await nextSequence(); 
  }
});

$(".btn").on("click", async function () {
  if (!started) return;

  const id = $(this).attr("id");
  userClickedPattern.push(id);

  new Audio("sounds/" + id + ".mp3").play().catch(()=>{});
  $(this).addClass("pressed");
  setTimeout(() => $(this).removeClass("pressed"), 100);


  const currentIndex = userClickedPattern.length - 1;
  if (userClickedPattern[currentIndex] !== gamePattern[currentIndex]) {
    gameOver();
    return;
  }

  if (userClickedPattern.length === gamePattern.length) {
    await sleep(800);
    await nextSequence();
  }
});

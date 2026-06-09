const goodFortune = [
  "You find a forgotten $20 bill in an old jacket pocket.",
  "Your favorite song starts playing the moment you put on your headphones.",
  "A package arrives several days earlier than expected.",
  "You pass an exam you were convinced you'd failed.",
  "The gacha banner actually gives you the character you wanted.",
  "You discover that the item you've been searching for is finally back in stock.",
  "Your train or bus arrives just as you reach the station.",
  "A random online friend turns out to share all your niche interests.",
  "You get front-row seats through a lucky lottery draw.",
  "The rare drop appears on your first run instead of your hundredth.",
  "You find a shiny Pokémon without even hunting for one.",
  "Your computer survives a power outage without losing any unsaved work.",
  "The daily shop finally contains the skin you've been waiting months for.",
  "A kind stranger pays for your coffee after a card reader malfunction.",
  "You guess the answer correctly on a difficult multiple-choice question.",
  "An old friend unexpectedly reaches out at the perfect time.",
  "You win a giveaway despite forgetting you entered it.",
  "You find the One Piece after everyone called you crazy.",
  "You pull an all-nighter and somehow still wake up feeling rested.",
  "You hear that your favorite artist is announcing a world tour near you.",
  "Your favorite musician announces a surprise concert in your city",
  "Ado drops a new banger. (Thyne glazing shant be stoppeth by mere wordly obstacles)"
];

const badFortune = [
  "You drop your phone and watch it bounce down an entire flight of stairs.",
  "The save file becomes corrupted right before the final boss.",
  "Your umbrella turns inside out during the worst rainstorm of the year.",
  "You forget your password immediately after changing it.",
  "The Wi-Fi dies during an important download at 99%.",
  "You spend hours farming only to get the exact item you didn't want.",
  "The printer works perfectly for everyone except you.",
  "You accidentally send a message to the wrong person.",
  "Your alarm fails on the one day you absolutely needed it.",
  "You discover a spoiler while trying to search for something unrelated.",
  "The limited item leaves the shop one day before payday.",
  "You get matched against a smurf five games in a row.",
  "Your favorite snack gets discontinued without warning.",
  "The NPC you need to talk to is on the opposite side of the map.",
  "You step on a LEGO brick barefoot at 3 AM.",
  "The legendary weapon has a 1% drop rate, and apparently you're living in the other 99%.",
  "You finally reach Laugh Tale and realize you forgot the map.",
  "The daily store offers everything except the skin you've been waiting for.",
  "You spend three hours troubleshooting only to discover the cable wasn't plugged in.",
  "You awaken mysterious powers only to learn they're as useful as detecting nearby bananas.",
  "Your favorite musician announces a surprise concert in your city, tickets are affordable, and the website crashes exactly when it's your turn."
];

let pityCount = 0;

const fortuneButton = document.getElementById("fortuneButton");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalText = document.getElementById("modalText");

function PopUp(text){
  modalText.textContent = text;
  modal.style.visibility = "visible";
}

function pityCreep(pityState){
  switch(pityState){
    case 0:
      return 0.3;
    case 1:
      return 0.3;
    case 2:
      return 0.3;
    case 3:
      return 0.4;
    case 4:
      return 0.5;
    case 5:
      return 0.6;
    default: return 0.3;
  }
}

function Pull(){
  const guaranteed = pityCount >= 5;
  const goodPull = guaranteed || Math.random() < pityCreep(pityCount);

  if(goodPull) 
  {
    pityCount = 0;
    PopUp(goodFortune[Math.floor(Math.random() * goodFortune.length)]);
  }
  else
  {
    pityCount++;
    PopUp(badFortune[Math.floor(Math.random() * badFortune.length)]);
  }
}

fortuneButton.addEventListener("click", function() {
  Pull();
});

closeBtn.addEventListener("click", function(){
  modal.style.visibility = "hidden";
});
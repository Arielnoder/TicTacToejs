
  var player = Math.floor(Math.random() * 2); 
if (player == 0) {
  player = "X";
}
else {
  player = "O";
}
var countWinX = 0;
var countWinO = 0;


function createboard() {
  
  

  for (var i = 0; i < 3; i++) {
    var row = document.createElement("div");
    
    row.className = "row";
    for (var j = 0; j < 3; j++) {
      var button = document.createElement("button");
      button.className = "Playerbutton";
      button.id = i + "-" + j;
      buttonid = button.id;
      LabelPlayer(button, buttonid);
      button.style.animation = "fadeIn 3s";
      row.appendChild(button);
    }

    document.getElementById("boxParent").appendChild(row);
  
  }
  // disable the start button after it has been clicked once
  var startButton = document.getElementById("startbutton");
  startButton.style.display = "none";
  
  var resetButton = document.getElementById("resetbutton");
  resetButton.style.display = "none";

  
}

function LabelPlayer(button, buttonid) {
  var clicked = false;

  button.addEventListener("click", function () {
    if (clicked == false) {
      if (player == "X") {
        player = "O";
       
        clicked = true;
      } else {
        player = "X";
        
        clicked = true;
      }
    }
     
     var currentPlayer = document.getElementById("currentplayer");
     if(player == "X"){
      currentPlayer.innerHTML = "Current Player: O";
      }
      else{
        currentPlayer.innerHTML = "Current Player: X";
      }

    
    button.disabled = true;
    button.innerHTML = player;
    checkWin(player);
    checkDraw(player);

  });
}

function reset(win,draw) {


  var player = Math.floor(Math.random() * 2); 
if (player == 0) {
  player = "X";
}
else {
  player = "O";
}


win = false;
draw = false;
deleteBoard();
setTimeout(3000, createboard());


 
}

function checkWin(player) {
  var win = false;
  var button1 = document.getElementById("0-0");
  var button2 = document.getElementById("0-1");
  var button3 = document.getElementById("0-2");
  var button4 = document.getElementById("1-0");
  var button5 = document.getElementById("1-1");
  var button6 = document.getElementById("1-2");
  var button7 = document.getElementById("2-0");
  var button8 = document.getElementById("2-1");
  var button9 = document.getElementById("2-2");


  buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

 
        if (button1.innerHTML == player && button2.innerHTML == player && button3.innerHTML == player) {
          
            var winningButtons = [button1, button2, button3];
            highlightWinningButtons(winningButtons);
            PlayerWin(player,winningButtons,buttons);
        
            }
        if (button4.innerHTML == player && button5.innerHTML == player && button6.innerHTML == player) {
          
            var winningButtons = [button4, button5, button6];
       
          
            highlightWinningButtons(winningButtons);
            PlayerWin(player,winningButtons,buttons);


        }
        if (button7.innerHTML == player && button8.innerHTML == player && button9.innerHTML == player) {
            
            var winningButtons = [button7, button8, button9];
            highlightWinningButtons(winningButtons);
            PlayerWin(player,winningButtons,buttons);


        }
        if (button1.innerHTML == player && button4.innerHTML == player && button7.innerHTML == player) {


            var winningButtons = [button1, button4, button7];
            PlayerWin(player,winningButtons,buttons);
      
            highlightWinningButtons(winningButtons);

        }
        if (button2.innerHTML == player && button5.innerHTML == player && button8.innerHTML == player) {
       
            var winningButtons = [button2, button5, button8];
      
            highlightWinningButtons(winningButtons);
            PlayerWin(player,winningButtons,buttons);

        }
        if (button3.innerHTML == player && button6.innerHTML == player && button9.innerHTML == player) {
            var winningButtons = [button3, button6, button9];
            PlayerWin(player,winningButtons,buttons);      
            highlightWinningButtons(winningButtons);
        }
        if (button1.innerHTML == player && button5.innerHTML == player && button9.innerHTML == player) {
        
      
            var winningButtons = [button1, button5, button9];
            PlayerWin(player,winningButtons,buttons);
            highlightWinningButtons(winningButtons);
        }    

        if (button3.innerHTML == player && button5.innerHTML == player && button7.innerHTML == player) {

      
            var winningButtons = [button3, button5, button7];
            PlayerWin(player,winningButtons,buttons);
            highlightWinningButtons(winningButtons);
        }

    

  



    
     

      
      
    

  
}

function highlightWinningButtons(winningButtons) {
  for (var i = 0; i < winningButtons.length; i++) {
    winningButtons[i].style.backgroundColor = "cyan";
    winningButtons[i].style.color = "black";
    winningButtons[i].style.fontSize = "100px";
    winningButtons[i].style.padding = "0px";

  }
}

function PlayerWin(player,winningButtons,buttons) {
  win = true;


  var resetButton = document.getElementById("resetbutton");
  resetButton.style.display = "block";
  
  resetButton.innerHTML = player + "  won! <br> Click to reset";

if(winningButtons[1].innerHTML == "X" ){
  countWinX++;
}

  if(winningButtons[1].innerHTML == "O" ){
    countWinO++;
  }
  var scoreX = document.getElementById("scoreX");
  var scoreO = document.getElementById("scoreO");
  scoreO.innerHTML = "O: " + countWinO;
  scoreX.innerHTML = "X: " + countWinX;

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  return win;
}

function PlayerDraw(player,winningButtons,buttons) {
 
  var resetButton = document.getElementById("resetbutton");
  resetButton.style.display = "block";
  resetButton.innerHTML = "Draw! <br> Click to reset";
  

  

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function checkDraw(player) {
  var resetButton = document.getElementById("resetbutton");

  var elements = document.getElementsByClassName("Playerbutton");
  var buttons = elements.length;
  var draw = false;
  var count = 0;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML != "") {

      count++;
    }
  }
  if (count == 9 && resetButton.style.display == "none") {
    PlayerDraw(buttons);
    draw = true;
  }
}


 

function deleteBoard() {
  var elements = document.getElementsByClassName("Playerbutton");

  
  while (elements.length > 0) {

    elements[0].parentNode.removeChild(elements[0]);
  }



}









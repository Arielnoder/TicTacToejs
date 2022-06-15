var player = Math.floor(Math.random() * 2); 
if (player == 0) {
  player = "X";
}
else {
  player = "O";
}


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

      row.appendChild(button);
    }

    document.getElementById("boxParent").appendChild(row);
  
  }
  // disable the start button after it has been clicked once
  var startButton = document.getElementById("startbutton");
  startButton.style.display = "none";

  
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
      // show current player
     var currentPlayer = document.getElementById("currentplayer");
        currentPlayer.innerHTML = "Current player: " + player;
    // disable button
    button.disabled = true;
    button.innerHTML = player;
    checkDraw();
    checkWin(player);

  });
}

function reset() {
  location.reload();
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
            win = true;
            // pass the number of the buttons that are in the winning row
            var winningButtons = [button1, button2, button3];
            // call the function to highlight the winning buttons
            highlightWinningButtons(winningButtons);
        
            }
        if (button4.innerHTML == player && button5.innerHTML == player && button6.innerHTML == player) {
            win = true;
            var winningButtons = [button4, button5, button6];
            highlightWinningButtons(winningButtons);

        }
        if (button7.innerHTML == player && button8.innerHTML == player && button9.innerHTML == player) {
            win = true;
            var winningButtons = [button7, button8, button9];
            highlightWinningButtons(winningButtons);

        }
        if (button1.innerHTML == player && button4.innerHTML == player && button7.innerHTML == player) {
            win = true;
            var winningButtons = [button1, button4, button7];
            highlightWinningButtons(winningButtons);

        }
        if (button2.innerHTML == player && button5.innerHTML == player && button8.innerHTML == player) {
            win = true;
            var winningButtons = [button2, button5, button8];
            highlightWinningButtons(winningButtons);

        }
        if (button3.innerHTML == player && button6.innerHTML == player && button9.innerHTML == player) {
            win = true;
            var winningButtons = [button3, button6, button9];
            highlightWinningButtons(winningButtons);
        }
        if (button1.innerHTML == player && button5.innerHTML == player && button9.innerHTML == player) {
            win = true;
            var winningButtons = [button1, button5, button9];
            highlightWinningButtons(winningButtons);
        }
        if (button3.innerHTML == player && button5.innerHTML == player && button7.innerHTML == player) {
            win = true;
            var winningButtons = [button3, button5, button7];
            highlightWinningButtons(winningButtons);
        }

    

    if (win == true) {
      var currentPlayer = document.getElementById("currentplayer");
      currentPlayer.innerHTML = player + " wins!";
      for (var i = 0; i < buttons.length; i++) {
          
          buttons[i].disabled = true;
          

      }


     
      setTimeout(reset, 2500);   

      
      
    }

  
}

function highlightWinningButtons(winningButtons) {
  for (var i = 0; i < winningButtons.length; i++) {
    winningButtons[i].style.backgroundColor = "lightcoral";
    winningButtons[i].style.color = "white";
    winningButtons[i].style.fontSize = "100px";
    winningButtons[i].style.padding = "0px";

  }
}

function checkDraw() {
  var draw = true;
  var buttons = document.getElementsByClassName("Playerbutton");
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML == "") {
      draw = false;
    }
  }
  if (draw == true) {
    var currentPlayer = document.getElementById("currentplayer");
    currentPlayer.innerHTML = "Draw!";
    buttons.disabled = true;
    setTimeout(reset, 2500);
  }
}

function reset() {
  location.reload();



}


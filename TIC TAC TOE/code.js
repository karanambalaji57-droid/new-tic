var turn = "X"; 
var gameOver = false; 
var b1 = ""; 
var b2 = ""; 
var b3 = ""; 
var b4 = ""; 
var b5 = ""; 
var b6 = ""; 
var b7 = ""; 
var b8=""; 
var b9 = ""; 


function checkWinner() { 
var winner = ""; 
// Rows 
if (b1 != "" && b1 == b2 && b2 == b3) { 
winner = b1; 
} 
else if (b4 != "" && b4 == b5 && b5 == b6) { 
winner = b4; 
} 
else if (b7 != "" && b7 == b8 && b8 == b9) { 
winner = b7; 
  } 
   
  // Columns 
  else if (b1 != "" && b1 == b4 && b4 == b7) { 
    winner = b1; 
  } 
  else if (b2 != "" && b2 == b5 && b5 == b8) { 
    winner = b2; 
  } 
  else if (b3 != "" && b3 == b6 && b6 == b9) { 
    winner = b3; 
  } 
   
  // Diagonals 
  else if (b1 != "" && b1 == b5 && b5 == b9) { 
    winner = b1; 
  } 
  else if (b3 != "" && b3 == b5 && b5 == b7) { 
    winner = b3; 
  } 
   
  if (winner != "") { 
    console.log(winner + " Wins!"); 
    gameOver = true; 
    return; 
  } 
   
  // Check Draw 
  if ( 
    b1 != "" && 
    b2 != "" && 
    b3 != "" && 
    b4 != "" && 
    b5 != "" && 
    b6 != "" && 
    b7 != "" && 
    b8 != "" && 
    b9 != "" 
  ) { 
    console.log("Draw!"); 
    gameOver = true; 
  } 
} 
 
 
function changeTurn() { 
  if (turn == "X") { 
    turn = "O"; 
  } else { 
    turn = "X"; 
  } 
} 
 
 ;
function placeMove(buttonID, position) { 
  if (gameOver == false && position == "") { 
     
    if (turn == "X") { 
     
 setImageURL(buttonID, "icon://fa-times"); 
     
 position = "X"; 
    } else { 
     
 setImageURL(buttonID, "icon://fa-circle-o"); 
     
 position = "O"; 
    } 
     
    return position; 
  } 
   
  return position; 
} 
 
 
// Button 1 
onEvent("button1", "click", function() { 
  if (b1 == "" && gameOver == false) { 
    b1 = turn;
     
    if (turn == "X") { 
      setImageURL("button1", "icon://fa-times"); 
    } else { 
      setImageURL("button1", "icon://fa-circle-o"); 
    } ;
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 2 
onEvent("button2", "click", function() { 
  if (b2 == "" && gameOver == false) { 
    b2 = turn; 
     
    if (turn == "X") { 
      setImageURL("button2", "icon://fa-times"); 
    } else { 
      setImageURL("button2", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 3 
onEvent("button3", "click", function() { 
  if (b3 == "" && gameOver == false) { 
    b3 = turn; 
     
    if (turn == "X") { 
      setImageURL("button3", "icon://fa-times"); 
    } else { 
      setImageURL("button3", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 4 
onEvent("button4", "click", function() { 
  if (b4 == "" && gameOver == false) { 
    b4 = turn; 
     
    if (turn == "X") { 
      setImageURL("button4", "icon://fa-times"); 
    } else { 
      setImageURL("button4", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 5 
onEvent("button5", "click", function() { 
  if (b5 == "" && gameOver == false) { 
    b5 = turn; 
     
    if (turn == "X") { 
      setImageURL("button5", "icon://fa-times"); 
    } else { 
      setImageURL("button5", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 6 
onEvent("button6", "click", function() { 
  if (b6 == "" && gameOver == false) { 
    b6 = turn; 
     
    if (turn == "X") { 
      setImageURL("button6", "icon://fa-times"); 
    } else { 
      setImageURL("button6", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 7 
onEvent("button7", "click", function() { 
  if (b7 == "" && gameOver == false) { 
    b7 = turn; 
     
    if (turn == "X") { 
      setImageURL("button7", "icon://fa-times"); 
    } else { 
      setImageURL("button7", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 8 
onEvent("button8", "click", function() { 
  if (b8 == "" && gameOver == false) { 
    b8 = turn; 
     
    if (turn == "X") { 
      setImageURL("button8", "icon://fa-times"); 
    } else { 
      setImageURL("button8", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
  } 
}); 
 
 
// Button 9 
onEvent("button9", "click", function() { 
  if (b9 == "" && gameOver == false) { 
    b9 = turn; 
     
    if (turn == "X") { 
      setImageURL("button9", "icon://fa-times"); 
    } else { 
      setImageURL("button9", "icon://fa-circle-o"); 
    } 
     
    checkWinner(); 
     
    if (gameOver == false) { 
      changeTurn(); 
    } 
} 
});

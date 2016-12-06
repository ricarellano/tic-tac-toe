// wait for the DOM to finish loading

$(document).ready(function() {

  var isFull = true;
  var turn = 'X';
  var turnSymbol = ("<p>X</p>");

  //            0     1     2     3      4    5     6     7     8
  var board = [null, null, null, null, null, null, null, null, null];

  $(".box").click(function(event) {

    var position = $(this)[0].id;
    if (board[position] == null) {
      board[position] = turn;
      $(this).append(turnSymbol);
      checkIfWinner(position);
    }
  });

  function checkIfWinner(position) {
    switch(position) {
    case '0':
        if ((board[1] == turn && board[2] == turn) ||
           (board[4] == turn && board[8] == turn) ||
           (board[3] == turn && board[6] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '1':
        if ((board[0] == turn && board[2] == turn) ||
           (board[4] == turn && board[7] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '2':
        if ((board[0] == turn && board[1] == turn) ||
           (board[5] == turn && board[8] == turn) ||
           (board[4] == turn && board[6] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '3':
        if ((board[0] == turn && board[6] == turn) ||
           (board[4] == turn && board[5] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '4':
        if ((board[1] == turn && board[7] == turn) ||
           (board[3] == turn && board[5] == turn) ||
           (board[0] == turn && board[8] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '5':
        if ((board[2] == turn && board[8] == turn) ||
           (board[3] == turn && board[4] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '6':
        if ((board[0] == turn && board[3] == turn) ||
           (board[7] == turn && board[8] == turn) ||
           (board[2] == turn && board[4] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '7':
        if ((board[6] == turn && board[8] == turn) ||
           (board[1] == turn && board[4] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
    case '8':
        if ((board[0] == turn && board[4] == turn) ||
           (board[2] == turn && board[5] == turn) ||
           (board[6] == turn && board[7] == turn))
        {
          alert("Winner " + turn);
          return;
        }
        break;
  }


    var isFull = checkIfFull();
    if (isFull == true) {
      alert("Board is full, nobody won.");
    } else {
      changeTurn();
    }
  }

  function changeTurn() {
    if (turn == 'X') {
      turn = 'O';
      turnSymbol = ("<p>O</p>");
    } else {
      turn = 'X';
      turnSymbol = ("<p>X</p>");
    }
  }

  function checkIfFull() {
    for (var i=0; i<board.length; i++) {
      var isFull = true;
      if (board[i] == null) {
        isFull = false;
        break;
      }
    }
    return isFull;
  }


  $("#reset").click(function() {
    

  });





});

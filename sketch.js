var grid = 16;
var cell = 600/grid;

$(document).ready(function() {
  drawBoard();

 $('.clear').click(newBoard);

});


function drawBoard() {
  $('#container').empty();
  cell = 600/grid;
    for(var x = 0; x < grid; x++) {
        for(var y = 0; y < grid; y++) {
            var unit = $("<div class='unit'></div>");
            unit.css({'width':cell+'px', 'height':cell + 'px'});
            unit.appendTo('#container');
        }
    }
    $('.unit').hover(function() {
        $(this).css('background-color', '#252b30');
        });

};

function newBoard(){
   $('.unit').css("background-color", "white");
   grid = prompt("what size grid would you like?");
   drawBoard();
 }
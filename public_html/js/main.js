var map = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1],
            [1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
            [1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
          ];
var graph = new Graph(map);
var zoom = 60;

var clicked = {top: 0, left : 0};
//var findclicked = function(){clicked.top = $('.main .row').index($(this).parent()); clicked.left = $('.row div').index($(this)); char.move()}

var createMap = function(){
    for(var x = 0; x< map.length; x++){
        var custId = '0.0';
        var row = $('<div class="row"></div>');
        for(var y = 0; y<map[x].length; y++){
            custId = x + "."+ y;
            if(map[x][y] === 1){
                $('<div class="wall" id='+custId+'></div>').appendTo(row);
            }else{
                $('<div class="floor" id='+custId+'></div>').click(function(){
                    if($(this).hasClass('moveOverlay')){
                        clicked.top = $('.main .row').index($(this).parent()); 
                        clicked.left = $(this).index(); 
                        move.mover(char, clicked);
                    }                    
                }).appendTo(row);}
        };
        row.appendTo('.main');
    };
    $('.main').css("width", map[0].length*zoom + "px");
};

$(document).ready(createMap());

var sampleStats = {hp:50, speed:8, position: [6,1]};
var char = new entity(sampleStats);
$('.hero').click(function(){char.openMenu();});


var hit = 10;
stats.changeHp(char, hit);
//console.log(char);

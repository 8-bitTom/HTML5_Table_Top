/* 
 * This Js contains the constructors and methods of entities in the game
 */


//constructor for carachters on the map
var entity = function(charSheet){
    this.vision = "normal";
    this.hp = 25;
    this.speed = 3;
    this.position = [0,0];
    this.apearance = 'hero';
    this.hero = $('<div class="entity"><div>');
    this.possibleMoves = {};
    
    //init function
    this.init = function(){
        this.hero.addClass(this.apearance).css({ top: this.position[0]*60+"px", left: this.position[1]*60+"px" });
       $(".main").append(this.hero);
    };
    
    //sets internal vars based on passeed object
    for(x in charSheet){
        this[x] = charSheet[x];
    };
    
    this.clearMoves = function(){
        for(x in this.possibleMoves){
            delete this.possibleMoves[x];
        }
    };
    
    this.openMenu = function(){
        move.showMoveRange(this);
    };
    
    this.init();
};

//class for modifying entity stats
var stats = {
    changeHp : function changeHp(ent, val){
        val = val + 0;
        console.log("starting HP = "+ent.hp);
        if(!isNaN(parseInt(val,10)) && (parseFloat(val,10) === parseInt(val,10))){
            ent.hp += val;
            if(val <= 0){
                console.log(ent.apearance + " was damaged for " + val + "hp!");
                console.log(ent.apearance + " HP: " + ent.hp);
            }else{
                console.log(ent.apearance + " was healed for " + val + "hp!");
                console.log(ent.apearance + " HP: " + ent.hp);
            }
        }else{
            console.warn("value "+ val + " is not a number!");
        }
        
    }
};

var move = {
    showMoveRange : function showMoveRange(ent){
        ent.clearMoves();
        $('.moveOverlay').removeClass('moveOverlay');
        var n = ent.speed;
        var x = ent.position[0];
        var y = ent.position[1];
        var okMoves = []; 
        for(var i = x-n; i< x+n; i++){
            if(i>=0 && i < map[0].length-1){
                for(var j = y-n; j< y+n; j++){
                    if(j>0 && j< map.length){
                        if(map[i][j] === 0){
                           
                                okMoves.push([i,j]);
                            
                        }                             
                    }                              
                }
            }
            
        };
        for(k = 0; k < okMoves.length; k++){
            var path = astar.search(graph.nodes, graph.nodes[x][y], graph.nodes[okMoves[k][0]][okMoves[k][1]], true);
            if(path.length!==0 && path.length <= ent.speed){
                var moveName = '#'+ okMoves[k][0]+"."+okMoves[k][1];
                ent.possibleMoves[moveName] = path;
                var namedId = '#'+ okMoves[k][0]+"\\."+okMoves[k][1];
                $(namedId).addClass('moveOverlay');
            }
        }
    },
    
    clearMovementRange : function clearMovementRange(ent){
        $('.moveOverlay').removeClass('moveOverlay');
    },
    
    mover : function mover(ent, clicked){ //todo change this to add node then add excecute move function
         var arr = [clicked.top, clicked.left],
         moveSpeed = 400,
         targetPosition = arr,
         x = targetPosition[0],
         y = targetPosition[1],
         targetId = "#"+x+"."+y,
         path = ent.possibleMoves[targetId];
        
        move.clearMovementRange(ent);
        
        for(var z = 0; z < path.length; z++){

            var complete = function(self, targetPosition){
                if(z === path.length-1){
                    ent.position = targetPosition;
                }
            };
            ent.hero.animate({top: path[z].pos.x*zoom+"px", left: path[z].pos.y*zoom+"px"}, moveSpeed, complete(ent, targetPosition));
        }
        
        
    }
};
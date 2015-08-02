GameState.Play = function(game){
    
};


    GameState.Play.prototype = {
      
        create: function(){
            
            // fire up next state the - game core
            this.state.start('Game');
        }
        
    };


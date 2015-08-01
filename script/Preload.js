GameState.Preload = function(game) { };

    
    GameState.Preload.prototype = {
        
        preload: function(){   
            //draw loading bar
            this.loadingBar = this.add.sprite(this.world.centerX,this.world.centerY,'loadingBar');
            this.loadingBar.anchor.setTo(0.5,0.5);
            this.load.setPreloadSprite(this.loadingBar);
            
            // load all assets 
            this.load.atlasXML('background','assets/GameAssets/background.png','assets/GameAssets/background.xml');
            this.load.atlasXML('spaceship','assets/GameAssets/spaceShip.png','assets/GameAssets/spaceShip.xml');
            
            this.load.image('gameover','assets/GameAssets/gameOver.png');
            this.load.image('rock1','assets/GameAssets/rock1.png');
            this.load.image('rock2','assets/GameAssets/rock2.png');
            
            this.load.image('creditpic','assets/MenuAssets/credit-pic.png'); 
            this.load.image('start','assets/MenuAssets/start.png');
            this.load.image('credit','assets/MenuAssets/credit.png');
            this.load.image('back','assets/MenuAssets/back.png');
            this.load.image('play_again','assets/MenuAssets/play-again.png');
            this.load.image('main_menu','assets/MenuAssets/main-menu.png');
                
        },
        
        create: function(){
            this.state.start('Menu');
        }
        
    };
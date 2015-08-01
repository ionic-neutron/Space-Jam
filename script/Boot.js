var GameState = {};
//declare global - var score = 0;

    GameState.Boot = function(game) {};

    GameState.Boot.prototype = {
        
        preload: function(){
            this.game.load.image('loadingBar','assets/MenuAssets/loadingbar.png');
            this.load.atlasXML('gametitle','assets/MenuAssets/gametitle.png','assets/MenuAssets/gametitle.xml');
        },
        
        create: function(){
            
            if (this.game.device.desktop){
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.forcePortrait = false;
            this.scale.forceLandscape = false;
            }
            
        else{
            
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 240;
            this.scale.minHeight = 402;
            
            this.scale.maxWidth = 330;
            this.scale.maxHeight = 550;
            this.scale.forceLandscape = false;
            this.scale.pageAlignHorizontally = true;
        }
            
        this.scale.setScreenSize(true);
        this.state.start('Preload');
        }
        
    };

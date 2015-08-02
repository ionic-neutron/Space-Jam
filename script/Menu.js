GameState.Menu = function(game){
    this.menuBg = null;
    this.startBt = null;
    this.creditBt = null;
    this.creditPic = null;
    this.backBt = null;
};

    GameState.Menu.prototype = {
      
       create: function(){
            this.menuBg = this.add.sprite(this.world.centerX,this.world.centerY,'gametitle');
            this.menuBg.anchor.setTo(0.5,0.5);
            this.menuBg.animations.add('gameTitle');
            this.menuBg.animations.play('gameTitle',10,true);
           
           this.startBt = this.add.button(this.world.centerX,this.world.centerY,'start',this.handleStart,this);
           this.startBt.anchor.setTo(0.5,0.5);
           this.creditBt = this.add.button(this.world.centerX,this.world.centerY+100,'credit',this.handleCredit,this);
           this.creditBt.anchor.setTo(0.5,0.5);
       },
        
        handleStart: function(){
            this.state.start('Play');
        },
        
        handleCredit: function(){
            //this.menuBg.animations.stop();
            this.creditPic = this.add.sprite(this.world.centerX,this.world.centerY,'creditpic');
            this.creditPic.anchor.setTo(0.5,0.5);
            this.backBt = this.add.button(this.game.width-65,5,'back',this.handleCreditBack,this);
        },
        
        handleCreditBack: function(){
            this.state.start('Menu');
        }
        
    };



GameState.Win = function(){
    this.gameOver = null;
    this.currentScore = null;
    this.currentScoreText = null;
    this.highScoreText = null;
    this.playAgain = null;
    this.mainMenu = null;
};

    GameState.Win.prototype = {
        
      create: function(){
          this.gameOver = this.add.sprite(this.world.centerX,this.world.centerY,'gameover');
          this.gameOver.anchor.setTo(0.5,0.5);
          this.currentScore = score;
          
        this.currentScoreText = this.add.text(this.world.centerX,250,'Your Score : '+ score);
        this.currentScoreText.anchor.setTo(0.5,0.5); 
           
        this.highScoreText = this.add.text(this.world.centerX,300,'High Score : '+localStorage.getItem('highscore'),{fontSize:'30px',fill:'red'});
       
    this.highScoreText.anchor.setTo(0.5,0.5);
          
          // handle play again 
          this.playAgain = this.add.button(90,this.game.height-50,'play_again',this.handle_Play_Again,this);
          
          this.playAgain.anchor.setTo(0.5,0.5);
          
          // handle Main Menu
          this.mainMenu = this.add.button(245,this.game.height-50,'main_menu',this.handleMenu,this);
          this.mainMenu.anchor.setTo(0.5,0.5);
          
      },
            
        handle_Play_Again: function(){
        this.state.start('Game'); 
            score = 0;
       },
        
        handleMenu: function(){
            score = 0;
            this.state.start('Menu');
        }     
        
    };







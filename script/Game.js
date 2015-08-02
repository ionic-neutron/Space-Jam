GameState.Game = function(game){
    this.background = null;
    this.spaceShip = null;
    this.rock1 = null;
    this.rockGroup = null;
    this.rockTime = 800; // milisecond
    this.n_rocks = 50;
    this.timer = 0;
};

// declare global var 
   var rock;
   var score = 0;
   var highScore = 0; 
   localStorage.setItem('highscore',highScore);


    GameState.Game.prototype = {

        create: function(){
            this.physics.startSystem(Phaser.Physics.ARCADE);
            
            this.background = this.add.sprite(this.world.centerX,this.world.centerY,'background');
            this.background.anchor.setTo(0.5,0.5);
            this.background.animations.add('spaceBg');
            this.background.animations.play('spaceBg',10,true);
            
            this.spaceShip = this.add.sprite(this.world.centerX,this.game.height-180,'spaceship');
           // this.spaceShip.anchor.setTo(0.5,1);
            this.spaceShip.animations.add('spaceship');
            this.spaceShip.animations.play('spaceship',15,true);
            this.physics.arcade.enable(this.spaceShip);
            this.spaceShip.body.collideWorldBounds = true;
            
            // manage rocks
            this.rockGroup = this.add.group();
            this.rockGroup.enableBody = true;
            
            this.rockGroup.createMultiple(this.n_rocks,'rock1',0,false);
            this.time.events.loop(this.rockTime,this.handleRocks,this);
        
            // handle score
            this.scoreText=this.add.text(270,15,"score : "+ score,{fontSize: '10px',fill : "white"});
            this.scoreText.anchor.setTo(0.5,0.5);
            this.timer = this.time.create(false);
            this.timer.loop(1000,this.handleScore,this);
            this.timer.start();
        },
        
        handleRocks: function(){
             rock = this.rockGroup.getFirstDead();
             
            if(rock){
               rock.reset(this.world.randomX, 0);
               rock.body.velocity.y = 200;
               this.n_rocks -=1;    
              }
    
            if(this.n_rocks<=20){
                this.rockGroup.createMultiple(this.n_rocks,'rock1',0,false);    
            }
            
            if(rock.checkWorldBounds === true || rock.checkWorldBounds === null){
              rock.outOfBoundsKill = true;
            }
            
        },
        
        handleScore: function(){
            score++;
        },
        
        update: function(){    
           // handle space ship 
            if(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                this.spaceShip.body.velocity.x = -200;
            }
            else if(this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                this.spaceShip.body.velocity.x = 200;
            }
            else{
                this.spaceShip.body.velocity.x = 0;
            }
             
            this.scoreText.text = 'score :'+score;
            
            // handle game over
            this.physics.arcade.collide(this.spaceShip,this.rockGroup,this.gameOver,null,this);    
            
        },
        
        gameOver: function(){
           if(score > localStorage.getItem('highscore')){
               localStorage.setItem('highscore',score);
           }
            
            this.spaceShip.kill();
           // this.rockGroup.removeAll(rock,false,false);
           // this.background.animations.stop();
            
            this.state.start('Win');   
        }
        
    };








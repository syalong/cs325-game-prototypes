		window.onload = function() {
			// You might want to start with a template that uses GameStates:
			//     https://github.com/photonstorm/phaser/tree/v2.6.2/resources/Project%20Templates/Basic
			
			// You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
			// You will need to change the fourth parameter to "new Phaser.Game()" from
			// 'phaser-example' to 'game', which is the id of the HTML element where we
			// want the game to go.
			// The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
			// You will need to change the paths you pass to "game.load.image()" or any other
			// loading functions to reflect where you are putting the assets.
			// All loading functions will typically all be found inside "preload()".
			
			"use strict";
			
			var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
			
			function preload() {
				//load in background, player's character, and cows
				game.load.image('spacebg', 'assets/space.png');
				game.load.image('cowboy', 'assets/cowboy.png');
				game.load.spritesheet('cow', 'assets/cow.png');
				
				//game would disappear when added
				//var style = {font: "25px Verdana", fill: #ffffff}
				//Does concatenation work like it does in Java?
				//var text = game.add.text(0,0, "Stress: " + stressCount, style);
				//text.anchor.setTo(0.5,0);
			}
			
			//this will be the player
			var moveme;
			
			var control;
			
			var timer = 0;
			var total = 0;
			//var stressCount = 50;
			
			function create() {
				//put in background
				game.add.sprite(0,0, 'spacebg');
				
				//put in cowboy character along bottom of the screen
				moveme = game.add.sprite(300, 430, 'cowboy');
				//code borrowed from phaser shoot-em up template
				game.physics.arcade.enable(moveme);
				moveme.body.collideWorldBounds = true;
				
				cowChaos();
				
				control = game.input.keyboard.createCursorKeys();
			}
			
			//code borrowed from add several sprites phaser example; bring in the cows
			function cowChaos()
			{
				var moo = game.add.sprite((Math.random() * 800), game.world.randomX, 'cow');
				game.physics.arcade.enable(moo);
				moo.angle = game.rnd.angle();
				
				moo.body.collideWorldBounds = false;
				moo.body.gravity.y = 30;
				
				//if used properly, could aid with my raining cows problem?
				//var tween = game.add.tween(moo).to({game.world.randomY}, 2000, 'Linear', false);
				total++;
				timer = game.time.now + 100;
			}
			
			function update() {
				
				//code borrowed from phaser shoot em up template; allows player
				//to move as the cowboy left and right along the bottom of the screen
				moveme.body.velocity.x = 0;
				
				if (total < 30 && game.time.now > timer)
				{
						cowChaos();
				}
				
				if (control.left.isDown)
				{
					moveme.body.velocity.x = -500;
				}
				else if (control.right.isDown)
				{
					moveme.body.velocity.x = 500;
				}
				
				//game.physics.arcade.collide(moveme, moo, collisionHandler, null, this)
			}
			
			/*function collisionHandler(o1, o2)
			{
				
			}*/
		};

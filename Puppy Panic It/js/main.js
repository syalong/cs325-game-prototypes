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
			
			var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update} );

			function preload() {
				game.load.image('bg', 'assets/tiles.jpg');
				game.load.image('owner', 'assets/smallperson.png');
				game.load.image('dog', 'assets/smalldog.png');
				game.load.image('dog2', 'assets/smalldog2.png');
				game.load.image('dog3', 'assets/smalldog3.png');
				game.load.image('dog4', 'assets/smalldog4.png');
				game.load.image('dog5', 'assets/smalldog5.png');
				game.load.image('dog6', 'assets/smalldog6.png');
				game.load.image('sad', 'assets/sadface.png');
				game.load.image('joy', 'assets/love.png');
			}
			
			//player's character
			var moveme;
			
			//the puppies
			var pup1;
			var pup2;
			var pup3;
			var pup4;
			var pup5;
			var pup6;
			
			/*var call1;
			var call2;
			var call3;
			var call4;
			var call5;
			var call6;*/
			
			var whimper;
			var emote;
			
			//how player will move
			var control;
			
			function create() {
				game.add.sprite(0,0,'bg');
				game.add.sprite(0,250,'bg');
				game.add.sprite(400,0,'bg');
				game.add.sprite(400,250,'bg');
				
				//make it so that player cannot escape world
				moveme = game.add.sprite(0, 200, 'owner');
				game.physics.arcade.enable(moveme);
				moveme.body.collideWorldBounds = true;
				
				pup1 = game.add.sprite(200,0, 'dog');
				pup2 = game.add.sprite(400, 0, 'dog2');
				pup3 = game.add.sprite(600, 0, 'dog3');
				pup4 = game.add.sprite(200, 400, 'dog4');
				pup5 = game.add.sprite(400, 400, 'dog5');
				pup6 = game.add.sprite(600, 400, 'dog6');
				
				game.physics.arcade.enable([pup1, pup2, pup3, pup4, pup5, pup6]);
				//make it so that pups are not pushed out of world when player interacts with them
				pup1.body.immovable = true;
				pup2.body.immovable = true;
				pup3.body.immovable = true;
				pup4.body.immovable = true;
				pup5.body.immovable = true;
				pup6.body.immovable = true;

				control = game.input.keyboard.createCursorKeys();
			}
			
			function attentionToDog(sprite1,sprite2)
			{
				//whimper.destroy();
				emote = game.add.sprite(sprite2.x,sprite2.y, 'joy');
				
				//var help = 0;
				
				var action = 0;
				
				/*if (action === 0 && time + 1000)
				{
					emote.destroy();
				}*/
			}
			
			function needAttention(sprite)
			{
				//whimper = game.add.sprite(sprite.x,sprite.y, 'sad');
				//var help = 1;
				
				//call(sprite, help);
			}
			
			function call(sprite, feel)
			{
				var boof = 0;
				
				if (feel == 1)
				{
					boof = 1;
				}
				else
				{
					boof = 0;
				}
				
				return boof;
			}
			
			function update() {
				moveme.body.velocity.x = 0;
				moveme.body.velocity.y = 0;
				
				pup1.body.velocity.x = 0;
				pup1.body.velocity.y = 0;
				
				if (control.left.isDown)
				{
					moveme.body.velocity.x = -500;
				}
				if (control.right.isDown)
				{
					moveme.body.velocity.x = 500;
				}
				if (control.up.isDown)
				{
					moveme.body.velocity.y = -500;
				}
				if (control.down.isDown)
				{
					moveme.body.velocity.y = 500;
				}
				
				needAttention(pup1);
				game.physics.arcade.collide(moveme, pup1, attentionToDog, null, this);
				game.physics.arcade.collide(moveme, pup2, attentionToDog, null, this);
				game.physics.arcade.collide(moveme, pup3, attentionToDog, null, this);
				game.physics.arcade.collide(moveme, pup4, attentionToDog, null, this);
				game.physics.arcade.collide(moveme, pup5, attentionToDog, null, this);
				game.physics.arcade.collide(moveme, pup6, attentionToDog, null, this);
			}
		};

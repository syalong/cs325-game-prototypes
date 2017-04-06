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
			game.load.image('dog', 'assets/dog.png');
			game.load.image('owner', 'assets/smallperson.png');
			game.load.image('sad', 'assets/sadface.png');
		}
		
		var moveme;
		
		var pup1;
		var pup2;
		var pup3;
		var pup4;
		var pup5;
		var pup6;
		
		var control;
		
		function create() {
			game.physics.StartSystem(Phaser.Physics.ARCADE);
			
			moveme = game.add.sprite(100, 450, 'owner');
			game.physics.arcade.enable(moveme);
			moveme.body.collideWorldBounds(true);
			
			pup1 = game.add.sprite(200, 200, 'dog');
			pup2 = game.add.sprite(400, 200, 'dog');
			pup3 = game.add.sprite(600, 200, 'dog');
			pup4 = game.add.sprite(200, 200, 'dog');
			pup5 = game.add.sprite(200, 400, 'dog');
			pup6 = game.add.sprite(200, 600, 'dog');
			
			game.physics.arcade.enable([pup1, pup2, pup3, pup4, pup5, pup6]);

			control = game.input.keyboard.createCursorKeys();
		}
		
		function attentionToDog(sprite1,sprite2)
		{
			
		}
		
		function update() {
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
		}
	};

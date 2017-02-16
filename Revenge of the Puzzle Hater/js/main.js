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
			// Pieces of the puzzle
			game.load.image( 'piece1', 'assets/piece1.png');
			game.load.image( 'piece2', 'assets/piece2.png');
			game.load.image( 'piece3', 'assets/piece3.png');
			game.load.image( 'piece4', 'assets/piece4.png');
			game.load.image( 'piece5', 'assets/piece5.png');
			game.load.image( 'piece5', 'assets/piece5.png');
			game.load.image( 'piece6', 'assets/piece6.png');
			game.load.image( 'piece7', 'assets/piece7.png');
		}
		
		var piece1;
		var piece2;
		var piece3;
		var piece4;
		var piece5;
		var piece6;
		var piece7;
		
		function create() {
			
			//Add in all the puzzle pieces
			piece1 = game.add.sprite(game.world.centerX, game.world.centerY, 'piece1');
			piece2 = game.add.sprite(game.world.centerX, 400, 'piece2');
			piece3 = game.add.sprite(game.world.centerX, 500, 'piece3');
			piece4 = game.add.sprite(game.world.centerX, 600, 'piece4');
			piece5 = game.add.sprite(game.world.centerX, 100, 'piece5');
			piece6 = game.add.sprite(game.world.centerX, 0, 'piece6');
			piece7 = game.add.sprite(game.world.centerX, 50, 'piece7');
			
			// Add some text using a CSS style.
			// Center it in X, and position its top 15 pixels from the top of the world.
			var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
			var text = game.add.text( game.world.centerX, 15, "Build something amazing.", style );
			text.anchor.setTo( 0.5, 0.0 );
		}
		
		function update() {
			// Accelerate the 'logo' sprite towards the cursor,
			// accelerating at 500 pixels/second and moving no faster than 500 pixels/second
			// in X or Y.
			// This function returns the rotation angle that makes it visually match its
			// new trajectory.
			//bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
		}
	};

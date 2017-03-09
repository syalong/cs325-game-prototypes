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
			//quincy the ghost
			game.load.image('quincy', 'assets/quincy.png');
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
		
		var rot;
		var timer = 0;
		var total = 0;
		
		function create() {
			
			//meet quincy
			game.add.sprite(0,0, 'quincy');
			
			//Add in all the puzzle pieces
			piece1 = game.add.sprite(400, game.world.centerY, 'piece1');
			piece2 = game.add.sprite(100, game.world.centerY, 'piece2');
			piece3 = game.add.sprite(game.world.centerX, 100, 'piece3');
			piece4 = game.add.sprite(game.world.centerX, 250, 'piece4');
			piece5 = game.add.sprite(500, game.world.centerY, 'piece5');
			piece6 = game.add.sprite(350, game.world.centerY, 'piece6');
			piece7 = game.add.sprite(game.world.centerX, 500, 'piece7');
			
			//allow the pieces to react to input; code borrowed from Phaser example, snap on drag
			piece1.inputEnabled = true;
			piece2.inputEnabled = true;
			piece3.inputEnabled = true;
			piece4.inputEnabled = true;
			piece5.inputEnabled = true;
			piece6.inputEnabled = true;
			piece7.inputEnabled = true;
			
			//allow the pieces to drag; code borrowed from snap on drag phaser example
			piece1.input.enableDrag();
			piece2.input.enableDrag();
			piece3.input.enableDrag();
			piece4.input.enableDrag();
			piece5.input.enableDrag();
			piece6.input.enableDrag();
			piece7.input.enableDrag();
			
			//allow the pieces to snap; code borred from snap on drag phaser example
			piece1.input.enableSnap(32, 32, false, true);
			piece2.input.enableSnap(32, 32, false, true);
			piece3.input.enableSnap(32, 32, false, true);
			piece4.input.enableSnap(32, 32, false, true);
			piece5.input.enableSnap(32, 32, false, true);
			piece6.input.enableSnap(32, 32, false, true);
			piece7.input.enableSnap(32, 32, false, true);
			
			/* was going to have this section so that rotating pieces do not go out of game area
			
			piece1.enableBody = true;
			piece2.enableBody = true;
			piece3.enableBody = true;
			piece4.enableBody = true;
			piece5.enableBody = true;
			piece6.enableBody = true;
			piece7.enableBody = true;
			
			piece1.body.collideWorldBounds = true;
			piece2.body.collideWorldBounds = true;
			piece3.body.collideWorldBounds = true;
			piece4.body.collideWorldBounds = true;
			piece5.body.collideWorldBounds = true;
			piece6.body.collideWorldBounds = true;
			piece7.body.collideWorldBounds = true;*/
			
			//allowing for rotation of pieces
			rot = game.input.onTap.add(onTap, this);
			
			//each piece, when clicked on, now rotates
			piece1.events.onDragStart.add(onDragStart, this);
			piece2.events.onDragStart.add(onDragStart, this);
			piece3.events.onDragStart.add(onDragStart, this);
			piece4.events.onDragStart.add(onDragStart, this);
			piece5.events.onDragStart.add(onDragStart, this);
			piece6.events.onDragStart.add(onDragStart, this);
			piece7.events.onDragStart.add(onDragStart, this);
			
			//quincy();
		}
		
		function onDragStart(sprite, pointer)
		{
			if (rot)
			{
				sprite.angle+= 15;
			}
		}
		
		function onTap(pointer, doubleTap)
		{
			if (doubleTap)
			{
				//there's nothing here but it works??
			}
		}
		
		function quincy()
		{
			var bePetty = Math.random() * 8;
			
			if (bePetty === 1)
			{
				piece1.angle = game.rnd.angle();	
			}
			else if(bePetty === 2)
			{
				piece2.angle = game.rnd.angle();
			}
			else if(bePetty === 3)
			{
				piece3.angle = game.rnd.angle();
			}
			else if(bePetty === 4)
			{
				piece4.angle = game.rnd.angle();
			}
			else if(bePetty === 5)
			{
				piece5.angle = game.rnd.angle();
			}
			else if (bePetty === 6)
			{
				piece6.angle = game.rnd.angle();
			}
			else if(bePetty === 7)
			{
				piece7.angle = game.rnd.angle();
			}
			else
			{
				piece1.angle = game.rnd.angle();
				piece2.angle = game.rnd.angle();
				piece3.angle = game.rnd.angle();
				piece4.angle = game.rnd.angle();
				piece5.angle = game.rnd.angle();
				piece6.angle = game.rnd.angle();
				piece7.angle = game.rnd.angle();
			}
			total++;
			timer = game.time.now + 1000;
		}
		function update() {
			
			//allow the pieces to be rotated with the R key; code borrowed from drag event parameters phaser example
			//piece1.events.onDragStart.add(onDragStart, this);
			
			if (total < 30 && game.time.now > timer)
			{
				quincy();
			}
			
		}
	};

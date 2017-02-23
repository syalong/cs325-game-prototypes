"use strict";

function make_main_game_state( game )
{
    function preload() {
		game.load.image('audience', 'assets/audience.png');
		game.load.image('table', 'assets/table.png');
		game.load.image('egg', 'assets/egg.png');
		game.load.image('milk', 'assets/milk.png');
		game.load.image('bowl', 'assets/bowl.png');
		game.load.image('chocolate', 'assets/chocolate.png');
		game.load.image('butter', 'assets/butter.png');
		game.load.image('flour', 'assets/flour.png');
		game.load.image('spoon', 'assets/spoon.png');
		game.load.image('recipe', 'assets/recipe.png');
    }
    
	var moveme;
	var control;
	var cheat;
	var pickup;
	//var cheatsheet;
	
    function create() {
		//make the audience look packed
		game.add.sprite(-275,0,'audience');
		game.add.sprite(250,0,'audience');
		game.add.sprite(450,100,'audience');
		game.add.sprite(-50,100,'audience');
		//this is the table
		game.add.sprite(-200,430,'table');
		
		//some ingredients are needed to make a cake
		game.add.sprite(700,430, 'egg');
		game.add.sprite(650,430, 'egg');
		game.add.sprite(675,450, 'egg');
		
		game.add.sprite(30,460, 'milk');
		
		game.add.sprite(75,430,'chocolate');
		
		game.add.sprite(600, 500, 'butter');
		
		game.add.sprite(150, 500, 'flour');
		
		//obviously a bowl
		game.add.sprite(300,450, 'bowl');
		
		//player's cursor
		moveme = game.add.sprite(game.world.centerX, game.world.centerY, 'spoon');
		game.physics.arcade.enable(moveme);
		moveme.body.collideWorldBounds = true;
		
		//controls
		control = game.input.keyboard.createCursorKeys();
		cheat = game.input.keyboard.addKey(Phaser.Keyboard.R);
		pickup = game.input.keyboard.addKey(Phaser.Keyboard.SPACE);
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
       /* var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something amazing.", style );
        text.anchor.setTo( 0.5, 0.0 );*/
    }
    
    function update() {
		moveme.body.velocity.x = 0;
		moveme.body.velocity.y = 0;
		//move the spoon cursor
		if (control.left.isDown)
		{
			moveme.body.velocity.x = -500;
		}
		else if (control.right.isDown)
		{
			moveme.body.velocity.x = 500;
		}
		else if (control.up.isDown)
		{
			moveme.body.velocity.y = -500;
		}
		else if (control.down.isDown)
		{
			moveme.body.velocity.y = 500;
		}
		
		var count = 0;
		var cheatsheet = null;
		//cheat by looking at the recipe
		if (cheat.isDown)
		{
			cheatsheet = game.add.sprite(0,0,'recipe');
			count++;
		}
		/*else if (cheat.isDown && count === 1)
		{
			cheatsheet.destroy();
			count--;
		}*/
			
    }
    
    return { "preload": preload, "create": create, "update": update };
}


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
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );
    
    game.state.add( "main", make_main_game_state( game ) );
    
    game.state.start( "main" );
};

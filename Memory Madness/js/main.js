"use strict";

function make_main_game_state( game )
{
    function preload() {
        game.load.image( 'brain', 'assets/brain.jpg' );
		game.load.image('good', 'assets/good.png');
		game.load.image('bad', 'assets/bad.png');
    }
	
	var control;
	var next;
    
	var memoryhold;
	
	var rand;
	var checkText;
	var check = 0;
	
	var good;
	var bad;
	
    function create() {
		//brain background
		game.add.sprite(0,0,'brain');
		game.add.sprite(0,200,'brain');
		game.add.sprite(0,400,'brain');
		game.add.sprite(200,0,'brain');
		game.add.sprite(200,200,'brain');
		game.add.sprite(200,400,'brain');
		game.add.sprite(400,0,'brain');
		game.add.sprite(400,200,'brain');
		game.add.sprite(400,400,'brain');
		game.add.sprite(600,0,'brain');
		game.add.sprite(600,200,'brain');
		game.add.sprite(600,400,'brain');
		
		control = game.input.keyboard.createCursorKeys();
		next = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		//checkText = game.add.text( game.world.centerX, 15, "Check : 0", { font: "25px Verdana", fill: "#9999ff", align: "center" } );
        //checkText.anchor.setTo( 0.5, 0.0 );
		
		
    }
	
	function mem()
	{
		rand = (Math.random() * 2) + 1;
		var memory;
		
		if (rand == 1)
		{
			good = game.add.sprite(game.world.centerX, game.world.centerY, 'good');
		}
		else
		{
			bad = game.add.sprite(game.world.centerX,game.world.centerY,'bad');
		}
		//check++;
	}
    
    function update() {
		
		if (next.isDown)
		{
			mem();
			//checkText.text = "Check : " + check;
		}
		if (control.left.isDown)
		{
			good.destroy();
		}
		if(control.right.isDown)
		{
			bad.destroy();
		}
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

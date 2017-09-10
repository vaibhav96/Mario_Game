
//Author
game.objects = {}
game.objects.brick = {width: 20, height: 20}
game.objects.brick2 = {width: 10, height: 10}
game.objects.brick3 = {width: 10, height: 10}


game.platforms = []
game.coins = []
game.enemies = []
game.endpoints = []
game.gates = []


game.platforms[1] = [

	{x: 387, y: 138, width: 50, height: 50, type: "brick", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 160, min_y: 120, moving_positive: true}},
	{x: 50, y: 450, width: 400, height: 50, type: "brick", variable: brick, shm: false},
	
	{x: 550, y: 330, width: 50, height: 20, type: "brick", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 450, min_y: 320, moving_positive: true} },
	{x: 650, y: 380, width: 50, height: 20, type: "brick", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 450, min_y: 320, moving_positive: false} },
	{x: 750, y: 440, width: 50, height: 20, type: "brick", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 450, min_y: 320, moving_positive: true} },
	
	
	{x: 974, y: 395, width: 150, height: 40, type: "brick", variable: brick, shm: false },
	{x: 1300, y: 395, width: 150, height: 40, type: "brick", variable: brick, shm: false },
	
	{x: 1600, y: 395, width: 150, height: 120, type: "brick", variable: brick, shm: false },
	
	{x: 1900, y: 395, width: 1000, height: 120, type: "brick", variable: brick, shm: false },

];

game.coins[1] = [
	{x: 380, y: 380, width: 20, height: 20, taken: false},
	{x: 430, y: 380, width: 20, height: 20, taken: false},
	{x: 480, y: 380, width: 20, height: 20, taken: false},
	{x: 530, y: 380, width: 20, height: 20, taken: false},
	{x: 580, y: 380, width: 20, height: 20, taken: false},
	{x: 630, y: 380, width: 20, height: 20, taken: false},
	{x: 680, y: 380, width: 20, height: 20, taken: false},
	{x: 730, y: 380, width: 20, height: 20, taken: false},
	{x: 780, y: 380, width: 20, height: 20, taken: false},
	{x: 830, y: 350, width: 20, height: 20, taken: false},
	{x: 880, y: 350, width: 20, height: 20, taken: false},
	{x: 930, y: 350, width: 20, height: 20, taken: false},
	{x: 1500, y: 300, width: 20, height: 20, taken: false},
	{x: 1530, y: 300, width: 20, height: 20, taken: false},
	{x: 1560, y: 300, width: 20, height: 20, taken: false},
	
	{x: 1700, y: 300, width: 20, height: 20, taken: false},
	{x: 1730, y: 300, width: 20, height: 20, taken: false},
	{x: 1760, y: 300, width: 20, height: 20, taken: false},
	{x: 1790, y: 300, width: 20, height: 20, taken: false},
	{x: 1820, y: 300, width: 20, height: 20, taken: false},
	{x: 1850, y: 300, width: 20, height: 20, taken: false},
	{x: 1880, y: 300, width: 20, height: 20, taken: false},
	{x: 1910, y: 300, width: 20, height: 20, taken: false},

	{x: 1970, y: 300, width: 20, height: 20, taken: false},
	{x: 2030, y: 300, width: 20, height: 20, taken: false},	
	{x: 2090, y: 300, width: 20, height: 20, taken: false},
];


game.enemies[1] = [
	{x: 1000, y: 367, width:30, height:30, shm:{max:1110, min:974}, alive: true, going_positive: true,  speed: 0.3},
	{x: 1390, y: 367, width:30, height:30, shm:{max:1438, min:1313}, alive: true, going_positive: true,  speed: 0.3},
	{x: 1430, y: 367, width:30, height:30, shm:{max:1438, min:1313}, alive: true, going_positive: true,  speed: 0.3},
	{x: 1650, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0.3},
	{x: 1690, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0.3},
	
	{x: 1940, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0},
	{x: 2000, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0},
	{x: 2060, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0},
	
	{x: 2650, y: 367, width:30, height:30, shm:{max:2861, min:2566}, alive: true, going_positive: true,  speed: 0.5},
	{x: 2590, y: 367, width:30, height:30, shm:{max:2861, min:2566}, alive: true, going_positive: false,  speed: 0.5},
	{x: 2720, y: 367, width:30, height:30, shm:{max:2861, min:2566}, alive: true, going_positive: true,  speed: 0.5},

]

game.gates[1] = {x:2800, y: 300, width: 200, height: 200}
game.endpoints[1] = {start: {x: 50, y:200} }




game.platforms[2] = [

	{x: 50, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 250, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 350, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 550, y: 380, width: 100, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "x", max_x: 800, min_x: 530, moving_positive: true} },
	
];

game.coins[2] = [
	{x: 105, y: 225, width: 20, height: 20, taken: false},
	{x: 130, y: 225, width: 20, height: 20, taken: false},
	{x: 155, y: 225, width: 20, height: 20, taken: false},
	{x: 180, y: 225, width: 20, height: 20, taken: false},
	{x: 205, y: 225, width: 20, height: 20, taken: false},
];


game.enemies[2] = [
	{x: 350, y: 322, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0.1},
	{x: 400, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 440, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 480, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 520, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 560, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 600, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 640, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
]

game.gates[2] = {x: 800, y:300, width: 200, height: 200}
game.endpoints[2] = {start: {x: 50, y:300}}



game.platforms[3] = [

	{x: 50, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 250, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 350, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 550, y: 380, width: 100, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "x", max_x: 800, min_x: 530, moving_positive: true} },
	
];

game.coins[3] = [
	{x: 105, y: 225, width: 20, height: 20, taken: false},
	{x: 130, y: 225, width: 20, height: 20, taken: false},
	{x: 155, y: 225, width: 20, height: 20, taken: false},
	{x: 180, y: 225, width: 20, height: 20, taken: false},
	{x: 205, y: 225, width: 20, height: 20, taken: false},
];


game.enemies[3] = [
	{x: 350, y: 322, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0.1},
	{x: 400, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 440, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 480, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 520, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 560, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 600, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 640, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
]

game.gates[3] = {x: 800, y:300, width: 200, height: 200}
game.endpoints[3] = {start: {x: 50, y:300}}





game.player.x = game.endpoints[level].start.x
game.player.y = game.endpoints[level].start.y

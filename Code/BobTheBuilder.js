var brick_h = 24; //cm
var brick_w = 12; //cm
var brick_t = 8; //cm

var wall_h = 8; //m
var wall_w = 0.6; //m
var wall_t = 24; //m

var volume_wall = wall_h * wall_w * wall_t;
volume_wall = volume_wall * Math.pow(100, 3); // 100 ^ 3

var volume_brick = brick_h * brick_t * brick_w;

no_of_bricks = (0.85 * volume_wall) / volume_brick;
console.log(Math.ceil(no_of_bricks));
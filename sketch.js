const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var drops = [];


var maxDrops = 100;

function setup() {

    engine = Engine.create();
    world = engine.world;
    createCanvas(400, 1100);

    if (frameCount % 150 === 0) {

        for (var i = 0; 1 < maxDrops; i++) {
            drops.push(new Drops(random(0, 400), random(0, 400)))
        }
    }

}

function draw() {
    Engine.update(engine);

    background("black");
    for (var i = 0; i < maxDrops; i++) {
        drops[i].showDrop(); 
        drops[i].updateY()
    }


    drawSprites();
}


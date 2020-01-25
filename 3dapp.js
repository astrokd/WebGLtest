'use strict';

let epX = 0;
let epY = 0;
let epZ = 0;

let epR = 0;
let pTex;

function setup(){

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(201,32,12);

  pTex = loadImage('img/world.topo.bathy.200412.3x5400x2700.png');

}

function draw(){

  background(201,32,12);

  epR += 0.1;
  epZ =map(mouseY, 0, height, 0, -10);

  pointLight(255,255,255, mouseX,0,400);
  renderEPlanet();

}

function renderEPlanet(){

  texture(pTex);
  noStroke();
//   ambientMaterial(0,255,0);
//   specularMaterial(0,255,0);

  translate(epX, epY, epZ);
  rotateY(radians(epR));
  sphere(140, 240, 160);

}

'use strict';

let epX = 0;
let epY = 0;
let epZ = 0;

let pTex;

function setup(){

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(201,32,12);

  pTex = loadImage('img/world.topo.bathy.200412.3x5400x2700.png');

}


function draw(){

  background(201,32,12);
  epZ =map(mouseY, 0, height, 0, -100);
  renderEPlanet();

}

function renderEPlanet(){

  texture(pTex);
  translate(epX, epY, epZ);
  sphere(200)

}

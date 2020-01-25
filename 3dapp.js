'use strict';

let epX = 0;
let epY = 0;
let epZ = 0;

let epR = 0;
let pTex;
let mTex;

function setup(){

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(51);

  pTex = loadImage('img/world.topo.bathy.200412.3x5400x2700.png');
  mTex = loadImage('img/moonmap1k.jpg');

}

function draw(){

  background(51);

  epR += 0.1;
  epZ =map(0, 0, height, 0, -10);

  ambientLight(150);
  pointLight(255,255,255, 0,0,400);
  orbitControl();
  renderEPlanet();
  renderEMoon();

}

function renderEPlanet(){

  texture(pTex);
  noStroke();

  translate(epX, epY, epZ);
  rotateY(radians(epR));
  sphere(140, 240, 160);

}

function renderEMoon(){

  texture(mTex);
  noStroke();

  rotateY(radians(epR)*2);
  translate(250, epY, epZ);
  sphere(28);

}

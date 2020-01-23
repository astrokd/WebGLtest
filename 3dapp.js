'use strict';

let epX = 0;
let epY = 0;
let epZ = 0;

function setup(){

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(201,32,12);

}

function draw(){

  renderEPlanet();

}

function renderEPlanet(){

  translate(epX, epY, epZ);
  sphere(200)

}

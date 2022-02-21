video = "";
status = "";
function setup(){
canvas = createCanvas(480,380)
canvas.center();
}
function draw(){
    image(video,0,0,480,380)
}
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function start(){
objectDetector = ml5.objectDetector('cocossd',ModelLoaded);
document.getElementById("status").innerHTML = "Status : Objects are being detected";
}
function ModelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
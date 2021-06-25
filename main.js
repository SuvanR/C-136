video = " ";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);
}

function play(){
    objectDetector = ml5.objectDetector("cocssd", modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting objects";
}

function modelLoaded(){
    console.log("model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
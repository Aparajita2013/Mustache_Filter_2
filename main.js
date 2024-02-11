nose_X = 0
nose_Y = 0

function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose',gotposes)
}

function modelloaded() {
    console.log("poseNet is loaded")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nose_X = results[0].pose.nose.x-15;
        nose_Y = results[0].pose.nose.y+5;
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache,nose_X,nose_Y,30,20)
}

function take_snapshot() {
    save("Mustache_Filter.png")
}
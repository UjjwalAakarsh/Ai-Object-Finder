status=""
function preload(){
}
function setup(){
    canvas=createCanvas(350,350)
    canvas.center()
    video=createCapture()
    video.size(350,350)
    video.hide()
}
function draw(){
    image(video,0,0,350,350)
}
function start(){
    objectdetector=ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
    findobject=document.getElementById("input").value

}
function modelloaded() {
    console.log("Model Loaded")
    status=true
}
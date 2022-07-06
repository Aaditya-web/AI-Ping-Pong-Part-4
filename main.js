rightWristX = "";
rightWristY = "";
scoreRightWrist = "";

function preload(){

}

function setup(){
    canvas = createCanvas(700,400);
    canvas.position(570, 400);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model Loaded!")
}

function draw(){
  image(video, 0, 0, 700, 400);

  if(scoreRightWrist > 0.2)
  {
   fill("#FF0000");
   stroke("#FF0000");
   circle(rightWristX, rightWristY, 75)
  }
}

function gotPoses(results){
  if(results.length > 0)
  {
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    scoreRightWrist = results[0].pose.keypoints[10].score;

  }

}

function startGame(){

}
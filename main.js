nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotpose);
}

function gotpose(results)
{
  if(results.length>0)
  {
      console.log(results);
      nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
      console.log("nosex="+nosex+"nosey="+nosey);

      leftwristx=results[0].pose.leftWrist.x;
      righttwristx=results[0].pose.rightWrist.x;
      difference=floor(leftwristx-righttwristx);
      console.log("leftwristx="+leftwristx+"righttwristx="+righttwristx+"difference="+difference);
  }
}

function modelLoaded()
{
    console.log('posenet is loaded');

}

function draw()
{
    background('#DC143C');
    document.getElementById("square_sides").innerHTML="width and height of a square will be="+difference+"px";
    fill('#000000');
    stroke('#000000');
    square(nosex,nosey,difference);
}
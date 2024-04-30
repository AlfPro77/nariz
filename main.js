function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    PoseNet=ml5.poseNet(video,modelLoad())
    PoseNet.on("pose", gotPoses);
}

function draw(){
   image(video,0, 0, 300, 300);
   fill(255,0,0);
   //circle(mouseX, mouseY, 50);
   circle(noseX, noseY, 50);
}

function tomar_foto(){
    save("imagen.png")
}

function modelLoad(){
    console.log("modelo cargando...");
    /*matrices 
    //una matriz es una varible que puede alamcenar listas de datos dentro e ella 
    var array=[7,8,9,11,10];
    console.log(array);
    console.log(array[3]);
    console.log(array[1]);
    console.log(array[0]);*/
}

function gotPoses(results){ 
   if(results.length>0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(results);
    console.log("noseX="+results[0].pose.nose.x);
    console.log("noseY="+results[0].pose.nose.y);

   }
}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
let spl2 = false;
let requestID;
// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight;

//color-plateado
var silver = ctx.createLinearGradient(0, canvas.height/2, 0, canvas.height-50);
silver.addColorStop(0, 'rgba(220, 220, 220, 0)');
silver.addColorStop(0.15, 'rgba(220, 220, 220, 0.2)');
silver.addColorStop(0.3, '#fff');
silver.addColorStop(0.45, 'rgba(220, 220, 220, 0.2)');
silver.addColorStop(0.6, '#fff');
silver.addColorStop(0.75, 'rgba(220, 220, 220, 0.2)');
silver.addColorStop(0.9, '#fff');
silver.addColorStop(1, 'rgba(220, 220, 220, 0)');

window.onload = () => {
    splash1.draw();
    document.getElementById('start').onclick = () => {
    splash2.draw();
    grid.draw()
    spl2 = true;
    //startGame();
    };
}

function startGame() {
        
      requestID = requestAnimationFrame(updateCanvas)
}


class Splash{
    constructor(imagen) {
        this.x = 0;
        this.y = 0;
        this.img= new Image ();
        this.img.src = imagen;
    }
    draw() {
        ctx.drawImage(this.img,this.x,this.y,canvas.width,canvas.height);
    }
}



class Tablero {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.gauge = new Image();
        this.gauge.src = "assets/images/gauge.png"
        this.puntos = new Image();
        this.puntos.src = "assets/images/points.png"
    }
    draw() {
        //Tablero
        ctx.beginPath();
        ctx.strokeStyle = silver;
        ctx.lineWidth = 7
        ctx.moveTo(canvas.width/3, canvas.height/2);
        ctx.lineTo(canvas.width/12, canvas.height-50);
        ctx.moveTo((canvas.width/3)*2, canvas.height/2);
        ctx.lineTo(canvas.width-canvas.width/12, canvas.height-50);
        ctx.stroke();

        //Valvula y puntos
        ctx.drawImage(this.gauge,canvas.width - 100,canvas.height/2, this.gauge.width/2.5, this.gauge.height/2.5)
        ctx.drawImage(this.puntos,canvas.width - 650,canvas.height/2, this.puntos.width/1.8, this.puntos.height/1.8)
       
        //puntos
        ctx.fillStyle = "white";
        
        ctx.font = "30px Oxanium"
        ctx.fillText("0000",canvas.width - 595,canvas.height/2+60);
        ctx.fillText("1",canvas.width - 530,canvas.height/2+60);
        //---------
    }
    gameOver(){
        requestID = false
    }
}


class Botones{
    constructor(imagen,x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = imagen;   
        this.pressed = false;
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        if (this.pressed) {
            this.y += 6;
            if (this.y > 840){
                this.y = 834;
                this.pressed = false;
            }
        }
    }
            
    
}
class Tab{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = 'assets/images/b_or.png';   
        this.pressed = false;
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        if (this.pressed) {
            this.y += 6;
            if (this.y > 880){
                this.y = 874;
                this.pressed = false;
            }
        }
    }
            
    
}

class VideoFrame{
    constructor(){
        this.x = 50;
        this.y = 50;
        this.image1 = new Image();
        this.image1.src = "assets/images/video/010.png";
        this.image2 = new Image();
        this.image2.src = "assets/images/video/011.png";
        this.image = this.image1
    }
    draw(){
        if (frames % 10 === 0) {
            //if ternario true false en una linea
            this.image = this.image === this.image1 ? this.image2 : this.image1
        }
        ctx.drawImage(this.image,this.x,this.y)
    }
}


const tablero = new Tablero();
const splash1 = new Splash("/assets/images/splash1.png");
const splash2 = new Splash("/assets/images/splash2.png");
const video = new VideoFrame();
const b1 = new Botones('assets/images/c_gr.png',145,834,80,50);
const b2 = new Botones('assets/images/c_re.png',255,834,80,50);
const b3 = new Botones('assets/images/c_ye.png',365,834,80,50);
const b4 = new Botones('assets/images/c_bl.png',475,834,80,50);
const b5 = new Tab(canvas.width/2-280,874,canvas.width-140,50);

function lineas(){
    //Lineas
    for(i=1; i<=4; i++){
        ctx.beginPath();
        ctx.strokeStyle = silver;
        ctx.lineWidth = 1
        ctx.moveTo(canvas.width/3+((canvas.width/15)*i), canvas.height/2);
        ctx.lineTo(32+canvas.width/5.5*i,canvas.height-50);
        ctx.stroke();
    }
}
function updateCanvas(){
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    video.draw();
    tablero.draw();
    lineas();
    b1.draw();
    b2.draw();
    b3.draw();
    b4.draw();
    b5.draw();
    //console.log(frames)

    if (requestID) {
        requestID = requestAnimationFrame(updateCanvas)
    }
}

addEventListener("keydown", (event) => {
    //izquierda
      if (event.keyCode === 65) { //Aa
        b1.pressed = true;        
      }
      if (event.keyCode === 83) { //S
        b2.pressed = true;
      }
      if (event.keyCode === 68) { //D
        b3.pressed = true;
      }
      if (event.keyCode === 70) { //F
        b4.pressed = true;
      }
      if (event.keyCode === 76) { //L 
        b5.pressed = true;
      }
      if (spl2 === true && event.keyCode === 13) { //enter 
        startGame();
      }
}) 

class GridItem{
    constructor(img,x,y,name,artist){
        this.x = x;
        this.y = y;
        this.width = 149;
        this.height = 149;
        this.img= new Image();
        this.img.src = img;
        // this.song = new Audio();
        // this.song.src = song;
        // this.song.loop = true;
        this.name = name;
        this.artist = artist;
        this.lock = new Image();
        this.lock.src = "assets/images/albums/lock.png"
        this.gray = new Image();
        this.gray.src = "assets/images/albums/gray.png"
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.gray,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.lock,this.x+90,this.y+90,this.width/3,this.height/3)
        
        
    }
    title(){
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "22px Oxanium"
        ctx.fillText(this.name,canvas.width-280,canvas.height-65);
        ctx.fillText(this.artist,canvas.width-280,canvas.height-45);
    }
    ok(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
        ctx.strokeStyle = "#F1374B";
        ctx.lineWidth = 7
        ctx.strokeRect(this.x,this.y,this.width,this.height)
    }
}

const album = 154

const item1 = new GridItem("assets/images/albums/01.jpg",45,109,"Blue (Da Ba Dee)","Effiel 65")
const item2 = new GridItem("assets/images/albums/02.jpeg",45+album,109,"Pretty Fly","The Offspring")
const item3 = new GridItem("assets/images/albums/03.jpg",45+album*2,109,"Pretty Fly","The Offspring")
const item4 = new GridItem("assets/images/albums/04.jpg",45+album*3,109,"Pretty Fly","The Offspring")
const item5 = new GridItem("assets/images/albums/05.jpg",45,108+album,"Pretty Fly","The Offspring")
const item6 = new GridItem("assets/images/albums/06.jpeg",45+album,108+album,"Pretty Fly","The Offspring")
const item7 = new GridItem("assets/images/albums/07.jpeg",45+album*2,108+album,"Pretty Fly","The Offspring")
const item8 = new GridItem("assets/images/albums/08.jpeg",45+album*3,108+album,"Pretty Fly","The Offspring")
const item9 = new GridItem("assets/images/albums/09.jpg",45,107+album*2,"Pretty Fly","The Offspring")
const item10 = new GridItem("assets/images/albums/10.jpg",45+album,107+album*2,"Pretty Fly","The Offspring")
const item11 = new GridItem("assets/images/albums/11.jpg",45+album*2,107+album*2,"Pretty Fly","The Offspring")
const item12 = new GridItem("assets/images/albums/12.jpg",45+album*3,107+album*2,"Pretty Fly","The Offspring")
const item13 = new GridItem("assets/images/albums/13.jpg",45,106+album*3,"Pretty Fly","The Offspring")
const item14 = new GridItem("assets/images/albums/14.jpg",45+album,106+album*3,"Pretty Fly","The Offspring")
const item15 = new GridItem("assets/images/albums/15.jpg",45+album*2,106+album*3,"Pretty Fly","The Offspring")
const item16 = new GridItem("assets/images/albums/16.jpg",45+album*3,106+album*3,"Pretty Fly","The Offspring")
const item17 = new GridItem("assets/images/albums/17.jpeg",45,105+album*4,"Pretty Fly","The Offspring")
const item18 = new GridItem("assets/images/albums/18.jpg",45+album,105+album*4,"Pretty Fly","The Offspring")
const item19 = new GridItem("assets/images/albums/19.jpg",45+album*2,105+album*4,"Pretty Fly","The Offspring")
const item20 = new GridItem("assets/images/albums/20.png",45+album*3,105+album*4,"Pretty Fly","The Offspring")







class Grid{
    draw(){
        item1.ok();
        item1.title();
        item2.draw();
        item3.draw();
        item4.draw();
        item5.draw();
        item6.draw();
        item7.draw();
        item8.draw();
        item9.draw();
        item10.draw();
        item11.draw();
        item12.draw();
        item13.draw();
        item14.draw();
        item15.draw();
        item16.draw();
        item17.draw();
        item18.draw();
        item19.draw();
        item20.draw();

        ctx.fillStyle = "#F1374B";
        ctx.beginPath();
        ctx.moveTo(canvas.width-180,canvas.height-120)
        ctx.lineTo(canvas.width-50,canvas.height-120)
        ctx.lineTo(canvas.width-25,canvas.height-70)
        ctx.lineTo(canvas.width-50,canvas.height-20)
        ctx.lineTo(canvas.width-180,canvas.height-20)
        ctx.lineTo(canvas.width-165,canvas.height-70)
        ctx.fill()
        ctx.closePath()

        
        ctx.textAlign="center"
        ctx.font = "30px Oxanium"
        ctx.fillStyle = "black";
        ctx.fillText("Let's",canvas.width -104,canvas.height - 72);
        ctx.fillText("Rock",canvas.width - 104,canvas.height - 42);
        ctx.fillStyle = "white";
        ctx.fillText("Let's",canvas.width -107,canvas.height - 75);
        ctx.fillText("Rock",canvas.width - 107,canvas.height - 45);
        

    }
}

const grid = new Grid();

addEventListener("keydown", (event) => {
    //izquierda
      if (event.keyCode === 65) { //Aa
        b1.pressed = true;        
      }
      if (event.keyCode === 83) { //S
        b2.pressed = true;
      }
      if (event.keyCode === 68) { //D
        b3.pressed = true;
      }
      if (event.keyCode === 70) { //F
        b4.pressed = true;
      }
      if (event.keyCode === 76) { //L 
        b5.pressed = true;
      }
      if (spl2 === true && event.keyCode === 13) { //enter 
        startGame();
      }
}) 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
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
    document.getElementById('start').onclick = () => {
    startGame();
    };
}

function startGame() {
    
      requestID = requestAnimationFrame(updateCanvas)
}

class Tablero {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    draw() {
        //puntos
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "30px Righteous"
        ctx.fillText("Puntos:",canvas.width/2,50);
        ctx.fillText("XX",canvas.width/2,100);
        //---------


        //Tablero
        ctx.beginPath();
        ctx.strokeStyle = silver;
        ctx.lineWidth = 7
        ctx.moveTo(canvas.width/3, canvas.height/2);
        ctx.lineTo(canvas.width/12, canvas.height-50);
        ctx.moveTo((canvas.width/3)*2, canvas.height/2);
        ctx.lineTo(canvas.width-canvas.width/12, canvas.height-50);
        ctx.stroke();

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
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
        
    
}
const tablero = new Tablero();

const b1 = new Botones('assets/images/c_gr.png',145,canvas.height-165,80,50);
const b2 = new Botones('assets/images/c_re.png',255,canvas.height-165,80,50);
const b3 = new Botones('assets/images/c_ye.png',365,canvas.height-165,80,50);
const b4 = new Botones('assets/images/c_bl.png',475,canvas.height-165,80,50);
const b5 = new Botones('assets/images/b_or.png',canvas.width/2-280,canvas.height-120,canvas.width-140,50);

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
    tablero.draw();
    lineas();
    b1.draw();
    b2.draw();
    b3.draw();
    b4.draw();
    b5.draw();
    console.log(frames)
}



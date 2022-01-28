const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
let spl2 = false;
let requestID;
// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight;
let puntos = 0;
let notas = 0;
let multiplicador = 1;
let dif = 20;
let gauge = dif / 2;
//color-plateado
var silver = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height - 50);
silver.addColorStop(0, 'rgba(220, 220, 220, 0)');
silver.addColorStop(0.15, 'rgba(220, 220, 220, 0.2)');
silver.addColorStop(0.3, '#fff');
silver.addColorStop(0.45, 'rgba(220, 220, 220, 0.2)');
silver.addColorStop(0.6, '#fff');
silver.addColorStop(0.75, 'rgba(220, 220, 220, 0.2)');
silver.addColorStop(0.9, '#fff');
silver.addColorStop(1, 'rgba(220, 220, 220, 0)');
window.onload = () => {
    // splash1.draw();
    // document.getElementById('start').onclick = () => {
    // splash2.draw();
    // grid.draw()
    // spl2 = true;
    startGame();
    // };a
}
function startGame() {
    requestID = requestAnimationFrame(updateCanvas)
}
class Splash {
    constructor(imagen) {
        this.x = 0;
        this.y = 0;
        this.img = new Image();
        this.img.src = imagen;
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, canvas.width, canvas.height);
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
        this.stage = new Image();
        this.stage.src = "assets/images/stage.png"
        this.arrow = new Image();
        this.arrow.src = "assets/images/arrow.png"
    }
    draw() {
        ctx.drawImage(this.stage, 0, 0, canvas.width, canvas.height)
        //Tablero
        ctx.beginPath();
        ctx.strokeStyle = silver;
        ctx.lineWidth = 7
        ctx.moveTo(canvas.width / 3, canvas.height / 2);
        ctx.lineTo(canvas.width / 12, canvas.height - 50);
        ctx.moveTo((canvas.width / 3) * 2, canvas.height / 2);
        ctx.lineTo(canvas.width - canvas.width / 12, canvas.height - 50);
        ctx.stroke();
        //Valvula y puntos
        ctx.drawImage(this.gauge, canvas.width - 100, canvas.height / 2, this.gauge.width / 2.5, this.gauge.height / 2.5)
        ctx.drawImage(this.puntos, canvas.width - 650, canvas.height / 2, this.puntos.width / 1.8, this.puntos.height / 1.8)
        //puntos
        ctx.fillStyle = "white";
        ctx.font = "30px Oxanium"
        ctx.fillText(puntos, canvas.width - 595, canvas.height / 2 + 60);
        ctx.fillText(multiplicador, canvas.width - 530, canvas.height / 2 + 60);
        ctx.textAlign = "center"
        ctx.fillText(notas + " notas seguidas", canvas.width / 2, canvas.height / 2 + 20);
        ctx.fillText(gauge, canvas.width - 150, canvas.height / 2 + 85);
        ctx.drawImage(this.arrow, 575,(tablero.gauge.height-tablero.gauge.x)-gauge*5+(tablero.gauge.height/2));
        
        //---------
    }
}
class EndSplash {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.over = new Image();
        this.over.src = "assets/images/sad.png"
        this.win = new Image();
        this.win.src = "assets/images/happy.png"
    }
    gameOver() {
        ctx.drawImage(this.over, this.x, this.y, canvas.width, canvas.height)
        ctx.fillStyle = "Black";
        ctx.font = "30px Oxanium"
        ctx.textAlign = "center"
        ctx.fillText(item1.name, canvas.width - 500, canvas.height / 2-40 );
        ctx.fillText(item1.artist, canvas.width - 500, canvas.height / 2 );
        ctx.fillText(puntos + " puntos", canvas.width - 500, canvas.height / 2 + 50 );
        
    }
    winner() {
        ctx.drawImage(this.win, this.x, this.y, canvas.width, canvas.height)
        ctx.fillStyle = "Black";
        ctx.font = "30px Oxanium"
        ctx.textAlign = "center"
        ctx.fillText(item1.name, canvas.width - 500, canvas.height / 2-20 );
        ctx.fillText(item1.artist, canvas.width - 500, canvas.height / 2+20 );
        ctx.fillText(puntos + " puntos", canvas.width - 500, canvas.height / 2 + 70 );
    }
}
class Botones {
    constructor(imagen, x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = imagen;
        this.pressed = false;
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.pressed) {
            this.y += 6;
            if (this.y > 840) {
                this.y = 834;
                this.pressed = false;
            }
            if (fuego.pressed === true) {
                fuego.draw();
                fuego.pressed = false;
            }
        }
    }
}
class Tab {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = 'assets/images/b_or.png';
        this.pressed = false;
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.pressed) {
            this.y += 6;
            if (this.y > 880) {
                this.y = 874;
                this.pressed = false;
            }
        }
    }
}
class VideoFrame {
    constructor() {
        this.x = 20;
        this.y = 140;
        this.width = 230;
        this.height = 120
        this.image1 = new Image();
        this.image1.src = "assets/images/video/010.png";
        this.image2 = new Image();
        this.image2.src = "assets/images/video/011.png";
        this.image = this.image1
    }
    draw() {
        if (frames % 10 === 0) {
            //if ternario true false en una linea
            this.image = this.image === this.image1 ? this.image2 : this.image1
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, canvas.width - this.width - 20, this.y, this.width, this.height)
    }
}
const tablero = new Tablero();
const splash1 = new Splash("/assets/images/splash1.png");
const splash2 = new Splash("/assets/images/splash2.png");
const final = new EndSplash();
const video = new VideoFrame();
const b1 = new Botones('assets/images/c_gr.png', 145, 834, 80, 50);
const b2 = new Botones('assets/images/c_re.png', 255, 834, 80, 50);
const b3 = new Botones('assets/images/c_ye.png', 365, 834, 80, 50);
const b4 = new Botones('assets/images/c_bl.png', 475, 834, 80, 50);
const b5 = new Tab(canvas.width / 2 - 280, 874, canvas.width - 140, 50);
function lineas() {
    //Lineas
    for (i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.strokeStyle = silver;
        ctx.lineWidth = 1
        ctx.moveTo(canvas.width / 3 + ((canvas.width / 15) * i), canvas.height / 2);
        ctx.lineTo(32 + canvas.width / 5.5 * i, canvas.height - 50);
        ctx.stroke();
    }
}
function updateCanvas() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tablero.draw();
    video.draw();
    lineas();
    drawSong();
    b1.draw();
    b2.draw();
    b3.draw();
    b4.draw();
    b5.draw();
    if (gauge <= 0) {
        requestID = undefined;
        final.gameOver()
    }
    if (gauge >= dif) {
        requestID = undefined;
        final.winner()
    }
    //console.log(frames)
    if (requestID) {
        requestID = requestAnimationFrame(updateCanvas)
    }
}
addEventListener("keydown", (event) => {
    //izquierda
    if (event.keyCode === 65) { //Aa
        fuego.x = 133;
        b1.pressed = true;
        if (notaVerde.y_ini > notaVerde.tol1 && notaVerde.y_ini < notaVerde.tol2) {
            notaVerde.pressed = true;
        } else {
            gauge--;
            notas = 0;
        }
    }
    if (event.keyCode === 83) { //S
        fuego.x = 243;
        b2.pressed = true;
        if (notaRoja.y_ini > notaRoja.tol1 && notaRoja.y_ini < notaRoja.tol2) {
            notaRoja.pressed = true;
        } else {
            gauge--;
            notas = 0;
        }
    }
    if (event.keyCode === 68) { //D
        fuego.x = 353;
        b3.pressed = true;
        if (notaAmarilla.y_ini > notaAmarilla.tol1 && notaAmarilla.y_ini < notaAmarilla.tol2) {
            notaAmarilla.pressed = true;
        } else {
            gauge--;
            notas = 0;
        }
    }
    if (event.keyCode === 70) { //F
        fuego.x = 463;
        b4.pressed = true;
        if (notaAzul.y_ini > notaAzul.tol1 && notaAzul.y_ini < notaAzul.tol2) {
            notaAzul.pressed = true;
        } else {
            gauge--;
            notas = 0;
        }
    }
    //   if (event.keyCode === 76) { //L 
    //     b5.pressed = true;
    //   }
    if (spl2 === true && event.keyCode === 13) { //enter 
        startGame();
    }
})
class GridItem {
    constructor(img, x, y, name, artist) {
        this.x = x;
        this.y = y;
        this.width = 149;
        this.height = 149;
        this.img = new Image();
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
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.gray, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.lock, this.x + 90, this.y + 90, this.width / 3, this.height / 3)
    }
    title() {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "22px Oxanium"
        ctx.fillText(this.name, canvas.width - 280, canvas.height - 65);
        ctx.fillText(this.artist, canvas.width - 280, canvas.height - 45);
    }
    ok() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.strokeStyle = "#F1374B";
        ctx.lineWidth = 7
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}
const album = 154
const item1 = new GridItem("assets/images/albums/01.jpg", 45, 109, "Blue (Da Ba Dee)", "Effiel 65")
const item2 = new GridItem("assets/images/albums/02.jpeg", 45 + album, 109, "Pretty Fly", "The Offspring")
const item3 = new GridItem("assets/images/albums/03.jpg", 45 + album * 2, 109, "Pretty Fly", "The Offspring")
const item4 = new GridItem("assets/images/albums/04.jpg", 45 + album * 3, 109, "Pretty Fly", "The Offspring")
const item5 = new GridItem("assets/images/albums/05.jpg", 45, 108 + album, "Pretty Fly", "The Offspring")
const item6 = new GridItem("assets/images/albums/06.jpeg", 45 + album, 108 + album, "Pretty Fly", "The Offspring")
const item7 = new GridItem("assets/images/albums/07.jpeg", 45 + album * 2, 108 + album, "Pretty Fly", "The Offspring")
const item8 = new GridItem("assets/images/albums/08.jpeg", 45 + album * 3, 108 + album, "Pretty Fly", "The Offspring")
const item9 = new GridItem("assets/images/albums/09.jpg", 45, 107 + album * 2, "Pretty Fly", "The Offspring")
const item10 = new GridItem("assets/images/albums/10.jpg", 45 + album, 107 + album * 2, "Pretty Fly", "The Offspring")
const item11 = new GridItem("assets/images/albums/11.jpg", 45 + album * 2, 107 + album * 2, "Pretty Fly", "The Offspring")
const item12 = new GridItem("assets/images/albums/12.jpg", 45 + album * 3, 107 + album * 2, "Pretty Fly", "The Offspring")
const item13 = new GridItem("assets/images/albums/13.jpg", 45, 106 + album * 3, "Pretty Fly", "The Offspring")
const item14 = new GridItem("assets/images/albums/14.jpg", 45 + album, 106 + album * 3, "Pretty Fly", "The Offspring")
const item15 = new GridItem("assets/images/albums/15.jpg", 45 + album * 2, 106 + album * 3, "Pretty Fly", "The Offspring")
const item16 = new GridItem("assets/images/albums/16.jpg", 45 + album * 3, 106 + album * 3, "Pretty Fly", "The Offspring")
const item17 = new GridItem("assets/images/albums/17.jpeg", 45, 105 + album * 4, "Pretty Fly", "The Offspring")
const item18 = new GridItem("assets/images/albums/18.jpg", 45 + album, 105 + album * 4, "Pretty Fly", "The Offspring")
const item19 = new GridItem("assets/images/albums/19.jpg", 45 + album * 2, 105 + album * 4, "Pretty Fly", "The Offspring")
const item20 = new GridItem("assets/images/albums/20.png", 45 + album * 3, 105 + album * 4, "Pretty Fly", "The Offspring")
class Grid {
    draw() {
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
        ctx.moveTo(canvas.width - 180, canvas.height - 120)
        ctx.lineTo(canvas.width - 50, canvas.height - 120)
        ctx.lineTo(canvas.width - 25, canvas.height - 70)
        ctx.lineTo(canvas.width - 50, canvas.height - 20)
        ctx.lineTo(canvas.width - 180, canvas.height - 20)
        ctx.lineTo(canvas.width - 165, canvas.height - 70)
        ctx.fill()
        ctx.closePath()
        ctx.textAlign = "center"
        ctx.font = "30px Oxanium"
        ctx.fillStyle = "black";
        ctx.fillText("Let's", canvas.width - 104, canvas.height - 72);
        ctx.fillText("Rock", canvas.width - 104, canvas.height - 42);
        ctx.fillStyle = "white";
        ctx.fillText("Let's", canvas.width - 107, canvas.height - 75);
        ctx.fillText("Rock", canvas.width - 107, canvas.height - 45);
    }
}
const grid = new Grid();
class MoverNota {
    constructor(x_in, x_fin, nota) {
        this.x_ini = x_in; //A:255; 
        this.y_ini = 520; //constante
        this.tol1 = 825;
        this.tol2 = 835;
        this.x_fin = x_fin; //A:100;
        this.y_fin = 1000;
        this.width_ini = 40;
        this.heigth_ini = 24;
        this.img = new Image();
        this.img.src = nota;
        this.width_fin = 90;
        this.heigth_fin = 59;
        this.pressed = false;
    }
    display() {
        if (frames % 2 === 0 || frames % 2 === 1) {
            if (this.x_ini > 350) {
                this.width_ini += (this.width_fin / this.width_ini) / 6
                this.heigth_ini += (this.heigth_fin / this.heigth_ini) / 11
                this.x_ini -= Math.tan((this.y_fin - this.y_ini) / (this.x_fin - this.x_ini));
            } else {
                this.width_ini += (this.width_fin / this.width_ini) / 6
                this.heigth_ini += (this.heigth_fin / this.heigth_ini) / 11
                this.x_ini += Math.tan((this.y_fin - this.y_ini) / (this.x_ini - this.x_fin))
            }
            this.y_ini = this.y_ini + 2
            ctx.drawImage(this.img, this.x_ini, this.y_ini, this.width_ini, this.heigth_ini)
            if (this.y_ini === canvas.height - 200) {
                ctx.clearRect(this.x_ini, this.y_ini, this.width_ini, this.height_ini)
            }
        }
    }
}
const notaVerde = new MoverNota(250, 75, 'assets/images/c_gr.png')
const notaRoja = new MoverNota(303, 226, 'assets/images/c_re.png')
const notaAmarilla = new MoverNota(352.9, 371.5, 'assets/images/c_ye.png')
const notaAzul = new MoverNota(405.9, 502, 'assets/images/c_bl.png')
function drawSong() {
    song1.forEach((item, index_nota) => {
        switch (item.nota) {
            case "a":
                if (frames >= item.frame) {
                    notaVerde.display();
                }
                if ((notaVerde.y_ini) > 1000) {
                    song1.splice(index_nota, 1)
                }
                if (notaVerde.pressed === true) {
                    fuego.pressed = true;
                    puntos += 50;
                    notas++;
                    gauge++;
                    song1.splice(index_nota, 1)
                }
                break;
            case "s":
                if (frames >= item.frame) {
                    notaRoja.display();
                }
                if ((notaRoja.y_ini) > 1000) {
                    song1.splice(index_nota, 1)
                }
                if (notaRoja.pressed === true) {
                    fuego.pressed = true;
                    puntos += 50;
                    notas++;
                    gauge++;
                    song1.splice(index_nota, 1)
                }
                break;
            case "d":
                if (frames >= item.frame) {
                    notaAmarilla.display();
                }
                if ((notaAmarilla.y_ini) > 1000) {
                    song1.splice(index_nota, 1)
                }
                if (notaAmarilla.pressed === true) {
                    fuego.pressed = true;
                    puntos += 50;
                    notas++;
                    gauge++;
                    song1.splice(index_nota, 1)
                }
                break;
            case "f":
                if (frames >= item.frame) {
                    notaAzul.display();
                }
                if ((notaAzul.y_ini) > 1000) {
                    song1.splice(index_nota, 1)
                }
                if (notaAzul.pressed === true) {
                    fuego.pressed = true;
                    puntos += 50;
                    notas++;
                    gauge++;
                    song1.splice(index_nota, 1)
                }
                break;
        }
    })
}
class Fuego {
    constructor() {
        this.x = 0;
        this.y = canvas.height - 280;
        this.width = 100;
        this.height = 150;
        this.fire = new Image();
        this.fire.src = "assets/images/fire1.png";
        this.pressed = false;
    }
    draw() {
        if (frames % 2 === 0 || frames % 2 === 1) {
            ctx.drawImage(this.fire, this.x, this.y, this.width, this.height);
        }
    }
}
const fuego = new Fuego()
console.log(fuego.pressed)
let song1 = [
    {
        nota: "a",
        frame: 80,
    }, {
        nota: "s",
        frame: 140,
    },
    {
        nota: "d",
        frame: 150,
    },
    {
        nota: "f",
        frame: 180,
    }
];

function generateNotes() {
    // en que intervalo de tiempo quiero que se genere mi enemigo
    if (frames % 300 === 0 || frames % 700 === 0 || frames % 1200 === 0) {
        let y = Math.floor(Math.random() * (280 - 10) + 10);
        let imgRand = Math.floor(Math.random() * imageEnemies.length);
        const enemy = new Enemy(canvas.width, y, 50, 50, imageEnemies[imgRand]);
        enemies.push(enemy);
    }
}
console.log(frames)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight;

//puntos
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.font = "30px Righteous"
ctx.fillText("Puntos:",canvas.width/2,50);
ctx.fillText("XX",canvas.width/2,100);
//---------
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
// ----------


//Tablero
ctx.beginPath();
ctx.strokeStyle = silver;
ctx.lineWidth = 7
ctx.moveTo(canvas.width/3, canvas.height/2);
ctx.lineTo(canvas.width/12, canvas.height-50);
ctx.moveTo((canvas.width/3)*2, canvas.height/2);
ctx.lineTo(canvas.width-canvas.width/12, canvas.height-50);
ctx.stroke();
//

//Lineas
for(i=1; i<=4; i++){
    ctx.beginPath();
    ctx.strokeStyle = silver;
    ctx.lineWidth = 1
    ctx.moveTo(canvas.width/3+((canvas.width/15)*i), canvas.height/2);
    ctx.lineTo(30+canvas.width/5.5*i,canvas.height-50);
    ctx.stroke();
}

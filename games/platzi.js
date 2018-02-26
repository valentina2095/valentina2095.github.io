const vp = document.getElementById("villaplatzi");
const papel = vp.getContext("2d");

let fondo = {
  url: "tile.png",
  cargaOK: false
}
let vaca = {
  url: "vaca.png",
  cargaOK: false
};

const cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(let v=0; v < cantidad; v++)
    {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 10);
      let x = x * 60;
      let y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi)
{
  let resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

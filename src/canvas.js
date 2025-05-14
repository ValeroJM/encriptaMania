const canvas = document.getElementById('canvasImg');
const ctx = canvas.getContext('2d');
canvas.width = 500;

const img = new Image(); //Hemos creado una imagen en blanco
img.src = '/src/img/icons8-llave.svg' //Esta es la ruta de la imagen asignada
ctx.drawImage(img, 0, 0); //Dibujará la imagen en el canvas con 3 argumentos: la imagen, x=0 e y=0 (Top left corner)

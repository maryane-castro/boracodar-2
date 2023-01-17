

var currentImgIndex=1;
var sv=0;
var ImgSrcArray = [ //caminho das suas imgs aqui
"margo2_rose.jpg",
"sofar.gif"
];

var ImgArray= [
  "Vector.png",
  "Vector (Stroke).png",

];

function trocar(){

 

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    
    currentImgIndex=0;
    sv=0;
  }
  document.getElementById("360").src=ImgArray[sv];
  document.getElementById("image").src=ImgSrcArray[currentImgIndex];
    currentImgIndex++; 
    sv++;
}





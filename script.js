

var currentImgIndex=1;
var sv=0;
var ImgSrcArray = [ //caminho das suas imgs aqui
"https://media.giphy.com/media/y150nYfRoZ4Z3qBOOI/giphy.gif",
"img/sofa-margo2_rose.jpg",

];

var ImgArray= [
  "img/360.png",
  "img/x.png",
  

];

function trocar(){
  if(sv == ImgArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    
    sv=0;
  }
  document.getElementById("360").src=ImgArray[sv];
    sv++;
 

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    
    currentImgIndex=0;
    
  }
  document.getElementById("image").src=ImgSrcArray[currentImgIndex];
    currentImgIndex++; 

}





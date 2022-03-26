const bdy=document.querySelector("body");
const img=document.querySelector(".sollua");
const cor=document.querySelectorAll(".texto");
let imagemSrc="sol.png";
let imgtype = "lua"
function mudar(){
    bdy.classList.toggle("principal");
    for(let i=0;i<cor.length;i++){
        cor[i].classList.toggle("letras")
    }
    if(imgtype ===  "sol"){
        imgtype = "lua"
        imagemSrc="lua.png"
        img.src = imagemSrc;
    }
    else{
        imgtype = "sol";
        imagemSrc="sol.png"
        img.src=imagemSrc;
    }
    
}
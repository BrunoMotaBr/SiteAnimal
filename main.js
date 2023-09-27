const imgs = document.querySelectorAll(".principal-imagem");
const botaoMenu = document.querySelector(".menu-hamburguer-botao");
const menuHamburguer = document.querySelector(".menu-hamburguer");
let i = 0;

botaoMenu.addEventListener("click", function() {
    if(menuHamburguer.classList.value === "menu-hamburguer"){
        menuHamburguer.classList.add("ativo")
    }
    else{
        menuHamburguer.classList.remove("ativo")
    }
})

setInterval(() =>{
    if(imgs[i].classList.value === "principal-imagem ativo"){
        imgs[i].classList.remove("ativo")
        i++;
        if(i > imgs.length - 1){
            imgs[0].classList.add("ativo")
            i = 0;
        }else{
            imgs[i].classList.add("ativo")
        }
    }
},4000)
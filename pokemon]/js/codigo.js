var tudo=document.querySelector(".jogo");
var cont=0;
var nivel=5;
var intNivelPokemon=tudo.querySelector(".intPokemonNivel");
intNivelPokemon.textContent=parseInt(nivel);
var encontrar=tudo.querySelector(".encontrar");
var resultado=tudo.querySelector(".resultado");
var aparecer=resultado.querySelector(".aparecer");
resultado.style.display="none";
aparecer.style.display="none";
encontrar.addEventListener('click',function encontrar(){
    event.preventDefault();
    cont++;
    if(cont>1){

    }
    resultado.style.display="inline";
    aparecer.style.display="inline";
    aparecer.value=encontradorPokemon();
    criarNivelInimigo();
    criarMenuCombate();
    bloquearEncontrar();
    if(cont==1){
        
        criarBotaoAtaque();
        var dano=tudo.querySelector(".iaaa");
        dano.addEventListener('click',function(){
            event.preventDefault();
            calculoDano();
        });
    }
    else{
        liberarDano();
    }
});
function encontradorPokemon(){
    oPokemon=Math.floor(Math.random()*100);
    if(oPokemon>=0 && oPokemon<=24){
        return "pikachu";
    }
    else if(oPokemon>=25 && oPokemon<=49){
        return "raichu";
    }
    else if(oPokemon>=50 && oPokemon<=74){
        return "mew";
    }
    else{
        return "mewtwo";
    }
}
function combatee(){
    if(oPokemon>=0 && oPokemon<=24){
        return 20;
    }
    else if(oPokemon>=25 && oPokemon<=49){
        return 40;
    }
    else if(oPokemon>=50 && oPokemon<=74){
        return 200;
    }
    else{
        return 400;
    }
}
function criarMenuCombate(){
        var combate=document.createElement("div");
        combate.classList.add("inimigoVida");
        var para1=document.createElement("p");
        para1.classList.add("p1");
        var para2=document.createElement("p");
        para2.classList.add("p2");
        combate.appendChild(para1);
        combate.appendChild(para2);
        tudo.appendChild(combate);
        inimigoVida=tudo.querySelector(".inimigoVida");
        var p1=inimigoVida.querySelector(".p1");
        p2=inimigoVida.querySelector(".p2");
        p1.textContent="Pontos de vida:";
        p2.textContent=parseInt(combatee());
}
function criarBotaoAtaque(){
      var ataque=document.createElement("input");
        ataque.value="atacar";
        ataque.type="button";
        ataque.classList.add("iaaa");
        tudo.appendChild(ataque);
}
function calculoDano(){
    dano=Math.floor(Math.random()*10+1);
    console.log(dano);
    if((parseInt(p2.textContent) - dano)>1){
        p2.textContent=parseInt(parseInt(p2.textContent) - dano);
    }
    else{
        p2.textContent="Desmaiou";
        liberarEncontrar();
        bloquearDano();
    }
}
function bloquearEncontrar(){
    encontrar.style.display = "none";
}
function liberarEncontrar(){
    encontrar.style.display = "inline";
}
function bloquearDano(){
    var dano=document.querySelector(".iaaa");
    dano.style.display="none";
}
function criarNivelInimigo(){
    var labelFrase=document.createElement("label");
    labelFrase.textContent="Nivel:";
    var labelInt=document.createElement("label");
    labelInt.classList.add("labelInt");
    labelInt.textContent=parseInt(Math.floor(Math.random()*nivel+(nivel-3)));
    var labelLvl=document.createElement("label");
    labelLvl.textContent=" lvl";
    tudo.appendChild(labelFrase);
    tudo.appendChild(labelInt);
    tudo.appendChild(labelLvl);

}
function liberarDano(){
    var dano=document.querySelector(".iaaa");
    dano.style.display="inline";
}
function alterarNivelInimigo(){
    var nivel=tudo.querySelector(".labelInt");
    nivel.textContent=parseInt(Math.floor(Math.random()*nivel+(nivel-3)));
}
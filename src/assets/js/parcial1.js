let cardVisible = 0;
let botonVisible = 0;
document.getElementById("c0").className = "card aparecer";
function mostrar(card){
    let links = document.getElementsByTagName("button");
    if(card!=cardVisible){
        let idCard = "c" + card;
        document.getElementById(idCard).className = "card aparecer";
        let idCardVisible = "c" + cardVisible;
        document.getElementById(idCardVisible).className = "card desaparecer";
        cardVisible = card ;

        links[card].className ="selected";
        links[botonVisible].className= "";
        botonVisible = card;
    }
}

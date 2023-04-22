const keyBoard = document.querySelector('.keyboard');

if (keyBoard){
    keyBoard.addEventListener('keydown', e =>{
    console.log(e);
    if (e.keyCode == 70){
        alert('TECLA PRESIONADA: ' + e.KEY);
        } 
    })
}
else{
    alert("No econtrado");
}
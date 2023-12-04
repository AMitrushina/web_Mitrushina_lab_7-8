const spisok = document.getElementsByTagName('img');
function changeFoto(direction) {
    let item;
    for (let i = 0; i < spisok.length; i++) {
        if (spisok[i].className == 'visible') {
            item = i;
            spisok[i].className = 'unvisible'
        }
    }
    if (item+direction == -1) item = spisok.length;
    if (item+direction == spisok.length) item = -1;
    spisok[item+direction].className = 'visible';
}
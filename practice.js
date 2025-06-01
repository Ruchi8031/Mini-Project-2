// JS

const divChange=document.querySelector('.Divchange');
const Changebtn=document.querySelector('.btn')

function getRandomColor(){
    const letters ="0123456789ABCDEF";
    let color="#";
    for (let i=0;i<6;i++){
        color +=letters[ Math.floor(Math.random() * 16)];
    }
    return color;
}
    

Changebtn.addEventListener('click', function() {
    divChange.style.backgroundColor = getRandomColor();
});

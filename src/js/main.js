const { triggerAsyncId } = require("async_hooks");


const likeButton = document.querySelector('button');
console.log(likeButton);
likeButton.addEventListener('click', function () {

    openPopup();
    screenShade();


});

function openPopup() {
    const popup = document.getElementById('popup');
    console.log(popup);
    popup.classList.add('open-popup');
    
}

function screenShade() {
    const container = document.getElementById('shadeAfterClick');
    container.classList.add('shadeAfterClick');
}


const thispopup = document.querySelector('.thispopup');
console.log(thispopup);
thispopup.addEventListener('click', function () {
    closePopup();
});
function closePopup() {
    const thispopup = document.getElementById('thispopup');
    const container = document.getElementById('shadeAfterClick');
    console.log(thispopup);
    popup.classList.remove('open-popup');
    container.classList.remove('shadeAfterClick');
};

//Naliczanie na button
const button1 = document.querySelector('button');
//console.log(button1)
const countNum = document.querySelector('.count')
//console.log(countNum);
const resetButton=document.querySelector('.reset')
console.log(resetButton)




button1.addEventListener('click', function () {
    
    oneFunction();
    
})
function oneFunction() {
    const a=document.getElementById('count');
    console.log(a);
    const aa=Number(a);
    console.log(aa)
    
    countNum.innerHTML++;
    console.log(countNum)
    if(countNum>=5){
        console.log('dupa')
        
    }
    

}











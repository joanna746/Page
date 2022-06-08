

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
    console.log(thispopup);
    popup.classList.remove('open-popup');
    container.classList.remove('shadeAfterClick');
};

//Naliczanie na button
const button1 = document.querySelector('button');
//console.log(button1)
const countNum = document.querySelector('.count');
//console.log(countNum);
const container = document.getElementById('shadeAfterClick');
const resetButton = document.querySelector('.reset');
//console.log(resetButton)


button1.addEventListener('click', function () {
    
    oneFunction();
    
});

resetButton.addEventListener('click', function() {
    countNum.innerHTML = 0;
    resetButton.classList.remove('show');
});

container.addEventListener('click', function () {
    console.log('Kliknięto poza obszar popup');
    popup.classList.remove('open-popup');
    container.classList.remove('shadeAfterClick');

});

function oneFunction() {
    if(countNum.innerHTML < 4) {
    countNum.innerHTML++;
    } else {
        countNum.innerHTML++;
        console.log('reset?');
        console.log(countNum.innerHTML);
        resetButton.classList.add('show')
    };
}











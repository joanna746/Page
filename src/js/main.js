

const likeButton = document.querySelector('button');
console.log(likeButton);
likeButton.addEventListener('click', function () {

    openPopup();


});

function openPopup() {
    const popup = document.getElementById('popup');
    console.log(popup);
    popup.classList.add('open-popup');
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
    
    countNum.innerHTML++;
    console.log(countNum)
    

}











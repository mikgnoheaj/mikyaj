const bannerCloseBtn = document.querySelector('.bannerCloseBtn');
const banner = document.querySelector('.headerBanner');

const details = document.querySelector('.detailsBtn');
const detailsWraper = document.querySelector('.headerBanner_detailsWraper');


details.addEventListener('click',()=>{
    detailsWraper.classList.add('popUp');
});


const CloseBtn = document.querySelector('.headerBanner_detailsInnerCloseBtn')
CloseBtn.addEventListener('click',()=>{
    detailsWraper.classList.remove('popUp');
});


const shortCutBtn = document.querySelector('.shortCutBtn');
const shortCutMenu = document.querySelector('.shortCutMenuWraper');

shortCutBtn.addEventListener('click',()=>{
    shortCutMenu.classList.toggle('shortCutMenuActive');
    
    
})





const adBtns = document.querySelectorAll('.advBtns>ul>li');



const  advs = document.querySelectorAll('.adv');
const active = "active";

adBtns.forEach(button =>{
    button.addEventListener('click', function(){
        const crr=document.querySelector('.show');
        const crractive=document.querySelector(`.${active}`);
        if(button===adBtns[0]){
            if(crr){
        crr.classList.remove('show');
            advs[0].classList.add('show');
        }else{
            advs[0].classList.add('show');
        }
        }else if(button===adBtns[1]){
        if(crr){
        crr.classList.remove('show');
        advs[1].classList.add('show');}
        else{
        advs[1].classList.add('show');}
    }else if(button===adBtns[2]){
        if(crr){
        crr.classList.remove('show');
        advs[2].classList.add('show');}
        else{
        advs[2].classList.add('show');}
    }else{
        if(crr){
        crr.classList.remove('show');
        advs[3].classList.add('show');}
        else{
        advs[3].classList.add('show');}
    }
  
})
})

const listBtn = document.querySelector('.appListBtn'),
    menu = document.querySelector('.mainMenu');

    listBtn.addEventListener('click',()=>{
        menu.classList.toggle('activeMenu');
    })
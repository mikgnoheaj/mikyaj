// ------------------로그인------------------
const loginBtn = document.querySelector('.login'),
loginWraper = document.querySelector('.loginWraper'),
closeBtn = document.querySelector('.closeBtn');

const popup = ()=>{
loginWraper.classList.toggle('hidden');
}

const close = ()=>{
loginWraper.classList.add('hidden');

}
loginBtn.addEventListener("click",popup);
closeBtn.addEventListener("click",close);



// ------------------메인 타이틀------------------

const  collectionTitle = document.querySelector(".collectionTitle"),
       active = document.querySelector(".active");

setTimeout(() => {
    collectionTitle.classList.add('active')
}, 1000);






// ------------------상품------------------
const itemBtn = document.querySelectorAll('.details');

itemBtn.forEach(itemBtn => {
    itemBtn.addEventListener('click', () => {
        itemBtn.nextElementSibling.classList.toggle('hidden')
    })
});



let producList = gsap.timeline({
    scrollTrigger: {
        trigger: '.product',
        start: '-20% 50%',
        end: '-20% 30%',
        scrub:1,
    }
})

producList.from('.details:nth-of-type(1)', { opacity: 0, y:-10, duration:.9})
producList.from('.details:nth-of-type(2)', { opacity: 0, y:-10, duration:.9})
producList.from('.details:nth-of-type(3)', { opacity: 0, y:-10, duration:.9})
producList.from('.details:nth-of-type(4)', { opacity: 0, y:-10, duration:.9})
producList.from('.details:nth-of-type(5)', { opacity: 0, y:-10, duration:.9})
producList.from('.details:nth-of-type(6)', { opacity: 0, y:-10, duration:.9})
producList.from('.details:nth-of-type(7)', { opacity: 0, y:-10, duration:.9})






// ------------------컬렉션 메인------------------
const popClass = "pop"
const leftBtn = document.querySelector(".leftBtn"),
     rightBtn = document.querySelector(".rightBtn");
     
const firstPic = document.querySelector(".collection_pic1:first-child");


function nextPic(){
    const currentPic = document.querySelector(`.${popClass}`);
    if(currentPic){
        currentPic.classList.remove(popClass);
        const nextPic = currentPic.nextElementSibling;
        if(nextPic){
            nextPic.classList.add(popClass);
        }else{
            firstPic.classList.add(popClass);
        }
    }else{
        firstPic.classList.add(popClass);
    }
}
const lastPic = document.querySelector(".collection_pic1:last-child");

function prevPic(){
    const currentPic = document.querySelector(`.${popClass}`);
    if(currentPic){
        currentPic.classList.remove(popClass);
        const prevPic = currentPic.previousElementSibling;
        if(prevPic){
            prevPic.classList.add(popClass);
        }else{
            lastPic.classList.add(popClass);
        }
    }else{
        lastPic.classList.add(popClass);
    }
}


rightBtn.addEventListener("click",nextPic);
leftBtn.addEventListener("click",prevPic);




// ------------------컬렉션 어사이드------------------
const showClass = "show"

const firstSlide = document.querySelector(".asidePic:first-child");

function slide(){
    const currentSlide = document.querySelector(`.${showClass}`);
    if (currentSlide){
        currentSlide.classList.remove(showClass);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(showClass);
        }else{
            firstSlide.classList.add(showClass);
        }
    }
    else{
        firstSlide.classList.add(showClass);
    }
}


setInterval(slide,2000);

const menuBtn = document.querySelector('.menu_btn');

const menuList = document.querySelector('.menu_list');

const menuItem = document.querySelector('.menu_list>ul');

menuBtn.addEventListener('click',()=>{
    menuList.classList.toggle('act');
})
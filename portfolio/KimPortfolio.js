
const listBtn = document.querySelectorAll('.listBtn>span');
const on = 'on';

listBtn.forEach(btn => {

    btn.addEventListener('click',(e)=>{
       const currentBtn = document.querySelector(`.${on}`);
       if(currentBtn){
           currentBtn.classList.remove(on);
           btn.classList.add(on);
       } else{
        btn.classList.add(on);
    }})
});


listBtn[0].addEventListener('click',()=>{
    const main = document.querySelector('.main');
    main.style.top = '0vw';
})

listBtn[1].addEventListener('click',()=>{
    const main = document.querySelector('.main');
    main.style.top = '-100%';
})

listBtn[2].addEventListener('click',()=>{
    const main = document.querySelector('.main');
    main.style.top = '-200%';
})

listBtn[3].addEventListener('click',()=>{
    const main = document.querySelector('.main');
    main.style.top = '-300%';
})


// const pageDown = document.querySelector('.pageDown');
//     const pageUp = document.querySelector('.pageUp');

// const contents = document.querySelectorAll('.contents');

// console.log(contents)

// let index = 0;

// const animationDuration = 1000;

// let lastTime = 0;

// const addOn = (index,state)=>{
//     if(state === 'on'){
//         listBtn.forEach((btn, i)=>{
//             if (i === index){
//                 btn.classList.add('on');
//             }
        
//     })
// }
// else{
//     listBtn.forEach((btn, i)=>{
//             if (i === index){
//                 btn.classList.remove('on');
//             }
//         })
// }
// }

let index = 0;

const myWorkDown = document.querySelector('.myWorkDown');
    const myWorkUp = document.querySelector('.myWorkUp');

const myWorks = document.querySelectorAll('.myWork');



myWorkDown.addEventListener('click',()=>{
  
    if(index >2) return;
    index++;
    myWorks.forEach((myWork,i)=>{
        if(i===index){
            myWork.scrollIntoView({behavior:'smooth'});
        
        }
    })        
});

myWorkUp.addEventListener('click',()=>{
    if(index <0) return;
    index--;
   myWorks.forEach((myWork,i)=>{
        if(i===index){
            myWork.scrollIntoView({behavior:'smooth'});
        
        }
    })        
});





// window.addEventListener('wheel',(e)=>{
//   const delta = e.wheelDelta;
//   const currenTime = new Date().getTime();

//   if (currenTime - lastTime < animationDuration){
//       e.preventDefault();
//       return;
//   }

//   if(delta<0){
//   console.log('you scrolled down');

//       const nextBtnClicking = new Event('click');
//      pageDown.dispatchEvent(nextBtnClicking);
//   }else{
//   console.log('you scrolled up');

//     const prevBtnClicking = new Event('click');
//     pageUp.dispatchEvent(prevBtnClicking);
//   }
//   lastTime = currenTime;
// })





// window.addEventListener('wheel',(e)=>{
//     const delta = e.wheelDelta;
//     if (delta<0){
//         const nextBtnClick = new Event('click');
//         pageDown.dispatchEvent(nextBtnClick);
//     }else{
//         const prevBtnClick = new Event('click');
//         pageUp.dispatchEvent(prevBtnClick);
//     }
// })

// const contactTitle = document.querySelector('.contactTitle');


// let d = 0;
// let e = 0;

// function lets(){
//     if(d<24){
//     d++;
//     if(e<7){
//     e++
// }
//     contactTitle.innerHTML = `${d} / ${e}`;
// }}


// listBtn[3].addEventListener('click',()=>{
//     setInterval(lets,100);

// })
const list = document.querySelectorAll('.flavoursList>ul>li');

list.forEach(item => {
    item.addEventListener('click',clicking)
    function clicking(){
        const currentItem = document.querySelector('.on');
        currentItem.classList.remove('on');
        item.classList.add('on');
    }
});
 
 
const milkList = document.querySelector('.milkList'),
     crispyList = document.querySelector('.crispyList');



const milk = document.querySelector('.milk'),
      crispy = document.querySelector('.crispy');

const pop = 'pop';

const currenpage = document.querySelector(`.${pop}`);      

milkList.addEventListener('click',()=>{
    crispy.classList.remove('pop');
    milk.classList.add(pop);
})


crispyList.addEventListener('click',()=>{
    milk.classList.remove('pop');
    crispy.classList.add(pop);
})

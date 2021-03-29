const firstbasic = document.querySelector('.loveBasicsProduct:first-child');
const firstBullet = document.querySelector('.bullet:first-child');

const actived = "actived"
const on = "on"
function slide(){
    const currentbasic = document.querySelector(`.${actived}`);
    const currentbullet = document.querySelector(`.${on}`);
    if(currentbasic){
        currentbasic.classList.remove(actived);
        currentbullet.classList.remove(on);
        const nextbasic = currentbasic.nextElementSibling;
        const nextbullet = currentbullet.nextElementSibling;

        if(nextbasic){
        nextbasic.classList.add(actived);
        nextbullet.classList.add(on);
        }else{
        firstbasic.classList.add(actived);
        firstBullet.classList.add(on);
         }
    }else{
        firstbasic.classList.add(actived);
        firstBullet.classList.add(on);

    }

}





slide();
setInterval(slide,3000);

const bullets = document.querySelectorAll('.bullet');
const product = document.querySelectorAll('.loveBasicsProduct');

bullets.forEach(bullet => {
    
});
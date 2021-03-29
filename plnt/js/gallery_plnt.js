
const loginBtn = document.querySelector('.login'),
loginWraper = document.querySelector('.loginWraper'),
closeBtn = document.querySelector('.closeBtn');

const popup = ()=>{
loginWraper.classList.remove('hidden');
}

const close = ()=>{
loginWraper.classList.add('hidden');

}
loginBtn.addEventListener("click",popup);
closeBtn.addEventListener("click",close);
       
       
       
       
       
       
       
       const galleryBtnFirst = document.querySelector('.galleryBtnFirst');
        const galleryBtnSecond = document.querySelector('.galleryBtnSecond');
        const seasonOne = document.querySelector('.season1');
        const seasonTwo = document.querySelector('.season2');
        const activeBtn = document.querySelectorAll('galleryBtn');
        
        const clickedclass = "clicked";

        function handle() {
            const hasclass = seasonOne.classList.contains(clickedclass);
            if (!hasclass) {
                seasonOne.classList.add(clickedclass),
                    seasonTwo.classList.remove(clickedclass);
                    galleryBtnSecond.classList.remove('select');
            }galleryBtnFirst.classList.add('select');
        }
        function first() {
            galleryBtnFirst.addEventListener("click", handle);
           
            

            
        }
        function secondSeason() {
            const hasclass2 = seasonTwo.classList.contains(clickedclass);
            if (!hasclass2) {
                seasonTwo.classList.add(clickedclass),
                    seasonOne.classList.remove(clickedclass);
            }
            galleryBtnFirst.classList.remove('select');
            galleryBtnSecond.classList.add('select');
        }
        function second() {
            galleryBtnSecond.addEventListener("click", secondSeason);
            
        }
        


        first();
        second();
        

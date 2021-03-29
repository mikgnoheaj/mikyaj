       const loginBtn = document.querySelector(".loginBtn");
       const modalOverlay = document.querySelector(".loginModal_overlay");
       const closeBtn = document.querySelector(".closeBtn");
       

      const modalPopup = () => {
           modalOverlay.classList.remove("hidden")
       }
      const modalClose = () => {
           modalOverlay.classList.add("hidden")
       }


       loginBtn.addEventListener("click", modalPopup);
       closeBtn.addEventListener("click", modalClose);
       modalOverlay.addEventListener("click", modalClose);

    const mapBtns = document.querySelectorAll('.mapNavList');
    const mapDetails = document.querySelectorAll('.mapDetails');
    const mapPics = document.querySelectorAll('.mapPic');
    const on = 'on';
    const show = 'show';
    const popup = 'popup';

    mapBtns.forEach((mapbtn,i)=> {
        mapbtn.addEventListener('click',()=>{
            const currentBtn = document.querySelector(`.${on}`);
            const currentShow = document.querySelector(`.${show}`);
            const currentPopup = document.querySelector(`.${popup}`);
            if(currentBtn){
                currentBtn.classList.remove(on);
                mapbtn.classList.add(on);
                if(currentShow){
                    currentShow.classList.remove(show);
                    mapDetails[i].classList.add(show);
                    if(currentPopup){
                    currentPopup.classList.remove(popup);
                    mapPics[i].classList.add(popup);
                    }
                    else{
                    mapPics[i].classList.add(popup);
                    }    
                }else{
             mapDetails[i].classList.add(show);    

                }
                

            } else{
             mapbtn.classList.add(on);

         }
        })
    });

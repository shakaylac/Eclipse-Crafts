const createNav = () => {
    let nav = document.querySelector('.navbar');
    //let links = document.querySelector('links-con');

    nav.innerHTML = `
    <div class="nav">
            <div class="logo"><img src="img/light colored logo.png" width="150vw" alt"" ></div>
            <div class="top-right-btns">
               <img class="profile" src="img/default-icon.png" alt="">
               <img class="basket" src="img/default-basket.png" alt="">
            </div>
    </div>
        <ul class="links-con">
        <li clas="link-item"><a href="#" class="link">Blankets</a></li>
        <li clas="link-item"><a href="#" class="link">Tapesteries</a></li>
        <li clas="link-item"><a href="#" class="link">Pots</a></li>
        <li clas="link-item"><a href="#" class="link">Incense Holders</a></li>
    </ul> 
  `;

}

createNav();


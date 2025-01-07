const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
          <div class="footer-content">
            <img src="img/light colored logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">products</li>
                    <li><a href="#" class="footer-link">seasonals collection</a></li>
                    <li><a href="#" class="footer-link">patterns collection</a></li>
                </ul>
            <div class="footer-social-container">
              
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
            </div>    
               
            </div>
        </div> 
        `;
}

createFooter();
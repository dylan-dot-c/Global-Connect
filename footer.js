const footer = document.createElement('footer')
footer.classList.add('footer')

footer.innerHTML = `

      <h1 class="footer__logo">Global Connect Consulting Services</h1>
        <p>The way to GO.</p>

        <h2>Contact</h2>

        <address>
          Stony Hill, HEART Eastern TVET, KingSton, Jamaica<br />

          <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
      </div>

        
      

      <div class="legal">
        <p>Global Connect &copy; 2023 Copyright.</p>
      </div>
    

`

document.querySelector('body').append(footer)

/*****************Close the Nav Bar when a Nav Link is clicked********************************* */

const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidemenu.style.right = "-200px";
    })
})

/*******************Toggle Menu************************888888 */
const sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }


   /**Linking Contact form to google sheet */

  const scriptURL = 'https://script.google.com/macros/s/AKfycbya-r1apQJmG7nIIz2kwSFxuhCyhs62yzbui4wPuDzmpMUzLhIZwHC6oMwm2QAk9aOzHA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.style.display = "none"
        msg.innerHTML = "Thank You for your enquiry, I will get back to you shortly"
        setTimeout(function(){
            msg.innerHTML = ""
        },6000)

/**To display form again after submission */
        setTimeout(function(){
            form.style.display = "block"
            form.reset()
        },7000)
      })
      .catch(error => console.error('Error!', error.message))
  })

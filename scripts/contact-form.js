const contactForm = document.querySelector('#contact-form')

/* Mock submitting a form to a server or something, just show an alert */
contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  contactForm.reset()
  alert('Meldingen har blitt sendt, tusen takk!')
})
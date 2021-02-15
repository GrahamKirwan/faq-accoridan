const questions = document.querySelectorAll('.faq-section-q');


questions.forEach(item => {
    item.addEventListener('click', event => {
      item.firstElementChild.classList.toggle('active');
      item.firstElementChild.nextElementSibling.classList.toggle('rotate')
      item.nextElementSibling.classList.toggle('display')
    })
  })
const modalSuccess = document.querySelector('.modal--success')
const modalError = document.querySelector('.modal--error')
const formButton = document.querySelector('.form-review__button')
const buttonError = document.querySelector('.modal__button--error')
const buttonSuccess = document.querySelector('.modal__button--success')
const input = document.querySelectorAll('.text-input__input')
const page = document.querySelector('.page')

formButton.addEventListener('click', (e) => {
  e.preventDefault()
  page.style.cssText = 'overflow: hidden;'
  for (let i = 0; i < input.length; i++) {
    if(input[i].hasAttribute('required') && input[i].value == '') {
      input[i].classList.add('text-input__input--error')
      modalError.classList.remove('modal--hidden')
    } else if (i == input.length - 1) {
      modalSuccess.classList.remove('modal--hidden')
    }
  }
})

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('click', () => {
    input[i].classList.remove('text-input__input--error')
  })
}

buttonError.addEventListener('click', () => {
  modalError.classList.add('modal--hidden')
  page.style.cssText = ''
})

buttonSuccess.addEventListener('click', () => {
  modalSuccess.classList.add('modal--hidden')
  page.style.cssText = ''
})

const submitBtn = document.querySelector("#subscribe")
let errorMessage = document.querySelector('.error')
let emailInput = document.querySelector('#email-address')

let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let container = document.querySelector('#Sign-up-form-start')
let success = document.querySelector('#success')

function info(mssg){
  emailInput.style.border = '2px solid red'
  emailInput.style.backgroundColor='pink'
  emailInput.style.animation='shake 0.2s ease-in-out 0s 2'
  let text = document.createElement('p')
  let error = document.createTextNode(mssg)
  text.appendChild(error)
  errorMessage.appendChild(text)
  text.style.color='red'

}

function reloading(){
  location.reload()
}

submitBtn.addEventListener ('click', ()=>{
  console.log('ok')
  const email = document.querySelector('#email-address')
  if (email.value==""){
    info('Email required')
    setTimeout(reloading, 1250)
  }
  if (email.value.match(mailFormat)){
    // alert("email valide")
    container.classList.add('hidden')
    success.classList.remove('hidden')
  }
  else if (email.value !="" && !email.value.match(mailFormat)){
    info('Valid email required')
    setTimeout(reloading, 1250)
  }
})
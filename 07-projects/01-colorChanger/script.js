const buttons =  document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (event) => {
        console.log(event)
        console.log(event.target)
  if (button.id === 'yellow') {
    body.style.background = event.target.id;
  }
  if (button.id === 'blue') {
    body.style.background = event.target.id;
  }
  if (button.id === 'grey') {
    body.style.background = event.target.id;
  }
  if (button.id === 'white') {
    body.style.background = event.target.id;
  }
});

        }
    )
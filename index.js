const moveDodgerLeft = () => {
  const dodger = document.getElementById('dodger')
  const currentLeft = dodger.style.left
  let currentLeftNumber = currentLeft.replace('px', '')
  currentLeftNumber = parseInt(currentLeftNumber, 10)
  dodger.style.left = currentLeftNumber - 5 + 'px'
} 

const moveDodgerHelper = (event) => {
    if (event.keyCode === 37){
      moveDodgerLeft()
    }
  
}

document.addEventListener('keydown', moveDodgerHelper)
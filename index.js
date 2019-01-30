const moveDodgerLeft = () => {
  const dodger = document.getElementById('dodger')
  const currentLeft = dodger.style.left
  const currentLeftNumber = currentLeft.replace('px', '')
} 

const moveDodgerHelper = (event) => {
    if (event.keyCode === 37){
      moveDodgerLeft()
    }
  
}

document.addEventListener('keydown', moveDodgerHelper)
import scroll from './parts/scroll'
import sliderInit from './parts/sliderInit'
import baguetteInit from './parts/baguetteInit'
import submitForm from './parts/PostForm'

document.addEventListener('DOMContentLoaded', function (event) {
  scroll()
  sliderInit()
  baguetteInit()
  submitForm.init()
})

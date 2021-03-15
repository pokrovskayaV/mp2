import scroll from './parts/scroll'
import sliderInit from './parts/sliderInit'
import baguetteInit from './parts/baguetteInit'
import SubmitForm from './parts/PostForm'

document.addEventListener('DOMContentLoaded', function (event) {
  scroll()
  sliderInit()
  baguetteInit()

  const forms = document.querySelectorAll('.js-form');

  forms.forEach(form => {
    new SubmitForm(form)
  })
})

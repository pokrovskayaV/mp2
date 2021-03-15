class SubmitForm {
    constructor() {
        this.form = document.querySelector('.js-form');

        if (!this.form) {
            return;
        }
        
        this.inputs = this.form.querySelectorAll('input');
        this.submitBtn = this.form.querySelector('.js-btn-submit');
        this.spamInput = this.form.querySelector('.js-check-spam');
        this.thxMessage = document.querySelector('.thx-message');
    }

    init() {
        this.form.addEventListener('submit', this.handlerSubmit.bind(this))
    }

    handlerSubmit(event) {
    
        event.preventDefault();
        
        if (this.spamInput.value !== '') {
            return;
        }

        this.serializeForm();
        this.send().then(response => {
            if (response.ok) {
                this.form.classList.add('form_hidden');
                this.thxMessage.classList.remove('thx-message_hidden');
            }
        })
    }

    serializeForm() {
        this.body = [...this.inputs].reduce((accum, input) => {
            if (input.classList.contains('js-no-index')) {
                return accum
            }
            accum[input.name] = input.value
            return accum
        }, {})
    }

    send() {
        return fetch(this.form.action, {
            method: this.form.method,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.body)
          });
    }
}
const submitForm = new SubmitForm()
export default submitForm
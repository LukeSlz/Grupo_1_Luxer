window.addEventListener('load', () => {
    let form = document.querySelector('.main-login-form');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        let errors = [];

        //e-mail Validations
        let emailField = document.querySelector('#email');
        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailField.value == ""){
            errors.push('El campo email debe estar completo');
        }else if(!reEmail.test(emailField.value)){
            errors.push('Debes colocar un email válido');
        };

        //Password Validations
        let passwordField = document.querySelector('#password');
        if(passwordField.value == ""){
            errors.push('El campo de contraseña tiene que estar completo');
        };

        if(errors.length > 0){
            let ulErrors = document.querySelector('.errors ul');
                ulErrors.innerHTML = [];
                errors.forEach(error => {
                    ulErrors.innerHTML += `<li>${error}</li>`
                })
            }else{
                form.submit();
            }

    })
})
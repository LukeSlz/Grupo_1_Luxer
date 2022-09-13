window.addEventListener('load', function(){
    let form = document.querySelector('.main-register-form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
            let errors = [];
    
            //Validaciones de nombre
            let nameField = document.querySelector("#name");
            if(nameField.value == ""){
                errors.push('El campo de nombre tiene que estar completo');
            }else if(nameField.value.length < 3){
                errors.push('El campo de nombre debe tener al menos 3 carácteres');
            };
    
            //Validaciones de apellido
            let lastNameField = document.querySelector("#lastName");
            if(lastNameField.value == ""){
                errors.push('El campo de apellido tiene que estar completo');
            }else if(lastNameField.value.length < 3){
                errors.push('El campo de apellido debe tener al menos 3 carácteres');
            };
    
            //Validaciones de email
            let emailField = document.querySelector("#email");
            let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(emailField.value == ""){
                errors.push('El campo de email tiene que estar completo');
            }else if(!reEmail.test(emailField.value)){
                errors.push('Debes colocar un email válido');
            };
    
            //Validaciones de contraseña
            let passwordField = document.querySelector("#password");
            if(passwordField.value == ""){
                errors.push('El campo de contraseña tiene que estar completo');
            }else if(passwordField.value.length < 8){
                errors.push('El campo de contraseña debe tener al menos 8 carácteres');
            }else if(!passwordField.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")){
                errors.push('La contraseña debe contener: Mayúscula, minúscula, carácter especial');
            };
    
            //Validaciones de imagen

    
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
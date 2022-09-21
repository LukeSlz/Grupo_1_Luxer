window.addEventListener('load', () => {
    let form = document.querySelector('.form-prod');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        let errors = [];

        //Name Validations
        let nameField = document.querySelector('#name');
        if(nameField.value == ""){
            errors.push('El campo de nombre debe estar completo');
        }else if(nameField.value.length < 5){
            errors.push('El campo de nombre debe contener al menos 5 carácteres');
        };

        //Description Validations
        let descriptionField = document.querySelector('#descriptionCreate');
        if(descriptionField.value.length < 20){
            errors.push('El campo de descripción debe contener al menos 20 carácteres');
        };

        //Images Validations
        let imageField = document.querySelector('#imagesCreate');
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.exec(imageField.value)){
            errors.push('Las extensiones aceptadas son .jpg, .jpeg, .png y .gif');
        }

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
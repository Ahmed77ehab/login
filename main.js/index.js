var form = document.getElementById('form');
var userNameInput = document.getElementById('nameInput');
var userEmailInput = document.getElementById('emailInput');
var userPasswordInput = document.getElementById('passwordInput');
var userErrors = document.getElementById('errorsMassege')
form.addEventListener('submit',(e)=>{
    


    var errors = []

    if(userNameInput){
        errors = getSignupFormErrors(userNameInput.value , userEmailInput.value , userPasswordInput.value)
    }
    else{
        errors = getLoginFormErrors(userEmailInput.value , userPasswordInput.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        userErrors.innerHTML = errors.join(". ")
    }
})

function getSignupFormErrors(name , email , password ){
    var errors = []

    if (name=== '' || name ==null){
        errors.push('All inputs is required')
    }else{
        errors.push(' Success')
    }

    if (email=== '' || email ==null){
        errors.push('All inputs is required')
    }else{
        errors.push(' Success')
    }

    if (password=== '' || password ==null){
        errors.push('All inputs is required')
    }else{
        errors.push(' Success')
    }

    return errors
}

var allInputs = [userNameInput , userEmailInput , userPasswordInput]

allInputs.forEach(input => {
    input.addEventListener('input' , () =>{
        if(input.parentElement.classList('incorrect')){
            input.parentElement.classList.remove('incorrect')
            userErrors.innerHTML = ''
        }
    })
    
});
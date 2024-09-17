//Get form element by id
const registerForm = document.querySelector('#register');
//Handle form submit event
registerForm.addEventListener('submit',function (event) {
    event.preventDefault(); 
    // collect form data
    const formData = new FormData(registerForm);
    // console.log(
    //     formData.get('username'),
    //     formData.get('email'), 
    //     formData.get('password')
    // );
    // send data to backens
    // send success message to user
    const messageH1 = document.querySelector('#message');
    messageH1.textContent ='Account registered sucessfully';
    
    });

/* declare variable age*/
const age = 71;
//define square age function
function squareAge (age){
   return age ** 2;   
}
const squaredAge = squareAge(54);
console.log(squaredAge);
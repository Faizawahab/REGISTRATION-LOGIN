// window.location.replace('profile.html')
const login = document.querySelector("#login");
login.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log
})

//Write fullname function
function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}
const myName = fullName('Micheal', 'Hammond');
console.log(myName);
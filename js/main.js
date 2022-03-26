let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // loginForm.classList.remove('active');
}


searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
// formBtn .addEventListener('click', ()=>{
//     loginForm.classList.toggle('active');
// });

// function sendEmail(){
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

function sendmail(){
    var Name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var  message= $('#message').val();

    var Body = 'Name: ' +Name+'<br>Email: '+email+ '<br>Phone: '+phone+'<br>Message: '+message;

Email.send({
    SecureToken : "087a8086-3f21-47d8-9da8-4563c3487c4a",
    To: 'jpoonamk07@gmail.com',
    From: "poonambhilare758@gmail.com",
    Subject: "New mail on contact form:"+Name,
    Body: Body
}).then(
    message =>{
        if(message=='OK'){
            alert("Your email has been send. thank you for connecting.");
        }
        else{
            console.error(message);
            alert('There is error at sending message.')
        }
    }
);
}


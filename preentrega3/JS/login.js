const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.iconClose');
const btn = document.querySelector('.btn');
const username = document.getElementById('login-user');
const password = document.getElementById('password-user');

//control for login and register form
registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    container.classList.remove('active-popup');
});


//login access validation


btn.addEventListener('click', (e) => {
    e.preventDefault();

    if(btn.id === 'login-btn')
    {
        if (username.value == ''|| password.value == '')
        {
            alert('Por favor ingrese su usuario y contraseña');
        } else {
            for(let i = 0; i<userArray.length; i++)
            {
                if(userArray[i].email == username.value)
                {
                    if(userArray[i].password == password.value)
                    {
                        alert('Bienvenido ' + userArray[i].name);
                        if(document.getElementById('remember-me').checked){
                            localStorage.setItem('user', JSON.stringify(userArray[i]));
                        }
                        i =  userArray.length;
                    }
                }
                if(i == userArray.length-1)
                {
                    alert('usuario no existe ' + i);
                }
            }
        }
    }
});
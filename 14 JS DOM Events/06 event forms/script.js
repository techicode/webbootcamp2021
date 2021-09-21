const form = document.querySelector('#form');
const uList = document.querySelector('#u-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const userNameInput = document.querySelector('#username');
    // const passwordInput = document.querySelector('#password');
    const userNameInput = form.elements.username
    const passwordInput = form.elements.password
    uList.innerHTML += `<li>Username: ${userNameInput.value} / Password: ${passwordInput.value} </li>`;
    userNameInput.value = '';
    passwordInput.value = '';
})


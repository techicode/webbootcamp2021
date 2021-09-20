const button = document.getElementById('button');
const colors = ['red', 'blue', 'orange', 'yello', 'purple'];

button.onclick =  () => alert('Alert with javascript');

button.onmouseenter = () => {
    const random = Math.floor(Math.random() * 5);
    button.setAttribute('class', colors[random]);
}
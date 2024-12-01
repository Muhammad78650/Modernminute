// In main.js
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    alert('Login successful!');
});

function checkLogin() {
    let username = localStorage.getItem('username');
    if (username) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('welcome-message').innerText = 'Welcome, ' + username;
    } else {
        document.getElementById('login-section').style.display = 'block';
    }
}

checkLogin();

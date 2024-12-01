// Scene setup for 3D effects
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a rotating cube for the 3D effect
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation loop for 3D rotation
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Login handling and cookie setup
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check username and password (add your validation logic here)
    if (username && password) {
        document.cookie = "username=" + username + "; max-age=" + 60 * 60 * 24; // 1 day expiration
        alert("Logged in successfully!");
        window.location.href = "index.html"; // Redirect after login
    } else {
        alert("Please enter valid credentials.");
    }
});

// Check if user is logged in based on cookies
function checkLogin() {
    const cookies = document.cookie.split(';');
    const usernameCookie = cookies.find(cookie => cookie.trim().startsWith('username='));
    
    if (usernameCookie) {
        const username = usernameCookie.split('=')[1];
        alert("Welcome back, " + username);
    }
}

// Run checkLogin on page load
window.onload = checkLogin;

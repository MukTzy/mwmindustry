function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "user" && password === "password") {
       
        window.location.href = "maizawiramukti_701230244_soal2.html"; 
        return false; 
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
        return false;r
    }
}

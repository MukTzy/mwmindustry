function showContent(id) {
    var contents = document.querySelectorAll('.sidebar-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none'; 
    }
    document.getElementById(id).style.display = 'block'; 
}
function register() {
    window.location.href = "login.html";
    return false; 
}
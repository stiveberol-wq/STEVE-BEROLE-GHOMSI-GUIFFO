document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        document.getElementById("message").innerHTML = "Connexion réussie";
    } else {
        document.getElementById("message").innerHTML = "Identifiants incorrects";
    }
});

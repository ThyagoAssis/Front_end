document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Capture os dados do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exibe os dados em um alert
    alert(`Usuário: ${username}\nSenha: ${password}`);

    // Redireciona para outra página e exibe os dados
    const queryString = `?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    window.location.href = `welcome.html${queryString}`;
});

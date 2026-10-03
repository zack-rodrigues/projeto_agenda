// Seleciona o formulário pelo seu ID
const formLogin = document.querySelector("#input_user");

// Adiciona um "event listener" para quando o formulário for submetido
formLogin.addEventListener("submit", function(event) {
    // Evita que a página recarregue automaticamente
    event.preventDefault();

    // Obtém os valores inseridos pelo utilizador através dos IDs
    const utilizador = document.querySelector("#login").value;
    const palavraPasse = document.querySelector("#senha").value;

    // Verificação simples para garantir que não estão vazios
    if (utilizador === "" || palavraPasse === "") {
        alert("Por favor, preencha o login e a senha.");
        return;
    }

    // Lógica para verificar no banco de dados (simulada aqui)
    console.log("Tentativa de login efetuada:");
    console.log("Utilizador:", utilizador);
    console.log("Senha:", palavraPasse);
    
    alert("Início de sessão submetido! Verifique a consola do navegador.");
});
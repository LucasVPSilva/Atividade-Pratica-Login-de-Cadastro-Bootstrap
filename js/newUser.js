
const formNewUser = document.getElementById("form-new-user");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Adicionar evento de envio do formulário de cadastro de usuário
formNewUser.addEventListener("submit", async (e) => {
    e.preventDefault(); // Impedir o envio padrão do formulário

    // Obter os valores dos campos de entrada
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const newUser = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
    }

    try {
        // Enviar os dados para o servidor
        const response = await api.post("/users/signup", newUser);

        // Verificar se a resposta foi bem-sucedida
        if (response.status === 201) {
            // Cadastro de usuário bem-sucedido, redirecionar para a página de login ou outra página desejada
            window.location.href = "/index.html";
        }
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
    }
});

const formLogin = document.getElementById("form-login")
const emailInput = document.getElementById("email-login")
const passwordInput = document.getElementById("password-login")


formLogin.addEventListener("submit", async (e) => {
    e.preventDefault()


    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const data = {
        email: emailValue,
        password: passwordValue,
    }

    try {

        const response = await api.post("/users/login", data);


        if (response.status === 200) {
            const userData = response.data

            localStorage.setItem("userId", userData.userId)

            window.location.href = "/listar-recados.html";
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }
});
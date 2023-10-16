document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#linhaOnibusForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      try {
        // obter os dados do formulário
        const nome = document.querySelector("#nome").value;
        const origem = document.querySelector("#origem").value;
        const destino = document.querySelector("#destino").value;
        const horarioPartida = document.querySelector("#horarioPartida").value;
        const duracao = document.querySelector("#duracao").value;

        // criar um objeto contendo os dados do formulário
        const data = {
          nome,
          origem,
          destino,
          horarioPartida,
          duracao,
        };

        // url do backend
        const url = "http://localhost:3000/api/linhas/cadastrar";

        // realizar requisição
        const response = await axios.post(url, data);

        // console.log("response.data:", response.data);

        if (response.status === 200) {
          localStorage.setItem("alert", JSON.stringify({ alertType: "success", alertMessage: "Cadastro realizado com sucesso" }));
          window.location.href = "http://localhost:3001/"; // redirect url
        } else {
            // console.error("Erro no servidor:", response.data);
            showAlert("Ocorreu um erro ao realizar o cadastro.", 'danger')
        }
      } catch (error) {
        // console.error("Erro ao enviar a solicitação:", error);
        showAlert(error, 'danger')
      }
    }

    form.classList.add("was-validated");
  });
});

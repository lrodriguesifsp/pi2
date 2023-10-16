document.addEventListener("DOMContentLoaded", (event) => {
  displayFlashMessage();

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

        if (response.status === 200) {
          storeFlashMessage("success", "Cadastro realizado com sucesso");
          window.location.href = "http://localhost:3001/linhas/listar"; // redirect url
        } else {
          storeFlashMessage("danger", "Ocorreu um erro ao realizar o cadastro");
          displayFlashMessage();
        }
      } catch (error) {
        storeFlashMessage("danger", error.message);
        displayFlashMessage();
      }
    }

    form.classList.add("was-validated");
  });
});

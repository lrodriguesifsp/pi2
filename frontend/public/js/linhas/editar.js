document.addEventListener("DOMContentLoaded", async (event) => {
  displayFlashMessage();

  const url = window.location.href;
  const id = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/linhas/buscar/${id}`);
    const linha = response.data;

    const horarioPartida = linha.horarioPartida.substring(11, 16);

    document.querySelector("#id").value = linha.id;
    document.querySelector("#nome").value = linha.nome;
    document.querySelector("#origem").value = linha.origem;
    document.querySelector("#destino").value = linha.destino;
    document.querySelector("#horarioPartida").value = horarioPartida;
    document.querySelector("#duracao").value = linha.duracao;
  } catch (error) {
    storeFlashMessage("danger", error.message);
    displayFlashMessage();
  }

  const form = document.querySelector("#linhaOnibusForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      try {
        // obter os dados do formulário
        const id = document.querySelector("#id").value;
        const nome = document.querySelector("#nome").value;
        const origem = document.querySelector("#origem").value;
        const destino = document.querySelector("#destino").value;
        const horarioPartida = document.querySelector("#horarioPartida").value;
        const duracao = document.querySelector("#duracao").value;

        // criar um objeto contendo os dados do formulário
        const data = {
          id,
          nome,
          origem,
          destino,
          horarioPartida,
          duracao,
        };

        // url do backend para edição com o ID correspondente
        const url = `http://localhost:3000/api/linhas/editar/${id}`;

        // realizar requisição de edição
        const response = await axios.put(url, data);

        if (response.status === 200) {
          storeFlashMessage("success", "Edição realizada com sucesso");
          window.location.href = "http://localhost:3001/linhas/listar";
        } else {
          storeFlashMessage("danger", "Ocorreu um erro ao realizar a edição");
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

document.addEventListener("DOMContentLoaded", async (event) => {
  displayFlashMessage();

  const url = window.location.href;
  const id = url.split("/").pop();

  try {
    const response = await axios.get(`http://localhost:3000/api/linhas/buscar/${id}`);
    const linha = response.data;

    const horarioPartida = linha.horarioPartida.substring(11, 16);

    document.querySelector("#id").textContent = linha.id;
    document.querySelector("#nome").textContent = linha.nome;
    document.querySelector("#origem").textContent = linha.origem;
    document.querySelector("#destino").textContent = linha.destino;
    document.querySelector("#horarioPartida").textContent = horarioPartida;
    document.querySelector("#duracao").textContent = linha.duracao;
  } catch (error) {
    storeFlashMessage("danger", error.message);
    displayFlashMessage();
  }

  const form = document.querySelector("#excluirLinhaOnibus");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:3000/api/linhas/excluir/${id}`);

      if (response.status === 200) {
        storeFlashMessage("success", "Exclusão realizada com sucesso");
        window.location.href = "http://localhost:3001/linhas/listar";
      } else {
        storeFlashMessage("danger", "Ocorreu um erro ao realizar a exclusão");
        displayFlashMessage();
      }
    } catch (error) {
      storeFlashMessage("danger", error.message);
      displayFlashMessage();
    }
  });
});
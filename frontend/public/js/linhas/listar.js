document.addEventListener("DOMContentLoaded", async (event) => {
    try {
        const response = await axios.get('http://localhost:3000/api/linhas/listar');
        const busData = response.data;
        const tableBody = document.querySelector('tbody');
        busData.forEach(bus => {
            const row = tableBody.insertRow(-1);
            row.insertCell(0).innerHTML = bus.id;
            row.insertCell(1).innerHTML = bus.nome;
            row.insertCell(2).innerHTML = bus.origem;
            row.insertCell(3).innerHTML = bus.destino;
            row.insertCell(4).innerHTML = formatarHorario(bus.horarioPartida);
            row.insertCell(5).innerHTML = bus.duracao;

            // Link para Editar
            const editLink = document.createElement('a');
            editLink.innerHTML = 'Editar';
            editLink.classList.add('btn', 'btn-primary', 'btn-sm', 'mx-1');
            editLink.href = `http://localhost:3001/linhas/${bus.id}/editar`;
            row.insertCell(6).appendChild(editLink);

            // Link para Deletar
            const deleteLink = document.createElement('a');
            deleteLink.innerHTML = 'Deletar';
            deleteLink.classList.add('btn', 'btn-danger', 'btn-sm', 'mx-1');
            deleteLink.href = `http://localhost:3001/linhas/${bus.id}/deletar`;
            row.insertCell(7).appendChild(deleteLink);
        });
    } catch (error) {
        showAlert(error, 'danger')
    }
});

function formatarHorario(data) {
    const date = new Date(data);
    const hora = date.getHours();
    const minutos = date.getMinutes();
    return `${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}`;
}
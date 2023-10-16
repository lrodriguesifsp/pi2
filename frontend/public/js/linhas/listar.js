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
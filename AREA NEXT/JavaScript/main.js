function formatarTempo(tempo) {
    if (tempo >= 86400) {
        const dias = Math.floor(tempo / 86400); // 1 dia = 86400 segundos
        tempo %= 86400; // Resto após calcular os dias
        const horas = Math.floor(tempo / 3600); // 1 hora = 3600 segundos
        tempo %= 3600; // Resto após calcular as horas
        const minutos = Math.floor(tempo / 60); // 1 minuto = 60 segundos
        const segundos = tempo % 60;

        return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    } else if (tempo >= 3600) {
        const horas = Math.floor(tempo / 3600); // 1 hora = 3600 segundos
        tempo %= 3600; // Resto após calcular as horas
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;

        return `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    } else if (tempo >= 60) {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;

        return `${minutos} minutos e ${segundos} segundos`;
    } else {
        return `${tempo} segundos`;
    }
}

function modificaDinheiro(id, aumentar, quantidade) {
    const money = $(id);
    const value = $(money).val().replace(".", "");
    if (!aumentar && value == "0,00") return;
    const formmated = aumentar == true ? parseFloat(value) + quantidade : parseFloat(value) - quantidade;
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(formmated);
    $(money).val(valorFormatado);
}

function modificaDuracao(id, aumentar, quantidade) {
    const tempo = $(id);
    const value = Number(tempo.val());
    if (!aumentar && value == "0") return;
    const result = aumentar == true ? value + quantidade : value - quantidade;
    $(tempo).val(result);
    $(timeTrade).text(formatarTempo(result));
}
$('#incrementButton').on("click", () => {
    modificaDinheiro("#valueTrade", true, 10);
});
$('#decrementButton').on("click", () => {
    modificaDinheiro("#valueTrade", false, 10);
});

$('#incrementButtonTime').on("click", () => {
    modificaDuracao("#tempoDuracao", true, 30);
});
$('#decrementButtonTime').on("click", () => {
    modificaDuracao("#tempoDuracao", false, 30);
});

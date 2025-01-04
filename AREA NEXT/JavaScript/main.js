// function formatarTempo(tempo) {
//     if (tempo >= 86400) {
//         const dias = Math.floor(tempo / 86400); // 1 dia = 86400 segundos
//         tempo %= 86400; // Resto após calcular os dias
//         const horas = Math.floor(tempo / 3600); // 1 hora = 3600 segundos
//         tempo %= 3600; // Resto após calcular as horas
//         const minutos = Math.floor(tempo / 60); // 1 minuto = 60 segundos
//         const segundos = tempo % 60;

//         return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
//     } else if (tempo >= 3600) {
//         const horas = Math.floor(tempo / 3600); // 1 hora = 3600 segundos
//         tempo %= 3600; // Resto após calcular as horas
//         const minutos = Math.floor(tempo / 60);
//         const segundos = tempo % 60;

//         return `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
//     } else if (tempo >= 60) {
//         const minutos = Math.floor(tempo / 60);
//         const segundos = tempo % 60;

//         return `${minutos} minutos e ${segundos} segundos`;
//     } else {
//         return `${tempo} segundos`;
//     }
// }

let durations = [
    1,        // 1 segundo
    5,        // 5 segundos
    15,       // 15 segundos
    30,       // 30 segundos
    60,       // 1 minuto
    300,      // 5 minutos
    900,      // 15 minutos
    1800,     // 30 minutos
    3600,     // 1 hora
    7200,     // 2 horas
    86400,    // 1 dia
    604800,   // 1 semana
    2592000,  // 1 mês
    31536000  // 1 ano
];

let currentIndex = 0; // Começa no primeiro valor (1 segundo)

// Formatar duração para exibição
function formatDuration(seconds) {
    if (seconds < 60) return `${seconds} segundos.`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutos.`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} horas.`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)} dias.`;
    if (seconds < 2592000) return `${Math.floor(seconds / 604800)} semanas.`;
    if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} meses.`;
    return `${Math.floor(seconds / 31536000)} ano.`;
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
    $("#paymentPrev").text(calcularValorTotal(formmated, 95));
}

function modificaDuracao() {
    $("#timeTrade").text(formatDuration(durations[currentIndex]));
}

function calcularValorTotal(pagamento, percentualLucro) {
    const valorTotal = pagamento * (1 + (percentualLucro / 100));
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorTotal.toFixed(2));
    return valorFormatado; // Retorna com duas casas decimais
}
$('#valueTrade').mask("#.##0,00", { reverse: true });

$('#incrementButton').on("click", () => {
    modificaDinheiro("#valueTrade", true, 10);
});
$('#decrementButton').on("click", () => {
    modificaDinheiro("#valueTrade", false, 10);
});

$('#incrementButtonTime').on("click", () => {
    if (currentIndex < durations.length - 1) currentIndex++; // Avança na sequência
    modificaDuracao("#tempoDuracao", true, 30);
});
$('#decrementButtonTime').on("click", () => {
    if (currentIndex > 0) currentIndex--; // Volta na sequência
    modificaDuracao("#tempoDuracao", false, 30);
});

$("#valueTrade").on("keyup", (event) => {
    if (!event.target.value) return;
    const numero = parseFloat((event.target.value).replace(".", ""));
    $("#paymentPrev").text(calcularValorTotal(numero, 95));
})
modificaDuracao()
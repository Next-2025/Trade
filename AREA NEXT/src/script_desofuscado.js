// Script para atualizar o relógio em tempo real e comunicar com o projeto

// Função para atualizar o relógio
function updateClock() {
    const clockElement = document.getElementById('clock'); // Certifique-se de que o ID do elemento do relógio seja 'clock'
    if (!clockElement) {
        console.error('Elemento do relógio não encontrado no DOM!');
        return;
    }

    // Obtém a hora atual
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Atualiza o texto do relógio
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Inicializa o relógio e configura atualização em tempo real
function initRealTimeClock() {
    // Verifica se o elemento do relógio está presente no DOM
    const clockElement = document.getElementById('clock');
    if (!clockElement) {
        console.error('Elemento do relógio não encontrado! Certifique-se de incluir um elemento com ID "clock".');
        return;
    }

    // Atualiza o relógio imediatamente
    updateClock();

    // Configura a atualização a cada segundo
    setInterval(updateClock, 1000);
}

// Escuta o evento DOMContentLoaded para garantir que o DOM esteja carregado antes de inicializar o relógio
document.addEventListener('DOMContentLoaded', initRealTimeClock);

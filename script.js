const searchInput = document.getElementById('pesquisa');
const searchButton = document.getElementById('pesquisar');
const resultadoDiv = document.getElementById("resultado")

searchButton.addEventListener('click', () => {
    const platform = searchInput.value.toLowerCase();
    
    if (platform === 'steam') {
        window.open('https://store.steampowered.com/', '_blank'); // Abre em nova aba
    } else if (platform === 'epic games') {
        window.open('https://www.epicgames.com/', '_blank'); // Abre em nova aba
    } else if (platform === 'gog') {
        window.open('https://www.gog.com/', '_blank'); // Abre em nova aba
    } else {
        resultadoDiv.textContent = 'Plataforma não encontrada. Tente novamente.';
    }
});
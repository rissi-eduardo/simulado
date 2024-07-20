const apiKey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9';
document.getElementById('climaForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const cidade = document.getElementById('cidadeInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;

    if (cidade) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod !== 200) {
                    document.getElementById('resultadoClima').textContent = 'Desculpe, mas não foi encontrada a cidade.';
                } else {
                    const temperatura = data.main.temp;
                    const descricao = data.weather[0].description;
                    document.getElementById('resultadoClima').textContent = `Clima em ${cidade}: ${temperatura}°C, ${descricao}`;
                }
            })
            .catch(error => {
                document.getElementById('resultadoClima').textContent = 'Erro ao buscar dados.';
            });
    } else {
        document.getElementById('resultadoClima').textContent = 'Por favor, digite uma cidade válida.';
    }
});


# 🌤️ WeatherBot - Bot de Clima para Discord

WeatherBot é um bot para Discord que permite consultar o clima de qualquer cidade em tempo real usando a API do OpenWeatherMap. Ideal para servidores que querem adicionar funcionalidades úteis e interativas para os membros.

---

## 🚀 Funcionalidades

- Comando `!cidade <nome-da-cidade>` para obter o clima atual.
- Mostra descrição do clima e temperatura em °C.
- Resposta formatada com **Embed** do Discord, deixando a mensagem mais bonita e clara.
- Tratamento de erros para cidades inválidas.

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Axios](https://www.npmjs.com/package/axios) / `node-fetch` (para requisições HTTP)
- Variáveis de ambiente (`.env`) para manter o token seguro

---

## ⚡ Como usar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/weatherbot.git
cd weatherbot

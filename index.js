require("dotenv").config();
const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

// Client - coração do bot, ele é o responsavel por controlar o bot
// GatewayIntentBits - define quais tipos de eventos o Client vai escutar.
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);

// comando para cidade
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("!cidade")) {
    const cidade = message.content.split("!cidade")[1].trim();

    if (!cidade) {
      message.channel.send("Por favor, digite o nome da cidade");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${process.env.OPENWEATHER_API_KEY}`
      );
      const data = response.data;

      const clima = data.weather[0].description;
      const temp = data.main.temp;

      const embed = new EmbedBuilder()
        .setTitle(`Clima em ${data.name}`)
        .setDescription(`**${clima}**`)
        .addFields({ name: "Temperatura", value: `${temp}°C`, inline: true })
        .setColor("#1E90FF");

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      message.channel.send("Erro ao buscar dados da cidade");
    }
  }
});

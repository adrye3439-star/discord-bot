const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const tabela = {
    5: 250,
    8: 639
};

client.on("messageCreate", (msg) => {
    if (msg.author.bot) return;

    const valor = Number(msg.content);
    if (tabela[valor]) {
        msg.reply(`Pagando **${valor} reais**, você recebe **${tabela[valor]}**.`);
    }
});

client.login(process.env.TOKEN);

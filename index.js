//Lib & include
const { SlashCommandBuilder, Client, IntentsBitField, EmbedBuilder, Options } = require('discord.js');
const { token } = require("./config.json")

//reset ton bot
const bot = new Client({
    intents: [IntentsBitField.Flags.Guilds]
});

//command Builder
const slash_hello = new SlashCommandBuilder().setName("hello").setDescription("Hello command")
const slash_ping = new SlashCommandBuilder().setName("ping").setDescription("Ping command")

//event au demarrage
bot.once("ready", function (client) {
    console.log(`\x1b[36m${client.user.tag} \x1b[32monline`)
    client.application.commands.create(slash_ping)//event create
})

bot.on("interactionCreate", function (data) {
    //command Hello
    if (data.commandName == `hello`){
        const embed = new EmbedBuilder()
        .setTitle("Embed de test")
        .setDescription("text embed")
        .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
        .setAuthor({name:`cacahouette`, iconURL:data.user.avatarURL()})
        //.setImage(`files:images/DJS.png`)
        data.reply({  content:``, embeds:[embed]  })
    }

    //command ping
    if (data.commandName == `test`){
        data.reply(data.user.displayAvatarURL)
    }
})

bot.login(token)
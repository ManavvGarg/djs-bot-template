//ping command
module.exports = {
    config: {
        name: "ping",
        description: "to check the ping of the bot",
        aliases: []
    },
    run: async (bot, msg, args) => {
        
        var ping2 = msg.channel.send(`Bot ping: **${bot.ws.ping}ms**`);

    }

} 



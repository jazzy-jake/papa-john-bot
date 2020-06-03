const Discord = require('discord.js');
const client = new Discord.Client();
const userID = 'JYDM';
const johnMSG = 'JOHN';
const botID = 'papa john bot';

client.once('ready', () => {
	console.log('Ready!');
});

client.login('PUT TOKEN HERE');

client.on('message', message => {
	if (message.author.username === userID) {
		const messageauth = message.author.username;
		const messagetime = message.createdAt;
		const random = (Math.random());
		const fixedrandom = random.toFixed(2);
		console.log(fixedrandom);
		if (fixedrandom < 0.05) {
			message.react('713436461906788395');
			const channel = client.channels.cache.get('717429806245085315');
			channel.send('Reacted to message sent by ' + messageauth + ' with <:niceJohn:713436461906788395> and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
		}
		else if (fixedrandom > 0.95) {
			message.react('713435859348619427');
			const channel = client.channels.cache.get('717429806245085315');
			channel.send('Reacted to message sent by ' + messageauth + ' with <:ponytailJohn:713435859348619427> and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
		}
		else if (fixedrandom == 0.69) {
			message.reply('**you got 0.69!** *nice* https://cdn.discordapp.com/attachments/717429806245085315/717434553089785856/Baywatch_John.png');
		}
		else {
			const channel = client.channels.cache.get('717429806245085315');
			channel.send('Reacted to message sent by ' + messageauth + ' with no emote and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
		}
	}
	if (message.content.toUpperCase().includes (johnMSG)) {
		if (message.author.username != botID) {
			const messageauth = message.author.username;
			const messagetime = message.createdAt;
			const random = (Math.random());
			const fixedrandom = random.toFixed(2);
			console.log(fixedrandom);
			if (fixedrandom < 0.2) {
				message.react('713436461906788395');
				const channel = client.channels.cache.get('717429806245085315');
				channel.send('Reacted to message sent by ' + messageauth + ' with <:niceJohn:713436461906788395> and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
			}
			else if (fixedrandom > 0.8) {
				message.react('713435859348619427');
				const channel = client.channels.cache.get('717429806245085315');
				channel.send('Reacted to message sent by ' + messageauth + ' with <:ponytailJohn:713435859348619427> and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
			}
			else if (fixedrandom == 0.69) {
				message.reply('**you got 0.69!** *nice* https://cdn.discordapp.com/attachments/717429806245085315/717434553089785856/Baywatch_John.png');
			}
			else {
				const channel = client.channels.cache.get('717429806245085315');
				channel.send('Reacted to message sent by ' + messageauth + ' with no emote and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
			}
		}
	}
	if (message.content === '<@!148130944547553281>') {
		if (message.author.username != botID) {
			const messageauth = message.author.username;
			const messagetime = message.createdAt;
			const random = (Math.random());
			const fixedrandom = random.toFixed(2);
			console.log(fixedrandom);
			if (fixedrandom < 0.2) {
				message.react('713436461906788395');
				const channel = client.channels.cache.get('717429806245085315');
				channel.send('Reacted to message sent by ' + messageauth + ' with <:niceJohn:713436461906788395> and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
			}
			else if (fixedrandom > 0.8) {
				message.react('713435859348619427');
				const channel = client.channels.cache.get('717429806245085315');
				channel.send('Reacted to message sent by ' + messageauth + ' with <:ponytailJohn:713435859348619427> and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
			}
			else if (fixedrandom == 0.69) {
				message.reply('**you got 0.69!** *nice* https://cdn.discordapp.com/attachments/717429806245085315/717434553089785856/Baywatch_John.png');
			}
			else {
				const channel = client.channels.cache.get('717429806245085315');
				channel.send('Reacted to message sent by ' + messageauth + ' with no emote and a random value of ' + fixedrandom + ' at ' + messagetime.toUTCString());
			}
		}
	}
});
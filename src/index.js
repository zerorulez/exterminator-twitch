const tmi = require('tmi.js')
const axios = require('axios')

require('dotenv/config');

console.log('Connecting on ' + process.env.TWITCH_USERNAME)

axios.get('https://modlookup.3v.fi/api/user-v3/' + process.env.TWITCH_USERNAME).then( res => {
	var channels = res.data.channels.map(channel => {
		return channel.name
	})

	channels.push(process.env.TWITCH_USERNAME)
	
	const client = new tmi.Client({
		options: { debug: true },
		connection: { reconnect: true },
		identity: {
			username: process.env.TWITCH_USERNAME,
			password: process.env.TWITCH_OAUTH
		},
		channels: channels
	})
	
	client.connect();

	client.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if(self) return;
	
		if (/!massban/gmi.test(message)) {
	
			var user = message.split(' ')[1]
	
			if (tags.username == process.env.TWITCH_USERNAME) {
				// client.say(channel, `@${tags.username}, você tem permissão!`);
				channels.map( (channel, index) => {
					client.ban(channel, user).then( res => {
						console.log(res)
					}).catch( err => {
						console.log(err)
					})
				})
			}
		}	
		
		if (/!massunban/gmi.test(message)) {
	
			var user = message.split(' ')[1]
	
			if (tags.username == process.env.TWITCH_USERNAME) {
				// client.say(channel, `@${tags.username}, você tem permissão!`);
				channels.map( (channel, index) => {
					client.unban(channel, user).then( res => {
						console.log(res)
					}).catch( err => {
						console.log(err)
					})
				})
			}
		}
	})

})
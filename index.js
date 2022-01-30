const Discord = require ('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`); 

	client.commands.set(command.name, command);
}



client.once('ready', () => {
	console.log('Monke Bot is reporting for duty!')


	const server = client.guilds.cache.get('858882512229892107');
	const channel = server.channels.cache.get('900778348278591569');

	channel.messages.fetch('900785994322812999').then((msg) => {

  		client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === 'abalkeMonke') {
                	if (reaction.message.member.roles.cache.some(role => role.id === "906053222500810762")) {
						
						await reaction.message.guild.members.cache.get(user.id).roles.add("905849647531192340");
	                    await reaction.message.guild.members.cache.get(user.id).roles.remove("906053222500810762");
					 	
					 	client.channels.fetch('900778348278591569')
					    .then(channel => {
					        channel.send(
					        	
					        	reaction.message.guild.members.cache.get(user.id).toString()
					        	+ "is a good Monke again!  I will be keeping a close eye on you though..."
					        
					        ).then(msg => {
					    		msg.delete({ timeout: 30000 })
					  		})
					  		.catch("SOMETHING HAS GONE WRONG, HELP!");
						})

                	} else {

                		await reaction.message.guild.members.cache.get(user.id).roles.add("905849647531192340");
					 	
					 	client.channels.fetch('900778348278591569')
					    .then(channel => {
					        channel.send(
					        	
					        	reaction.message.guild.members.cache.get(user.id).toString()
					        	+ "is a good Monke!  Head over to the 📌 pinned message 📌 in " 
					        	+ server.channels.cache.get('900778421028798474').toString() 
					        	+ " to complete your signup to the Minecraft Sub Server!"
					        
					        ).then(msg => {
					    		msg.delete({ timeout: 30000 })
					  		})
					  		.catch("SOMETHING HAS GONE WRONG, HELP!");
						})

                	}

                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === 'abalkeMonke') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("905849647531192340");
                    await reaction.message.guild.members.cache.get(user.id).roles.add("906053222500810762");
                
                	client.channels.fetch('900778348278591569')
				    .then(channel => {
				        channel.send(
				        	
				        	reaction.message.guild.members.cache.get(user.id).toString()
				        	+ "is a bad Monke!  I suggest you re-agree to these rules before I tell the boss!"
				        
				        ).then(msg => {
				    		msg.delete({ timeout: 30000 })
				  		})
				  		.catch("SOMETHING HAS GONE WRONG, HELP!");
					}) 

                }
            } else {
                return;
            }
        });

	});


	


//	const server = client.guilds.cache.get('858882512229892107');
	const channel2 = server.channels.cache.get('914037260905766912');

	channel2.messages.fetch('914037399091298314').then((msg) => {

  		client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel2) {
                if (reaction.emoji.name === 'abalkeMonke') {
                	if (reaction.message.member.roles.cache.some(role => role.id === "915277876746649650")) {
						
						await reaction.message.guild.members.cache.get(user.id).roles.add("915277759587160074");
	                    await reaction.message.guild.members.cache.get(user.id).roles.remove("915277876746649650");
					 	
					 	client.channels.fetch('914037260905766912')
					    .then(channel2 => {
					        channel.send(
					        	
					        	reaction.message.guild.members.cache.get(user.id).toString()
					        	+ "is a good Monke again!  I will be keeping a close eye on you though..."
					        
					        ).then(msg => {
					    		msg.delete({ timeout: 30000 })
					  		})
					  		.catch("SOMETHING HAS GONE WRONG, HELP!");
						})

                	} else {

                		await reaction.message.guild.members.cache.get(user.id).roles.add("915277759587160074");
					 	
					 	client.channels.fetch('914037260905766912')
					    .then(channel2 => {
					        channel.send(
					        	
					        	reaction.message.guild.members.cache.get(user.id).toString()
					        	+ "is a good Monke!  When the next event starts, head over to " 
					        	+ server.channels.cache.get('910741492786663454').toString() 
					        	+ " to secure you spot!"
					        
					        ).then(msg => {
					    		msg.delete({ timeout: 30000 })
					  		})
					  		.catch("SOMETHING HAS GONE WRONG, HELP!");
						})

                	}

                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel2) {
                if (reaction.emoji.name === 'abalkeMonke') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove("915277759587160074");
                    await reaction.message.guild.members.cache.get(user.id).roles.add("915277876746649650");
                
                	client.channels.fetch('914037260905766912')
				    .then(channel2 => {
				        channel.send(
				        	
				        	reaction.message.guild.members.cache.get(user.id).toString()
				        	+ "is a bad Monke!  I suggest you re-agree to these rules before I tell the boss!"
				        
				        ).then(msg => {
				    		msg.delete({ timeout: 30000 })
				  		})
				  		.catch("SOMETHING HAS GONE WRONG, HELP!");
					}) 

                }
            } else {
                return;
            }
        });

	});




});



client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	} else if(command === 'checkin'){
		client.commands.get('checkin').execute(message, args);
	} 

});



client.login("OTA1NDk0ODE1NjA3Nzc1MjQz.YYK5ww.JGKita3IrwkHd0sS9vCSxcB1x-" + "o");
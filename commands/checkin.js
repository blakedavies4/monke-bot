module.exports = {
	name: 'checkin', 
	description: "To respond to !checking commands", 
	execute(message, args){


//		if (message.member.roles.cache.some(role => role.id === "900913967269027850")) {
//			message.react(message.guild.emojis.cache.get('914897592779935845'));
//			message.member.roles.add("915293334749208606");
//			message.author.send("You have successfully checked in for Abalke's Monke Madness TFT Tourny! You can follow the progress of the tourny at https://docs.google.com/spreadsheets/d/17s4rgVDgDLIj0T-afL_qi_MLKaxWi3x4U28FmxrT9u8/edit?usp=sharing GLHF!");
//		} else {
//			message.react('❌');
//			message.author.send("It doesnt look like you either dont have an active subscription to Abalke's Twitch channel or you havent linked your Twitch to Discord yet (User Settings > Connections)!");
//		}

		

			message.react(message.guild.emojis.cache.get('914897592779935845'));
			message.member.roles.add("915293334749208606");
			message.author.send("You have successfully checked in for Abalke's Monke Madness TFT Tourny! You can follow the progress of the tourny at https://docs.google.com/spreadsheets/d/17s4rgVDgDLIj0T-afL_qi_MLKaxWi3x4U28FmxrT9u8/edit?usp=sharing GLHF!");
		


	}
}
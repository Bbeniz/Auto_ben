const axios = require('axios');

module.exports.config = {
		name: 'ai',
		version: '1.0.0',
		role: 0,
		hasPrefix: false,
		description: "An AI command powered by OpenAI",
		usages: "",
		credits: 'Developer',
		cooldown: 5,
};

module.exports.run = async function({ api, event, args }) {
		if (!args[0]) {
				api.sendMessage("❮⧠❯━━━━━━━━━━❮◆❯\n⧠ 𝑺𝑎𝒍𝒖𝒕 ☞︎︎︎${userName}☜︎︎︎  𝒕𝒖 𝒗𝑒𝒖𝒙 𝒎𝑒 𝒑𝒐𝒔𝑒𝒓 𝒖𝒏𝑒 𝒒𝒖𝑒𝒔𝒕𝒊𝒐𝒏 ?\n⧠ 𝑺𝒊 𝒐𝒖𝒊 𝑐'𝑒𝒔𝒕 𝒗𝑎𝒔-𝒚 𝒑𝒐𝒔𝑒 𝒍à\n⧠ 𝑷𝒓𝑒𝒏𝑑𝒔 𝒕𝒐𝒏 𝒕𝑒𝒎𝒑𝒔\n⧠ 𝑱𝑒 𝒔𝒖𝒊𝒔 𝒍à 𝒑𝒐𝒖𝒓 𝒓é𝒑𝒐𝒏𝑑𝒓𝑒 à 𝒕𝒐𝒖𝒕𝑒𝒔 𝒕𝑒𝒔 𝒒𝒖𝑒𝒔𝒕𝒊𝒐𝒏𝒔", event.threadID);
				return;
		}

		const question = args.join(" ");
		const apiUrl = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(question)}&model=v3`;

		try {
				const response = await axios.get(apiUrl);
				api.sendMessage(response.data.reply, event.threadID);
		} catch (error) {
				console.error("Error fetching response from OpenAI API:", error);
				api.sendMessage("An error occurred while processing your request. Please try again later.", event.threadID);
		}
};

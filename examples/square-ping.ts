import { Client } from "@evex/linejs";

const client = new Client();

client.on("square:message", async (message) => {
	const text = message.content;

	if (text === "!ping") {
		await message.reply("pong!");
	}
});

await client.login({
	email: "YOUR_EMAIL",
	password: "YOUR_PASSWORD",
	polling: ["square"], // polling square only
});

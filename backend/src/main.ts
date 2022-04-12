import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

(async function () {
	const port = process.env.PORT || 5000;
	const app = await NestFactory.create(AppModule);
	await app.listen(port);
	console.log(`Server running on port ${port}`);
})();

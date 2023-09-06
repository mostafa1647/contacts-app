import { Module } from "@nestjs/common";
import { ContactsModule } from "./contacts/contacts.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".development.local.env",
			isGlobal: true,
			ignoreEnvFile: process.env.NODE_ENV === "production",
		}),

		MongooseModule.forRoot(process.env.MONGO_URI),

		ContactsModule,
	],
})
export class AppModule {}

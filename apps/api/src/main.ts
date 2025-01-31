import { NestFactory } from '@nestjs/core';
import { ConsoleLogger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new ConsoleLogger({
            json: true,
            colors: true,
        }),
    });
    await app.listen(process.env.PORT ?? 8080);
}
bootstrap();

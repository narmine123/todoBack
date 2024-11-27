import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS pour autoriser les requêtes depuis Angular
  app.enableCors({
    origin: '*', // URL de votre frontend Angular
    methods: 'GET,POST,PUT,DELETE', // Méthodes HTTP autorisées
    credentials: true, // Si des cookies ou des sessions sont utilisés
  });

  await app.listen(3000); // Assurez-vous que le port correspond à celui attendu
  console.log('NestJS server running on http://localhost:3000');
}
bootstrap();

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect('mongodb+srv://adoptime:adoptime@cluster0.0f2mg.mongodb.net/')
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerFilePath = path.join(__dirname, '../src/docs/*.yaml');
console.log(swaggerFilePath);

const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info:{
            title:'Adoptme API',
            version:'1.0.0',
            description:'API para adoção de PETS',
        }
      },
      apis:[swaggerFilePath]
    }
const specs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(specs));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

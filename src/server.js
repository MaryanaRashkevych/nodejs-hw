import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import pinoHttp from 'pino-http';
import helmet from "helmet";
import 'pino-pretty';

const app = express();
const PORT = process.env.PORT ?? 3030;


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(
  pinoHttp({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat: '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);


app.get('/', (req, res) =>{
  res.status(200).json({message: 'base route is here'})
});

app.get('/notes', (req, res) =>{
  res.status(200).json({message: "Retrieved all notes. That is notes route"})
});

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ "Retrieved note with ID:": noteId});
});

app.use((req,res)=>{
  res.status(404).json({message: 'Route not found'});
});

app.use((err, req, res, next) =>{
  console.error('Error:', err.message);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  });
});

app.listen(PORT, () =>{
  console.log(`server is on: ${PORT}`)
});

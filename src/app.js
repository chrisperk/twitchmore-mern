import express from 'express';
import envVars from './config';

const app = express();

const port = envVars.PORT;

app.listen(port, () => console.log(`Listening on port: ${port}`));
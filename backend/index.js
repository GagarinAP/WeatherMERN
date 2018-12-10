import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api';
import db from './db';
import { Weather } from './api/v1/controllers';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);
app.get('/', (req, res) => res.send('API is running!'));

app.listen(port);

Weather.cronInit().start();
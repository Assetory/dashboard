import 'dotenv/config';

import path from 'path';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.urlencoded());
app.use(`/${ process.env.SERVICE_NAME }/static`, express.static(path.join(__dirname, '../../build/client/'), { index: false }));

app.get(`/${ process.env.SERVICE_NAME }/`, (req : Request, res: Response) =>
{
    res.sendFile(path.join(__dirname, '../../build/client', 'index.html'));
});

app.listen(process.env.SERVICE_PORT, () =>
{
    console.log('Express server is running on localhost:3000');
});

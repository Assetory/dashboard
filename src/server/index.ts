import App from './App';

const app = new App();

app.init();

export default app;

// import 'dotenv/config';
// import { r } from 'rethinkdb-ts';

// import path from 'path';
// import express, { Request, Response } from 'express';

// let connection : any = null;

// const connect = async () =>
// {
//     await r.connect({ host: 'database', port: 28015 }).then(conn =>
//     {
//         connection = conn;
//     });
// };

// connect();

// const app = express();
// app.use(express.urlencoded());

// app.post(`/${ process.env.SERVICE_NAME }/api/user/create`, function(req, res)
// {
//     r.db('User').table('users').insert(req.query).run(connection).then(data =>
//     {
//         res.json({ success: true, data: data });
//     }).catch(err =>
//     {
//         console.log(err);
//         res.json({
//             success: false,
//         });
//     });
// });

// app.use(`/${ process.env.SERVICE_NAME }/static`, express.static(path.join(__dirname, '../../build/client/'), { index: false }));

// app.get(`/${ process.env.SERVICE_NAME }/*`, (req : Request, res: Response) =>
// {
//     res.sendFile(path.join(__dirname, '../../build/client', 'index.html'));
// });

// app.listen(process.env.SERVICE_PORT, () =>
// {
//     console.log('Express server is running on localhost:3000');
// });

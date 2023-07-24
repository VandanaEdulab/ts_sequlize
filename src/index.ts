// src/index.ts

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './database';

const app = express();
const port = 3000;

app.use(bodyParser.json());

//Define your API routes here
// app.get('/users', async (req: Request, res: Response) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     console.error('Error retrieving users:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

app.get('/home', (req: Request, res: Response) => {
  res.json({ message: 'Home PAge' });
});



app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'About PAge' });
});
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
}




startServer();

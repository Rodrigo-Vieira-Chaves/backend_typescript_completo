import dotenv from 'dotenv';
import express from 'express';
import { routesList } from './routes/routesList';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routesList.initRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () =>
{
    console.log(`Server is running at https://localhost:${port}`);
});

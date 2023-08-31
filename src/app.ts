import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import { router } from './routers/v1';
import cors from 'cors';
import { errorMiddleware } from './middleware/error';

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['*'],
  }),
);

app.use('/v1', router);

app.use(errorMiddleware);

export { app };

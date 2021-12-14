import express from 'express';
import "reflect-metadata";
import "./database";
import "express-async-errors";
import cors from 'cors';
import { router } from './router';

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 3000,() => console.log("Online"));
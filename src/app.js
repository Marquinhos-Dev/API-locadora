
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import aluguelRouter from "./routes/aluguelRouter.js";
import filmeRouter from "./routes/filmeRouter.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/filme", filmeRouter);
app.use("/aluguel", aluguelRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}/`));
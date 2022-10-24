/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createObjectCsvWriter } from "csv-writer";
import { Aluno } from "./class/Aluno";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

let alunos: Aluno[] = [];

// R02
alunos.push(
  new Aluno({
    nome: "Shodan",
    idade: 44,
    nota: 8,
  }),
  new Aluno({
    nome: "Diego",
    idade: 33,
    nota: 10,
  }),
  new Aluno({
    nome: "Strokes",
    idade: 24,
    nota: 2.4,
  })
);

const csvWriter = createObjectCsvWriter({
  path: "src/out.csv",
  header: [
    { id: "nome", title: "Nome" },
    { id: "idade", title: "Idade" },
    { id: "nota", title: "Nota" },
  ],
});

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05
  csvWriter
    .writeRecords(alunos)
    .then(() => console.log("Arquivo criado com sucesso!"))
		.catch((error) => console.error(error))
});

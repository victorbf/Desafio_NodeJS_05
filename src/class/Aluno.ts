export class Aluno {
  public nome!: string;
  public idade!: number;
  public nota!: number;

  constructor(aluno: Aluno) {
    Object.assign(this, aluno)
  }
}
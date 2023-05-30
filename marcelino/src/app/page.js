"use client"
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });

  const alunos = await req.json();
 
  return (
      <div className={styles.alunosContainer}>
        <Link href="/cadastro" className={styles.buttonVoltar}>Voltar</Link>
        {alunos.map(aluno => (

        <div class="card">
        <div class="card-content">
          <div class="person-details">
            <h3>ID: <%= pessoa.id %></h3>
            <p>Nome: <%= pessoa.nome %></p>
            <p>Sobrenome: <%= pessoa.sobrenome %></p>
            <p>Idade: <%= pessoa.idade %></p>
            <p>Altura: <%= pessoa.altura %></p>
          </div>
        </div>
        </div>
          <div key={aluno.id} className={styles.alunoContainer}>
            <p className={styles.nome}>{aluno.nome}</p>
            <p className={styles.curso}>{aluno.curso}</p>
          </div>
        ))}
      </div>


        
  )
}

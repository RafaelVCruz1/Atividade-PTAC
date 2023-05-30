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
        <div class={styles.card}>
          <div class={styles.cardContent}>
            <div className={styles.personDetails}>
              <p className={styles.nome}>{aluno.nome}</p>
              <p className={styles.curso}>{aluno.curso}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
  )
}

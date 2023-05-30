'use client'
import { useState } from 'react'
import styles from '../page.module.css'

export default function Cadastro() {
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form action='' onSubmit={cadastrar} className={styles.form}>
                <label id="nome" for="nome">Nome:</label>
                <input nome="nome" type="text" onChange={e => setNome(e.target.value)} className={styles.input}/>
                <label id="curso" for="curso">Curso:</label>
                <input nome="curso" type="text" onChange={e => setCurso(e.target.value)} className={styles.input}/>
                <label id="num_inscricao" for="num_inscricao">Num de Registro:</label>
                <input nome="num_inscricao" type="number" onChange={e => setNum_inscricao(e.target.value)} className={styles.input}/>
                <button type='submit' className={styles.button}>Cadastra-se</button>
                <a href='/' className={styles.button}>Listar</a>
            </form>
        </div>
    );
}
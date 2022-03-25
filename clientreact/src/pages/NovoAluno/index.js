import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.css';
import iconAdicionar from '../../assets/Adicionar.png';
import iconRetornar from '../../assets/Retornar.png';

export default function NovoAluno() {

    const {alunoId} = useParams();

    return (
        <div className='novo-aluno-container'>
            <div className='content'>                
                <section className='form'>
                <img src={iconAdicionar} alt="Adicionar" />
                <h1>{alunoId === '0'? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</h1>
                <Link className="back-link" to="/alunos" >
                <img src={iconRetornar} alt="Adicionar" />
                </Link>
                </section>
                <form>
                    <input placeholder='Nome' />
                    <input placeholder='Email' />
                    <input placeholder='Idade' />
                    <button className='button' type='submit'>{alunoId === '0' ? 'Incluir' : 'Atualizar'}</button>
                </form>
            </div>     
        </div>
    );
}
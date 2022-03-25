import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoCadastro from '../../assets/Cadastro.png';
import iconLogout from '../../assets/Fechar.png';
import iconEditar from '../../assets/Editar.png';
import iconDeletar from '../../assets/Delete.png';

export default function Alunos() {
    return (
        <div className='aluno-container'>
            <header>
                <img src={logoCadastro} alt="Cadastro" id="cadastro" />
                <span>Bem-Vindo, <strong>Raphael</strong></span>
                <Link className='button' to="novo/0">Novo Aluno</Link>
                <input type="image" src={iconLogout} alt="Submit" width="75" />
            </header>
            <form>
                <input type='text' placeholder="Nome" />
                <button type='button' class='button'>
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>paulo@email.com<br /><br />
                    <b>Idade: </b>22<br /><br />
                    <input type="image" src={iconEditar} alt="Submit" width="45" />
                    <input type="image" src={iconDeletar} alt="Submit" width="45" />
                </li>
                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>paulo@email.com<br /><br />
                    <b>Idade: </b>22<br /><br />
                    <input type="image" src={iconEditar} alt="Submit" width="45" />
                    <input type="image" src={iconDeletar} alt="Submit" width="45" />
                </li>
            </ul>
        </div>
    );
}
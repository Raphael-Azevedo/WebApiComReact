import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import logoCadastro from '../../assets/Cadastro.png';
import iconLogout from '../../assets/Fechar.png';
import iconEditar from '../../assets/Editar.png';
import iconDeletar from '../../assets/Delete.png';

export default function Alunos() {

    const [nome, setNome] = useState('');
    const [alunos, setAlunos] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const navigate = useNavigate()

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get('api/alunos', authorization).then(
            response => {
                setAlunos(response.data);
            }, token
        )
    })

    async function logout(){
        try{

            localStorage.clear();
            localStorage.setItem('token','');
            authorization.headers='';
            navigate('/')

        }catch(err){
            alert('Não foi possível fazer o logou' + err);
        }
    }

    async function editAluno(id){
        try{

        }catch
    }

    return (
        <div className='aluno-container'>
            <header>
                <img src={logoCadastro} alt="Cadastro" id="cadastro" />
                <span>Bem-Vindo, <strong>{email}</strong></span>
                <Link className='button' to="novo/0">Novo Aluno</Link>
                <input type="image" src={iconLogout} alt="Submit" width="75" onClick={logout}/>
            </header>
            <form>
                <input type='text' placeholder="Nome" />
                <button type='button' class='button'>
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                        <b>Nome: </b>{aluno.nome}<br /><br />
                        <b>Email: </b>{aluno.email}<br /><br />
                        <b>Idade: </b>{aluno.idade}<br /><br />

                        <input type="image" src={iconEditar} alt="Submit" width="45" />
                        <input type="image" src={iconDeletar} alt="Submit" width="45" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
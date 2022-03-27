import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './styles.css';
import iconAdicionar from '../../assets/Adicionar.png';
import iconRetornar from '../../assets/Retornar.png';
import api from '../../services/api';


export default function NovoAluno() {

    const [id,setId] = useState(null);
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [idade,setIdade] = useState('');

    const {alunoId} = useParams();

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
       if(alunoId === '0')
       {
            return;
       }
        else    
            loadAluno();

    },alunoId)

    async function loadAluno(){
        try{

            const response = await api.get(`api/alunos/${alunoId}`, authorization);

            setId(response.data.id);
            setNome(response.data.nome);
            setEmail(response.data.email);
            setIdade(response.data.idade);

        }catch(error){
            alert('Erro ao recuperar o aluno' + error);
            navigate('/alunos');
        }
    }

    async function saveOrUpdate(event){
        event.preventDefault();
        const data={
            nome,
            email,
            idade
        }

        try{

                if(alunoId==='0')
                {
                    await api.post('api/alunos',data,authorization)
                }
                else
                {
                    data.id = id;
                    await api.put(`api/alunos/${id}`,data,authorization)
                }

            }catch(error){
                alert('Erro ao gravar aluno '  + error);
            }
        navigate('/alunos');
    }

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
                <form onSubmit={saveOrUpdate}>
                    <input placeholder='Nome' 
                        value={nome}
                        onChange={e=> setNome(e.target.value)}
                    />
                    <input placeholder='Email' 
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <input placeholder='Idade' 
                        value={idade}
                        onChange={e=> setIdade(e.target.value)}
                    />
                    <button className='button' type='submit'>{alunoId === '0' ? 'Incluir' : 'Atualizar'}</button>
                </form>
            </div>     
        </div>
    );
}
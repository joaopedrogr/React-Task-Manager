import { useState, useEffect } from 'react';

function Cadastro() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Estudar React",
        "Estudar Java",
        "Enviar a tarefa"
    ]);
    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('white');

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nomeUsuario');
        if (!nomeSalvo) {
            const nomeUsuario = prompt("Qual é o seu nome?");
            if (nomeUsuario) {
                localStorage.setItem('nomeUsuario', nomeUsuario);
                setNome(nomeUsuario);
            }
        } else {
            setNome(nomeSalvo);
        }
    }, []);

    function handleRegistro(e) {
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');
    }

    function handleCorChange(e) {
        setCor(e.target.value);
    }

    return (
        <div style={{ backgroundColor: cor, minHeight: '100vh', padding: '20px' }}>
            <h1>{nome}, sua lista de tarefas</h1>
            <form onSubmit={handleRegistro}>
                <label>Nome da tarefa: </label><br />
                <input 
                    placeholder='Digite uma tarefa'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />
                <button type='submit'>Registro</button>
            </form>
            <br></br>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
            <br />
            <h3>Escolha uma cor de fundo:</h3>
            <label>
                <input type='radio' name='cor' value='white' onChange={handleCorChange} checked={cor === 'white'} /> Branco
            </label>
            <br/>
            <label>
                <input type='radio' name='cor' value='lightblue' onChange={handleCorChange} checked={cor === 'lightblue'} /> Azul Claro
            </label>
            <br/>
            <label>
                <input type='radio' name='cor' value='lightgreen' onChange={handleCorChange} checked={cor === 'lightgreen'} /> Verde Claro
            </label>
            <br/>
            <label>
                <input type='radio' name='cor' value='lightcoral' onChange={handleCorChange} checked={cor === 'lightcoral'} /> Coral Claro
            </label>
        </div>
    );
}

export default Cadastro;

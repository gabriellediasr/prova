import '../App.css';
import React from 'react';


function FormularioContato() {
  return (
    <div>
    <h1>Formulário de Contato</h1>
    <form>
    <label htmlFor="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required />
    <label htmlFor="email">E-mail:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" rows="4" 
   required></textarea>
   {/* <button type="submit" onClick={handleSubmit}>Enviar</button>  */}
    </form>
    </div>
  );
}

export default FormularioContato;
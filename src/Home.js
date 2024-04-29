import './App.css';
import React from 'react';
import foto1 from '../src/FOTO3.jpg'
import foto2 from '../src/FOTO1.jpg'
import foto3 from '../src/FOTO2.jpg'


function Home() {
  return (

    <div>
       <div className='texto'>
        <h1>Bem-vindo à página inicial da nossa AV2</h1>
        <h3>Conheça os melhores cosplays do Sesi/Senai.</h3>

    </div>
   
    <div className='fotos'>
        <div>
           <img src={foto1} alt="Descrição da imagem" /> 
           <p>Povo da Turma da Mônica</p>
        </div>

        <div>
           <img src={foto2} alt="Descrição da imagem" /> 
           <p>Flanelinha/Ladrão de celular</p>
        </div>
        
        <div>
           <img src={foto3} alt="Descrição da imagem" /> 
           <p>Zé Gotinha do SUS</p>
        </div>

       
    </div> 
    </div>
    
   
  );
}

export default Home;
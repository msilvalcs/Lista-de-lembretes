import React from 'react'; // Importa o módulo React
import ReactDOM from 'react-dom/client'; // Importa o método ReactDOM.createRoot do ReactDOM
import './index.css'; // Importa o estilo CSS
import App from './App'; // Importa o componente App

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria uma raiz de renderização usando o método createRoot do ReactDOM
root.render( // Renderiza o componente App na raiz de renderização
  <React.StrictMode> {/* Modo estrito do React para identificar e corrigir problemas potenciais */}
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>
);

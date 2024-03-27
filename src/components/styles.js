import styled from "styled-components"; // Importa o styled-components para estilização dos componentes

// Estilos para o formulário

export const Container = styled.div` // Estiliza o container geral
    margin-left:1rem;
    h1 {
        font-size:23px;
        padding-top:1rem;
    }
`   
export const ContentForm = styled.form` // Estiliza o formulário
    display:flex;
    flex-direction:column;
    gap:1rem;
`
export const ContentName = styled.div` // Estiliza o campo de nome
    width:97%;
    display:flex;
    flex-direction:row;
    border:solid 1px;
    border-color:#808080;
    border-radius: 8px;
    background-color:whitesmoke;

    span {
        margin: 1px;
        padding: 12px;
        width: 10%;
        display: flex;
        justify-content: center;
        color:gray;
        border-right: solid 2px;
    }

    input {
        border:none;
        width: 87%;
        border-radius: 8px;
        padding:1rem;
    }
`
export const ContentData = styled.div` // Estiliza o campo de data
    width:97%;
    display:flex;
    flex-direction:row;
    border:solid 1px;
    border-color:#808080;
    border-radius: 8px;
    background-color:whitesmoke;

    span {
        margin: 1px;
        padding: 12px;
        width: 10%;
        display: flex;
        justify-content: center;
        color:gray;
        border-right: solid 2px;
    }

    input {
        border:none;
        width: 87%;
        border-radius: 8px;
        padding:1rem;
    }
`
export const ContentButton = styled.div` // Estiliza o botão do formulário
    display:flex;
    flex-direction:row-reverse;
    margin-right:3%;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.002);
    }
    button {
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        height:2rem;
        width:5rem;
        background-color: #2E58D8;
        color:white;
        border: solid 1px;
        border-radius:8px;
    }
`

// Main

export const MainComponent = styled.main` // Estiliza o rodapé
    margin-left:3.5rem;
`
export const Content = styled.section` // Estiliza o conteúdo do rodapé
    display:flex;
    flex-direction:column;
    font-weight:bold;
    padding-bottom:10px;

    p {       
        padding: 0px 0px 0px 45px;
    }
    p1{
        padding: 0px 0px 0px 80px;
    }
`
export const ContentNomeImg = styled.div` // Estiliza o nome e o botão de excluir do lembrete
    display:flex;
    gap:1rem;

    img {
        width: 20px;
        height: 20px;
    }
`
export const ButtonImg = styled.button` // Estiliza o botão de excluir do lembrete
    padding-top:10px;
    background-color:white;
    border:none;
    width:40px;
    height: 40px;
    transition: transform 0.3s ease-in-out;
    cursor:pointer;
    &:hover {
        transform: scale(1.1);
    }
`

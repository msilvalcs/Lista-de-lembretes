import { useState } from "react";
import { ContentForm, ContentButton, ContentData, ContentName } from "./styles";

function Form() {

    const [formData, setFormData] = useState({
        nome: '',
        data: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "data") {
            // Limitando o número de caracteres para dd/mm/yyyy
            const formattedValue = (value ? value.replace(/[^0-9/]/g, '').slice(0, 10) : ''); // Adicionado operador condicional
            setFormData(prevState => ({
                ...prevState,
                [name]: formattedValue
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const isValidDate = (dateString) => {
        // Verifica se a data está no formato dd/mm/yyyy
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regex.test(dateString)) return false;

        // Verifica se a data é válida
        const [day, month, year] = dateString.split('/');
        const dateObject = new Date(`${year}-${month}-${day}`);
        const currentDate = new Date();
        return dateObject > currentDate; // Verifica se a data é no futuro
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validações
        if (formData.nome.trim() === '') {
            alert('Por favor, preencha o campo Nome.');
            return;
        }
        if (formData.data.trim() === '' || !isValidDate(formData.data)) {
            alert('Por favor, insira uma data válida no futuro no formato dd/mm/yyyy.');
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(formData),
            redirect: "follow"
        };
          
        try {
            const response = await fetch("https://localhost:7118/api/Lembrete/Criar", requestOptions);
            
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            alert('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('An error occurred while submitting data');
        }
    };
  
    return(
        <ContentForm>
            
            <ContentName>
                <span>Nome</span>
                <input type="text" placeholder="Nome do lembrete" name="nome" value={formData.nome} onChange={handleChange}/>
            </ContentName>

            <ContentData>
                <span>Data</span>
                <input type="text" placeholder="Data do lembrete (no formato dd/mm/yyyy)" name="data" value={formData.data} onChange={handleChange}/>
            </ContentData>

            <ContentButton>
                <button onClick={handleSubmit}>Criar</button>
            </ContentButton>
                
        </ContentForm>
    );
}

export default Form;
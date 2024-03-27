import { useState, useEffect } from "react"; // Importa hooks do React para gerenciamento de estado e efeitos
import Logo from "./img/delete-remove-uncheck-svgrepo-com.svg"; // Importa a imagem do ícone de exclusão
import { MainComponent, ContentNomeImg, Content, ButtonImg } from "./styles"; // Importa estilos e componentes

function DataFetching() {
    const [groupedData, setGroupedData] = useState({}); // Estado para armazenar os dados agrupados por data

    const requestOptions = {
        method: "GET", // Método da requisição
        redirect: "follow" // Configuração de redirecionamento
    };

    useEffect(() => { // Efeito para buscar os dados da API ao montar o componente
        const fetchData = async () => { // Função assíncrona para buscar dados
            try {
                const response = await fetch('https://localhost:7118/api/Lembrete/Todos', requestOptions); // Requisição GET para obter os dados
                const jsonData = await response.json(); // Converte a resposta para JSON
                const sortedData = jsonData.sort((a, b) => { // Ordena os dados por data
                    const dateA = convertToDateObject(a.data);
                    const dateB = convertToDateObject(b.data);
                    return dateA - dateB;
                });
                const grouped = groupByDate(sortedData); // Agrupa os dados por data
                setGroupedData(grouped); // Atualiza o estado com os dados agrupados
            } catch (error) {
                console.error('Error fetching data:', error); // Registra erro na busca de dados
            }
        };

        fetchData(); // Chama a função para buscar dados
    }, []); // Executa o efeito apenas uma vez ao montar o componente

    const convertToDateObject = (dateString) => { // Função para converter uma string de data em objeto Date
        const [day, month, year] = dateString.split('/').map(Number); // Divide a string da data e converte em números
        return new Date(year, month - 1, day); // Retorna um objeto Date representando a data
    };

    const handleDelete = async (id, date) => { // Função para lidar com a exclusão de um lembrete
        try {
            const response = await fetch(`https://localhost:7118/api/Lembrete/Deletar/${id}`, { method: 'DELETE' }); // Requisição DELETE para excluir o lembrete
            if (response.ok) { // Se a exclusão for bem-sucedida
                const updatedGroupedData = { ...groupedData }; // Cria uma cópia dos dados agrupados
                const lembretes = updatedGroupedData[date].filter(lembrete => lembrete.id !== id); // Filtra os lembretes para remover o lembrete excluído
                if (lembretes.length === 0) { // Se não houver mais lembretes para esta data
                    delete updatedGroupedData[date]; // Remove a entrada correspondente a essa data
                } else { // Caso contrário
                    updatedGroupedData[date] = lembretes; // Atualiza os lembretes para esta data
                }
                setGroupedData(updatedGroupedData); // Atualiza o estado com os dados atualizados
            } else {
                throw new Error('Failed to delete lembrete'); // Lança um erro se a exclusão falhar
            }
        } catch (error) {
            console.error('Error deleting lembrete:', error); // Registra erro na exclusão do lembrete
        }
    };

    const groupByDate = (data) => { // Função para agrupar os lembretes por data
        const groupedData = {}; // Objeto para armazenar os dados agrupados
        data.forEach(lembrete => { // Itera sobre os lembretes
            const date = lembrete.data; // Obtém a data do lembrete
            if (groupedData[date]) { // Se já houver lembretes para esta data
                groupedData[date].push(lembrete); // Adiciona o lembrete ao grupo correspondente
            } else { // Se não houver lembretes para esta data
                groupedData[date] = [lembrete]; // Cria um novo grupo com este lembrete
            }
        });
        return groupedData; // Retorna os dados agrupados
    };

    return (
        <MainComponent> {/* Componente principal */}
        {/* Mapeia as chaves do objeto de dados agrupados */}
            {Object.keys(groupedData).map(date => ( 
                <div key={date}> {/* Elemento div para cada data */}
                    <h3>{date}</h3> {/* Título da data */}
                    {/* Mapeia os lembretes para esta data */}
                    {groupedData[date].map(lembrete => ( 
                        <Content key={lembrete.id}> {/* Componente de conteúdo para cada lembrete */}
                            <ContentNomeImg> {/* Componente de nome e imagem */}
                                <p>{lembrete.nome}</p> {/* Parágrafo com o nome do lembrete */}
                                <ButtonImg onClick={() => handleDelete(lembrete.id, date)}> {/* Botão de exclusão do lembrete */}
                                    <img src={Logo} alt="Excluir lembrete" /> {/* Ícone de exclusão */}
                                </ButtonImg>
                            </ContentNomeImg>
                        </Content>
                    ))}
                </div>
            ))}
        </MainComponent>
    );
}

export default DataFetching; // Exporta o componente DataFetching

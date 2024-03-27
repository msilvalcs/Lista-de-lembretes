import DataFetching from './components/DataFetching'; // Importa o componente DataFetching
import Form from './components/Form'; // Importa o componente Form
import { Container} from './components/styles'; // Importa o estilo Container

function App() {
    return (
        <Container> {/* Componente de container para estruturar o layout */}
            
            <header>
                <h1>Novo lembrete</h1> {/* Título para a seção de novo lembrete */}
            </header>

            <Form/> {/* Componente Form para inserir novos lembretes */}

            <span>
                <h1>Lista de lembretes</h1> {/* Título para a seção de lista de lembretes */}
            </span>

            <DataFetching/> {/* Componente DataFetching para exibir a lista de lembretes */}
            
        </Container>
    );
}

export default App; // Exporta o componente App

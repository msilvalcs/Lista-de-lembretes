
# Descrição
Este projeto é uma aplicação de lista de lembretes desenvolvida em React para o frontend e C# para o backend/API. A aplicação permite aos usuários criar, visualizar, editar e excluir lembretes de forma fácil e intuitiva.

# Premissas Assumidas
- Os usuários terão acesso à internet para utilizaçãp a aplicação.
- A aplicação será executada em navegadores compatíveis com React.
- A API será hospedada em um servidor acessível pelos usuários frontend.

# Decisões de Projeto
- Utilização do React e C# por serem as tecnologias recomendadas.
- Implementação de uma arquitetura RESTful para a API, proporcionando uma comunicação uniforme e eficiente entre o frontend e o backend.
- Armazenamento dos lembretes em um arquivo JSON para simplificar o desenvolvimento, reduzir a complexidade do sistema e permitir uma fácil manipulação dos dados.

# Instruções para Executar o Sistema
- Clone o repositório do projeto.
- Crie uma pasta com o nome listLembrete
- Mova os arquivos public, src, .gitignore, package.json, package-lock.json e README.md para a pasta /dti_digital destinada ao frontend.
- Navegue até a pasta /dti-digital do frontend no terminal.
- Execute o comando npm install para instalar todas as dependências do projeto.
- Ao iniciar a aplicação, é importante verificar a disponibilidade da porta onde o servidor local será aberto. Caso a porta especificada já esteja em uso, será necessário selecionar outra porta disponível para evitar conflitos.
- Durante o início da API, é recomendado acessar o Swagger para visualizar a URL fornecida e identificar qual porta foi utilizada para a execução do servidor. Isso garante que a comunicação entre os componentes seja estabelecida corretamente.
- Acesse a aplicação em um navegador web utilizando o endereço fornecido pelo frontend.

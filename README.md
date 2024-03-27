## Primeira etapa DTI digital

# Descrição
Este projeto é uma aplicação de lista de lembretes desenvolvida em React e em C# para backend/API. A aplicação permite aos usuários criar, visualizar, editar e excluir lembretes de forma fácil e intuitiva.

# Premissas Assumidas
- Os usuários terão acesso à internet para utilizar a aplicação.
- A aplicação será executada em navegadores compatíveis com React.
- A API será hospedada em um servidor acessível pelos usuários frontend.

# Decisões do projeto
- Utilização do React e C# por serem tecnologias recomendadas.
- Implementação de uma arquitetura RESTful para API, proporcionando uma comunicação uniforme e eficiente entre o frontend e o backend.
- Armazenamento dos lembretes em um banco de dados JSON para simplificar o desenvolvimento, reduzir a complexidade do sistema e permitir fácil manipulação dos dados.

# Instruções para executar o sistema
- Clone repositório do projeto.
- Crie uma pasta com o nome dti-digital
- Mova os arquivos public, src, .gitignore, package.json, package-lock.json e README.md para a pasta /dti-digital destinada ao frontend.
- Navegue até a nova pasta do frontend no terminal.
- Execute o comando npm install para instalar todas as dependências do projeto.
- Instale as dependencias do frontend utilizando npm install na pasta do frontend.
- Inicie o frontend utilizando npm start.
- Ao iniciar a aplicação, é importante verificar a disponibilidade da porta onde o servidor local será aberto. Caso a porta especificada já esteja em uso, será necessário selecionar outra porta disponível para evitar conflitos.
- Durante o início da API, é recomendado acessar o Swagger para visualizar a URL fornecida e identificar qual porta foi utilizada para a execução do servidor. Isso garante que a comunicação entre os componentes seja estabelecida corretamente.
- Acesse a aplicação em um navegador web utilizando o endereço fornecido pelo frontend.

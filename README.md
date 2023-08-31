# Project Shortly

Bem-vindo ao projeto Shortly! Este é um esforço colaborativo entre dois desenvolvedores. Enquanto um desenvolvedor é responsável pelo desenvolvimento de back-end usando TypeScript, Express e Prisma para construir a API, o outro desenvolvedor lida com o desenvolvimento de front-end usando React, Vite e Styled-Components.

## Back-end (API) - Developer's Notes

O back-end do projeto Shortly é desenvolvido usando TypeScript, Express e Prisma. Seu principal objetivo é fornecer a funcionalidade de gerar, armazenar, atualizar e excluir URLs encurtados. Os usuários podem enviar URLs longos para a API, e ela gerará um alias curto e exclusivo para cada URL. Esses aliases encurtados podem ser facilmente compartilhados e acessados, redirecionando os usuários para os URLs longos originais.

### Features

- Encurtar URLs: os usuários podem enviar URLs longos para a API, que gera aliases abreviados exclusivos para cada URL.
- Redirecionamentos: quando um usuário acessa o alias abreviado, a API o redireciona para o URL longo original.
- Armazenar e recuperar: a API usa o Prisma para armazenar os URLs longos e seus aliases encurtados correspondentes em um banco de dados, permitindo uma recuperação eficiente.
- URLs de atualização: os usuários podem atualizar o destino de uma URL abreviada, redirecionando-a para uma URL longa diferente, se necessário.
- Excluir URLs: os usuários podem excluir um URL abreviado e seus dados associados do banco de dados.

### Deployment

A API será hospedada no Back4App, fornecendo hospedagem escalonável baseada em nuvem para a API, acessível a usuários em todo o mundo.

## Front-end - Developer's Notes

O front-end do projeto Shortly é desenvolvido usando React, Vite e Styled-Components. Ele interage com a API de back-end para fornecer uma interface amigável para encurtar URLs, exibir URLs encurtados e lidar com outras interações do usuário.

### Features

- Interface do usuário: o front-end fornece uma interface de usuário para que os usuários interajam com a API de back-end.
- Formulário de encurtamento de URL: os usuários podem inserir um URL longo e obter o alias abreviado correspondente.
- Exibir URLs abreviados: o front-end exibe a lista de URLs abreviados e suas contrapartes originais para facilitar o acesso.

### Deployment

O front-end é hospedado no Vercel, fornecendo hospedagem estática rápida e confiável para o aplicativo.


## Usage
Para executar a API do projeto Shortly localmente, siga os passos abaixo:

### Prerequisites
Antes de começar, certifique-se de ter o seguinte instalado em sua máquina local:
- Node.js e npm (Node Package Manager)
- Git
- Postgresql ou Docker

### Clone the Repository
1. Abra seu terminal ou prompt de comando.
2. Altere o diretório de trabalho atual para onde deseja clonar o projeto.
3. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/vitorpl-dev/shortly-api
cd shortly-api/
npm i

# Configure as variáveis de ambiente em um arquivo .env (você pode usar .env.example como modelo).

npm run migrate:dev
npm run dev
```

A API do projeto agora estará sendo executada localmente em `http://localhost:8080`. Se você escolheu uma porta diferente, substitua o `8080` pela porta escolhida.

## Collaboration

Como um projeto colaborativo, a comunicação entre os desenvolvedores back-end e front-end é crucial. Os desenvolvedores podem usar sistemas de controle de versão como Git e plataformas como GitHub ou GitLab para colaborar de forma eficaz. Recursos e correções de bugs são discutidos e coordenados por meio de dailys e revisões de código para manter a qualidade do código e a adesão às melhores práticas.

## License

Este projeto está licenciado sob [MIT License](LICENSE).

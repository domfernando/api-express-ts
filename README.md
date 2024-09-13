# api-express-ts
Api usando Express e Typescript

#### Estrutura
> Estrutura básica de pastas e arquivos

+ [**src**]
    + [**controllers**] Controllers divididos por função
    + [**lib**]   *bibliotecas*
    + [**util**]  *funções de uso geral*
    + ***app.ts***  *Arquivo com as configurações iniciais*
    + ***routes.ts***  *Definição das rotas de navegação* 
    + ***server.ts*** *Inicialização do serviço* 
+ [**public**] *Arquivos públicos para exibição*

#### Dependências
> Bibliotecas usadas
- Express
- Nodemom
- Sucrase
- pino
- swagger-express-ui
- swagger-autogen

#### Gerando documentação
Adicionar script no package.json
```json
  ...
  "scripts": {
    ...
    "swagger": "node ./swagger.js"
  }
```
Depois executar o comando:
```bash
npm run swagger
```
Para visualizar a documentação

```net
http://app/docs
```

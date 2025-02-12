# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Estrutura do Projeto

O projeto segue uma organização clara e modular para facilitar o desenvolvimento e a manutenção.  

- *src/*: Diretório principal do código-fonte.  
  - *context/*: Contém a lógica de gerenciamento de estado utilizando Context API.  
  - *telas/*: Agrupa os componentes das telas do aplicativo, organizados por funcionalidades:  
    - abaOpcoes/: Componentes relacionados às opções do usuário.  
    - cadastro/: Telas de cadastro.  
    - horarios/: Gerenciamento de horários.  
    - laboratorios/: Exibição de laboratórios disponíveis.  
    - login/: Tela de autenticação.  
    - minhasReservas/: Visualização de reservas do usuário.  
    - realizarReservas/: Fluxo para criar novas reservas.  
    - telaEditar/: Edição de informações.
     
para rodar o programa é necessario por primeiro ter um Node.js e fazer a instalação do npm install e também fazer um npm react router dom para gerenciar a rota entre as paginas
e por fim rodar o prgrama usando o npm run dev

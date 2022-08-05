<h1 align="center">
  <img alt="Let Me Ask" height="80" title="Let Me Ask" src=".github/logo_dark.svg" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
</p>

![cover](.github/cover.png?style=flat)

## 💻 Project
[Live Project - LET ME ASK](https://letmeask-f64f8.web.app/)<br/>
[PT-BR] Aplicativo para organizar lives com perguntas e respostas em tempo real. <br/>
[ENG] Application to organize lives streams with Q&A in real time logged for everyone in the room to see.

## :hammer_and_wrench: Features
  [PT-BR]
- [x] Autenticação Social OAuth2 com Google (Firebase).
- [x] Utilização do firebase realtime DB.
- [x] Obtém perfil do usuário cadastrado no Google (username e avatar);
- [x] Botão de cópia de código da página para compartilhamento;
- [x] Disponibiliza a função de Logout.
- [x] Sistema de Likes nos questionamentos
- [x] Painel de Adm para marcar questões respondidas

[ENG]
- [x] OAuth2 authentication with Google (Firebase).
- [x] firebase realtime DB.
- [x] Gets user profile and avatar from Google users;
- [x] Button to copy and share page code for room accessing;
- [x] Logout function.
- [x] Likes on Questions to rank up for the streamer.
- [x] Admin panel to mark questions answered.

## ✨ Tecnologias | Tech

- [x] React
- [x] Typescript
- [x] Context API
- [x] Vector Icons
- [x] React Svg
- [x] Gradient colors
- [x] OAuth2 Google Firebase
- [x] Google Fonts
- [x] React Roter
- [x] React Hot Toast

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask?node-id=0%3A1). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
yarn start
```

Lembre-se de criar o seu App no Google Cloud Console para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).

```cl
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<br />

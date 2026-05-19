# AQW Codex

**AQW Codex** é um projeto em React com Next.js inspirado no jogo AdventureQuest Worlds.
O site apresenta uma lista de classes, busca em tempo real e páginas de detalhes dinâmicas.

## Tecnologias usadas

- React
- Next.js
- CSS Modules
- CSS global
- JavaScript puro
- API mock local com JSON

## Como rodar

1. Abra o terminal no diretório do projeto.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Abra o navegador em `http://localhost:3000`.

## Estrutura de pastas

- `components/` - componentes reutilizáveis
- `pages/` - rotas do Next.js
- `styles/` - CSS global e modules
- `public/` - imagens e dados mock

## O que foi implementado

- Página inicial com lista de classes
- Busca simples por nome ou facção
- Cards estilizados e responsivos
- Página de detalhes com rota dinâmica
- Uso de `useState`, `useEffect` e props
- Tema dark fantasy inspirado em AQW

## Observações

A lista de classes é carregada de um arquivo JSON estático em `public/data/classes.json`, simulando um consumo de API local.

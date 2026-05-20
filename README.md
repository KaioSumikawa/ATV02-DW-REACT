# Pokédex Dark Fantasy

**Pokédex Dark Fantasy** é um projeto desenvolvido em React com Next.js que consome dados da PokéAPI pública.

O projeto apresenta uma Pokédex com visual inspirado em MMORPGs e dark fantasy, utilizando uma interface estilizada com tema sombrio, detalhes dourados e componentes reutilizáveis.

# Tecnologias utilizadas

- React
- Next.js
- JavaScript
- CSS Modules
- CSS global
- PokéAPI

# Funcionalidades

- Listagem de pokémons consumindo API pública
- Busca de pokémons em tempo real
- Página de detalhes dinâmica
- Cards responsivos estilizados
- Loading state
- Navegação entre páginas
- Interface dark fantasy inspirada em MMORPG

# Hooks utilizados

O projeto utiliza os hooks do React:

- `useState`
- `useEffect`

---

# Uso de Props

Os componentes recebem dados através de props.

Exemplo:

```jsx
<PokemonCard pokemon={pokemon} />
```

# Consumo da API

API utilizada:

https://pokeapi.co/

Endpoint principal:

```txt
https://pokeapi.co/api/v2/pokemon?limit=151
```

Endpoint de detalhes:

```txt
https://pokeapi.co/api/v2/pokemon/{id}
```

# Como executar o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ATV02-DW-REACT.git
```

## 2. Entre na pasta

```bash
cd ATV02-DW-REACT
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Execute o projeto

```bash
npm run dev
```

## 5. Abra no navegador

```txt
http://localhost:3000
```

---

# Estrutura de pastas

```txt
components/
├── Navbar
├── PokemonCard
├── PokemonList
├── PokemonDetails
└── Footer

pages/
├── index.js
└── pokemon/
    └── [id].js

styles/
├── globals.css
└── *.module.css

public/
└── images/
```

---

# Estilo visual

O projeto possui:

- tema dark fantasy
- visual inspirado em MMORPG
- detalhes dourados
- fundo escuro
- glow effects
- interface responsiva

# Objetivo acadêmico

Este projeto foi desenvolvido para a atividade de consumo de API utilizando React e Next.js, aplicando:

- componentização
- consumo de API pública
- hooks do React
- CSS Modules
- props
- rotas dinâmicas

# Autor

Projeto desenvolvido para fins acadêmicos.

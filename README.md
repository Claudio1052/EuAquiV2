# EuAqui — Sua rede, seu mundo 🚀

Rede social completa construída com **TypeScript** + **Supabase** + **GitHub Pages**.

## 📂 Estrutura do Projeto

```
euaqui/
├── src/
│   ├── main.ts                  # Ponto de entrada — expõe funções globais
│   ├── index.html               # HTML principal (sem scripts inline)
│   ├── styles.css               # Todo o CSS da aplicação
│   ├── types/
│   │   └── index.ts             # Tipos TypeScript globais
│   ├── auth/
│   │   └── auth.ts              # Login, registro, OAuth, logout
│   ├── navigation/
│   │   └── boot.ts              # Boot, navegação de páginas
│   ├── feed/
│   │   ├── feed.ts              # Feed principal, paginação, reações
│   │   ├── explore.ts           # Explorar e busca
│   │   └── capsules.ts          # Cápsulas do tempo
│   ├── profile/
│   │   ├── profile.ts           # Perfil de usuário, edição, avatar
│   │   └── friends.ts           # Amigos, follow/unfollow
│   ├── messages/
│   │   └── messages.ts          # Chat privado
│   ├── communities/
│   │   └── communities.ts       # Comunidades
│   ├── businesses/
│   │   └── businesses.ts        # Lojas & Serviços
│   ├── notifications/
│   │   └── notifications.ts     # Notificações e contadores
│   └── utils/
│       ├── config.ts            # Config Supabase e constantes
│       ├── state.ts             # Estado global da aplicação
│       ├── helpers.ts           # Funções utilitárias
│       ├── theme.ts             # Tema dia/noite
│       └── realtime.ts          # Subscriptions Supabase Realtime
├── .github/
│   └── workflows/
│       └── deploy.yml           # CI/CD automático para GitHub Pages
├── tsconfig.json
└── package.json
```

## 🚀 Deploy no GitHub Pages

### Opção 1 — Automático via GitHub Actions (recomendado)

1. Faça push do projeto para o repositório `claudio1052/Euaqui`
2. Vá em **Settings → Pages → Source → GitHub Actions**
3. O workflow `deploy.yml` compila e publica automaticamente a cada `push` na `main`

### Opção 2 — Build manual

```bash
npm install
npm run build
```
Os arquivos prontos ficam em `dist/`. Suba apenas o conteúdo de `dist/` como GitHub Pages.

## ⚙️ Configuração

### Supabase
As credenciais já estão em `src/utils/config.ts`:
```typescript
export const SB_URL = 'https://gpustnmwxlolgyevjjtf.supabase.co';
export const SB_KEY = 'eyJ...'; // Chave anon pública
```

### OAuth (Google / GitHub)
No painel Supabase → Auth → URL Configuration:
- **Site URL**: `https://claudio1052.github.io/Euaqui/`
- **Redirect URLs**: `https://claudio1052.github.io/Euaqui/`

## 🧩 Funcionalidades

| Módulo | Funcionalidades |
|--------|----------------|
| **Auth** | Login/Registro por email, OAuth Google/GitHub, validação em tempo real |
| **Feed** | Posts, reações emoji, comentários, scroll infinito, priorização por amigos |
| **Perfil** | Avatar (Dicebear/upload), editar bio, nível/XP, posts, fotos |
| **Amigos** | Seguir, amizade, busca de pessoas, solicitações |
| **Chat** | Mensagens privadas, status de leitura (ticks), tempo real |
| **Comunidades** | Grid, criar, entrar/sair, feed da comunidade |
| **Lojas** | Catálogo de negócios, avaliações, detalhes |
| **Notificações** | Tempo real, categorias, marcar lidas |
| **Capsules** | Cápsulas do tempo com data de abertura |
| **Tema** | Modo Dia/Noite com design retro-neon |

## 🛠️ Tecnologias

- **TypeScript** — tipagem estática, módulos ES2020
- **Supabase** — banco de dados, auth, realtime, storage
- **GitHub Pages** — hospedagem gratuita
- **GitHub Actions** — CI/CD automático
- **Dicebear** — avatares pixel-art gerados
- **CSS Variables** — sistema de temas dia/noite

## 📝 Notas de desenvolvimento

- Todo o estado global fica em `src/utils/state.ts`
- Funções expostas no `window` via `src/main.ts` para compatibilidade com `onclick` no HTML
- O CSS original foi preservado integralmente em `src/styles.css`
- Imports dinâmicos (`import()`) são usados para code splitting por módulo

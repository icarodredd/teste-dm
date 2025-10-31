# teste-dm

Aplicação Vue 3 + Vite com Tailwind CSS 4, PrimeVue 4 e Storybook 10. Este README documenta como instalar, rodar e construir o projeto, além das decisões técnicas adotadas e observações de qualidade.

## Stack

- Vue 3 + Vite + TypeScript
- Tailwind CSS v4 (com plugin oficial @tailwindcss/vite)
- PrimeVue 4 + PrimeIcons + tema Aura (@primeuix/themes)
- Vue Router 4, TanStack Vue Query
- Storybook 10 (builder Vite)

## Requisitos

- Node: conforme engines no package.json (>= 20.19 ou >= 22.12)
- pnpm (recomendado)

## Instalação de dependências

```bash
pnpm install
```

## Rodar em desenvolvimento

```bash
pnpm dev
```

A aplicação sobe via Vite. O roteador e os estilos (Tailwind + PrimeVue) são carregados no `main.ts`/`index.css`.

## Storybook

Ambiente de documentação e desenvolvimento isolado dos componentes.

- Rodar Storybook (modo dev):

```bash
pnpm storybook
```

- Build estático do Storybook:

```bash
pnpm build-storybook
```

Notas:

- O Storybook injeta o CSS global do app via `/.storybook/preview.ts` importando `../src/index.css`.
- PrimeVue é configurado no `setup` do preview com tema Aura, DialogService, Router e Vue Query.
- Se ver “loading infinito”, confirme os imports do preview e que as libs estão instaladas.

## Build de produção

```bash
pnpm build
```

Arquivos de saída ficam em `dist/`. Para pré-visualizar:

```bash
pnpm preview
```

## Lint e formatação

```bash
pnpm lint
pnpm format
```

Observação: o ESLint foi configurado para ignorar artefatos gerados (`dist/`, `storybook-static/`) e relaxar algumas regras apenas nas stories de exemplo (`src/stories/**`).

## Decisões técnicas e considerações

1. Tailwind CSS no app e no Storybook

- Tailwind v4 é habilitado via `@tailwindcss/vite` e o CSS base fica em `src/index.css`.
- O Storybook carrega o mesmo CSS global para garantir paridade visual com o app.

2. PrimeVue 4 com tema Aura e ícones

- Tema Aura via `@primeuix/themes/aura` com `darkModeSelector: '.dark'` no preview.
- CSS core do PrimeVue (`primevue/resources/primevue.css`) e `primeicons` também são importados no preview para estilos completos dos componentes (como Button/ToggleSwitch).
- Serviços globais úteis (DialogService) e registro de router/Vue Query no Storybook para cenários que dependem de navegação e fetch.

3. Storybook (CSF, autodocs, controles)

- Stories no padrão CSF, com `tags: ['autodocs']`, `argTypes` e variações (ex.: `button-toggle.stories.ts`, `option-menu.stories.ts`).
- Três variações por componente principais para cobrir estados comuns e facilitar testes visuais.

4. ESLint/Qualidade

- Config Flat do ESLint com `@vue/eslint-config-typescript` e `prettier` (skip-formatting).
- Ignorados diretórios gerados e overrides leves para as stories de exemplo.

5. Router e Links no Storybook

- O Router é carregado no preview, permitindo usar `<RouterLink>` dentro dos componentes (ex.: `option-menu.vue`).

## Componentes e histórias adicionadas

- `src/components/button-toggle.vue` + `button-toggle.stories.ts` com 3 variações
- `src/components/option-menu.vue` + `option-menu.stories.ts` com 3 variações
- `src/components/sign-out.vue` + `sign-out.stories.ts`

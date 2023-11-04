# SignMeUp

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Deployment

- Env variables:
  - https://vercel.com/docs/projects/environment-variables#declare-an-environment-variable


# Design

## Routes

- `/` - Home page
  - POST action, creates a new list. Redirects to `/admin/[key]` upon completion
- `/list/[key]` - Sign up form UI
- `/admin/[key]` - Admin UI

# Test

URLs:

- http://127.0.0.1:5173/form/rhsrs
- http://127.0.0.1:5173/admin/xbzzlcjrhicigpxqiscp


# UI

Docs:
 - https://dev.to/brewhousedigital/adding-tailwind-and-daisy-ui-to-sveltekit-2hk5
 - https://tailwindcss.com/docs/guides/sveltekit

# Troubleshooting

## PostCSS: Unexpected token 'export'
```
C:\Users\hai\Documents\codelite\signmeup\postcss.config.cjs:1
export default {
^^^^^^

SyntaxError: Unexpected token 'export'
```

> Rename `postcss.config.cjs` to `postcss.config.js`
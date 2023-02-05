# HackerNews

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load _Raleway_, a custom Google Font.

## Building project

For building the project you need to run:

```bash
pnpm build
```

## Project Structure

Used new next.js structure `app/` directory for testing it out (it's not ready on the production yet)
Some of the packages are not fully compatible with this structure and I hope the core team fixes it soon

### `app/components/`

In this folder, we have the components related to our page

### `app/icons/`

We have our SVG icons in this folder as a component

### `app/types/`

We have our `types` and `interfaces` declaration in this folder and it's imported into other components

### `app/utils`

We can add our utils in this folder and one simple utility function for API calls is added

## Packages

We used `tailwindcss`, `eslint`, `stylelint`, `husky`, `jest` and `testing-library` in this project.

## Unit Test

For running unit tests, you can run the command:

```bash
pnpm test
```

Used `jest` and `testing-library` for this project, because I think that `vitest` is not well compatible with the new `next.js` structure

**Note:** I could not add unit tests for `useRoute` and `snapshot` for the pages because these are not fully compatible with `next`

## Deploy on Vercel

This project is deployed on https://hackernews-opal.vercel.app/ with vercel deployment

If you have any further questions or feedback, don't hesitate to contact me

mohammad.hooshdar@gmail.com

## Blockprint

Blockprint is a tool for determining which consensus clients produced which blocks on the Ethereum mainnet. It uses machine learning to guess the consensus client for a block, based on the similarity of that block to others in its training data. E.g. When blockprint saw the block at slot 6505122, it determined that this block was most likely produced by Prysm. This is a UI built to give insights on Blockprint's accuracy and other important metrics.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Or using Docker:

```
docker build -t blockprint-ui-dev . -f Dockerfile.dev
docker run --rm -ti --mount type=bind,source=$PWD,target=/app -p 3000:3000 blockprint-ui-dev
Optionally, you can overwrite the backend with an environment variable: `-e API_ENDPOINT="https://your.endpoint.goes/here"`
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# oddeven.io
[oddeven.io](https://oddeven.io) is the place to mint NFTs on the Cardano blockchain.
This repo contains all code related to oddeven.io

### Services
oddeven runs three separately deployed services:
- web (frontend for oddeven.io)
- payment service (service validating payments on the Cardano blockchain)
- minting service (service used to mint actual NFTs)

### Tech
- [TypeScript](https://www.typescriptlang.org/) everywhere. Who wants to write JavaScript?
- Node.js in backend services
- React and Next.js in frontend

### Why this monorepo
- maximize code sharing, minimize duplicatiom
- shared dev tools (ESLint, Prettier, etc.)
- single source of truth

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd oddeven.io
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

### Deploy
....

# Portfolio

Un portfolio web minimaliste et responsive pour Martin Dinahet, développé avec Next.js, TypeScript, Tailwind CSS et DaisyUI.

## Fonctionnalités

- Design responsive pour mobile, tablette et bureau
- Interface minimaliste grâce à DaisyUI et Tailwind CSS
- Présentation des projets et section de contact

## Stack technique

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Démarrage

### Prérequis

- Node.js (v18+ recommandé)
- pnpm (ou npm/yarn)

### Installation

```zsh
pnpm install
```

### Développement

```zsh
pnpm dev
```

Accédez à [http://localhost:3000](http://localhost:3000) pour voir le site.

### Build

```zsh
pnpm build
```

## Structure des dossiers

```
public/           # Fichiers statiques
src/
  app/            # Pages et routes de l'application
  components/     # Composants réutilisables
  tailwind.css    # Entrée Tailwind CSS
```

## Personnalisation

- Modifiez le contenu de `src/app/page.tsx` pour la page d'accueil
- Ajoutez vos projets et informations de contact selon vos besoins

## Licence

Ce projet est sous licence [MIT](./LICENSE).

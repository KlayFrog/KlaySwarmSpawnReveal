# Help to modify values of sections:

## Common card: (exemple 17.png)
go in public/images/cards/common
add _17.png_
go in **app/(routes)/booster**
in **card.data.ts**, change line 13 from
```
const COMMON_CARDS: CardType[] = Array.from({ length: 16 }, (_, i) => ({
```
to
```
const COMMON_CARDS: CardType[] = Array.from({ length: 17 }, (_, i) => ({
```

## Special card: (exemple 11.png)
go in **public/images/cards/special**
add _11.png_
go in **app/(routes)/booster**
in **card.data.ts**, change line 9 from
```
const SPECIAL_CARDS: CardType[] = Array.from({ length: 10 }, (_, i) => ({
```
to
```
const SPECIAL_CARDS: CardType[] = Array.from({ length: 11 }, (_, i) => ({
```

## Energy card: (exemple 11.png)
go in **public/images/cards/energy**
add _11.png_
go in **app/(routes)/booster**
in **card.data.ts**, change line 5 from
```
const ENERGY_CARDS: CardType[] = Array.from({ length: 10 }, (_, i) => ({
```
to
```
const ENERGY_CARDS: CardType[] = Array.from({ length: 11 }, (_, i) => ({
```

## Number of cards:
go in **app/(routes)/booster**
in **card.utils.ts**, change the quantity from line 19 to 21

## Add a new category of cards: (example rare cards, 6 cards, 1 in booster, between common and special)
go in **public/images/cards**
add _rare_ folder
go in **public/images/cards/rare**
add _1.png_, _2.png_, _3.png_, _4.png_, _5.png_, _6.png_, _back.png_
go **in app/(routes)/booster**
in **card.data.ts**, change line 16 from
```
}));
```
to
```
const RARE_CARDS: CardType[] = Array.from({ length: 6 }, (_, i) => ({
  category: "rare",
  id: i + 1,
}));
```
and line 22 from
```
];
```
to
```
  ...RARE_CARDS,
];
```
in **card.model.ts**, change line 1 from
```
export type CardCategoryType = "energy" | "common" | "special";
```
to
```
export type CardCategoryType = "energy" | "common" | "special" | "rare";
```
in **card.tsx**, change lines 56 to 59 from
```
    default:
      return `/images/cards/special`;
  }
};
```
to
```
      return `/images/cards/special`;
    case "rare":
    default:
      return `/images/cards/rare`;
  }
};
```
in **card.utils.ts**, change lines 20 to 22 from
```
  ["special", 1],
  ["energy", 1],
];
```
to
```
  ["rare", 1],
  ["special", 1],
  ["energy", 1],
];
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Original README:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

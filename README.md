# Add/Change images of Swarm Pokémon:
<sub>In this exemple, the base project has 12 images of 128x93 pixels, and you want it to hae 14 images of 200x200 pixels</sub>
Go in *public/images/cards/common*
Delete all images but **back.png**
Add your image files (**must be .png files**) (**must all have the same dimensions**) (**if dimensions are different between these images and back.png, edit back.png to have the same dimensions**, in this exemple 200x200 pixels)
Rename them numerically (**1.png**, **2.png**, **3.png** ...) (for this exemple, there will be 14 different species = 14 different images, so up to **14.png**)
Go in *app/(routes)/booster*
In **card.data.ts**, change line 5 from
```
const COMMON_CARDS: CardType[] = Array.from({ length: 12 }, (_, i) => ({
```
To
```
const COMMON_CARDS: CardType[] = Array.from({ length: 14 }, (_, i) => ({
```
In **card.tsx**, change line 21 from
```
"w-[128px] h-[93px] relative transition duration-500",
```
To
```
"w-[200px] h-[200px] relative transition duration-500",
```
Change lines 34 - 35 from
```
        width={128}
        height={93}
```
To
```
        width={200}
        height={200}
```
Change lines 41 - 42 from
```
        width={128}
        height={93}
```
To
```
        width={200}
        height={200}
```

# Change the opening image:
<sub>In this exemple, the base project has an opening image of 200x181 pixels, and you want to replace it with an opening image of 800x800 pixels</sub>
Go in *public/images*
Delete **main.png**
Add the new opening image (**must be a .png file**)
Rename it as **main.png**
Go in *app/(routes)*
In **page.tsx**, change lines 11 - 12 from
```
          width={200}
          height={181}
```
to
```
          width={800}
          height={800}
```

# IMPORTANT !!!
Since it will be public at one point, create a clone project of this one and make the changes and tests on the clone to avoid any unwanted leaks from people trying the original Vercel link (when swarm is on, add the changes on this original project and share its Vercel link)
## NEVER SHARE WITH ANYONE YOUR CLONED PROJECT OR ITS VERCEL LINK
If needed, contact Klay on Discord (@klaytheguildless) to help you link Github and Vercel and add new projects
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

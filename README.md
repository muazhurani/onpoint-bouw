# OnPoint Bouw

Marketing website for OnPoint Bouw — residential construction, renovations,
extensions, bathrooms and garden work for homeowners across the Netherlands. Built
with [Next.js](https://nextjs.org).

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

## Email Forms

The quote request form sends email through SMTP. Copy `.env.example`
to `.env.local` and set the mailbox password before testing submissions:

```bash
SMTP_HOST=send.one.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@onpointbouw.nl
SMTP_PASSWORD=your-one-com-mailbox-password
SMTP_FROM="OnPoint Bouw <info@onpointbouw.nl>"
INQUIRY_TO_EMAIL=info@onpointbouw.nl
```

IMAP (`imap.one.com:993`) and POP3 (`pop.one.com:995`) are for receiving
mail. The website only needs SMTP (`send.one.com:465`) to send form requests.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

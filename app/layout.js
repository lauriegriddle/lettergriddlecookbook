import './globals.css';

export const metadata = {
  title: 'Letter Griddle Cookbook - Recipes & Word Puzzles',
  description: 'Delicious breakfast and brunch recipes paired with themed word puzzles. Part of The Letter Griddle Games.',
  keywords: ['recipes', 'word puzzles', 'breakfast', 'cooking', 'letter griddle', 'pancakes', 'brunch'],
  authors: [{ name: 'Letter Griddle' }],
  openGraph: {
    title: 'Letter Griddle Cookbook',
    description: 'Delicious recipes paired with word puzzles',
    url: 'https://lettergriddlecookbook.com',
    siteName: 'Letter Griddle Cookbook',
    images: [
      {
        url: '/cookbook-thumbnail.svg',
        width: 1200,
        height: 630,
        alt: 'Letter Griddle Cookbook - Recipes & Puzzles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letter Griddle Cookbook',
    description: 'Delicious recipes paired with word puzzles',
    images: ['/cookbook-thumbnail.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

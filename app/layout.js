import './globals.css';

export const metadata = {
  title: 'Moksh Shah — Full Stack Developer',
  description: 'Portfolio of Moksh Shah — BTech CSE student & Full Stack Developer from Surat, India.',
  keywords: ['Moksh Shah', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Python', 'Surat', 'Portfolio'],
  authors: [{ name: 'Moksh Shah', url: 'mailto:shahmoksh7@gmail.com' }],
  openGraph: {
    title: 'Moksh Shah — Full Stack Developer',
    description: 'BTech CSE student & Full Stack Developer from Surat, India.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
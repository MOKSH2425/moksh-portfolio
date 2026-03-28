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

// ← THIS was missing — tells browsers to use device width
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
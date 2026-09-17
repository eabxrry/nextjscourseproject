import { inter } from './ui/fonts';

// @ts-ignore -- Next.js handles CSS imports via the project typings.
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}

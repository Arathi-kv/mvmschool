

import "../styles/index.scss";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'M.V.M Higher Secondary School',
  description: 'M.V.M Higher Secondary School',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>  
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Kumbh+Sans:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}

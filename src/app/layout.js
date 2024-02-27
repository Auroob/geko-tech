import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head'; // Import the Head component
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Geko Technologies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="favicon.ico" /> {/* Add the favicon link */}
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}

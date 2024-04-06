import { Inter } from "next/font/google";
import { MantineProvider } from '@mantine/core';
import "./globals.css";
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskTrek",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className='bg-colorGradient'></div>
        <MantineProvider>
          <main className="app">
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}

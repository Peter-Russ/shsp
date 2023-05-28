import Navbar from '@components/Navbar/Navbar';
import Provider from '@components/Provider';
import Sidebar from '@components/Sidebar';
import '@styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Social Media',
  description: 'Discover, follow, and message people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Navbar />
          <main>
            <Sidebar/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

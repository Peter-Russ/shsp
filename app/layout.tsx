import Navbar from '@components/Navbar/Navbar';
import SessionProvider from '@components/Provider';
import Sidebar from '@components/Sidebar/Sidebar';
import '@styles/globals.css';
import { Open_Sans } from 'next/font/google';

const inter = Open_Sans({ subsets: ['latin'] })

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
        <SessionProvider>
        <Navbar />
          <main>
            <Sidebar/>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}

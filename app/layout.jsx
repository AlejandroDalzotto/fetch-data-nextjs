import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: "Fetching data"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-neutral-900 h-full'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

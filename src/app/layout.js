import './globals.css'

export const metadata = {
  title: 'metaverse',
  description: 'is metaverse next big thing?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden bg-primary-black'>{children}</body>
    </html>
  )
}

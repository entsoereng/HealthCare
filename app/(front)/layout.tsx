import Footer from '@/components/Frontend/Footer'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
    <Navbar />
    <div>
      {children}
      <Footer />
    </div>
    </div>
  )
}

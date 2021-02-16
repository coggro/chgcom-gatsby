import React from 'react'

import 'normalize.css'

import GlobalStyles from '../styles/GlobalStyles'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
      <Footer />
    </>
  )
}

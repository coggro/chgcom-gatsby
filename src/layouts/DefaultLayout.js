import React from 'react'

import 'normalize.css'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

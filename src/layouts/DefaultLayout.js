import React from 'react'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'

export default function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

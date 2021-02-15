import React from 'react'
import DefaultLayout from './src/layouts/DefaultLayout'

export function wrapPageElement({ element, props }) {
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}

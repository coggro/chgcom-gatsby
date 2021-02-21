import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <>
      <SEO title={`Home`} />
      <section>
        <div className="container">
          <div className="page">
            <h1>I'm Corey Gross.</h1>
            <h2>I'm a web developer, and this is my site.</h2>
            <p>
              I'm living in the Greater Philadelphia Area with my wife and our
              dog. I like tabletop and video games, cooking, and reading. If you
              want to know more about me, try my{' '}
              <Link to={`/about`}>About</Link> page.
            </p>
            <p>
              I'm trying out a more minimalist site, especially for an MVP. My
              site needed a reboot, so I decided to get something up quick with
              Gatsby.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage

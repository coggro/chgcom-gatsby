import React from 'react'
import SEO from '../components/SEO'

export default function about() {
  return (
    <>
      <SEO title={`About`} />
      <div className="container page">
        <h1>About Me</h1>
        <p>
          <strong>
            I'm a web developer living in the Greater Philadelphia Area with my
            wife and our goldendoodle, August. I enjoy hiking, tabletop games,
            video games, reading, and learning new technologies.
          </strong>
        </p>
        <p>
          This wasn't always what I planned to do. I grew up in the suburbs of
          NE Philly and went to the University of Pittsburgh, majoring in
          English Literature and Writing (Fiction). Teaching was my plan, but
          Pittsburgh and Philadelphia both laid off mass amounts of teachers, so
          I pivoted. I took assorted jobs and casually began to tinker with
          coding courses.
        </p>
        <p>
          In Omaha, NE, where we had moved so my then-girlfriend could attend
          Creighton University's School of Dentistry, I seized opportunities to
          take programming courses at the local community college. I landed my
          first development job with Omaha Media Group and enrolled at Bellevue
          University in their Software Development Accelerated Cohort program.
          Over our last year in Omaha, I earned my B.S. in Software Development,
          gained invaluable experience in web development, and proposed to my
          now-wife. As much as we adored Omaha, we decided to uproot our lives
          to move to Nashville, TN to try something new.
        </p>
        <p>
          We settled in and spent a year in Tennessee. I bounced around a bit
          before finding a home at the State of Tennessee's Parks Department. We
          got married, honeymooned, and - after several significant discussions
          - decided to come back home to Philadelphia to be closer to family and
          friends.
        </p>
        <p>
          In the meantime, I've found some cool projects to work on and I'm
          continuing to learn new things. I'm working on making more projects
          with React and Gatsby (like this site), learning to write test-driven
          JS, and more. I'm passionate about creating excellent tools and
          technologies to support my hobbies of tabletop and video gaming. I'm
          always interested in side projects, so be sure to contact me if
          there's something you think I could help with!
        </p>
      </div>
    </>
  )
}

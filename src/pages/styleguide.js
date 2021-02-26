import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const StyleguidePage = () => {
  return (
    <>
      <SEO title={`Styleguide`} />
      <div className="container page">
        <section className={`headings`}>
          <h1>Headings</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </section>
        <hr />
        <section className={`headings-with-text`}>
          <h1>Headings With Text</h1>
          <h1>Heading With Text 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            corrupti esse quaerat, officiis accusantium ex a aliquam! Fugiat
            harum dignissimos itaque possimus suscipit beatae eveniet modi,
            magnam cum dolorem.
          </p>
          <h2>Heading With Text 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            corrupti esse quaerat, officiis accusantium ex a aliquam! Fugiat
            harum dignissimos itaque possimus suscipit beatae eveniet modi,
            magnam cum dolorem.
          </p>
          <h3>Heading With Text 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            corrupti esse quaerat, officiis accusantium ex a aliquam! Fugiat
            harum dignissimos itaque possimus suscipit beatae eveniet modi,
            magnam cum dolorem.
          </p>
          <h4>Heading With Text 4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            corrupti esse quaerat, officiis accusantium ex a aliquam! Fugiat
            harum dignissimos itaque possimus suscipit beatae eveniet modi,
            magnam cum dolorem.
          </p>
          <h5>Heading With Text 5</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            corrupti esse quaerat, officiis accusantium ex a aliquam! Fugiat
            harum dignissimos itaque possimus suscipit beatae eveniet modi,
            magnam cum dolorem.
          </p>
          <h6>Heading With Text 6</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            corrupti esse quaerat, officiis accusantium ex a aliquam! Fugiat
            harum dignissimos itaque possimus suscipit beatae eveniet modi,
            magnam cum dolorem.
          </p>
        </section>
        <hr />
        <section className="lists">
          <h1>Lists</h1>
          <h2>Ordered List</h2>
          <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            <ol>
              <li>Sublist Item 1</li>
              <li>Sublist Item 2</li>
              <ol>
                <li>Subsublist Item 1</li>
                <li>Subsublist Item 2</li>
              </ol>
              <li>Sublist Item 3</li>
            </ol>
            <li>List Item 4</li>
            <li>List Item 5</li>
          </ol>
          <h2>Unordered List</h2>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            <ul>
              <li>Sublist Item 1</li>
              <li>Sublist Item 2</li>
              <ul>
                <li>Subsublist Item 1</li>
                <li>Subsublist Item 2</li>
              </ul>
              <li>Sublist Item 3</li>
            </ul>
            <li>List Item 4</li>
            <li>List Item 5</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default StyleguidePage

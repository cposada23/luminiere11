import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackGroudComponent from './backgroundComponent/backgroundComponent'

import './testComponent.scss'


const query = graphql`
  query {
    images:allFile(filter: {relativeDirectory: {eq: "fondos"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`


const TestComponent = () => {

  const data = useStaticQuery(query)
  console.log(data.images.edges[0].node.childImageSharp.fluid)
  const images = data.images.edges

  return (
    <div className="test-component">
      <BackGroudComponent clase="test-main" image={images[0].node.childImageSharp.fluid}>
        test backgroudn 1
      </BackGroudComponent>

      <BackGroudComponent clase="test-secundary1" image={images[1].node.childImageSharp.fluid}>
        test backgroudn 2
      </BackGroudComponent>

      <BackGroudComponent clase="test-secundary2" image={images[0].node.childImageSharp.fluid}>
        test backgroudn 3
      </BackGroudComponent>
    </div>
  )
}

export default TestComponent

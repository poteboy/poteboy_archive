import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <>
      <div className="home">
        <div className="logo">
          <div className="myname">KEITA FURUSE
            <p className="description"><Link to="practice/count">FRONT-END WEB DEVELOPER</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

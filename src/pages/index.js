import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import uniqBy from "lodash/uniqBy"
import uniq from "lodash/uniq"
import flatten from "lodash/flatten"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/home-hero"

import MapDisplay from "../components/mapDisplay"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allLocationsJson {
        edges {
          node {
            cost
            description
            email
            id
            lat
            long
            name
            notes
            tel
            times
            website
            githubusers
            parent {
              ... on File {
                name
              }
            }
            wifi {
              password
              quality
              ssid
            }
          }
        }
      }
    }
  `)

  const [selectedPlace, setSelectedPlace] = useState(null)
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHero />
      <section className="section">
        <div className="container">
          <MapDisplay
            locations={data.allLocationsJson.edges.map(({ node }) => node)}
            clickedMarker={place => setSelectedPlace(place)}
          />
          {selectedPlace && (
            <article
              className="message"
              style={{ position: "absolute", marginTop: "-380px" }}
            >
              <div className="message-header">
                <p>{selectedPlace.name}</p>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={() => setSelectedPlace(null)}
                ></button>
              </div>
              <div className="message-body">
                {selectedPlace.description}
                <br />
                <Link to={`/${selectedPlace.link}/`}>Details</Link>
              </div>
            </article>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Locations</p>
                <p className="title">{data.allLocationsJson.edges.length}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Cities</p>
                <p className="title">
                  {
                    uniqBy(
                      data.allLocationsJson.edges.map(({ node }) => node),
                      "city"
                    ).length
                  }
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Contributers</p>
                <p className="title">
                  {
                    uniq(
                      flatten(
                        data.allLocationsJson.edges.map(
                          ({ node }) => node.githubusers
                        )
                      )
                    ).length
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">About</h2>
          <div className="content">
            <p>
              A random experiment to make it easy for a developer somewhere in
              South Africa to make a open-source contribution. Go to the GitHub
              page for details on how to contribute. Add a work place or adjust
              the website.
            </p>
            <p>
              This might be a dumb thing but sometimes you got to try things.
            </p>
            <p>
              The other idea is to crowd source some places to work from if you
              don’t have an office. <br />
              You could be a:
            </p>
            <ul>
              <li>Student that needs somewhere to study and work</li>
              <li>Remote worker wanting to get out of the house</li>
              <li>Entrepreneur needing a place to meet people</li>
              <li>Don’t have WiFi at home and need somewhere to work</li>
              <li>… please add more </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

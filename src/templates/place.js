import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MapDisplay from "../components/mapDisplay"

const Place = ({ pageContext, data }) => {
  const place = data.locationsJson
  return (
    <Layout>
      <SEO title={place.name} />
      <section className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list/">Places List</Link>
              </li>
              <li className="is-active">
                <Link to={`/${pageContext.slug}/`}>{place.name}</Link>
              </li>
            </ul>
          </nav>
          <h1 className="title is-2">{place.name}</h1>
          <p className="is-size-4">{place.description}</p>
          <p>
            <b>Updated:</b> {place.updated}
          </p>
          <br />
          <div className="columns">
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Details</p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <b>Times:</b> {place.times}
                    <br />
                    <b>Cost:</b> {place.cost}
                    <br />
                    <b>Email:</b> {place.email}
                    <br />
                    <b>Tel:</b> {place.tel}
                    <br />
                    <b>Website:</b>{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={place.website}
                    >
                      {place.website}
                    </a>
                    <br />
                    <b>City:</b> {place.city}
                    <br />
                    <b>WiFi:</b>{" "}
                    {place.wifi && (
                      <ul style={{ marginTop: 0 }}>
                        <li>Quality: {place.wifi.quality}</li>
                        <li>SSID: {place.wifi.ssid}</li>
                        <li>Password: {place.wifi.password}</li>
                        <li>Unlimited: {place.wifi.unlimited ? "Yes" : ""}</li>
                        <li>Notes: {place.wifi.notes}</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Notes</p>
                </header>
                <div className="card-content">
                  <div className="content">{place.notes}</div>
                  <br />
                  <b>Contibuters:</b>{" "}
                  {place.githubusers.map(a => (
                    <>
                      <a
                        key={a}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://github.com/${a}`}
                      >
                        {a}
                      </a>{" "}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <MapDisplay locations={[place]} />
        </div>
      </section>
    </Layout>
  )
}

export default Place

export const pageQuery = graphql`
  query PlaceBySlug($slug: String!) {
    locationsJson(id: { eq: $slug }) {
      city
      cost
      description
      email
      githubusers
      id
      lat
      long
      name
      notes
      tel
      times
      updated
      website
      wifi {
        notes
        password
        quality
        ssid
        unlimited
      }
    }
  }
`

import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListPage = () => {
  const data = useStaticQuery(graphql`
    query ListQuery {
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
            city
            wifi {
              password
              quality
              ssid
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `)

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Layout>
      <SEO title="Places List" />
      <section className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="is-active">
                <Link to="/list/">Places List</Link>
              </li>
            </ul>
          </nav>
          <h1 className="title is-2">Places List</h1>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm.length > 0 && (
            <article className="message is-danger">
              <div className="message-body">
                Search coming soon, maybe you can add it (some kind of regex
                filter)?
              </div>
            </article>
          )}
          <br />
          <div className="table-container">
            <table className="table table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>WiFi</th>
                  <th>Website</th>
                  <th>City</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {data.allLocationsJson.edges.map(({ node }) => (
                  <tr key={node.id}>
                    <td>
                      <Link to={`/${node.parent.name}/`}>{node.name}</Link>
                    </td>
                    <td>
                      {node.description.length > 50
                        ? `${node.description.substring(0, 50)}...`
                        : node.description}
                    </td>
                    <td>
                      {node.wifi && node.wifi.quality
                        ? node.wifi.quality
                        : "None"}
                    </td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={node.website}
                      >
                        {node.website}
                      </a>
                    </td>
                    <td>{node.city}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.google.co.za/maps/search/?api=1&query=${node.lat},${node.long}`}
                      >
                        Map
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ListPage

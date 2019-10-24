import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <div className="container">
        <h1 className="title is-1">NOT FOUND</h1>
        <p className="is-4">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

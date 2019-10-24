const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const placePost = path.resolve(`./src/templates/place.js`)
  const result = await graphql(
    `
      {
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
              wifi {
                password
                quality
                ssid
                notes
                unlimited
              }
              city
              githubuser
              updated
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allLocationsJson.edges

  posts.forEach((post, index) => {
    createPage({
      path: post.node.parent.name,
      component: placePost,
      context: {
        slug: post.node.id,
      },
    })
  })
}

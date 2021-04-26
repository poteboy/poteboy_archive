const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const blogPath = path.resolve('./src/components/post.tsx');

    const res = await graphql(`
    query {
        allContentfulTech {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    res.data.allContentfulTech.edges.forEach((edge) => {
        createPage({
            component: blogPath,
            path: `/tech/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            }
        })
    })
}
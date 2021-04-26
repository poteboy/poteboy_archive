const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
  }

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const blogPath = path.resolve('./src/components/post.tsx');

    const res = await graphql(`
        query {
            allMarkdownRemark {
            edges {
                node {
                fields {
                    slug
                    }
                }
            }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        let slug = edge.node.fields.slug
        createPage({
            component: blogPath,
            path: `/tech/${slug}`,
            context: {
                slug: slug,
            }
        })
    })
}
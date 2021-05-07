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
              title
            }
          }
        }
        allContentfulPoem {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)



    res.data.allContentfulTech.edges.forEach(({node}, index) => {
      const pages = res.data.allContentfulTech.edges
      const next = index === 0 ? null : pages[index-1].node
      const prev = index === pages.length - 1 ? null : pages[index+1].node
        createPage({
            component: blogPath,
            path: `/tech/${node.slug}`,
            context: {
                slug: node.slug,
                prev,
                next
            }
        })
    });

    res.data.allContentfulPoem.edges.forEach(({node}, index) => {
      const pages = res.data.allContentfulPoem.edges
      const next = index === 0 ? null : pages[index-1].node
      const prev = index === pages.length - 1 ? null : pages[index+1].node
        createPage({
            component: blogPath,
            path: `/poem/${node.slug}`,
            context: {
                slug: node.slug,
                prev,
                next
            }
        })
    });

}
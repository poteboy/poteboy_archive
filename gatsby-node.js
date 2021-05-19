const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const blogPath = path.resolve('./src/components/post.tsx');

    const res = await graphql(`
    query {
        allContentfulTech(
          sort: {
            fields: publishedDate
            order: DESC
          }
        ) 
        {
          edges {
            node {
              slug
              title
            }
          }
        }
        allContentfulPoem (
          sort: {
            fields: publishedDate
            order: DESC
          }
        )
         {
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
      const prev = index === 0 ? null : pages[index-1].node
      const next = index === pages.length - 1 ? null : pages[index+1].node
        createPage({
            component: blogPath,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug,
                prev,
                next
            }
        })
    });

    res.data.allContentfulPoem.edges.forEach(({node}, index) => {
      const pages = res.data.allContentfulPoem.edges
      const prev = index === 0 ? null : pages[index-1].node
      const next = index === pages.length - 1 ? null : pages[index+1].node
        createPage({
            component: blogPath,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug,
                prev,
                next
            }
        })
    });

}
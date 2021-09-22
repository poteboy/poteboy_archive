const path = require('path')
const _ = require("lodash")

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const blogPath = path.resolve('./src/components/post.tsx');

    const res = await graphql(`
    query {
        allContentfulBlog(
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
              publishedDate
            }
            __typename
          }
        }
      }
    `)

      const allPost = res.data.allContentfulBlog.edges.sort(function (a, b) {
        var dateA = new Date(a.node.publishedDate).getTime();
        var dateB = new Date(b.node.publishedDate).getTime();
        return dateA - dateB;
      }).reverse()

      allPost.forEach(({node, __typename }, index) => {
        const prev = index === 0 ? null : allPost[index-1].node
        const next = index === allPost.length - 1 ? null : allPost[index+1].node
          createPage({
              component: blogPath,
              path: `/blog/${node.slug}`,
              context: {
                  slug: node.slug,
                  topic: __typename,
                  prev,
                  next
              }
          })
      });
}

const resolve = require('path').resolve

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@src': resolve(__dirname, 'src')
      }
    }
  })
}   
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              collection
            }
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const allEdges = result.data.allMarkdownRemark.edges;
  let projectEdges = allEdges.filter(
    edge => edge.node.fields.collection === `projects`
  );
  let blogEdges = allEdges.filter(
    edge => edge.node.fields.collection === `blog`
  );

  blogEdges.forEach((edge, index) => {
    let { node } = edge;
    const previous =
      index === blogEdges.length - 1 ? null : blogEdges[index + 1].node;
    const next = index === 0 ? null : blogEdges[index - 1].node;

    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        previous,
        next,
      }, // additional data can be passed via context
    });
  });

  projectEdges.forEach((edge, index) => {
    let { node } = edge;
    const previous =
      index === projectEdges.length - 1 ? null : projectEdges[index + 1]?.node;
    const next = index === 0 ? null : projectEdges[index - 1].node;

    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {
        previous,
        next,
      }, // additional data can be passed via context
    });
  });
};

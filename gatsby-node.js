const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = async ({ node, getNode, actions, createContentDigest }) => {

    const { createNode  } = actions;
    
    if(node.internal.type === 'File' && node.sourceInstanceName === 'blog' && node.name !== 'index'){
    const slug = createFilePath({ node, getNode, basePath: `pages`})
    const markdownNode = await getNode(node.children[0])
    createNode({
        ...markdownNode,
        parentNodeId: node.id,
        id: `blog-${node.id}`,
        slug: slug,
        parent: node.id,
        children: [`${markdownNode.id}`],
        internal: {
            type: 'Blog',
            content: JSON.stringify(markdownNode),
            contentDigest: createContentDigest(markdownNode)
        }
    })
  }
}
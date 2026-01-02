import React from 'react'
import { graphql } from 'gatsby'
import Button from '../components/button'
import Seo from '../components/seo'

const Blog = ({ data }) => {

    const posts = data.allBlog.nodes

    return (
        <>

            <section className="max-w-screen-xl mx-auto p-4 md:p-8" aria-labelledby="blog-heading">
                <h1 id="blog-heading" className="text-2xl md:text-4xl font-bold mt-4">Essence of Beauty Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-8">
                    {posts.map((post, i) => {
                        // Find the image file from GraphQL query results
                        const frontmatter = post.childMarkdownRemark?.frontmatter || {}
                        let featuredImageUrl = frontmatter.featuredImage
                        if (featuredImageUrl && featuredImageUrl.startsWith('../assets/images/')) {
                            const filename = featuredImageUrl.replace('../assets/images/', '')
                            const imageFile = data.allFile?.nodes?.find(node => 
                                node.name === filename.split('.')[0] || node.relativePath === filename
                            )
                            featuredImageUrl = imageFile?.publicURL || featuredImageUrl
                        }
                        return (
                            <article key={i} className="flex flex-col shadow-sm hover:shadow-lg rounded-sm">
                                <div className="h-1/2 overflow-hidden">
                                    <img loading="lazy" src={featuredImageUrl || ''} className="object-cover w-full h-[300px]" alt={frontmatter.title ? `${frontmatter.title} featured image` : "Blog post featured image"} />
                                </div>
                                <div className="flex flex-col h-1/2 p-4">
                                    <h2 className="font-bold text-2xl mb-2">
                                        {frontmatter.title}
                                    </h2>
                                    <p className="mb-auto">
                                        {frontmatter.excerpt}
                                    </p>
                                    <Button
                                        data={{
                                            text: "Read More",
                                            link: post.slug,
                                        }}
                                        className="buttonLight bg-darkGreen hover:bg-green text-white mt-auto"
                                    />
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export const pageQuery = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
            nodes {
                name
                relativePath
                publicURL
            }
        }
        allBlog {
            nodes {
                childMarkdownRemark {
                    frontmatter {
                        title
                        featuredImage
                        excerpt
                    }
                }
                slug
            }
        }
    }
`

export default Blog

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Blog - Expert Skin Care Advice From Essence of Beauty Ottawa"
                pageDescription="Essence of Beauty blog features articles full of expert skin care, health and beauty tips, tricks and advice."
                pageKeywords="Blog, Articles, Expert, Advice, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/blog/"
                pageImage="https://www.essenceofbeauty.ca/images/meet-eva.png"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/blog/" />
        </>
    )
} 

import React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'

const BlogTemplate = ({ data }) => {

    const frontmatter = data.blog.childMarkdownRemark.frontmatter
    const html = data.blog.childMarkdownRemark.html

    return(
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-3/4 p-4 lg:p-8">
                {frontmatter.title?
                    <h1 className="font-bold mt-4">{frontmatter.title}</h1>
                : null}
                <div className="flex flex-col md:flex-row md:items-center mt-2 mb-8">
                    <span>By Eva Sieradzan</span>
                    {frontmatter.date ?
                        <span className="ml-1">| {frontmatter.date}</span>
                    : null}
                </div>
                {frontmatter.featuredImage ?
                    <img loading='eager' src={frontmatter.featuredImage} className="rounded-sm shadow-md mb-8 max-h-[500px] object-cover" alt={frontmatter.title}/>
                : null}
                {html ?
                    <div 
                        className="blogContent"
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                : null}
            </div>
            <div className="flex flex-col lg:w-1/4 p-4 lg:p-8 border-l border-black/30">
                <h1 className="text-2xl md:text-4xl font-bold mt-4">Recent Posts</h1>
                <div className="flex flex-col my-4">
                    {data.allBlog.nodes ?
                        data.allBlog.nodes.map((post, i) => {
                            return(
                                <Link key={i} to={post.slug} className="my-1 hover:text-green hover:font-bold transition-all">{post.frontmatter.title}</Link>
                            )
                        })
                    : null }
                </div>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        blog(id: {eq: $id}) {
            childMarkdownRemark {
                frontmatter {
                    title
                    date(formatString: "MMM DD, YYYY")
                    featuredImage
                    excerpt
                }
                html
              }
              slug
            }
        allBlog {
            nodes {
                frontmatter {
                    title
                }
                slug
            }
        }
    }
`

export default BlogTemplate

export const Head = ({ data }) => {
    const frontmatter = data.blog.childMarkdownRemark.frontmatter
    return (
        <>
        <Seo
            pageTitle={frontmatter.title}
            pageDescription={frontmatter.excerpt}
            pageKeywords="Chemical, No Acid, Acid free, Sun damage, sun damaged, acne scarring, scarring, fine lines, wrinkles, Natural, Facial, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
            pageUrl={`https://www.essenceofbeauty.ca${data.blog.slug}/`}
            pageImage={frontmatter.featuredImage}
        />
        <link rel="canonical" href={`https://www.essenceofbeauty.ca${data.blog.slug}/`} />
        </>
    )
  }
import React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'

const BlogTemplate = ({ data }) => {

    // Blog data sourced from markdown files in the src/blog directory

    const frontmatter = data.blog.childMarkdownRemark.frontmatter
    const html = data.blog.childMarkdownRemark.html
    
    // Find the image file from GraphQL query results
    let featuredImageUrl = frontmatter.featuredImage
    if (featuredImageUrl && featuredImageUrl.startsWith('../assets/images/')) {
        const filename = featuredImageUrl.replace('../assets/images/', '')
        const imageFile = data.allFile?.nodes?.find(node => 
            node.name === filename.split('.')[0] || node.relativePath === filename
        )
        featuredImageUrl = imageFile?.publicURL || featuredImageUrl
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <article className="flex flex-col lg:w-3/4 p-4 lg:p-8" aria-labelledby="blog-post-heading">
                {frontmatter.title ?
                    <h1 id="blog-post-heading" className="font-bold mt-4">{frontmatter.title}</h1>
                    : null}
                <div className="flex flex-col md:flex-row md:items-center mt-2 mb-8">
                    <span>By Eva Sieradzan</span>
                    {frontmatter.date ?
                        <span className="ml-1">| {frontmatter.date}</span>
                        : null}
                </div>
                {featuredImageUrl ?
                    <img loading='eager' src={featuredImageUrl} className="rounded-sm shadow-md mb-8 max-h-[500px] object-cover" alt={frontmatter.title ? `${frontmatter.title} featured image` : "Blog post featured image"} />
                    : null}
                {html ?
                    <div
                        className="blogContent"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    : null}
            </article>
            <aside className="flex flex-col lg:w-1/4 p-4 lg:p-8 border-l border-black/30" aria-labelledby="recent-posts-heading">
                <h2 id="recent-posts-heading" className="text-2xl md:text-4xl font-bold mt-4">Recent Posts</h2>
                <div className="flex flex-col my-4">
                    {data.allBlog.nodes ?
                        data.allBlog.nodes.map((post, i) => {
                            const title = post.childMarkdownRemark?.frontmatter?.title || ''
                            return (
                                <Link key={i} to={post.slug} className="my-1 hover:text-green hover:font-bold transition-all">{title}</Link>
                            )
                        })
                        : null}
                </div>
            </aside>
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
                    dateISO: date
                    featuredImage
                    excerpt
                }
                html
              }
              slug
            }
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
                    }
                }
                slug
            }
        }
    }
`

export default BlogTemplate

export const Head = ({ data }) => {
    const frontmatter = data.blog.childMarkdownRemark.frontmatter
    const pageUrl = `https://www.essenceofbeauty.ca${data.blog.slug}/`
    
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": frontmatter.title,
        "description": frontmatter.excerpt,
        "image": frontmatter.featuredImage,
        "author": {
            "@type": "Person",
            "name": "Eva Sieradzan"
        },
        "publisher": {
            "@type": "Organization",
            "@id": "https://www.essenceofbeauty.ca/#organization",
            "name": "Essence of Beauty Ottawa Acne & Skin Clinic",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.essenceofbeauty.ca/images/Eob-logo.png"
            }
        },
        "datePublished": frontmatter.dateISO,
        "dateModified": frontmatter.dateISO,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "url": pageUrl
    }
    
    // Extract tags from keywords for article:tag meta tags
    const keywordsString = "Chemical, No Acid, Acid free, Sun damage, sun damaged, acne scarring, scarring, fine lines, wrinkles, Natural, Facial, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
    const articleTags = keywordsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    
    return (
        <>
            <Seo
                pageTitle={frontmatter.title}
                pageDescription={frontmatter.excerpt}
                pageKeywords={keywordsString}
                pageUrl={pageUrl}
                pageImage={frontmatter.featuredImage}
                pageType="article"
                articleAuthor="Eva Sieradzan"
                articlePublishedTime={frontmatter.dateISO}
                articleModifiedTime={frontmatter.dateISO}
                articleTags={articleTags}
                additionalSchema={articleSchema}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
}
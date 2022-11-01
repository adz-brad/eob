import React from 'react'
import { graphql } from 'gatsby'
import Button from '../components/button'
import Seo from '../components/seo'

const Blog = ({ data }) => {

    const posts = data.allBlog.nodes
    
    return(
        <>

        <div className="max-w-screen-xl mx-auto p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold mt-4">Essence of Beauty Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-8">
            {posts.map((post, i) => {
                return(
                    <div key={i} className="flex flex-col shadow-sm hover:shadow-lg rounded-sm">
                        <div className="h-1/2 overflow-hidden">
                            <img loading="lazy" src={post.frontmatter.featuredImage} className="object-cover w-full h-[300px]" alt={`${post.frontmatter.title} Post`}/>
                        </div>
                        <div className="flex flex-col h-1/2 p-4">
                            <h2 className="font-bold text-2xl mb-2">
                                {post.frontmatter.title}
                            </h2>
                            <p className="mb-auto">
                                {post.frontmatter.excerpt}
                            </p>
                            <Button
                                data={{
                                text: "Read More",
                                link: post.slug,
                                }}
                                className="buttonLight bg-darkGreen hover:bg-green text-white mt-auto"
                            />
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}

export const pageQuery = graphql`
    query {
        allBlog {
            nodes {
                frontmatter {
                    title
                    featuredImage
                    excerpt
                }
                slug
            }
        }
    }
`

export default Blog

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="Blog"
        pageTitleDescription="Learn About Different Skin Care Treatments With Expert Advice From Essence of Beauty Ottawa"
        pageDescription="Essence of Beauty blog features articles full of expert skin care, health and beauty tips, tricks and advice."
        pageKeywords="Blog, Articles, Expert, Advice, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/blog/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
        />
        <link rel="canonical" href="https://www.essenceofbeauty.ca/blog/" />
        </>
    )
  } 
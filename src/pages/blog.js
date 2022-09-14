import React from 'react'
import { graphql } from 'gatsby'
import Button from '../components/button'

const Blog = ({ data }) => {

    const posts = data.allBlog.nodes
    
    return(
        <div className="max-w-screen-xl mx-auto p-4 md:p-8">
            <h1 className="font-bold mt-4">Essence of Beauty Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-8">
            {posts.map((post, i) => {
                return(
                    <div key={i} className="flex flex-col shadow-sm hover:shadow-lg rounded-sm">
                        <div className="h-1/2 overflow-hidden">
                            <img src={post.frontmatter.featuredImage} className="object-cover w-full h-[300px]" />
                        </div>
                        <div className="flex flex-col h-1/2 p-4">
                            <h1 className="font-bold text-2xl mb-2">
                                {post.frontmatter.title}
                            </h1>
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
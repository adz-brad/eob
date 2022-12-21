import React from 'react'
import './src/styles/global.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element }) => {
    return(
        <Layout>
            {element}
        </Layout>
    )
}

export const wrapRootElement = ({ element }) => {
    return(
        <SimpleReactLightbox>
            {element}
        </SimpleReactLightbox>
    )
}

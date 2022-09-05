import React from 'react'
import './src/styles/global.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import Layout from './src/components/layout'

const wrapPageElement = ({ element }) => {
    return(
        <Layout>
            {element}
        </Layout>
    )
}

const wrapRootElement = ({ element }) => {
    return(
        <SimpleReactLightbox>
            {element}
        </SimpleReactLightbox>
    )
}

export { wrapPageElement, wrapRootElement }
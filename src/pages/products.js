import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'

const Products = () => {
    return(
        <>
            <Banner
                text="Products"
                image={<StaticImage src="../assets/images/productsHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
                
            </div>
        </>
    )
}

export default Products
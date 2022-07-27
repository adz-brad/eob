import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'

const SkinRemodeling = () => {
    return(
        <>
            <Banner
                heading="Vitamin A Infusion Peel"
                caption="When we hear the word “peel,” we tend to immediately think “chemical peel,” but in the past few years, new approaches to peeling and rejuvenating the skin have emerged. One of the most effective and innovative of these is the vitamin A infusion peel. This non-acid peel is transforming the way people think about peels, and the results are incredible."
                image={<StaticImage src="../assets/images/skinRemodelingHeader.jpg"/>}
            />
            <div className="flex flex-col md:flex-row p-4 md:p-8 md:items-center">
                <div className="flex flex-col md:w-2/3 md:mr-8">
                    <h1 className="font-bold my-2">The Ultimate In Dermal Rejuvenation</h1>
                    <h4 className="mt-1 mb-4">Facial infusion is unique because it is extremely gentle, creating change through stimulation not peeling with specific receptors designed to interact with the fibroblasts for more collagen production.</h4>
                    <p className="my-1 md:text-lg">The vitamin A infusion peel is non-acid retinaldehyde peel that is boosted with powerful antioxidants and nutrients that help repair and remodel the skin. It is a great choice for face, neck and chest. Retinaldehyde is the most potent and least irritating form of vitamin A. An added benefit of retinaldehyde is that your skin can store it. All these features make retinaldehyde the superior form of vitamin A on the market. The vitamin A infusion peel is customized to meet each client’s specific skin needs and concerns. The skincare practitioner creates a custom blend of antioxidants and nutrients that is mixed with the concentrated vitamin A prior to application. Some of the most common ingredients used are COQ10, hyaluronic acid, peptides, vitamin C, beta glucan, mandelic acid and niacinamide. The vitamin A peel is extremely safe and tolerated well by all skin types. You may see mild to moderate flaking two to three days after the peel, which can last another two to four days. The peel is gentle but the results are significant.  
                    </p>
                    <Button
                            data={{text: "Learn More", anchor: "vitamin-a-infusion-info"}}
                            className="buttonLight my-8 md:mb-0 md:mx-0"
                        />
                </div>
                <StaticImage 
                    src="../assets/images/skinRemodeling.jpg" 
                    alt="Essence of Beauty Skin Remodeling" 
                    className="md:w-1/3 rounded-sm shadow-md" 
                />
            </div>
        </>
    )
}

export default SkinRemodeling
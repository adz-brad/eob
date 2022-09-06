import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'

const Products = () => {
    return(
        <>
            <Banner
                heading="Products"
                caption=""
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/productsHeader.jpg?raw=true"/>}
            />
            <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage 
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/yonkaProduct.jpg?raw=true" 
                        alt="Essence of Beauty Products - Yon-Ka" 
                    />
                </div>
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h1 className="font-bold mb-2">
                        Yonk-Ka
                    </h1>
                    <p className='my-2'>
                    Yon-ka, one of our best selling product lines, has been the undisputed pioneer of the professional aesthetics aromatherapy since the 1950’s. Yon-ka offers plant, flower and fruit nutrients and natural properties at their highest levels of purity and potency to create the most refined and customized skin care products. With their subtle aromas, the essential oils combined with plant, marine extracts act to balance, soothe, revive and rejuvenate. Each ingredient has a specific role on your skin. Yon-ka, is a pure and natural aromatic composition of lavender, cypress, rosemary, thyme, and geranium essential oils: “the 5 Quintessence E.O.” The exclusive formula is then blended with a wealth of plant extracts from all over the world.     
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h1 className="font-bold mb-2">
                    302 Skincare
                    </h1>
                    <p className='mt-4 mb-8'>
                    302 Skincare provides acid-free products that use natural and organic ingredients with proven science and clinically observed results. The product line emphasizes treatment of skin depleted by chronologic aging, sun damage, acne and rosacea as well as skin that has become topically addicted to acids. The new, patented compounds from avocado generate a powerful metabolic model that provides an alternative to the inflammatory model at the core of acid and laser based approaches. 302 teaches proper dose scheduling for take home products and back bar procedures employing ultrasound for dramatic, sustainable results. The results of 302 products are cumulative and permanent. Dermatologist tested and approved
                    </p>
                    <div className="mt-8 mb-4">
                        <Button 
                            data={{ text: "Learn More About 302 Skincare", link: "/302-fountain-of-youth" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage 
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302Product.jpg?raw=true" 
                        alt="Essence of Beauty Products - 302 Skincare" 
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage 
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/osmosisProduct.jpg?raw=true" 
                        alt="Essence of Beauty Products - Osmosis+BeautyMD" 
                    />
                </div>
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                <h1 className="font-bold mb-2">
                Osmosis+BeautyMD
                    </h1>
                    <p className='mt-4 mb-8'>
                    Osmosis+BeautyMD: An all natural and fresh, exciting new philosophy to skin care that rejects excessive exfoliation in favor of remodeling the deeper dermal skin cells by means of products that are 100% natural, organic, chirally correct, free of parabens, harsh and artificial ingredients. The founder of Osmosis+BeautyMD is Dr. Ben Johnson author of the ground breaking book on skincare Transform Your Skin Naturally.
                    </p>
                    <div className="mt-8 mb-4">
                        <Button 
                            data={{ text: "Learn More About Osmosid+BeautyMD", link: "/osmosismd" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                <h1 className="font-bold mb-2">
                AnteAGE
                    </h1>
                    <p className='mt-4 mb-8'>
                    AnteAGE MD Microneedling Solution contains pro-healing, anti-inflammatory growth factors and cytokines derived from laboratory culture of human bone marrow mesenchymal stem cells, the specialized cells that science has determined function as “command and control” of healing in all injured tissues. Synthesized human TGF-B3 is added to further reduce inflammation and promote less fibrotic, more fetal-like healing.
                    </p>
                    <div className="mt-8 mb-4">
                        <Button 
                            data={{ text: "Learn More About AnteAGE", link: "/anteage-stem-cell-facial" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage 
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteageProduct.jpg?raw=true" 
                        alt="Essence of Beauty Products - AnteAge" 
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage 
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/dmkProduct.jpg?raw=true" 
                        alt="Essence of Beauty Products - DMK" 
                    />
                </div>
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                <h1 className="font-bold mb-2">
                DMK Skin Care
                    </h1>
                    <p className='mt-4 mb-8'>
                    Using the principles of biochemistry, DMK has formulated a range of treatments and products designed to educate skin to perform like youthful healthy skin. By matching formulations with the body’s chemistry, the skin is encouraged to respond in a positive manner. DMK’s revolutionary concept of REMOVE, REBUILD, PROTECT, MAINTAIN aims to match an individual’s biochemistry with the appropriate skin therapy. Botanical-based paramedical products make up the DMK skin care program.
                    </p>
                    <div className="mt-8 mb-4">
                        <Button 
                            data={{ text: "Learn More About DMK", link: "/dmk-enzyme-therapy" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 mt-2">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default Products
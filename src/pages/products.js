import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Seo from '../components/seo'

const Products = () => {
    return (
        <>
            <Banner
                heading="Products"
                gradient="from-black/40 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Products" src="../assets/images/productsHeader.jpg" />}
            />
            <section className="flex flex-col lg:flex-row lg:items-center" aria-labelledby="302-skincare-heading">
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h2 id="302-skincare-heading" className="text-2xl md:text-4xl mb-2">
                        302 Skincare
                    </h2>
                    <p className='mt-4 mb-8'>
                        302 Skincare provides acid-free products that use natural and organic ingredients with proven science and clinically observed results. The product line emphasizes treatment of skin depleted by chronologic aging, sun damage, acne and rosacea as well as skin that has become topically addicted to acids. The new, patented compounds from avocado generate a powerful metabolic model that provides an alternative to the inflammatory model at the core of acid and laser based approaches. 302 teaches proper dose scheduling for take home products and back bar procedures employing ultrasound for dramatic, sustainable results. The results of 302 products are cumulative and permanent. Dermatologist tested and approved
                    </p>
                    <div className="mt-8 mb-4">
                        <Button
                            data={{ text: "Learn More About 302 Skincare", link: "/302-fountain-of-youth/" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/302Product.jpg"
                        alt="Essence of Beauty Products - 302 Skincare"
                    />
                </div>
            </section>
            <section className="flex flex-col-reverse lg:flex-row lg:items-center" aria-labelledby="osmosis-heading">
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/osmosisProduct.jpg"
                        alt="Essence of Beauty Products - Osmosis+BeautyMD"
                    />
                </div>
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h2 id="osmosis-heading" className="text-2xl md:text-4xl mb-2">
                        Osmosis+BeautyMD
                    </h2>
                    <p className='mt-4 mb-8'>
                        Osmosis+BeautyMD: An all natural and fresh, exciting new philosophy to skin care that rejects excessive exfoliation in favor of remodeling the deeper dermal skin cells by means of products that are 100% natural, organic, chirally correct, free of parabens, harsh and artificial ingredients. The founder of Osmosis+BeautyMD is Dr. Ben Johnson author of the ground breaking book on skincare Transform Your Skin Naturally.
                    </p>
                    <div className="mt-8 mb-4">
                        <Button
                            data={{ text: "Learn More About Osmosis+BeautyMD", link: "/osmosismd/" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row lg:items-center" aria-labelledby="anteage-heading">
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h2 id="anteage-heading" className="text-2xl md:text-4xl mb-2">
                        AnteAGE
                    </h2>
                    <p className='mt-4 mb-8'>
                        AnteAGE MD Microneedling Solution contains pro-healing, anti-inflammatory growth factors and cytokines derived from laboratory culture of human bone marrow mesenchymal stem cells, the specialized cells that science has determined function as “command and control” of healing in all injured tissues. Synthesized human TGF-B3 is added to further reduce inflammation and promote less fibrotic, more fetal-like healing.
                    </p>
                    <div className="mt-8 mb-4">
                        <Button
                            data={{ text: "Learn More About AnteAGE", link: "/anteage-stem-cell-facial/" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/anteageProduct.jpg"
                        alt="Essence of Beauty Products - AnteAge"
                    />
                </div>
            </section>
            <section className="flex flex-col lg:flex-row-reverse lg:items-center" aria-labelledby="hubislab-heading">
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h2 id="hubislab-heading" className="text-2xl md:text-4xl mb-2">
                        HubisLab
                    </h2>
                    <p className='mt-4 mb-8'>
                        HubisLab is a Korean skin research and development brand based on Human Bio Science. This company offers a wide range of innovative Pro products designed to maintain healthy skin. HubisLab produces ‘improvement cosmetics’ to promote continuous enhancement results. Incorporate these products into modality driven treatments such as: Microneedling, Chemical Peels and many more.
                    </p>
                </div>
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/products-hubislab.jpg"
                        alt="Essence of Beauty Products - AnteAge"
                        className="lg:min-h-[400px] w-full"
                    />
                </div>
            </section>
            <section className="flex flex-col-reverse lg:flex-row-reverse lg:items-center" aria-labelledby="dmk-heading">
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/dmkProduct.jpg"
                        alt="Essence of Beauty Products - DMK"
                    />
                </div>
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h2 id="dmk-heading" className="text-2xl md:text-4xl mb-2">
                        DMK Skin Care
                    </h2>
                    <p className='mt-4 mb-8'>
                        Using the principles of biochemistry, DMK has formulated a range of treatments and products designed to educate skin to perform like youthful healthy skin. By matching formulations with the body’s chemistry, the skin is encouraged to respond in a positive manner. DMK’s revolutionary concept of REMOVE, REBUILD, PROTECT, MAINTAIN aims to match an individual’s biochemistry with the appropriate skin therapy. Botanical-based paramedical products make up the DMK skin care program.
                    </p>
                    <div className="mt-8 mb-4">
                        <Button
                            data={{ text: "Learn More About DMK", link: "/dmk-enzyme-therapy/" }}
                            className="buttonLight bg-white"
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col-reverse lg:flex-row lg:items-center" aria-labelledby="phyts-heading">
                <div className="lg:w-1/3 lg:p-8">
                    <StaticImage
                        loading="eager"
                        src="../assets/images/phyts.jpg"
                        alt="Essence of Beauty Products - Phyt's"
                    />
                </div>
                <div className="lg:w-2/3 lg:m-8 p-4 lg:p-8 bg-lightGreen">
                    <h2 id="phyts-heading" className="text-2xl md:text-4xl mb-2">
                        Phyt's
                    </h2>
                    <p className='my-2'>
                    Phyt's skincare is a holistic, plant-based brand that harnesses the power of nature to deliver high-performance skincare solutions. Combining organic, botanical ingredients with cutting-edge formulas, Phyt's products are designed to address various skin concerns while promoting overall skin health. Known for their commitment to sustainability and purity, Phyt's treatments focus on revitalizing, nourishing, and balancing the skin, offering a gentle yet effective approach to skincare. With a dedication to using botanical extracts and natural elements, Phyt's offers a powerful skincare experience tailored to enhance the skin's natural beauty
                    </p>
                </div>
            </section>
            <section className="flex flex-col items-center p-4 mt-2" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default Products

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/products/"
    
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Skincare Products",
        "description": "Expertly sourced, high quality skincare products from leading brands including Phyt's, 302 Skincare, Osmosis MD, DMK, HubisLab & AnteAge for acne, scarring, rosacea treatment and more.",
        "brand": {
            "@type": "Organization",
            "@id": "https://www.essenceofbeauty.ca/#organization",
            "name": "Essence of Beauty Ottawa Acne & Skin Clinic"
        },
        "image": "https://www.essenceofbeauty.ca/images/productsHeader.jpg",
        "url": pageUrl
    }
    
    return (
        <>
            <Seo
                pageTitle="Products - Treat Your Skin With Leading Products From Phyt's, 302 Skincare, Osmosis MD, DMK, HubisLab & AnteAge!"
                pageDescription="View the wide range of expertly sourced, high quality products used for acne, scarring, rosacea treatment & more available for purchase from Essence of Beauty."
                pageKeywords="Phyt's, 302 Skincare, Osmosis MD, DMK, HubisLab, AnteAge, Products, Shop, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/productsHeader.jpg"
                pageType="product"
                additionalSchema={productSchema}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
} 
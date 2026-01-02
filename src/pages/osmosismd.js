import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Seo from '../components/seo'

const OsmosisMd = () => {
    return (
        <>
            <Banner
                heading="Osmosis + Beauty MD"
                gradient="from-black/30 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Osmosis + Beauty MD" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/osmosisMdHeader.jpg?raw=true" />}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-4 my-8">
                <div className="flex flex-col lg:my-8 md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Osmosis+Beauty MD Medical Skin Care</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader"> Osmosis+Beauty MD products have been developed to produce their amazing results via an integrated system that works in harmony with nature.</h2>
                    <p className="my-1">
                        In order to fully appreciate what these products can achieve for you, it is important to understand that our skin functions within a process dictated by nature. It is the science of this natural process that provides the foundation of the formulation and functioning of Osmosis+Beauty MD. So that rather than products that simply treat the skin’s surface with aggressive topicals that force nature and force temporary change, Osmosis+Beauty MD products are formulated to assist and support nature’s scientific process, products that transform damaged, aging, injured skin into healed, moist, beautiful skin.  The scientific approach behind Osmosis+Beauty MD recognizes that healing and transformative results require that the skin must be replenished, restored and repaired at the deeper skin cells.  However, these products provide more than that.  The organic and anti-oxidant ingredient formulation of Osmosis+Beauty MD also gently replenishes, restores and repairs the surface skin cells.  What this means for you is that the products have a simultaneous dual action  – one that transforms your deeper cells where real change is required, but also one that very quickly and visibly transforms your surface cells for brighter, clearer, smoother, healthier skin.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "osmosis-md-product-info" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/products-osmosis.jpg?raw=true"
                    alt="Essence of Beauty Osmosis+Beauty MD Skin Care Products"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div className="p-4 lg:p-8">
                <div id="osmosis-md-product-info" className="flex flex-col md:flex-row rounded-sm shadow-lg">
                    <div className="p-4 lg:p-8 md:w-2/5 bg-lightGreen">
                        <h2 className="text-2xl md:text-4xl mb-2">
                            Osmosis+Beauty MD 5 Step Process
                        </h2>
                        <ul className="my-4">
                            <li className="my-1">
                                <p className="md:text-lg">
                                    <strong className="mr-1">1.</strong>
                                    Exfoliating the skin naturally and gently
                                </p>
                            </li>
                            <li className="my-1">
                                <p className="md:text-lg">
                                    <strong className="mr-1">2.</strong>
                                    Increasing absorption of nutrients to the deeper skin cells
                                </p>
                            </li>
                            <li className="my-1">
                                <p className="md:text-lg">
                                    <strong className="mr-1">3.</strong>
                                    Increasing the delivery of nutrients to repair the skin
                                </p>
                            </li>
                            <li className="my-1">
                                <p className="md:text-lg">
                                    <strong className="mr-1">4.</strong>
                                    Maximizing the skin’s ability repair cell damage
                                </p>
                            </li>
                            <li className="my-1">
                                <p className="md:text-lg">
                                    <strong className="mr-1">5.</strong>
                                    Repairing skin DNA to improve all aspects of cell functioning
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-3/5 p-4 lg:p-8 h-full">
                        <h3 className="text-lg md:text-2xl font-bold text-brown">
                            About Osmosis with Dr. Ben Johnson
                        </h3>
                        <p className="my-2">
                            Osmosis+Beauty is changing the way skin conditions are treated using revolutionary, all natural, organic and paraben free formulas. Ben Johnson MD, the founder and formulator of this line, combined his holistic approach to the skin with his medical training to create a line that is free of all harsh, artificial ingredients while using several of the most research-proven ingredients in the industry. Most of the Osmosis+Beauty line is formulated with a new liposome that enhances penetration by 1000%. This is important because most skincare lines have a 2% absorption rate! His retinol, retinaldehyde, is proven to be as effective as Retin A but without the irritation. Even the most difficult skin conditions like rosacea and hyperpigmentation are no match for these advanced formulas. We believe that chronic exfoliation ages us and therefore our serums restore the epidermal barrier while stimulating collagen in the dermis, where aging occurs.
                        </p>
                        <p className="my-2">
                            Your skin then experiences the full benefit of a medical skincare line that works on deeper as well as surface skin to ensure it is replenished, restored and repaired to its potential of beautiful, radiant, healthy skin. And it achieves this while working in harmony with nature.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OsmosisMd

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/osmosismd/"
    
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Osmosis + Beauty MD",
        "description": "Osmosis+Beauty MD products have been developed to produce their amazing results via an integrated system that works in harmony with nature. The organic and anti-oxidant ingredient formulation gently replenishes, restores and repairs the surface skin cells.",
        "brand": {
            "@type": "Brand",
            "name": "Osmosis + Beauty MD"
        },
        "image": "https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/osmosisMdMain.jpg?raw=true",
        "url": pageUrl,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "url": pageUrl
        }
    }
    
    return (
        <>
            <Seo
                pageTitle="Osmosis + Beauty MD - Treat Acne, Rosacea, Hyperpigmentation & More With OsmosisMD at Essence of Beauty Ottawa"
                pageDescription="Osmosis+Beauty MD products have been developed to produce their amazing results via an integrated system that works in harmony with nature. The organic and anti-oxidant ingredient formulation of Osmosis+Beauty MD gently replenishes, restores and repairs the surface skin cells."
                pageKeywords="Osmosis, Beauty, MD, Osmosis + Beauty MD, Medical Skin Care, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl={pageUrl}
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/osmosisMdMain.jpg?raw=true"
                pageType="product"
                additionalSchema={productSchema}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
} 
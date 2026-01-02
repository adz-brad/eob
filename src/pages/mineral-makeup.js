import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Seo from '../components/seo'

const OsmosisMakeup = () => {
    return (
        <>

            <Banner
                heading="Osmosis + Colour Mineral Makeup"
                gradient="from-black/50 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Mineral Makeup" src="../assets/images/makeupOsmosisHeader.jpg" />}
            />
            <section className="flex flex-col md:flex-row md:items-center p-4 md:p-4 my-8" aria-labelledby="mineral-makeup-heading">
                <div className="flex flex-col lg:my-8 md:w-1/2 mx-auto">
                    <h1 id="mineral-makeup-heading" className="text-2xl md:text-4xl font-bold mb-2">What makes Osmosis + colour the best mineral makeup?</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Osmosis takes the worry out of mineral makeup by making the most medically safe mineral powder foundations in the world.</h2>
                    <p className="my-1">
                        In designing the formulation for Osmosis + colour Minerals, Osmosis wanted to raise the standard of what mineral makeup should be by enhancing the natural radiance of the skin without the potential of health risks that can be found in most other mineral makeup. In further advancing the formula, Osmosis focused on improving skin health. An ingredient that is unique to Osmosis, SRGF -7™, optimizes the sun protection qualities of this beautiful makeup collection. Osmosis’ philosophy is to restore the skin to its most healthy state. osmosis + colour Minerals achieves this goal while enhancing your skin’s natural radiance. Whether your skin tone is Warm, Cool or Neutral, you will find the right colour for your skin in Osmosis +colour Minerals.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "osmosis-makeup-benefits" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="../assets/images/osmosisMakeup.jpg"
                    alt="Essence of Beauty Osmosis+ Makeup"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </section>
            <section id="osmosis-makeup-benefits" className="p-4 md:p-8 bg-lightGreen lg:m-8" aria-labelledby="benefits-heading">
                <h2 className="text-2xl md:text-4xl mt-2 mb-4">
                    Benefits of Using Osmosis+Color
                </h2>
                <ul className="my-4">
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            Increased Safety
                        </h3>
                        <p>
                            Research has confirmed the damaging effects of titanium powder on lungs which means 99.9% of mineral makeup may be harmful. Osmosis + colour eliminates that risk by using only zinc, which benefits the skin and body while providing broader sun protection.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            Repair
                        </h3>
                        <p>
                            Skin Repair Growth Factor™ Zinc fingers are part of our skin’s DNA repair process. Every Shade application will contain SRGF-7 (Skin Repair Growth Factor™) which uses zinc finger technology to increase sun protection at the cellular level while correcting long-term UV damage.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            The Perfect Shade™
                        </h3>
                        <p>
                            Are you settling for an imperfect color match? Find the perfect shade with Osmosis+Color to experience the remarkable difference in your skin’s radiance and natural beauty.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            Coverage
                        </h3>
                        <p>
                            Micronized zinc provides broad-spectrum coverage that naturally hides skin imperfections while providing flawless radiance and improving skin health.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            Very Water Resistant
                        </h3>
                        <p>
                            Osmosis+Color mineral makeup provides excellent water resistance to ensure your makeup lasts.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            Affordability
                        </h3>
                        <p>
                            Even while containing the highest quality ingredients in the industry, Osmosis + colour has made mineral makeup more affordable.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            SPF 25+ Protection
                        </h3>
                        <p>
                            Wearing Shade daily provides SPF 25+ protection for your skin, deflecting the damaging rays which prematurely age the skin.
                        </p>
                    </li>
                    <li className="mt-2 mb-4">
                        <h3 className="text-base md:text-xl font-bold text-brown">
                            Free of Harmful Substances
                        </h3>
                        <p>
                            Osmosis+Color mineral makeups are free of harmful substances such as Titanium Oxide, Phthalates, Parabens, Colorants, and Fragrance.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="p-4 lg:p-8 flex flex-col lg:flex-row" aria-labelledby="makeup-details-heading">
                <div className="lg:p-8">
                    <p className="my-2">
                        Osmosis + pressed powder is mineral makeup that you can trust. Micronized zinc provides luxurious broad-spectrum coverage that naturally hides skin imperfections while providing flawless radiance.
                    </p>
                    <ul className="my-4">
                        <li className="mt-1 mb-2">
                            <h4 className="text-base md:text-xl font-bold text-brown">
                                Harmonized Face Mist
                            </h4>
                            <p>
                                Our exclusive face mist is a revolutionary formulation using water that works to nourish and hydrate the skin through “frequency messages”. Perfect to spray throughout the day to keep skin feeling refreshed or to set your makeup application upon completion.
                            </p>
                        </li>
                        <li className="mt-1 mb-2">
                            <h4 className="text-base md:text-xl font-bold text-brown">
                                Powder Brush
                            </h4>
                            <p>
                                Use the soft, fine brush for seamless all-over mineral makeup application.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="shrink-0 flex flex-col justify-center my-4 lg:m-0">
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/osmosisShades.jpg"
                        alt="Essence of Beauty Osmosis+Color Mineral Makeup"
                        className="h-full lg:h-fit"
                    />
                </div>
            </section>
            <section className="p-4 lg:p-8" aria-labelledby="color-matching-heading">
                <Card cardBodyClass="flex flex-col lg:flex-row">
                    <div className="p-4 lg:p-8">
                        <h2 id="color-matching-heading" className="text-2xl md:text-4xl mb-4">
                            Color Matching
                        </h2>
                        <p className="my-2">
                            Are you settling for an imperfect color match? Experience the remarkable difference in your skin’s radiance and natural beauty by using our Perfect Osmosis + colour. You can now achieve the ideal color with one simple shade!
                        </p>
                        <ul className="my-4">
                            <li className="mt-1 mb-3">
                                <h4 className="font-bold text-brown">
                                    Step 1
                                </h4>
                                <p>
                                    The best way to match your base color is to apply a swatch of foundations with different undertones (golden, beige, natural) vertically on the jaw line. Once your color swatches are in place, compare the shades to determine the color that most naturally blends with your cheek and neck line. The undertone that blends with your skin and looks most natural will easily be seen on the jaw line. Remove swatches that are not a match.
                                </p>
                            </li>
                            <li className="mt-1 mb-3">
                                <h4 className="font-bold text-brown">
                                    Step 2
                                </h4>
                                <p>
                                    Determine if the value of the color swatch needs to be lighter or darker for a match. You can swatch different values of the chosen undertone to determine which color is correct.
                                </p>
                            </li>
                            <li className="mt-1 mb-3">
                                <h4 className="font-bold text-brown">
                                    Step 3
                                </h4>
                                <p>
                                    When surface tones such as redness, freckles, acne, or hyperpigmentation, are present on the skin, match the undertone (golden, beige, natural) and find a value (light, medium dark) that brings together or diffuses the surface tones with the natural undertone of the skin. Often times, this may lead to a slightly darker or warmer value in the foundation choice.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="shrink-0">
                        <StaticImage
                            loading="lazy"
                            src="../assets/images/osmosisMakeup2.jpg"
                            alt="Essence of Beauty Osmosis+Color Makeup Color Matching"
                            className="w-full lg:h-full"
                        />
                    </div>
                </Card>
            </section>
            <section className="p-4 lg:p-8" aria-labelledby="foundation-application-heading">
                <Card cardBodyClass="flex flex-col lg:flex-row-reverse">
                    <div className="p-4 lg:p-8">
                        <h2 id="foundation-application-heading" className="text-2xl md:text-4xl mb-4">
                            Foundation Application
                        </h2>
                        <p className="my-2">
                            Osmosis + colour foundations are concentrated and have a high amount of pigment, which enables an application using much less product. These formulations will allow you to adjust the amount of coverage you want to achieve while maintaining the natural essence of your skin.
                        </p>
                        <p className="my-2">
                            To begin your application, cleanse skin and moisturize. Minerals adhere best when the skin is hydrated. If you are not achieving coverage with the minerals during application, most likely your skin needs more moisture. You can also spray your face with Harmonized Face Mist for an extra boost of hydration.
                        </p>
                        <ul className="my-4">
                            <li className="my-6">
                                <h3 className="text-base md:text-xl font-bold text-brown mb-2">
                                    Loose Base Application
                                </h3>
                                <p>
                                    Once you have determined your correct color, follow the steps below to achieve the coverage you desire:
                                </p>
                                <ul className="my-4">
                                    <li className="my-1 flex flex-col lg:flex-row lg:items-center">
                                        <h4 className="font-bold -mt-1 mr-2">
                                            Step 1:
                                        </h4>
                                        <p>
                                            Using our powder brush, swirl loose minerals into the brush and tap off excess.
                                        </p>
                                    </li>
                                    <li className="my-1 flex flex-col lg:flex-row lg:items-center">
                                        <h4 className="font-bold -mt-1 mr-2">
                                            Step 2:
                                        </h4>
                                        <p>
                                            Sweep minerals across the skin until your desired coverage is met. In areas that require more coverage, you can layer your minerals using your brush or sponge.
                                        </p>
                                    </li>
                                    <li className="my-1 flex flex-col lg:flex-row lg:items-center">
                                        <h4 className="font-bold -mt-1 mr-2">
                                            Step 3:
                                        </h4>
                                        <p>
                                            Follow your base application with Harmonized Face Mist to set minerals and deliver hydration.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li className="my-6">
                                <div className="flex flex-col md:flex-row mb-2">
                                    <h3 className="text-base md:text-xl font-bold text-brown md:mr-2">
                                        Specialized Application
                                    </h3>
                                    <h3 className="text-base md:text-xl">(for Dark Circles/Pigmentation/Blemishes/Scars)</h3>
                                </div>
                                <p className="my-2">
                                    For dark circles, hyperpigmentation, blemishes or scarred areas of the face which require additional coverage, take a sponge with loose powder on the tip of it and stipple over the discoloration. The goal is to defuse the color so it has a natural transition onto your normal skin color once your makeup is complete.
                                </p>
                                <p className="my-2">
                                    Wearing Osmosis + colour Mineral Makeup daily provides SPF 25+ protection for your skin, deflecting the damaging rays which prematurely age the skin. Osmosis+Color mineral makeups are free of Titanium Dioxide, Talc, Phthalates, Parabens, Colorants, and Fragrance.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="shrink-0">
                        <StaticImage
                            loading="lazy"
                            src="../assets/images/osmosisMakeup3.jpg"
                            alt="Essence of Beauty Osmosis+Color Makeup Foundation Application"
                            className="w-full lg:h-full"
                        />
                    </div>
                </Card>
            </section>
            <section className="flex flex-col items-center p-4 mt-2" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default OsmosisMakeup

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/mineral-makeup/"
    
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Osmosis + Colour Mineral Makeup",
        "description": "Osmosis + Color products designed to restore your skin to its most healthy state while enhancing it's natural radiance.",
        "brand": {
            "@type": "Brand",
            "name": "Osmosis + Colour"
        },
        "image": "https://www.essenceofbeauty.ca/images/osmosisMakeup.jpg",
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
                pageTitle="Osmosis + Colour Mineral Makeup Ottawa - Enhance & Repair Your Skin With Osmosis Mineral Makeup"
                pageDescription="Essence of Beauty Skin Rejuventation Clinic Ottawa is proud to supply Osmosis + Color products designed to restore your skin to its most healthy state while enhancing it's natural radiance."
                pageKeywords="OsmosisMD, Mineral Makeup, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/osmosisMakeup.jpg"
                pageType="product"
                additionalSchema={productSchema}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
} 
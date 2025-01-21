import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Seo from '../components/seo'

const RadianceInfusion = () => {
    return (
        <>

            <Banner
                heading="Radiance Hydro Infusion Facial"
                gradient="from-black/50 via-black/30 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Radiance Hydro Infusion Facial" src="../assets/images/radianceInfusion1.jpg" />}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Rejuvenate Your Skin With Radiance Hydro Infusion Facial!</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">The Radiance Hydro Infusion is a cutting-edge innovation and one of the most sought-after facials at Essence of Beauty Ottawa. Perfect for uneven skin tone, dullness, pigmentation, dehydration, and lack of vitality, it’s an ideal choice for achieving a luminous, wedding-ready glow and more.</h2>
                    <p className="my-1">
                    Also known as the Nano-Channeling Skin Rejuvenating Treatment, this treatment delivers an immediate boost in hydration and radiance, with ingredients absorbing up to 97% more effectively than traditional topical applications. Your skin is drenched in potent elixirs and serums, leaving it deeply nourished, refreshed, and visibly revitalized—all without any downtime.
                    </p>
                    <Button
                        data={{ text: "Learn More About Radiance Hydro Infusion", anchor: "radiance-infusion-learn-more" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="../assets/images/radianceInfusion2.png"
                    alt="Essence of Beauty Radiance Hydro Infusion Treatment"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md lg:min-h-[400px]"
                />
            </div>
            <div id="radiance-infusion-learn-more" className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                        <div className="pr-4 py-4 lg:py-8 lg:pr-8">
                            <StaticImage
                                src="../assets/images/radianceInfusion3.jpg"
                                alt="Essence of Beauty Radiance Infusion Treatment"
                                className="lg:max-h-[360px] min-h-[300px] lg:w-[360px] mx-auto"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl md:text-4xl mb-4">How Does Hydro Infusion Work?</h2>
                            <p className="my-1">
                            The treatment begins with a deep cleanse and a rejuvenating peel-off mask, preparing your skin to receive maximum nourishment. Using a specialized Nano cartridge, microscopic perforations are created on the skin's surface, allowing essential nutrients to penetrate deeply into the dermis. This process ensures optimal absorption of hydrating and revitalizing ingredients for immediate and long-lasting results.
                            </p>
                            <p className="my-1">
The procedure is entirely relaxing and offers both immediate and long-lasting results To amplify the benefits, the facial is enhanced with Ultrasound therapy or LED lights, which stimulate collagen and elastin production. These therapies lift, tighten, and smooth the skin, diminishing fine lines and wrinkles while boosting overall skin health.
                            </p>
                        </div>
                    </div>


                            <Button
                                data={{ text: "The Benefits of Radiance Hydro Infusion Facial", anchor: "radiance-infusion-benefits" }}
                                className="buttonLight my-8 mx-auto md:mx-0"
                            />
                </Card>
            </div>
            <div id="radiance-infusion-benefits" className="flex flex-col md:flex-row md:p-8 m-4 bg-lightGreen rounded-sm shadow-md">
                <div className="flex flex-col px-4 md:px-8">
                    <h2 className="text-2xl md:text-4xl font-bold my-4">
                        Key Benefits
                    </h2>
                    <h3 className="text-base md:text-xl">This transformative treatment is suitable for all skin types and can target multiple areas, including the face, neck, décolleté, lips, and delicate areas around the eyes. Benefits include:</h3>
                    <ul className="my-4 list-disc ml-4">
                        <li className="my-1">
                            <strong>Deep Hydration & Brightening: </strong> Delivers moisture and radiance, leaving skin glowing and dewy.
                        </li>
                        <li className="my-1">
                            <strong>Anti-Aging Effects: </strong>Reduces fine lines, wrinkles, and improves skin elasticity.
                        </li>
                        <li className="my-1">
                            <strong>Pigmentation & Tone Correction: </strong>Diminishes discoloration and promotes an even complexion.
                        </li>
                        <li className="my-1">
                            <strong>Sensitive Skin & Rosacea Relief: </strong>Calms redness, soothes irritation, and fortifies the skin barrier.
                        </li>
                        <li className="my-1">
                            <strong>Enhanced Circulation & Oxygenation: </strong>Revitalizes the skin for improved overall health.
                        </li>
                    </ul>
                    <p className="my-4">
                    Whether you’re preparing for a special occasion or seeking to enhance your daily glow, the Radiance Hydro Infusion Facial offers a luxurious, results-driven solution tailored to your skincare goals. Indulge in this innovative treatment and reveal your most radiant, youthful complexion yet.
                    </p>
                </div>
            </div>
            <div className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold my-4">
                        Treatment Pricing
                    </h2>
                    <span><strong className="mr-2">Single Treatment:</strong>$178</span>
                    <div className="flex flex-col">
                        <h4 className="text-base md:text-xl font-bold mt-4 mb-2 text-brown">Package Prices when pre-booked & pre-paid:</h4>
                        <span><strong className="mr-2">4 Treatments:</strong>$650</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-bold mt-4 mb-2 ">Advanced add-ons available with Radiance Hydro Infusion Facial</span>
                    </div>
                    <Button
                        data={{ text: "Book Today!", anchor: "contact" }}
                        className="buttonLight mt-8 mx-auto md:mx-0"
                    />
                </Card>
            </div>

            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default RadianceInfusion

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Hydro Infusion Facial - Rejuventate the Glow & Hydration Of Your Skin"
                pageDescription="Radiance Hydro Infusion Facial is one of our most requested facial rejuvenation treatments at Essence of Beauty Ottawa. This HydraFacial alternative gives an instant glow and boost in hydration."
                pageKeywords="Radiance, Infusion, Large Pores, Rejuvenation, Mano Infusion, Facial Infusion, Hydro Facial, Skin Tightening, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/radiance-hydro-infusion-facial/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/radianceInfusion2.png?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/radiance-hydro-infusion-facial/" />
        </>
    )
} 
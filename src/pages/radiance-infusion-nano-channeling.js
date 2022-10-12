import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Seo from '../components/seo'

const RadianceInfusion = () => {
    return(
        <>
        
            <Banner
                heading="Radiance Infusion Nano-Channeling"
                gradient="from-black/50 via-black/30 to-black/10"
                caption=""
                image={<StaticImage src="../assets/images/radianceInfusion1.jpg"/>}
            />
                        <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Rejuvenate Your Skin With Radiance!</h1>
                    <h2 className="mt-2 mb-4 subheader">Radiance Infusion (also known as nano-channeling) Skin Rejuvenating Treatment is the latest innovation and is one of our most requested facial treatments for scarring, large pores, pigmentation & more at Essence of Beauty Ottawa.</h2>
                    <p className="my-1">
                    You’ll see an instant glow and boost in hydration due to the ingredients being absorbed 97% better than topical application alone. It also has a brightening effect for that coveted lit-from-within glow! Throughout the treatment, the skin is literally being drenched with wonderful elixirs and serums. The best part is that it’s non-invasive and there is absolutely no downtime!
                    </p>
                    <Button
                        data={{text: "Learn More About Radiance Infusion", anchor: "radiance-infusion-learn-more"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                        loading="eager"
                    src="../assets/images/radianceInfusion2.png"
                    alt="Essence of Beauty Radiance Infusion Treatment"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md lg:min-h-[400px]"
                />
            </div>
            <div id="radiance-infusion-learn-more" className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <div className="flex flex-col">
                            <h1 className="mb-4">What Is Radiance Infusion Treatment?</h1>
                            <p className="my-1">
                            Radiance Infusion, otherwise known as Nano-channeling is an innovative, non-invasive transdermal serum delivery system, designed to rejuvenate your skin and remedy many common issues like lack of tone, uneven texture, hydration, excessive pigmentation, scarring, and loss of elasticity. This type of treatment instantly allows more absorption of vitamins, antioxidants, minerals, amino acids, and growth factors which are delivered into the mesodermal layer of the skin, flooding the cells with nourishment and moisture to rejuvenate and brighten the complexion. At the same time, this procedure stimulates the production of elastin and collagen responsible for the skin cells’ plump and bounce.  Giving you extraordinary results unattainable through other means.
                            </p>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                        <div className="pr-4 py-4 lg:py-8 lg:pr-8">
                            <StaticImage 
                                src="../assets/images/radianceInfusion3.jpg" 
                                alt="Essence of Beauty Radiance Infusion Treatment"
                                className="lg:max-h-[360px] min-h-[300px] lg:w-[360px] mx-auto"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mb-4">How Does It Work?</h1>
                            <p className="my-1">
                            After a wonderfully deep cleanse and a peel-off mask to get your skin in optimum condition, ready to receive all those fabulous skin-boosting goodies. We use a special tool, a Nano cartridge, which is waved gently over the skin, creating microscopic perforations along the surface. When the tips gently touch the skin with topical product, thousands of superficial, micro-channels per minute are created on the top layer of the skin, causing all nutrition to pass into the dermis. The process is painless, yet you will still see both immediate and long-term results. In addition, at Essence of Beauty Radiance Infusion is maximized with Ultrasound therapy or combined with the LED lights to boost the production of collagen and elastin. It also lifts and tightens the skin to reduce the appearance of fine lines and wrinkles.
                            </p>
                        </div>
                    </div>
                    <p className="my-1">
                            The benefits of this new treatment seem endless. The facial boosts the absorption of more active ingredients from skin care products, rendering them more effective and awakening skin collagen to promote cell regeneration. The treatment can be implemented on the face, neck, décolleté, lips, around the delicate skin near the eyes, and can be used on all skin types. The facial helps with hydration, brightening, typical fine lines, wrinkles, oxygenation, low collagen, circulation and toning. This radiance infusion also addresses in reducing pigmentation, uneven skin tone, decreases large pores, and diminishes acne scarring.
                            </p>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div className="flex flex-col">
                            <h1 className="mb-4">How Does The Treatment Feel?</h1>
                            <p className="my-1">
                            Although this treatment affects the dermis, there is no pain, inflammation, bleeding, or discomfort. Radiance Infusion is very safe, non-invasive, making it both painless and very effective.  Radiance Infusion is safe for all skin types and tones. There is no risk of post traumatic hyperpigmentation, nor is there any recovery time. You feel a pleasant vibration and sensation that emerges while rejuvenating, hydrating and obtaining a soft glowing look. It is a sensational treatment to help your skin look its best! 
                            </p>
                            <Button
                        data={{text: "More Benefits of Radiance Infusion", anchor: "radiance-infusion-benefits"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                        </div>
                        <div className="pl-4 py-4 lg:py-8 lg:pl-8">
                        <StaticImage 
                                src="../assets/images/radianceInfusion4.png" 
                                alt="Essence of Beauty Radiance Infusion Treatment"
                                className="lg:max-h-[360px] min-h-[300px] lg:w-[360px] mx-auto"
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <div id="radiance-infusion-benefits" className="flex flex-col md:flex-row md:p-8 m-4 bg-lightGreen rounded-sm shadow-md">     
                <div className="flex flex-col md:w-1/2 px-4 md:px-8">
                    <h1 className="font-bold my-4">
                    The Benefits
                    </h1>
                    <h4>The goal of the Radiance Infusion treatment is to restore a more youthful look by helping to reverse the signs of aging and gravity. The treatment achieves:</h4>
                    <ul className="my-4 list-disc ml-4">
                        <li className="my-1">
                        Enhances product absorption
                        </li>
                        <li className="my-1">
                            Gently exfloiates while increasing hydration
                        </li>
                        <li className="my-1">
                            Triggers the natural regenerative processes of the skin
                        </li>
                        <li className="my-1">
                            Increases circulation & improves skin texture
                        </li>
                        <li className="my-1">
                            Softens lines, wrinkles & evens skin tone
                        </li>
                        <li className="my-1">
                            Improves the appearance of acne scarring
                        </li>
                        <li className="my-1">
                            Boosts collagen production
                        </li>
                        <li className="my-1">
                            Stimulates elastin production
                        </li>
                    </ul>
                </div>  
                <div className="flex flex-col md:w-1/2 px-4 md:px-8">
                    <h1 className="font-bold my-4">
                    Who Can Radiance Infusion Help?
                    </h1>
                    <h4>The multitude of benefits can be experienced by those with a large variety of target issues, such as:</h4>
                    <ul className="my-4 list-disc ml-4">
                        <li className="my-1">
                        Aging skin
                        </li>
                        <li className="my-1">
                            Crow's feet
                        </li>
                        <li className="my-1">
                            Fine lines & lip lines
                        </li>
                        <li className="my-1">
                            Hyperpigmentation
                        </li>
                        <li className="my-1">
                            Large pores
                        </li>
                        <li className="my-1">
                            Scarring
                        </li>
                        <li className="my-1">
                            Stretch marks
                        </li>
                        <li className="my-1">
                        Areas in which traditional chemical peels and microdermabrasion cannot be done
                        </li>
                    </ul>
                </div>         
            </div>
            <div className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <h1 className="font-bold my-4">
                    Treatment Frequency & Maintenance
                    </h1>
                    <p className="my-1">
                    For more complex skin issues, we recommend a course of 4-6 weekly treatments, followed by one treatment done every other week for 4 weeks, then one maintenance treatment every 6-8 weeks thereafter.
                    </p>
                    <p className="my-1">
                    <strong>Includes: </strong>Face and Eyes, Enzyme and or Fruit Acid Exfoliation, Radiance Infusion with proper serum, Ultrasound or LED Light Therapy treatment, and Bio-mask.   
                    </p>
                    <div className="flex flex-col">
                        <h4 className="font-bold mt-4 mb-2 text-brown">Pricing</h4>
                        <span><strong className="mr-2">Single Treatment:</strong>$178</span>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold mt-4 mb-2 text-brown">Package Prices when pre-booked & pre-paid:</h4>
                        <span><strong className="mr-2">4 Treatments:</strong>$650</span>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold mt-4 mb-2 text-brown">Advanced add-ons available with Radiance Infusion</h4>
                    </div>
                    <Button
                        data={{text: "Book Today!", anchor: "contact"}}
                        className="buttonLight mt-8 mx-auto md:mx-0"
                    />
                </Card>
            </div>

            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default RadianceInfusion

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="Radiance Infusion Skin Rejuvenation"
        pageTitleDescription="Improve The Glow & Hydration Of Your Skin With Radiance Infusion Skin Rejuvenation!"
        pageDescription="Radiance Infusion Skin Rejuvenating Treatment is the latest innovation and is one of our most requested facial treatments at Essence of Beauty Ottawa. You’ll see an instant glow and boost in hydration due to the ingredients being absorbed 97% better than topical application alone."
        pageKeywords="Radiance, Infusion, Large Pores, Rejuvenation, Mano Infusion, Facial Infusion, Hydro Facial, Skin Tightening, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/radiance-infusion-nano-channeling/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/radianceInfusion2.png?raw=true"
        />
        <link rel="canonical" href="https://www.essenceofbeauty.ca/radiance-infusion-nano-channeling/" />
        </>
    )
  } 
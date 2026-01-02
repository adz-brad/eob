import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const HerbalGreenPeel = () => {
    return (
        <>

            <Banner
                heading="Skin Rejuvenation with Herbal Green Peel®"
                gradient="from-black/10 via-black/30 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Herbal Green Peel" src="../assets/images/greenPeelHeader.jpg" />}
            />
            <section className="p-4 lg:p-16" aria-labelledby="herbal-green-peel-heading">
                <div className="flex flex-col-reverse lg:flex-row">
                    <StaticImage
                        loading="eager"
                        src="../assets/images/greenPeelFeature.png"
                        alt="Essence of Beauty Herbal Green Peel®"
                        className="my-8 lg:my-0 lg:w-1/2 lg:mr-12 rounded-sm shadow-lg"
                    />
                    <div className="flex flex-col lg:w-1/2 p-2">
                        <h1 id="herbal-green-peel-heading" className="text-2xl md:text-4xl mb-4">A "New Face" For Skin Peels</h1>
                        <h2 className="text-xl md:text-2xl mt-1 mb-2">
                            Acid-Free peels designed to effectively treat acne scars, signs of aging, pigmentation & other skin issues while tightenting & brightening your skin!
                        </h2>
                        <p className="my-1">
                            All of us are probably well acquainted with the theory everywhere marketed in recent years that one of the most popular approaches to skin brightening and renewal has been through the application to the skin of synthetics and acids of various strengths. The acids themselves are very inexpensive and so can be very appealing means for an attractive return for practitioners and for clients seeking a quick and brighter look to the skin.
                        </p>
                        <p className="my-1">
                            At Essence of Beauty, however, we're aware that the most advanced science regarding skincare indicates that there are healthier, more holistic and more successful approaches to skin renewal that do not rely on chemicals or the damaging effects of acids. In fact, the best science in the field tells us that in practice, the frequent use of acids sets up a problematic domino effect that is not only difficult for clients to break but results in the opposite of their intended purpose – that is, acids weaken the cellular structure of the skin thereby speeding the aging process.
                        </p>
                        <p className="my-1">
                            We doubt you want to accelerate the speed at which your skin ages and we at Essence of Beauty most certainly don’t want that for you either. What we want to offer you are treatments and products that support the principal philosophy of our clinic – that here is where Health meets Beauty.
                        </p>
                        <p className="mt-2 text-xl font-bold">
                            Meet the Herbal Green Peel®.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:my-20">
                    <h2 className="text-2xl md:text-4xl text-center my-8">
                        Herbal Green Peel® – Brighter, Fresher, Smoother, Rejuvenated Appearance
                    </h2>
                    <Gallery
                        className="grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8 lg:p-8"
                        imageClass="rounded-sm shadow-lg min-h-[400px]"
                        images={[
                            <StaticImage
                                src="../assets/images/greenPeel1.png"
                                alt="Essence of Beauty Herbal Green Peel®"
                            />,
                            <StaticImage
                                src="../assets/images/greenPeel2.png"
                                alt="Essence of Beauty Herbal Green Peel®"
                            />,
                            <StaticImage
                                src="../assets/images/greenPeel3.png"
                                alt="Essence of Beauty Herbal Green Peel®"
                            />,
                            <StaticImage
                                src="../assets/images/greenPeel4.png"
                                alt="Essence of Beauty Herbal Green Peel®"
                            />
                        ]}
                    />
                    <p className="my-12 mx-4">
                        In keeping with our philosophy, the Green Peel® offers you an opportunity to experience all the benefits of skin refreshment, skin renewal, skin brightening, and skin treatments that are often associated with acids “BUT” without the very questionable immediate and longer-terms disadvantage. So you see, the Green Peel® is not only truly green in colour but naturally “Green” in its ingredients, in what it can treat and in its benefits as well. Green Peel® – Ingredients Aptly named, the GREEN PEEL® is an herbal formulation composed of natural active substances such as vitamins, plant hormones, enzymes, mineral salts, various dried flowers, sea weeds sand other beneficial ingredients. Not an acid anywhere and you’ll hear no tell-tale sizzle of cooking skin with our Green Peel®.
                    </p>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 pr-8">
                            <Card cardBodyClass="p-8">
                                <h3 className="text-3xl mb-4">
                                    Green Peel® Advantages
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="my-1">
                                        A safe, reliable, clinically tested and unique acid free resurfacing method of skin renewal that has been used for over 50 years in over 40 countries in over 2,000 cosmetics institutes in Germany alone
                                    </li>
                                    <li className="my-1">
                                        Improves skin colour through intensified blood circulation
                                    </li>
                                    <li className="my-1">
                                        Promotion of faster cell regeneration
                                    </li>
                                    <li className="my-1">
                                        Stimulation of the body’s collagen which leads to improved texture, firmness, flattening of wrinkles, reduction and often complete clearing of acne and smoothing and softening of facial and body scars.
                                    </li>
                                    <li className="my-1">
                                        No toxic or negative side effects
                                    </li>
                                    <li className="my-1">
                                        No injury or damage to the skin at the dermal level, and minimal or no interruption of professional or social obligations.
                                    </li>
                                </ul>
                            </Card>
                        </div>
                        <div className="md:w-1/2 pr-8">
                            <Card cardBodyClass="p-8">
                                <h3 className="text-3xl mb-4">
                                    Herbal Green Peel® Helps Treat:
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="my-1">
                                        Large pored skin, oily skin, skin impurities, different forms of acne
                                    </li>
                                    <li className="my-1">
                                        Signs of premature aging, wrinkles and sagging facial contours
                                    </li>
                                    <li className="my-1">
                                        Sun damaged skin, uneven skin, some forms of hyper-pigmentation
                                    </li>
                                    <li className="my-1">
                                        Scars caused by acne, burns and surgery
                                    </li>
                                    <li className="my-1">
                                        Stretch marks, cellulite
                                    </li>
                                    <li className="my-1">
                                        Skin issues on the body including tummy, upper arms and thighs
                                    </li>
                                    <li className="my-1">
                                        Prophylactic anti-aging treatment, aging hands
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col my-8 mx-auto">
                        <h3 className="text-2xl md:text-4xl mb-4">
                            The Herbal Green Peel
                        </h3>
                        <h4 className="text-lg md:text-2xl my-2">
                            Our clients report wonderful results for their Green Peel® treatments – for example the skin is remarkably firmer, brighter, smoother, pores smaller, damaged capillaries experience significant fading from the increased circulation in the skin.
                        </h4>
                        <p className="my-1">
                            We have found for many, three treatments spaced a month to six weeks a part produce the best results. This provides the correct time frame for skin cells to rejuvenate and then respond optimally to the next treatment, producing a completely fresh, glowing, rejuvenated skin.  Metabolism is activated, microcirculation as well as the interlocking of skin layers is improved. This in turn results in the skin receiving more oxygen and nutrients. The connective tissue fibers (collagenous and elastic fibers) are activated and metabolic wastes wicked away.
                        </p>
                        <p className="my-1">
                            The HERBAL GEEEN PEEL® treatment requires that you use 3 of specifically designed products to help lift the epidermal layer of the skin. These 3 home care products have been specially created to work in tandem with the GREEN PEEL® herbs to support the peeling process and avoid irritation of the skin in the process of renewal.  <strong>You must have a consultation “skin assessment” prior to the peel.</strong>
                        </p>
                        <h4 className="text-base md:text-xl font-bold mt-4 mb-2 text-brown">
                            The famous Green Peel ® Herbal Peeling by Dr. Christine Schrammek
                        </h4>
                        <p className="my-1">
                            Green Peel® was developed by Dr. Christine Schrammek in association with doctors, scientists and skincare specialists nearly 60 years ago and has proven to be a successful biological peeling treatment around the world for a variety of skin issues.
                        </p>
                        <p className="my-1">
                            Small herb particles polish the surface layers of the skin creating a slight burning sensation similar to a mild sunburn and reddened skin. Following the treatment, you are given clear instructions regarding the use of special products and post treatment skin care. Within three to four days, the skin begins peeling away revealing a new, refreshed skin.
                        </p>
                        <Button
                            data={{ text: "Book Today", anchor: "contact" }}
                            className="buttonLight my-8 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col items-center my-8">
                            <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                            <span>Comparing before & after Herbal Green Peel</span>
                        </div>
                        <Gallery
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 my-1"
                            imageClass="rounded-sm shadow-lg min-h-[300px]"
                            images={[
                                <StaticImage src="../assets/images/greenPeelBefore1.png" alt="Essence of Beauty Before Green Peel Treatment" />,
                                <StaticImage src="../assets/images/greenPeelAfter1.png" alt="Essence of Beauty After Green Peel Treatment" />,
                                <StaticImage src="../assets/images/greenPeelBefore2.png" alt="Essence of Beauty Before Green Peel Treatment" />,
                                <StaticImage src="../assets/images/greenPeelAfter2.png" alt="Essence of Beauty After Green Peel Treatment" />
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col p-4 md:p-8 md:mx-8 my-8" aria-labelledby="peel-options-heading">
                <h2 id="peel-options-heading" className="text-2xl md:text-4xl mb-4">
                    Herbal Green Peel Options
                </h2>
                <Card cardBodyClass="flex flex-col xl:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col xl:w-1/2 xxl:w-2/3 p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Green Peel® Classic</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$420</strong>plus products</span>
                        <h4 className="text-base md:text-xl my-1">
                            The success of the original GREEN PEEL® Herbal Peeling Treatment Classic for decades speaks for itself. "New Skin in Five Days"
                        </h4>
                        <h5 className="font-bold my-2 text-lg">
                            The Green Peel® Classic is ideal for:
                        </h5>
                        <ul className="my-2 ml-4 list-disc">
                            <li className="my-1">
                                Large-pored seborrheic skin
                            </li>
                            <li className="my-1">
                                Impure skin, sebum cysts
                            </li>
                            <li className="my-1">
                                Sun-damaged skin & scarring
                            </li>
                            <li className="my-1">
                                Wrinkles (as anti-aging prophylaxes)
                            </li>
                            <li className="my-1">
                                Skin prone to premature formation of wrinkles with sagging face contours
                            </li>
                            <li className="my-1">
                                Some forms of hyperpigmentation
                            </li>
                        </ul>
                        <span><strong className="mr-2">Package price when pre-booked & pre-paid:</strong>3 treatments for $1110</span>
                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mb-0 md:mx-0"
                        />
                    </div>
                    <div className="xl:w-1/2 xxl:w-1/3">
                        <iframe
                            loading="lazy"
                            className="w-full h-[400px] lg:h-full"
                            src="https://www.youtube.com/embed/CZF6C5yt818"
                            title="GREEN PEEL® Herbal Peeling Classic - by Dr. med. Schrammek Kosmetik" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </Card>
                <Card cardBodyClass="flex flex-col xl:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col xl:w-1/2 xxl:w-2/3 p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Green Peel® Energy</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$320</strong></span>
                        <h4 className="text-base md:text-xl my-1">
                            The vitality & regeneration kick without peeling effect - this treatment with natural herbs noticeably provides energy.
                        </h4>
                        <p className="my-2">
                            The Green Peel Energy stimulates blood circulation and metabolism and thus leads to a natural improvement of the skin texture without any peeling effect. GREEN PEEL® Energy provides your skin with the natural energy it needs to renew the cells. It helps to reduce age-related skin appearances as well as impurities, scarring and pigment disorders. The treatment visibly improves the skin’s appearance and harmonizes its surface. It works ideally as repeated, intensive salon treatment several times a year.
                        </p>
                        <h5 className="my-2 font-bold text-lg">
                            The Green Peel® Energy is ideal for:
                        </h5>
                        <ul className="my-2 ml-4 list-disc">
                            <li className="my-1">
                                Impurities
                            </li>
                            <li className="my-1">
                                Wrinkles
                            </li>
                            <li className="my-1">
                                Pigment Disorders
                            </li>
                            <li className="my-1">
                                Uneven skin & scars
                            </li>
                        </ul>
                        <span><strong className="mr-2">Package price when pre-booked & pre-paid:</strong>3 treatments for $870</span>
                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mb-0 md:mx-0"
                        />
                    </div>
                    <div className="xl:w-1/2 xxl:w-1/3">
                        <iframe
                            loading="lazy"
                            className="w-full h-[400px] xl:h-full"
                            src="https://www.youtube.com/embed/-2U4r-dmpI4"
                            title="GREEN PEEL® Herbal Peeling Energy- by Dr. med. Schrammek Kosmetik" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </Card>
                <Card cardBodyClass="flex flex-col xl:flex-row" cardWrapperClass="my-4">
                    <div className="flex flex-col p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Green Peel® Fresh Up</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$310</strong></span>
                        <h4 className="text-base md:text-xl my-1">
                            Green Peel® Fresh Up is the gentlest of the treatments methods - the skin is stimulated and refreshed-completely without peeling.
                        </h4>
                        <p className="my-2">
                            The natural herbs help to stimulate circulation, as pores open and the skin optimally absorb ingredients.  Green Peel® Fresh Up lets the skin radiate with new freshness. Cells are vitalised and skin quality is sustainably improved-the perfect treatment for tired appearing skin. The Fresh Up is perfect against premature skin aging and loss of elasticity-even or especially when the skin does not show any visible signs of aging yet.
                        </p>
                        <h5 className="my-2 font-bold text-lg">
                            The Green Peel® Fresh Up is ideal for:
                        </h5>
                        <ul className="my-2 ml-4 list-disc">
                            <li className="my-1">
                                Tired appearing skin
                            </li>
                            <li className="my-1">
                                First signs of skin aging
                            </li>
                            <li className="my-1">
                                Pale complexion
                            </li>
                            <li className="my-1">
                                Special occasions etc.
                            </li>
                        </ul>
                        <span><strong className="mr-2">Package price when pre-booked & pre-paid:</strong>3 treatments for $840</span>
                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mb-0 md:mx-0"
                        />
                    </div>
                </Card>
            </section>
            <section className="flex flex-col items-center p-4" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default HerbalGreenPeel

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Herbal Green Peel Ottawa - Chemical & Acid-Free, Natural Treatment of Damaged Skin, Stretch Marks & More"
                pageDescription="GREEN PEEL® is an acid-free herbal formulation of natural active ingredients designed to effectively treat sun-damaged skin, stretch marks, acne scarring & more, even for those with sensitive skin."
                pageKeywords="Herbal, Herbal Green Peel, Acid-free, No-chemical, acid free, no chemical, sun damaged, stretch marks, wrinkles, anti aging, Facial, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/herbal-green-peel/"
                pageImage="https://www.essenceofbeauty.ca/images/greenPeelFeature.png"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/herbal-green-peel/" />
        </>
    )
} 
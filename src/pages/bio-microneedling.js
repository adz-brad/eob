import React, { useState } from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Accordion from '../components/accordion'
import Card from '../components/card'
import Seo from '../components/seo'

const BioMicroneedling = () => {

    const [gallery, setGallery] = useState('acne')

    return (
        <>

            <Banner
                heading="Bio Microneedling"
                gradient="from-black/10 via-black/20 to-black/50"
                image={<StaticImage alt="Essence of Beauty Ottawa - Bio Microneedling" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBioPeel1.jpg?raw=true" />}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2"> New Skin in 7 Days with  Bio Microneedling</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Experience the next level in skin rejuvenation with Bio Microneedling</h2>
                    <p className="my-1">
                        Bio Microneedling is a natural and vegan-friendly treatment that combines precise techniques with advanced yet gentle methods to transform your skin. This effective therapy promotes a youthful, radiant glow in 7 days while addressing various skin concerns.
                    </p>
                    <p className="my-1">
                        Available exclusively at Essence of Beauty Ottawa, Bio Microneedling offers a revolutionary alternative to traditional microneedling and exfoliating acids. Ideal for all skin types, it leverages powerful healing properties to activate the body’s natural scar-repair process and accelerate skin cell renewal.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "bio-microneedling-info" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBioPeel2.jpg?raw=true"
                    alt="Essence of Beauty Bio Microneedling Treatment"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="bio-microneedling-info" className="flex flex-col m-4 p-4 lg:p-8 lg:m-8 bg-lightGreen rounded-sm shadow-md">
                <div className="lg:p-8">
                    <h2 className="text-2xl md:text-4xl mb-4">What is Bio Microneedling?</h2>
                    <p className="my-1">
                        Free from traditional needles, Bio Microneedling is powered by nature’s finest—biological microparticles raw purified solution spicules. These microscopic needles are extracted from freshwater sponges and deliver unparalleled results that traditional microneedling can only dream of.
                    </p>
                    <p className="my-1">
                        One Bio Microneedling treatment is the equivalent of 3-5 traditional microneedling sessions. Spongilla spicules contain essential nutrients and minerals, reaching deep into the skin’s dermal layer to boost collagen and elastin production. Enhanced by patented purification technology, these microscopic bio-needles penetrate pores to activate skin microcirculation, relieve clogged pores, and accelerate skin metabolism. This process exfoliates aging skin cells, reducing the skin's renewal cycle from 28 days to just 5-7 days, compared to traditional microneedling.
                    </p>
                    <ul className="my-4 ml-4 list-disc">
                        <li className="my-1">
                            <span className='font-bold'>Rich in Nutrients</span>
                            <p>
                                Spongilla spicules nourish skin cells from within, stimulating collagen and elastin production for youthful vibrancy.
                            </p>
                        </li>
                        <li className="my-1">
                            <span className='font-bold'>Unmatched Formula Purity
                            </span>
                            <p>
                                Pure endoskeleton acupuncture powder penetrates pores more effectively than any device, ensuring a gentle yet powerful treatment experience.

                            </p>
                        </li>
                        <li className="my-1">
                            <span className='font-bold'>Biocompatible & 100% Natural</span>
                            <p>
                                Extracted from freshwater sponges, these 100% natural bio-microneedles are gentle enough for all skin types and safe to use anywhere on the body.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="flex my-4 lg:w-1/2 lg:p-16 lg:-m-8 lg:-translate-x-8 lg:mr-8">
                        <StaticImage
                            loading="lazy"
                            src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBioPeel3.jpg?raw=true"
                            alt="Essence of Beauty Bio Microneedling Treatment"
                            className="mx-auto rounded-sm shadow-md"
                        />
                    </div>
                    <div className="lg:w-1/2 flex flex-col lg:-translate-x-8 lg:mr-8 my-4">
                        <h2 className="text-2xl md:text-4xl mb-2">Key Benefits</h2>
                        <h3 className="text-base md:text-xl mb-4 font-bold text-brown">Which Skin concerns can benefit from Bio Microneedling?</h3>
                        <ul className="my-2 ml-4 list-disc">
                            <li className="my-1">
                                Suitable for all skin tones and skin types: is designed for all skin tones including Asian, Black and Indian skin, from Fitzpatrick I to VI, and is particularly beneficial for sensitive skin.
                            </li>
                            <li className="my-1">
                                Active Acne Balancing and Preventing Future Breakouts
                            </li>
                            <li className="my-1">
                                Wrinkles and Fine Lines
                            </li>
                            <li className="my-1">
                                Collagen Production
                            </li>
                            <li className="my-1">
                                Improves Post-Acne Scars
                            </li>
                            <li className="my-1">
                                Discoloration
                            </li>
                            <li className="my-1">
                                Balancing Oil Production
                            </li>
                            <li className="my-1">
                                Enlarged Pores, Blackheads
                            </li>
                            <li className="my-1">
                                Pigmentation & Sunspots
                            </li>
                            <li className="my-1">
                                Brightens Dull Skin
                            </li>
                            <li className="my-1">
                                Texture & Tone
                            </li>
                            <li className="my-1">
                                Melasma
                            </li>
                            <li className="my-1">
                                Rosacea
                            </li>
                        </ul>
                        <Button
                            data={{ text: "See The Results!", anchor: "bio-microneedling-results" }}
                            className="buttonLight bg-white mt-8 mx-auto md:mx-0"
                        />
                    </div>
                </div>
            </div>
            <div id="bio-microneedling-results" className="my-8 flex flex-col p-4 md:p-8">
                <h2 className="text-2xl md:text-4xl text-center my-8">
                    Bio Microneedling Results for Various Conditions
                </h2>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-16 mt-8 mx-auto max-w-screen-xxl w-full">
                    <li
                        className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors ${gallery === 'acne' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                        onClick={() => setGallery('acne')}
                        onKeyDown={() => setGallery('acne')}
                    >
                        Acne
                    </li>
                    <li
                        className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors ${gallery === 'aging' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                        onClick={() => setGallery('aging')}
                        onKeyDown={() => setGallery('aging')}
                    >
                        Aging
                    </li>
                    <li
                        className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors ${gallery === 'hyperpigmentation' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                        onClick={() => setGallery('hyperpigmentation')}
                        onKeyDown={() => setGallery('hyperpigmentation')}
                    >
                        Pigmentation
                    </li>
                </ul>
            </div>
            <div className="p-4 md:p-8 max-w-screen-xxl mx-auto">
                {gallery === 'acne' ?
                    <Gallery
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16"
                        imageClass="rounded-sm shadow-md"
                        images={[
                            <StaticImage
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne1.jpg?raw=true"
                                alt="Bio Microneedling Before & After"
                            />,
                            <StaticImage
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne2.jpg?raw=true"
                                alt="Bio Microneedling Before & After"
                            />,
                            <StaticImage
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne3.jpg?raw=true"
                                alt="Bio Microneedling Before & After"
                            />,
                            <StaticImage
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne4.jpg?raw=true"
                                alt="Bio Microneedling Before & After"
                            />,
                        ]}
                    />
                    : gallery === 'aging' ?
                        <Gallery
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16"
                            imageClass="rounded-sm shadow-md"
                            images={[
                                <StaticImage
                                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging1.png?raw=true"
                                    alt="Bio Microneedling Before & After"
                                />,
                                <StaticImage
                                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging2.png?raw=true"
                                    alt="Bio Microneedling Before & After"
                                />,
                                <StaticImage
                                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging3.png?raw=true"
                                    alt="Bio Microneedling Before & After"
                                />,
                                <StaticImage
                                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging4.jpg?raw=true"
                                    alt="Bio Microneedling Before & After"
                                />,
                                <StaticImage
                                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging5.jpg?raw=true"
                                    alt="Bio Microneedling Before & After"
                                />,
                            ]}
                        />
                        : gallery === 'hyperpigmentation' ?
                            <Gallery
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16"
                                imageClass="rounded-sm shadow-md"
                                images={[
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation1.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation2.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation3.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation4.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation5.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation6.png?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation7.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation8.png?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation9.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                    <StaticImage
                                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation10.jpg?raw=true"
                                        alt="Bio Microneedling Before & After"
                                    />,
                                ]}
                            />
                            : null}
            </div>
            <div className="p-4 lg:my-8 lg:p-8 flex flex-col items-center">
                <h2 className="text-2xl md:text-4xl mt-4 mb-8">Frequently Asked Questions</h2>
                <Accordion
                    className="p-4 md:p-8 bg-white"
                    items={[
                        {
                            heading: 'How Does Bio Microneedling different from traditional microneedling? ',
                            content: <div className='flex flex-col space-y-4'>
                                <p>One Bio Microneedling treatment is the equivalent of 3-5 traditional microneedling sessions. It takes an average of 28 days to see the final results with traditional micro-needling treatments, however, with Bio Microneedling, it only takes between 5-7 to enjoy the full results! Bio Microneedling creates 3-5 million micro-channels in the skin for maximum nutrient delivery. By comparison, dermarolling and traditional microneedling treatments only create 30,000 micro-channels.</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Bio Microneedling</th>
                                            <th>Traditional Microneedling</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 session</td>
                                            <td>3-5 sessions</td>
                                        </tr>
                                        <tr>
                                            <td>3000% product absorption</td>
                                            <td>500% product absorption</td>
                                        </tr>
                                        <tr>
                                            <td>7-day cell turnover</td>
                                            <td>28-day cell turnover</td>
                                        </tr>
                                        <tr>
                                            <td>3-5 million micro-channels</td>
                                            <td>Less than 200,000 micro-channels</td>
                                        </tr>
                                        <tr>
                                            <td>No risk of infection</td>
                                            <td>Risk of infection</td>
                                        </tr>
                                        <tr>
                                            <td>15-minute application</td>
                                            <td>30-minute application</td>
                                        </tr>
                                        <tr>
                                            <td>No skin penetration or numbing cream</td>
                                            <td>Skin penetration, requires numbing cream</td>
                                        </tr>
                                        <tr>
                                            <td>Can be used on active acne</td>
                                            <td>Cannot be used on active acne</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        },
                        {
                            heading: 'Can Bio Microneedling help with Acne Scars?',
                            content: <p>Yes! Bio Microneedling is effective at reducing the appearance of active acne and acne scarring by promoting collagen and elastin production, which helps smooth and repair the skin.</p>
                        },
                        {
                            heading: 'What is the aftercare for Bio Microneedling?',
                            content: <p>The Bio Microneedling treatment requires the use specifically designed products to help lift the epidermal layer of the skin. These home care products have been specially designed to work in tandem with the Bio Microneedling to support the healing process and prevent skin irritation during renewal. The skin heals 9 times faster on the first application, and after 6 hours the hydration of the skin increases by 125%.</p>
                        },
                        {
                            heading: 'Can I use it to care for sensitive skin?',
                            content: <p>Yes, it can also be used on sensitive skin. This product does not cause skin allergies, instead, it improves the skin condition and keeps your skin looking healthy.</p>
                        },
                        {
                            heading: 'Do I need to schedule the consultation?',
                            content: <p>Yes. This is a critical component of the treatment for both you and us. On the consultation would be a great opportunity to ask us any questions and we will explain the therapy, what it involves, and if it’s right for you.</p>
                        },
                    ]}
                />
            </div>
            <div className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <h2 className="text-2xl md:text-4xl my-4">
                        Which Bio Microneedling is for me?
                    </h2>
                    <div className="flex flex-col my-4">
                        <h3 className="text-base md:text-xl font-bold mb-2 text-brown">
                            Repair & Resurface
                        </h3>
                        <p className="my-1">
                            Transform oily, combination, or acne-prone skin with a treatment designed to repair and resurface. Experience a visible reduction in breakouts, fading of acne scars, and a boost in your skin’s health and natural radiance for a flawless, glowing complexion.

                        </p>
                    </div>
                    <div className="flex flex-col my-4">
                        <h3 className="text-base md:text-xl font-bold mb-2 text-brown">
                            Revitalise
                        </h3>
                        <p className="my-1">
                            From pigmentation to dryness or sensitivity. Infused with a clinically-approved botanical blend, this treatment targets a range of skin concerns while refining texture and evening-out tone, leaving you with a smoother, more radiant complexion.
                        </p>
                        <p className="my-1">
                            Infuse life back into your skin with this deeply restorative therapy, designed to rejuvenate from within. Repair damaged collagen fibres, restore hydration, and reduce trans-epidermal water loss.
                        </p>
                    </div>
                    <div className="flex flex-col my-4">
                        <h3 className="text-base md:text-xl font-bold mb-2 text-brown">
                            Anti-Aging
                        </h3>
                        <p className="my-1">
                            Reveal your most radiant, youthful skin with a treatment designed for all skin types. Infused with potent anti-aging peptides, this gentle yet highly effective system smooths, firms, and rejuvenates without peeling or downtime. Perfect as a pre-event solution, it delivers effortless, ageless beauty, ensuring your skin looks flawless and glowing when it matters most.
                        </p>
                    </div>
                    <div className="flex flex-col my-4">
                        <h3 className="text-base md:text-xl font-bold mb-2 text-brown">
                            Nourish & Hydrate (Post-care Treatment)
                        </h3>
                        <p className="my-1">
                            Invigorate your skin from within with this skin-boosting treatment designed to replenish damaged skin, repair collagen fibres and reduce trans-epidermal water loss.
                        </p>
                    </div>
                    <div className="my-2 flex flex-col">
                        <span><strong className="mr-2">Single Treatment:</strong>$235</span>
                        <span>Plus post-care products.</span>
                    </div>
                    <div className="my-2 flex flex-col">
                        <span><strong className="mr-2">Package Prices when pre-booked & pre-paid:</strong>3 for $645</span>
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

export default BioMicroneedling

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Bio Microneedling - Natural, Acid-free, Vegan Facial Peeling"
                pageDescription="Bio Microneedling is a new dimension of facial treatment & peeling offered by Essence of Beauty Ottawa as an alternative to laser therapy and exfoliating acid designed to treat acne, scars, signs of aging & more."
                pageKeywords="Restorative, Anti-aging, Aging, Laser replacement, Vegan Peel, Bio Peel, Natural Peel, Acid Free Peel, Skin Peel, Peel, Bio Peel, Biopeel, Natural, Restore, Hyperpigmentation, Aging, Anti Aging, Anti-aging, Skincare, Safe, Renew, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/restorative-bio-peel/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/featuredTreatment-restorativeBio.jpg?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/restorative-bio-peel/" />
        </>
    )
} 
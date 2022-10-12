import React, { useState } from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Accordion from '../components/accordion'
import Card from '../components/card'
import Seo from '../components/seo'

const RestorativeBioPeel = () => {

    const [ gallery, setGallery ] = useState('acne')

  return (
    <>
        
        <Banner
            heading="Restorative Bio Peel"
            gradient="from-black/10 via-black/20 to-black/50"
            image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBioPeel1.jpg?raw=true"/>}
        />
        <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
            <div className="flex flex-col md:w-1/2 mx-auto">
                <h1 className="font-bold mb-2">Enhance The Natural Beauty of Your Skin!</h1>
                <h2 className="mt-2 mb-4 subheader">Treat yourself to a restorative and reinvigorating customized Vegan Facial Peel</h2>
                <p className="my-1">
                Restorative Bio Peel is a new dimension of facial treatment offered by Essence of Beauty Ottawa which can be used as a replacement for laser therapy and exfoliating acid. It has exceptional curative properties for every skin type. Stimulate the body’s scar-healing response and increase skin cell renewal. The creation of collagen and elastin is initiated as your skin heals, giving you an almost instant plumping effect. It also aids in the treatment of scars, acne, dark marks, sun exposure, and skin aging. 
                </p>
                <Button
                    data={{text: "Learn More", anchor: "restorative-bio-peel-info"}}
                    className="buttonLight my-8 mx-auto md:mx-0"
                />
            </div>
            <StaticImage 
                    loading="eager"
                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBioPeel2.jpg?raw=true"
                alt="Essence of Beauty Restorative Bio Peel Treatment"
                className="md:w-1/3 mx-auto rounded-sm shadow-md"
            />
        </div>
        <div id="restorative-bio-peel-info" className="flex flex-col m-4 p-4 lg:p-8 lg:m-8 bg-lightGreen rounded-sm shadow-md">
                <div className="lg:p-8">
                    <h1 className="mb-4">How Does The Restorative Bio Peel Work?</h1>
                    <p className="my-1">
                    The peeling is based on using biological microparticles a raw purified solution from a natural freshwater sponge, rich in minerals is placed onto the top layer of the skin and massaged to stimulate its circulation. By Penetrating the skin makes fine wounds activate dermal cells by stimulating the skin for 36 to 72 hours, causing peeling of waste and giving oxygen and nutrients to the skin. Through the natural exfoliating effect skin restores its original health and peels off the skin cells. 
                    </p>
                    <p className="my-1">
                    Restorative Bio Peel has no side effects, it is suitable for all skin types because the ingredients are all biological, free of any chemicals or acids, and ingredients harmful to the skin. 
                    </p>
                    </div>
                <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="flex lg:w-1/2 lg:p-16 lg:-m-8 lg:-translate-x-8 lg:mr-8">
                <StaticImage 
                        loading="lazy"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBioPeel3.jpg?raw=true"
                    alt="Essence of Beauty Restorative Bio Peel Treatment"
                    className="mx-auto rounded-sm shadow-md"
                />
                </div>
                <div className="lg:w-1/2 flex flex-col lg:-translate-x-8 lg:mr-8">
                <h1 className="mb-2">The Benefits</h1>
                <h4 className="mb-4 font-bold text-brown">The Main Benefits of Restorative Bio Peel:</h4>
                <ul className="my-2 ml-4 list-disc">
                    <li className="my-1">
                    Elimination of fine wrinkles, Smoothing out furrows and deep wrinkles
                    </li>
                    <li className="my-1">
                    Improves the structure of the skin
                    </li>
                    <li className="my-1">
                    Whitening
                    </li>
                    <li className="my-1">
                    Can aid in the fading of dark patches and pigmentation from sun exposure or aging
                    </li>
                    <li className="my-1">
                    Stimulates the production of collagen
                    </li>
                    <li className="my-1">
                    Skin rejuvenation
                    </li>
                    <li className="my-1">
                    Significant improvement in the condition of dull and tired skin
                    </li>
                    <li className="my-1">
                    Acne, pimples, enlarged pores, blackheads
                    </li>
                    <li className="my-1">
                    Scars from acne can be successfully treated, and an inconsistent texture can be smoothed out
                    </li>
                    <li className="my-1">
                    Uneven skin tone, gray complexion, bad skin condition
                    </li>
                    <li className="my-1">
                    Regulation of sebaceous glands 
                    </li>
                </ul>
                <Button
                    data={{text: "See The Results!", anchor: "restorative-bio-peel-results"}}
                    className="buttonLight bg-white mt-8 mx-auto md:mx-0"
                />
                </div>
            </div>
        </div>
        <div id="restorative-bio-peel-results" className="my-8 flex flex-col p-4 md:p-8">
                <h1 className="text-center my-8">
                Restorative Bio Peel Results for Various Conditions
                </h1>
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
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne2.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne3.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-acne4.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
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
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging2.png?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging3.png?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging4.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-aging5.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
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
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation2.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation3.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation4.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation5.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation6.png?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation7.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation8.png?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation9.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                            <StaticImage 
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/restorativeBio-hyperpigmentation10.jpg?raw=true" 
                                alt="Restorative Bio Peel Before & After" 
                            />,
                        ]}
                    />
                : null }
                </div>
        <div className="p-4 lg:my-8 lg:p-8 flex flex-col items-center">
                <h1 className="mt-4 mb-8">Frequently Asked Questions</h1>
                <Accordion
                    className="p-4 md:p-8 bg-white"
                    items={[
                        {
                            heading: 'Can I use it to care for sensitive skin?',
                            content: <p>Yes, it can also be used on sensitive skin, unless you are allergic to natural silicones. This product does not cause skin allergies, instead, it improves the skin condition and keeps your skin looking healthy. However, it is not recommended for people with very thin layers of skin.</p>
                        },
                        {
                            heading: 'Do I need to schedule the consultation?',
                            content: <p>Yes. This is a critical component of the treatment for both you and us. On the consultation would be a great opportunity to ask us any questions and we will explain the therapy, what it involves, and if it’s right for you.</p>
                        },
                        {
                            heading: 'What will be the major changes in my appearance after the procedure?',
                            content: <p>You will experience redness around the area for a few hours after the treatment, similar to moderate sunburn. Warmth and minor tightness of the skin. This will usually go away within a day.</p>
                        },
                        {
                            heading: 'How long do the results take to appear?',
                            content: <p>This will be determined by your cellular renewal process. It can take up to 7 days whilst the new baby skin fully appears to observe any benefits, but the regeneration process will continue for several months, resulting in a steady improvement.</p>
                        },
                        {
                            heading: 'How many treatments should be performed for the full effect?',
                            content: <p>Depends on specific skin problems. In general, typical skin diseases such as pimples and acne require 3-4 treatments, more serious problems require more treatments, while skin with wrinkles, large pores, and skin damage requires 4 treatments. This will be determined by several factors, including your age, the quality of your skin, and the extent of your damage. The therapy gives amazing results after the first treatment, but in most situations, a series of 4 treatments are needed, especially if we are targeting any pigmentation or acne scars. </p>
                        },
                        {
                            heading: 'What is the aftercare for Restorative Bio-Peel?',
                            content: <p>The Restorative Bio Peel treatment requires the use specifically designed products to help lift the epidermal layer of the skin. These home care products have been specially designed to work in tandem with the Restorative Bio Peel to support the peeling process and prevent skin irritation during renewal. The skin heals 9 times faster on the first application, and after 6 hours the hydration of the skin increases by 125%.</p>
                        },
                    ]}
                />
        </div>
        <div className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <h1 className="my-4">
                    Treatment Options
                    </h1>
                    <p className="my-1">
                    Essence of Beauty offers two types of Restorative Bio Peels. The first, is the Revitalizing Bio Peel and the second type is the Rejuvenating Anti-Aging Bio Peel. The two strengths of Bio Peel can be adjusted according to the problems and needs of the client's skin. 
                    </p>
                    <div className="flex flex-col my-4">
                        <h4 className="font-bold mb-2 text-brown">Revitalizing Bio Peel</h4>
                        <p className="my-1">
                        Intended for skin with sun or hormonal discoloration, acne scars, flabby skin with a loss of firmness, and restores the hydro-lipid balance. Has an anti-aging effect, is ideal for dry skin with clear signs of fatigue and loss of vitality, and is perfect for sensitive skin. It helps to achieve cell regeneration in the epidermis. After use, the skin will be relatively smoother and much more delicate.
                        </p>
                        <div className="my-2 flex flex-col">
                            <span><strong className="mr-2">Single Treatment:</strong>$235</span>
                            <span>Plus post-care products.</span>
                        </div>
                        <div className="my-2 flex flex-col">
                            <span><strong className="mr-2">Package Prices when pre-booked & pre-paid:</strong>3 for $620</span>
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <h4 className="font-bold mb-2 text-brown">Rejuvenation Anti-Aging Bio Peel</h4>
                        <p className="my-1">
                        The perfect combination of bio-microparticles and various peptide ingredients is recommended for aging, skin. With clear signs of aging, and wrinkles. The anti-aging set firms and lifts the skin, improves its elasticity, remodels, and rejuvenates.
                        </p>
                        <div className="my-2 flex flex-col">
                            <span><strong className="mr-2">Single Treatment:</strong>$335</span>
                            <span>Plus post-care products.</span>
                        </div>
                        <div className="my-2 flex flex-col">
                            <span><strong className="mr-2">Package Prices when pre-booked & pre-paid:</strong>3 for $855</span>
                        </div>
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

export default RestorativeBioPeel

export const Head = () => {
    return(
        <>
        <Seo
            pageTitle="Restorative Bio Peel"
            pageTitleDescription="Natural, Acid-free, Vegan Skin Treatment To Help Restore Your Skin To It's Natural Beauty!"
            pageDescription="Restorative Bio Peel is a new dimension of facial treatment offered by Essence of Beauty Ottawa which can be used as a replacement for laser therapy and exfoliating acid. It has exceptional curative properties for every skin type."
            pageKeywords="Restorative, Vegan Peel, Bio Peel, Natural Peel, Acid Free Peel, Skin Peel, Peel, Bio Peel, Biopeel, Natural, Restore, Hyperpigmentation, Aging, Anti Aging, Anti-aging, Skincare, Safe, Renew, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
            pageUrl="https://www.essenceofbeauty.ca/restorative-bio-peel/"
            pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/featuredTreatment-restorativeBio.jpg?raw=true"
        />
        <link rel="canonical" href="https://www.essenceofbeauty.ca/restorative-bio-peel/" />
        </>
    )
  } 
import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import { IoPlaySharp } from 'react-icons/io5'
import Gallery from '../components/gallery'
import Seo from '../components/seo'
import dmkVideo from '../assets/video/dmkVideo.webm'
import dmkEnzymeMasqueVideo from '../assets/video/DMKEnzymeMasque.webm'

const DMKTherapy = () => {

    const [playVideo, setPlayVideo] = useState(false)
    const [gallery, setGallery] = useState('acne')

    return (
        <>

            <section className="" aria-labelledby="dmk-therapy-heading">
                <div className="flex flex-col-reverse xl:flex-row lg:items-center">
                    <div className="flex flex-col xl:w-1/2 lg:mx-auto md:mr-8 px-4 md:px-8 xl:px-16">
                        <h1 id="dmk-therapy-heading" className="mt-8 lg:mt-10 mb-2 font-semibold text-2xl xl:text-4xl">Treat Acne, Rosacea & More With The Power of DMK</h1>
                        <p className="my-2">
                            Essence of Beauty Ottawa is a leading expert in the use of DMK Enzyme Therapy for treating skin conditions including acne, rosacea, sun-damage, signs of aging, pigmentation, scarring and reactive skin, to name just a few.
                        </p>
                        <h2 className="text-xl md:text-3xl mt-2 subheader">
                            Benefits of choosing DMK Enyzme therapy include:
                        </h2>
                        <ul className="list-disc ml-4 my-2">
                            <li className="my-1">
                                Glowing complexion & Hydrated skin
                            </li>
                            <li className="my-1">
                                Smoother, more even skin tone
                            </li>
                            <li className="my-1">
                                Safe and painless skin rejuvenation and tightening treatment
                            </li>
                            <li className="my-1">
                                Firmer & Tighter Skin
                            </li>
                            <li className="my-1">
                                Reduced Fine Lines
                            </li>
                            <li className="my-1">
                                Penetrates deeper in the skin and stimulates collagen and elastin production
                            </li>
                            <li className="my-1">
                                Removes toxins and dead proteins and provides excellent results of skin tightening
                            </li>
                        </ul>
                        <Button
                            data={{ text: "Learn More", anchor: "dmk-enyzyme-therapy-more-info" }}
                            className="buttonLight my-8 mx-auto lg:mx-0"
                        />
                    </div>
                    <div className="xl:w-1/2 h-[680px]">
                        {playVideo ?
                            <video height="600" autoPlay playsInline controls muted loop className="h-full w-full">
                                <source src={dmkVideo} type="video/webm" />
                                <track kind="captions" />
                            </video>
                            :
                            <button className="relative h-full" onClick={() => setPlayVideo(true)}>
                                <div className="transition-colors hover:bg-darkGreen flex flex-col items-center justify-center absolute left-1/2 xl:left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-green h-[100px] w-[100px] xl:h-[200px] xl:w-[200px]">
                                    <IoPlaySharp className="ml-2 xl:ml-4 text-6xl xl:text-8xl text-white" />
                                </div>
                                <div className="w-full h-full bg-gradient-to-t from-green/50 to-green/10 absolute top-0 left-0 z-40"></div>
                                <StaticImage
                                    loading="eager"
                                    src="../assets/images/dmkHeader.jpg"
                                    alt="Essence of Beauty Ottawa DMK Enzyme Therapy"
                                    className="z-30 h-full"
                                />
                            </button>
                        }
                    </div>
                </div>
            </section>
            <section id="dmk-enyzyme-therapy-more-info">
                <div className="flex flex-col lg:flex-row md:items-center bg-lightGreen rounded-sm shadow-lg mb-8 p-4 md:p-8">
                    <div className="flex flex-col lg:w-2/3 md:mx-8">
                        <h2 className="text-2xl md:text-4xl mb-4">Why Choose DMK Over Other Therapies?</h2>
                        <p className="my-2">
                            DMK has established a global reputation for their enzyme treatments, making them the leader in enzyme oxygen therapy. While other therapies claim effectiveness through the application of oxygenated creams or even compressed air, in extreme cases, no treatment has proven to be as effective as the deep treatment therapies offered through DMK. Also, many of these other treatments are considered unhealthy and dangerous, possibly even worsening underlying skin conditions.
                        </p>
                        <p className="my-2">
                            By harnessing the positive attributes of enzymes, DMK therapy can stimulate and improve the natural processes of your body to encourage healthy cell development. This process aids in the natural removal of toxins, dead proteins and other dangerous and odour producing chemicals from the body while simultaneously restoring the healthy lymphatic functions that produce younger looking and performing skin.
                        </p>
                        <p className="my-2">
                            DMK ENZYME THERAPY works because it was designed to emulate the way your skin works naturally. Now you can eliminate all your skin concerns and experience real results in the most natural and painless way possible. This plasmatic effect will calm down within about 20 minutes of the Masque being removed but shows the dilation of the capillary network during the reverse osmosis process.
                        </p>
                        <p className="my-2">
                            There is nothing better than seeing a great plasmatic effect after an Enzyme Facial! It is suitable for all skin types, regardless of what your skin concerns are. Even the most reactive of skins will greatly benefit from Enzyme Therapy. Results are visible instantly and continue to improve over time. <strong>Regular treatments will maintain the best results.</strong>
                        </p>
                        <Button
                            data={{ text: "How It Works", anchor: "dmk-how-it-works" }}
                            className="buttonLight bg-white mt-8 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="bg-white p-4 my-8 lg:my-0 shadow-md rounded-sm mx-auto">
                        <StaticImage
                            loading="lazy"
                            src="../assets/images/dmkPlasmaticEffect.jpg"
                            alt="DMK Enzyme Therapy Plasmatic Effect"
                        />
                    </div>
                </div>
            </section>
            <section id="dmk-how-it-works" aria-labelledby="how-it-works-heading">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-3/5 lg:mx-auto md:mr-8 px-4 md:px-8 lg:px-16">
                        <h2 className="text-2xl md:text-4xl mt-8 mb-4">How Does DMK Enzyme Therapy Work?</h2>
                        <p className="my-2">Enzyme Therapy works by utilizing specialized transfer messenger enzymes which bring fresh oxygenated blood and nutrients to the cells by causing Reverse Osmosis which is a “back-flushing” action that forces fluids through the membrane around the cells, cleaning out all impurities and restoring vital cellular nutrition and oxygenation required for cellular regeneration. Reverse Osmosis is the actual effect of the enzyme treatment on your body, specifically within three targeted areas: The lymphatic system, facial blood vessels and facial muscles.</p>
                        <p className="my-2">
                            As the primary filtering system of the body, the lymphatic system consists of a network of organs and tissues whose job it is to remove toxins, waste, and other harmful materials from the vascular system. DMK therapy acts on the lymphatics system, encouraging excellent drainage, which is felt through the facial mask as a pulsating or tightening sensation by the client.
                        </p>
                        <p className="my-2">
                            The enzyme treatment, while helping to flush out impurities, also produces a fresh supply of necessary oxygenated blood vessels to your face and skin cells in a process called the Plasmatic Effect. The effect causes vessel dilation, increasing the oxygen retention in the vessels and allowing clients to notice the effects of the treatment visibly. In addition to bolstering the effectiveness of the lymphatic system and encouraging rich oxygenated blood, DMK therapy forces weak facial muscles into compliance through stimulation. Essentially, the enzymes force the muscles to tighten which promotes the development of stronger and healthier skin, providing you with firm, smooth skin.
                        </p>
                    </div>
                    <div className="lg:w-2/5 my-auto p-4 shadow-lg">
                        <video playsInline controls className="w-full">
                            <source src={`${dmkEnzymeMasqueVideo}#t=05`} type="video/webm" />
                            <track kind="captions" />
                        </video>
                    </div>
                </div>
            </section>
            <section className="my-8 flex flex-col p-4 md:p-8" aria-labelledby="dmk-results-heading">
                <h2 id="dmk-results-heading" className="text-2xl md:text-4xl text-center my-8">
                    DMK Results for Various Conditions
                </h2>
                <ul className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-16 mt-8 mx-auto max-w-screen-xxl w-full">
                    <li>
                        <button
                            onClick={() => setGallery('acne')}
                            className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors w-full ${gallery === 'acne' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                            aria-pressed={gallery === 'acne'}
                        >
                            Acne
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setGallery('aging')}
                            className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors w-full ${gallery === 'aging' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                            aria-pressed={gallery === 'aging'}
                        >
                            Aging
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setGallery('pigmentation')}
                            className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors w-full ${gallery === 'pigmentation' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                            aria-pressed={gallery === 'pigmentation'}
                        >
                            Pigmentation
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setGallery('reactiveSkin')}
                            className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors w-full ${gallery === 'reactiveSkin' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                            aria-pressed={gallery === 'reactiveSkin'}
                        >
                            Reactive Skin
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setGallery('scarring')}
                            className={`rounded-md p-4 text-xl font-headers cursor-pointer text-center hover:bg-green/70 transition-colors w-full ${gallery === 'scarring' ? 'font-bold bg-green shadow-mg text-white' : 'bg-lightGreen shadow-md'}`}
                            aria-pressed={gallery === 'scarring'}
                        >
                            Scarring
                        </button>
                    </li>
                </ul>
            </section>
            <section className="p-4 md:p-8 max-w-screen-xxl mx-auto" aria-labelledby="gallery-heading">
                {gallery === 'acne' ?
                    <Gallery
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap8 lg:gap-16"
                        imageClass="rounded-sm shadow-md"
                        images={[
                            <StaticImage
                                src="../assets/images/dmkExample1.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />,
                            <StaticImage
                                src="../assets/images/dmkExample2.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />,
                            <StaticImage
                                src="../assets/images/dmkExample3.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />,
                            <StaticImage
                                src="../assets/images/dmkExample4.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />,
                            <StaticImage
                                src="../assets/images/dmkExample5.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />,
                            <StaticImage
                                src="../assets/images/dmkExample6.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />,
                            <StaticImage
                                src="../assets/images/dmkExample7.jpg"
                                alt="DMK Enzyme Therapy Before & After"
                            />
                        ]}
                    />
                    : gallery === 'aging' ?
                        <Gallery
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            imageClass="rounded-sm shadow-md"
                            images={[
                                <StaticImage
                                    src="../assets/images/dmkAging1.jpg"
                                    alt="DMK Enzyme Therapy Before & After"
                                />,
                                <StaticImage
                                    src="../assets/images/dmkAging2.jpg"
                                    alt="DMK Enzyme Therapy Before & After"
                                />,
                                <StaticImage
                                    src="../assets/images/dmkAging3.jpg"
                                    alt="DMK Enzyme Therapy Before & After"
                                />,
                                <StaticImage
                                    src="../assets/images/dmkAging4.jpg"
                                    alt="DMK Enzyme Therapy Before & After"
                                />,
                                <StaticImage
                                    src="../assets/images/dmkAging5.jpg"
                                    alt="DMK Enzyme Therapy Before & After"
                                />
                            ]}
                        />
                        : gallery === 'pigmentation' ?
                            <Gallery
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                                imageClass="rounded-sm shadow-md"
                                images={[
                                    <StaticImage
                                        src="../assets/images/dmkPigmentation1.jpg"
                                        alt="DMK Enzyme Therapy Before & After"
                                    />,
                                    <StaticImage
                                        src="../assets/images/dmkPigmentation2.jpg"
                                        alt="DMK Enzyme Therapy Before & After"
                                    />,
                                    <StaticImage
                                        src="../assets/images/dmkPigmentation3.jpg"
                                        alt="DMK Enzyme Therapy Before & After"
                                    />,
                                    <StaticImage
                                        src="../assets/images/dmkPigmentation4.jpg"
                                        alt="DMK Enzyme Therapy Before & After"
                                    />
                                ]}
                            />
                            : gallery === 'reactiveSkin' ?
                                <Gallery
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                                    imageClass="rounded-sm shadow-md"
                                    images={[
                                        <StaticImage
                                            src="../assets/images/dmkReactiveSkin1.jpg"
                                            alt="DMK Enzyme Therapy Before & After"
                                        />,
                                        <StaticImage
                                            src="../assets/images/dmkReactiveSkin2.jpg"
                                            alt="DMK Enzyme Therapy Before & After"
                                        />,
                                        <StaticImage
                                            src="../assets/images/dmkReactiveSkin3.jpg"
                                            alt="DMK Enzyme Therapy Before & After"
                                        />
                                    ]}
                                />
                                : gallery === 'scarring' ?
                                    <Gallery
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                                        imageClass="rounded-sm shadow-md"
                                        images={[
                                            <StaticImage
                                                src="../assets/images/dmkScarring1.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />,
                                            <StaticImage
                                                src="../assets/images/dmkScarring2.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />,
                                            <StaticImage
                                                src="../assets/images/dmkScarring3.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />,
                                            <StaticImage
                                                src="../assets/images/dmkScarring4.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />,
                                            <StaticImage
                                                src="../assets/images/dmkScarring5.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />,
                                            <StaticImage
                                                src="../assets/images/dmkScarring6.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />,
                                            <StaticImage
                                                src="../assets/images/dmkScarring7.jpg"
                                                alt="DMK Enzyme Therapy Before & After"
                                            />
                                        ]}
                                    />
                                    : null}

            </section>
            <section className="flex flex-col p-4 md:p-8 md:mx-8 my-8 md:my-16" aria-labelledby="dmk-pricing-heading">
                <h2 id="dmk-pricing-heading" className="text-2xl md:text-4xl mb-4">DMK Pricing</h2>
                <Card cardBodyClass="flex flex-col lg:flex-row" cardWrapperClass="my-8">
                    <div className="flex flex-col lg:w-1/2 xl:w-2/3 p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Enzyme Therapy Level 1</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$199</strong>/ 1.20 hour</span>
                        <div className="my-auto">
                            <p className="my-1 md:text-lg">
                                DMK Signature Enzyme Therapy includes deep cleansing a light pre-exfoliation.
                            </p>
                            <p className="my-1 md:text-lg">
                                This treatment is suitable for first-timers and even for clients on Roaccutane.
                            </p>
                            <p className="my-1 md:text-lg">
                                DMK Enzyme Therapy restores skin to its peak condition, strengthening and restoring the skin’s structural integrity to create a healthy environment for cells to live and thrive in.
                            </p>
                        </div>

                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mt-auto md:mb-0 md:mx-0"
                        />
                    </div>
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/DMK-level-1.jpg"
                        alt="Enzyme Therapy Level 1"
                        className="lg:w-1/2 xl:w-1/3"
                    />
                </Card>
                <Card cardBodyClass="flex flex-col lg:flex-row" cardWrapperClass="my-8">
                    <div className="flex flex-col lg:w-1/2 xl:w-2/3 p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Enzyme Therapy Level 2</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$210</strong>/ 1.5 hour</span>
                        <div className="my-auto">
                            <p className="my-1 md:text-lg">
                                DMK Signature Enzyme Therapy with a customised Pre-Exfoliation incorporating one of the following Pro Alpha, Prozyme, Quick Peel, Desquamate or Exoderma.
                            </p>
                            <p className="my-1 md:text-lg">
                                An advanced skin resurfacing procedure that is specifically designed for acne, congested skin, premature ageing, wrinkles, fine lines and pigmentation. Powerful combinations of DMK products are used to achieve visible results.
                            </p>
                        </div>
                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mb-0  md:mx-0"
                        />
                    </div>
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/DMK-level-2.jpg"
                        alt="Enzyme Therapy Level 2"
                        className="lg:w-1/2 xl:w-1/3"
                    />
                </Card>
                <Card cardBodyClass="flex flex-col lg:flex-row" cardWrapperClass="my-8">
                    <div className="flex flex-col lg:w-1/2 xl:w-2/3 p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Enzyme Therapy Level 3</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$230</strong>/ 2.05 hour</span>
                        <div className="my-auto">
                            <p className="my-1 md:text-lg">
                                DMK Signature Enzyme Therapy with a customised Pre-Exfoliation incorporating one of the following Pro Alpha, Prozyme, Quick Peel, Desquamate or Exoderma falowing by extractions.
                            </p>
                            <p className="my-1 md:text-lg">
                                An advanced skin resurfacing procedure that is specifically designed for acne, congested skin, premature ageing, wrinkles, fine lines and pigmentation. Powerful combinations of DMK products are used to achieve visible results.
                            </p>
                        </div>
                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mt-auto md:mb-0  md:mx-0"
                        />
                    </div>
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/DMK-level-3.jpg"
                        alt="Enzyme Therapy Level 3"
                        className="lg:w-1/2 xl:w-1/3"
                    />
                </Card>
                <Card cardBodyClass="flex flex-col lg:flex-row" cardWrapperClass="my-8">
                    <div className="flex flex-col lg:w-1/2 xl:w-2/3 p-4 md:p-8">
                        <h3 className="text-2xl md:text-4xl">Muscle Banding with A-lift - Enzyme Masque #2 & #3</h3>
                        <span className="text-lg mt-1 mb-2"><strong className="mr-2 text-green">$200</strong>/ 1.20 hour</span>
                        <div className="my-auto">
                            <p className="my-1 md:text-lg">
                                DMK A-Lift® is a 12 week program designed to revise the signs of ageing and the health of your skin. By removing redundant skin cells and tightening facial muscles, the DMK A-Lift Muscle Banding Treatment works by stimulating the underlying structures of the skin. It gives the face its own workout, similar to how you would tone and tighten the body with exercise.
                            </p>
                            <p className="my-1 md:text-lg">
                                The DMK Muscle Banding technique is used in the A-Lift. To tighten and tone the skin, restoring a healthy youthful appearance. It works to reduce redness and unsightly capillaries in the skin and provides a vibrant appearance.
                            </p>
                            <p className="my-1 md:text-lg">
                                Performed weekly over a 12 week period, the A-Lift® uses transdermal delivered formulations that work with the skin’s functions to remind it to function as it did when it was young.
                            </p>
                        </div>
                        <Button
                            data={{ text: "Get Started", anchor: "contact" }}
                            className="buttonLight my-8 md:mt-auto md:mb-0 md:mx-0"
                        />
                    </div>
                    <StaticImage
                        loading="lazy"
                        src="../assets/images/dmk-muscle-banding.png"
                        alt="Muscle Banding with A-lift - Enzyme Masque #2 & #3"
                        className="lg:w-1/2 xl:w-1/3"
                    />
                </Card>
            </section>
            <section className="flex flex-col items-center p-4" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default DMKTherapy

export const Head = () => {
    const pageUrl = "https://www.essenceofbeauty.ca/dmk-enzyme-therapy/"
    
    // VideoObject schemas for videos on the page
    const videoSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "DMK Enzyme Therapy Treatment",
            "description": "DMK Enzyme Therapy treatment demonstration showing the effectiveness of enzyme oxygen therapy for treating acne, signs of aging, pigmentation, and scarring.",
            "thumbnailUrl": "https://www.essenceofbeauty.ca/images/dmkHeader.jpg",
            "uploadDate": "2024-01-01",
            "contentUrl": "https://www.essenceofbeauty.ca/video/dmkVideo.webm",
            "embedUrl": pageUrl
        },
        {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "DMK Enzyme Masque Treatment",
            "description": "DMK Enzyme Masque treatment showing the plasmatic effect and reverse osmosis process during enzyme therapy.",
            "thumbnailUrl": "https://www.essenceofbeauty.ca/images/dmkHeader.jpg",
            "uploadDate": "2024-01-01",
            "contentUrl": "https://www.essenceofbeauty.ca/video/DMKEnzymeMasque.webm",
            "embedUrl": pageUrl
        }
    ]

    return (
        <>
            <Seo
                pageTitle="DMK Enzyme Therapy Ottawa - Effective Treatment For Acne, Aging, Pigmentation, Scarring & More"
                pageDescription="DMK has established a global reputation for their enzyme treatments, making them the leader in enzyme oxygen therapy for acne, signs of aging, pigmentation, scarring & more."
                pageKeywords="DMK Enzyme Therapy, DMK, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/dmkHeader.jpg"
                additionalSchema={videoSchemas}
            />
            <link rel="canonical" href={pageUrl} />
        </>
    )
} 
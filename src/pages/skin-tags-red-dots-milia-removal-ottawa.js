import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import Button from '../components/button'
import { animateScroll as scroll } from "react-scroll"
import Seo from '../components/seo'

const SkinTags = () => {

    const scrollTo = (anchor) => {
        scroll.scrollTo(document.getElementById(anchor).offsetTop + 20, {
            duration: 500,
            smooth: true,
        })
    }

    return (
        <>

            <Banner
                heading="Skin Tags, Milia, Red Dots & Skin Growth Removal"
                gradient="from-black/60 via-black/30 to-black/20"
                image={<StaticImage alt="Essence of Beauty Ottawa - Skin Tags, Milia, Red Dots & Skin Growth Removal" src="../assets/images/skintagHeader.jpg" />}
            />
            <section className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8" aria-labelledby="skin-tags-heading">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 id="skin-tags-heading" className="text-2xl md:text-4xl font-bold mb-2">Skin Tags, Milia, Red Dots, Hyperpigmentation, Skin Growths Removal with Vascu-Lyse</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Essence of Beauty Ottawa treats your predisposition to various skin growths such as skin tags, keratosis and ruby points with our safe, non-invasive skin revision treatment therapies that permanently remove growths from your face and body in just one session!</h2>
                    <p className="my-1">
                        All treatments are performed using the strictest sanitary procedures. The treatment involves a cauterization machine that has been successfully used for over 30 years by skin care professionals to remove all types of common surface skin growths. The procedure is generally more effective and less painful than liquid nitrogen or laser.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "skin-tags-more-info" }}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="../assets/images/VascuLyse.webp"
                    alt="Rosacea Before & After Treatment Image"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </section>
            <section className="p-4 md:p-8 my-8" aria-labelledby="common-imperfections-heading">
                <Card cardBodyClass="p-4 md:p-8" cardWrapperClass="">
                    <h2 className="text-2xl md:text-4xl my-2">
                        Common Vascular Imperfections
                    </h2>
                    <span>Click on a topic to read more</span>
                    <ul className="my-4 list-disc ml-4">
                        <li>
                            <button
                                onClick={() => scrollTo('skin-tags')}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Skin Tags
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo('cherry-angiomas')}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Cherry Angiomas (Ruby Points, Red Dots)
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo("telangiectasia-spider-angiomas")}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Telangiectasia & Spider Angiomas
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo("milia")}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Milia
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo('sebaceous-hyperplasia')}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Sebaceous Hyperplasia
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo('hyperpigmentation')}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Flat Hyperpigmentation (Age & Sun Spots)
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo("seborreic-keratosis")}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Seborrheic Keratosis
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollTo("telangiectasia-spider-angiomas")}
                                className="my-1 text-lg cursor-pointer text-left w-full"
                            >
                                Broken Capillaries on the face
                            </button>
                        </li>
                    </ul>
                </Card>
            </section>
            <section id="skin-tags-more-info" className="flex flex-col lg:flex-row bg-lightGreen" aria-labelledby="skin-tags-heading">
                <div id="skin-tags" className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 className="text-2xl md:text-4xl mt-auto">
                        Skin Tags
                    </h2>
                    <p className="mt-4 mb-auto">
                        A <strong>Skin Tag</strong> is a common skin growth that looks like a small piece of hanging skin, often described as bits of skin-or flesh-coloured tissue that project from the surrounding skin from a small, narrow stalk. They typically occur on the neck, underarms, eyelids, and under the breasts. They are harmless and do not become cancerous or malignant. Skin tags are usually inherited. At Essence of Beauty we’ve performed hundreds of skin tag removals with excellent results. Our the most popular skin tag treatment involves cauterising the base of the skin tag to close the blood supply to the growth. This procedure is well suited to treating small or large skin tags because it accelerates healing with minimal pain and damage to the skin. Most of our clients prefer this method because it offers immediate results. The growth just drops off over a few days, and you can carry on your day normally after a treatment. Skin tags are completely removed with the first treatment.
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/skin-tags.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-l-md" />
            </section>
            <section id="cherry-angiomas" className="flex flex-col lg:flex-row-reverse bg-lightGreen" aria-labelledby="cherry-angiomas-heading">
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 id="cherry-angiomas-heading" className="text-2xl md:text-4xl mt-auto">
                        Cherry Angiomas (Ruby Points)
                    </h2>
                    <p className="mt-4 mb-auto">
                        <strong>Ruby Points</strong> – these little red dots are called cherry angiomas. They are made up of a cluster of tiny capillaries at the surface of the skin, and can range in color from bright red to purple. As they grow larger, they tend to expand in thickness, and may take on the raised and rounded shape of a dome and may be located on any part of the body. Everyone seems to develop a few, but the number is genetically determined. They usually appear in early adulthood; but the onslaught in those genetically inclined tends to increase as one approaches their 40s. Red dots considered to be painless and harmless. Removal is easy by Vascu-Lyse. They heal beautifully after treatment, and if properly treated they will not.
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/cherry-angions-ruby-spots.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-r-md" />
            </section>
            <section id="milia" className="flex flex-col lg:flex-row bg-lightGreen" aria-labelledby="milia-heading">
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 id="milia-heading" className="text-2xl md:text-4xl mt-auto">
                        Milia
                    </h2>
                    <p className="mt-4 mb-auto">
                        <strong>Milia</strong> often referred to as (milk spots), are keratin-filled cysts that can appear just under the epidermis. They are common in people of all ages, they appear mostly on the face. They are easily removed by Vascu-Lyse in one session.
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/milia.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-l-md" />
            </section>
            <section id="sebaceous-hyperplasia" className="flex flex-col lg:flex-row-reverse bg-lightGreen" aria-labelledby="sebaceous-hyperplasia-heading">
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 id="sebaceous-hyperplasia-heading" className="text-2xl md:text-4xl mt-auto">
                        Sebaceous Hyperplasia
                    </h2>
                    <p className="mt-4 mb-auto">
                        <strong>Sebaceous Hyperplasia</strong> is a common benign condition of sebaceous glands in adults of middle age or older. Lesions can be single or multiple and manifest as yellowish, soft, small papules on the face (particularly nose, cheeks, and forehead). Sebaceous hyperplasia occasionally also occurs on the chest, areola, mouth, foreskin.
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/sebaceous-hyperplasia.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-r-md" />
            </section>
            <section id="seborreic-keratosis" className="flex flex-col lg:flex-row bg-lightGreen" aria-labelledby="seborreic-keratosis-heading">
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 id="seborreic-keratosis-heading" className="text-2xl md:text-4xl mt-auto">
                        Seborrheic Keratosis
                    </h2>
                    <p className="mt-4 mb-auto">
                        <strong>Seborrheic Keratosis</strong> – are flesh-colored, brown, or black growths that can appear anywhere on the skin. Theses harmless growths are very common in middle-aged and older people. Seborrheic keratosis are round or oval and very in size. They appear to be stuck on the skin and often have a waxy or scaly surface. They are normally painless, and require no treatment. But often are removed for cosmetic reasons.
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/seborrheic-keratosis.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-l-md" />
            </section>
            <section id="hyperpigmentation" className="flex flex-col lg:flex-row-reverse bg-lightGreen" aria-labelledby="hyperpigmentation-heading">
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 id="hyperpigmentation-heading" className="text-2xl md:text-4xl mt-auto">
                        Flat Hyperpigmentation (Sun & Age Spots)
                    </h2>
                    <p className="mt-4 mb-auto">
                        Hyperpigmentation is a common, usually harmless condition in which patches of skin become darker in color then the normal surrounding skin. This darkening occurs when an excess of melanin, the brown pigment that produces normal skin color, forms deposits in the skin. Age or "liver" spots are a common form of hyperpigmentation. They occur due the sun damage. These small, darkened patches are usually found on the hands and face or other areas frequently exposed to the sun.
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/flat-hyperpigmentation-sun-age-spots.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-r-md" />
            </section>
            <section id="telangiectasia-spider-angiomas" className="flex flex-col lg:flex-row bg-lightGreen" aria-labelledby="telangiectasia-heading">
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8 lg:px-16">
                    <h2 id="telangiectasia-heading" className="text-2xl md:text-4xl mt-auto">
                        Telangiectasia & Spider Angiomas
                    </h2>
                    <p className="mt-4 mb-auto">
                        <strong>Telangiectasia</strong> – (broken capillaries) most commonly found on the cheeks and nose area, these appear as small red/pink threads under the skins surface. Broken capillaries occur when the capillary walls narrow and widen too quickly causing the muscles in the walls to tear. This in turn allows the blood to seep out resulting in broken capillaries. <strong>Spider Angioma</strong> is a combination of a ruby point and telangiectasia. They are often found on the face, especially around the eyes and nose. Causes are very similar to telangiectasia. Dehydrated, dry and sensitive skins often have thin skin that provides less protection and therefore, these skin types are the most commonly affected. Common causes: Hot conditions, Wind blowing on face, sunburns, pressure (squeezing spots from glasses
                    </p>
                </div>
                <StaticImage loading="lazy" src="../assets/images/telangiectasia-spider-angiomas.jpg" className="lg:w-1/2 shadow-md rounded-sm lg:rounded-l-md" />
            </section>
            <section className="p-4 md:p-8" aria-labelledby="contraindications-heading">
                <Card cardBodyClass="p-4 md:p-8" cardWrapperClass="">
                    <h2 id="contraindications-heading" className="text-xl md:text-3xl mb-2">
                        Contraindications
                    </h2>
                    <p className="my-2">
                        Contraindications for treatment include diabetes, cancer, HIV, epilepsy, anyone on a blood thinner, anticoagulation or use a pace maker, pregnant women.
                    </p>
                    <h2 className="text-xl md:text-3xl my-2">
                        Pricing
                    </h2>
                    <p className="my-2">
                        Pricing is determined on the quantity, upon your visit to the clinic.
                    </p>
                </Card>
            </section>
            <section className="flex flex-col items-center px-4 lg:py-8" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>
                    Book a skin consultation to determine the correct treatment and
                    product for your skin type and condition.
                </p>
            </section>
        </>
    )
}

export default SkinTags

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Skin Tag, Milia, Red Dot & Growth Removal - Safe, Non-invasive Treatments"
                pageDescription="Essence of Beauty Ottawa treats various growths such as skin tags, milia, keratosis and ruby points with safe, non-invasive revision therapies that permanently remove growths from your face and body in just one session!"
                pageKeywords="Skin Tags, Milia, Red Dots, Skin Growth Removal, Seborrheic Keratosis, Telangiectasia, Spider Angiomas, Cherry Angiomas, Sebaceous Hyperplasia, Hyperpigmentation, Broken Capillaries, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/skin-tags-red-dots-milia-removal-ottawa/"
                pageImage="https://www.essenceofbeauty.ca/images/VascuLyse.webp"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/skin-tags-red-dots-milia-removal-ottawa/" />
        </>
    )
} 
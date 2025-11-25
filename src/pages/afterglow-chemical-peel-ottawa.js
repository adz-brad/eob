import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const AfterglowPeel = () => {
    return (
        <>

            <Banner
                heading="AfterGlow Peel"
                gradient="from-black/10 via-black/20 to-black/50"
                image={<StaticImage alt="Essence of Beauty Ottawa - AfterGlow Chemical Peel" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglowHeader.webp?raw=true" />}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Get Your Glow Back With The Afterglow Chemical Facial Peel!</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">The AfterGlow Facial Peel at Essence of Beauty Ottawa is a safe chemical peel designed to fight acne, signs of aging, pigmentation & more.</h2>
                    <p className="my-1">
                        The AfterGlow Chemical Peel is a facial treatment is designed to effectively treat acne, aging, pigmentation & more. The application of a specialized cream to the skin encourages the exfoliation of dead skin cells and debris while stimulating the skin’s natural renewal process. The AfterGlow Chemical Peel is designed to refine skin texture damaged by environmental factors and skin conditions such as acne. The procedure assists in smoothing fine lines and evening out skin discoloration. It improves skin texture and reduces the appearance of acne scars and environmental damage to the skin. With each additional AfterGlow Facial Peel procedure, you will notice incremental improvements in the overall appearance of the skin.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "afterglow-peel-info" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow.jpg?raw=true"
                    alt="Essence of Beauty Afterglow Peel Treatment"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="afterglow-peel-info" className="p-4 md:p-8">
                <Card cardBodyClass="flex flex-col p-4 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        AfterGlow Chemical Peel Treatment Benefits
                    </h2>
                    <h2 className="text-base md:text-xl my-2">
                        There is no facial peel which rivals its safety and at the same time, produces such excellent results.
                    </h2>
                    <p className="my-1">
                        Due to its safety, AfterGlow can be used on all skin types and absolutely all skin conditions and colours.  It can also be applied to the face, neck & eyelids as well as can be applied all year round. The peel itself is in a cream form, ensuring easy and uniform application. During application, a very mild warm sensation is experienced and clients experience very little discomfort.
                    </p>
                    <div className="flex flex-col my-2">
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-xl font-bold my-2">
                                Excellent results on:
                            </h3>
                            <ul className="list-disc my-2 ml-4">
                                <li className="my-1">
                                    Hyperpigmentation , melasma & events of skin discoloration/pigmentation
                                </li>
                                <li className="my-1">
                                    Acne breakouts, scarring, whiteheads, blackheaders & milia
                                </li>
                                <li className="my-1">
                                    Coarse skin & enlarged pores
                                </li>
                                <li className="my-1">
                                    Psoriasis, facial redness / rosacea & eczema
                                </li>
                                <li className="my-1">
                                    Dark circles under the eyes
                                </li>
                                <li className="my-1">
                                    Sun damaged skin
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-base md:text-xl font-bold my-2">
                                Additional benefits include:
                            </h3>
                            <ul className="list-disc my-2 ml-4">
                                <li className="my-1">
                                    Improves skin tone
                                </li>
                                <li className="my-1">
                                    Smooths fine lines and photo aging
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <span><strong className="mr-2 text-brown">Level 1 Peel:</strong>$235. Ideal for more sensitive skin.</span>
                        <span><strong className="mr-2 text-brown">Level 2 Peel:</strong>$340. Offering a deeper treatment for more intensive results.</span>

                    </div>
                    <Button
                        data={{ text: "Book Today!", anchor: "contact" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </Card>
            </div>
            <div className="max-w-screen-xxl mx-auto my-8">
                <div className="flex flex-col items-center my-4">
                    <span className="font-headers font-medium text-2xl md:text-3xl mb-2">More amazing results!</span>
                    <span className="mb-8">Comparing Before & After AfterGlow Peel</span>
                </div>
                <Gallery
                    className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow1.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow2.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow3.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow4.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow5.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow6.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow7.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow8.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow9.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow10.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow11.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow12.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow13.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow14.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow15.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow16.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow17.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow18.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow19.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow20.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow21.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow22.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow23.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow24.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow25.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow26.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow27.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow28.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow29.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow30.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow31.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow32.jpg?raw=true" alt="AfterGlow Peel Before & After Treatment" />,
                    ]}
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default AfterglowPeel

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="AfterGlow Chemical Facial Peel Ottawa - Treat Pigmentation, Acne, Psoriasis, Rosacea, Eczema & More!"
                pageDescription="The AfterGlow Chemical Peel is a facial treatment in which a cream is applied to the skin to encourage the exfoliation of dead skin & stimulate the skin’s natural renewal process."
                pageKeywords="Afterglow, Chemical, Facial, Peel, Skincare, Hyperpigmentation, Acne Breakouts, Psoriasis, Redness, Rosecea, Eczema, Sun Damage, Safe, Renew, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/afterglow-chemical-peel-ottawa/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/afterglow.jpg?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/afterglow-chemical-peel-ottawa/" />
        </>
    )
} 
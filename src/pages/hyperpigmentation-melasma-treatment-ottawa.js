import React from 'react'
import { Link } from 'gatsby'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Card from '../components/card'
import Seo from '../components/seo'

const Hyperpigmentation = () => {
    return (
        <>

            <Banner
                heading="Hyperpigmentation & Melasma"
                gradient="from-black/30 via-black/40 to-black/60"
                image={<StaticImage alt="Essence of Beauty Ottawa - Hyperpigmentation & Melasma" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperpigmentationHeader.jpg?raw=true" />}
            />
            <div className="p-4 lg:p-8">
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="flex flex-col lg:w-2/5 md:p-8 mx-auto" >
                        <h1 className="text-2xl md:text-4xl mt-8 mb-4 font-semibold">Treatment for Hyperpigmentation & Melasma</h1>
                        <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">
                            Essence of Beauty Ottawa helps you to minimize any spots or blemishes from hyperpigmentation & melasma, no matter what your skin type.
                        </h2>
                        <p className="my-1">
                            Hyperpigmentation is a general term that is used by medical professionals to characterize patches of skin which are darker in color than the rest of the skin due to the overproduction of melanin.
                        </p>
                        <p className="mt-1 mb-4">
                            Dark spots can develop for a wide variety of reasons, though the most common contributing factor to facial hyperpigmentation is overexposure to the sun. Fluctuations in hormone levels, a genetic predisposition to melasma, the healing process of acne lesions, and skin damage caused by laser treatment, can also all lead to the development of facial hyperpigmentation. Facial hyperpigmentation can occur in individuals of any skin tone and type, and depending on the underlying cause of the hyperpigmentation may appear at any age.
                        </p>
                        <span className="text-base md:text-xl font-semibold">Real results require effective strategies that work in partnership with the skin. You can <Link to="radiance-hydro-infusion-facial/">click here to learn more about Essence of Beauty treatment options for hyperpigmentation.</Link></span>
                        <Button
                            data={{ text: "Learn More", anchor: "hyperpigmentation-melasma-info" }}
                            className="buttonLight my-8 md:my-auto"
                        />
                    </div>
                    <StaticImage
                        loading="eager"
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperPigmentationMelasma.jpg?raw=true"
                        className="lg:w-1/3 rounded-sm shadow-lg mx-auto"
                    />
                </div>
            </div>
            <div className="bg-lightGreen rounded-sm shadow-lg lg:my-8 md:py-4 flex flex-col lg:flex-row">
                <div id="hyperpigmentation-melasma-info" className="flex flex-col lg:w-1/2 p-4 md:p-8 md:ml-4">
                    <h2 className="text-2xl md:text-4xl mb-2 pb-2 filter drop-shadow-md">Understanding Hyperpigmentation</h2>
                    <p className="my-1">
                        There are two types of hyperpigmentation – <strong>sun derived and internally derived.</strong>
                    </p>
                    <h3 className="text-xl mt-2 font-semibold">Sun Derived/PIH (Post Inflammatory Hyperpigmentation)</h3>
                    <p className="my-1">
                        These areas can be like freckles and will more apparent after sun exposure and generally not symmetrical on your face. Or they can appear as a large cluster on some areas of your body.
                    </p>
                    <h3 className="text-xl mt-4 font-semibold">Internally Derived</h3>
                    <h4 className="text-base md:text-xl text-brown italic mt-3 font-semibold">Melasma</h4>
                    <p className="my-1">
                        This will show up on your cheeks, forehead and upper lip. It can also appear anywhere on your face and is usually asymmetrical. That means you’ll likely see it on both sides of your face in the same area and unlike age spots, Melasma will be in large patches.
                    </p>
                    <h4 className="text-base md:text-xl text-brown italic mt-3 font-semibold">Liver Spots</h4>
                    <p className="my-1">
                        Liver Spots are asymmetrical. You can see them anywhere on the face in one or more location. They are very large patches of pigmentation.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "hyperpigmentation-melasma-treatment" }}
                        className="buttonLight bg-white my-8 md:my-auto"
                    />
                </div>
                <div className="flex flex-col lg:w-1/2 p-4 md:p-16">
                    <Gallery
                        imageClass="rounded-sm shadow-lg"
                        images={[
                            <StaticImage
                                src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/reactiveskin1.png?raw=true"
                                alt="Hyperpigmentation & Melasma After Treatment Image"
                            />
                        ]}
                    />
                    <span className="text-center mt-4 font-bold text-brown">Comparing before and after hyperpigmentation treatment</span>
                </div>
            </div>
            <div id="hyperpigmentation-melasma-treatment" className="flex md:m-8 flex-col my-4">
                <div className="flex flex-col p-4 lg:p-8">
                    <h2 className="text-2xl md:text-4xl mb-4 pb-2 filter drop-shadow-md">Hyperpigmentation Treatment</h2>
                    <p className="my-1">
                        The initial step is an in-depth skin health consultation and analysis to identify the possible root cause of pigmentation, before a treatment plan can be designed to correct the condition and provide the tools needed to reduce the risk of it retuning. Depending on the type of hyperpigmentation disorder and the causes, the treatment approach will vary.
                    </p>
                    <p className="my-1">
                        A typical pigmentation treatment  may involve a series of superficial peels such as AfterGlow Peel or Herbal Green Peel  for example (the amount needed would depend on the depth of the pigment). Both treatments are extremely effective in lifting away the unwanted pigment, however both work very differently. The best treatment for you will be determined following the consultation and skin analysis.
                    </p>
                    <p className="my-1">
                        An advanced home care regime is also recommended to follow in-between treatments, which would be discussed as part of your aftercare. The use of antioxidants, safe Tyrosinase inhibitors and high factor physical sunscreen are absolutely essential in not only effectively treating the pigmentation but ensuring it does not return. For deep or severe pigmentation problems a higher strength treatment may also be needed
                    </p>
                    <p className="my-1">
                        Micro needling is also a very effective treatment for hyperpigmentation because it restores normal cell function and increases cell-to-cell communication, helping to regulate the production of melanin. Micro needling can also be combined with mesotherapy ampules with a cocktail of vitamins and minerals specifically blended to treat hyperpigmentation.
                    </p>
                </div>
            </div>
            <div className="p-4 lg:p-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col md:flex-row">
                    <div className="flex flex-col md:w-1/2">
                        <h2 className="text-2xl md:text-4xl">5 Strategies For Real Results</h2>
                        <ul className="my-4">
                            <li className="my-2">
                                <span className="font-bold mr-2">✓</span> Empowering your skin and body’s immune system by providing ingredients that stimulate repair.
                            </li>
                            <li className="my-2">
                                <span className="font-bold mr-2">✓</span>Targeting the source of skin conditions and many internal issues using a holistic, inside-out approach.
                            </li>
                            <li className="my-2">
                                <span className="font-bold mr-2">✓</span>Using liposome delivery (6 times better penetration) to target the deeper layers of the skin where damage and collagen creation actually occurs.
                            </li>
                            <li className="my-2">
                                <span className="font-bold mr-2">✓</span>Using advanced but natural ingredients to activate DNA and oxidation repair, collagen formation, growth factor re-population, and to increase the delivery of skin nutrients.
                            </li>
                            <li className="my-2">
                                <span className="font-bold mr-2">✓</span>Our treatments are safe for all skin types and absolutely all skin conditions & all Fitzpatricks.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:w-1/3 mx-auto">
                        <h2 className="text-2xl md:text-4xl">Important First Steps</h2>
                        <ul className="text-left my-4">
                            <li className="my-1">1. Sun Protection</li>
                            <li className="my-1">2. Proper skin care to address the specific condition causing your pigmentation</li>
                        </ul>
                        <span>Essence of Beauty offers options for all skin types and ethnic backgrounds. A consultation is needed prior to the treatment. In-clinic consultations typically last 30 minutes and are priced at <strong>$50</strong></span>
                    </div>
                </Card>
            </div>
            <div className="md:px-4 my-8 md:my-16">
                <div className="flex flex-col items-center my-8">
                    <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                    <span>Comparing before & after treatment</span>
                </div>
                <Gallery
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperpigmentation1.jpg?raw=true" alt="Hyperpigmentation & Melasma Before & Treatment Image" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperpigmentation2.jpg?raw=true" alt="Hyperpigmentation & Melasma Before & Treatment Image" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperpigmentation3.jpg?raw=true" alt="Hyperpigmentation & Melasma Before & Treatment Image" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperpigmentation4.jpg?raw=true" alt="Hyperpigmentation & Melasma Before & Treatment Image" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperpigmentation5.jpg?raw=true" alt="Hyperpigmentation & Melasma Before & Treatment Image" />,
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

export default Hyperpigmentation

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Hyperpigmentation & Melasma Ottawa - Natural Treatment of Blemishes"
                pageDescription="Essence of Beauty Ottawa helps you to minimize spots and blemishes from hyperpigmentation and melasma, no matter what your skin type."
                pageKeywords="Hyperpigmentation, Blemishes, Spots, Melasma, Holistic, Beauty, Organic, Treatment, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/hyperpigmentation-melasma-treatment-ottawa/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/hyperPigmentationMelasma.jpg?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/hyperpigmentation-melasma-treatment-ottawa/" />
        </>
    )
} 
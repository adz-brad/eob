import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import BeforeAfter from '../components/beforeAfter'
import Card from '../components/card'

const Hyperpigmentation = () => {
    return(
        <>
            <Banner
                heading="Hyperpigmentation & Melasma"
                caption="If you’re at a loss for why your complexion is suddenly riddled with various forms of hyperpigmentation, know that you are not alone. We can help you minimize any spots or blemishes from hyperpigmentation, no matter what your skin type."
                image={<StaticImage src="../assets/images/hyperpigmentationHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-center">
                    <div className="flex flex-col lg:w-3/4 md:p-8" >
                        <h1 className="my-4">What Is Hyperpigmentation?</h1>
                        <h4 className="mb-2">Hyperpigmentation is a general term that is used by medical professionals to characterize patches of skin which are darker in color than the rest of the skin due to the overproduction of melanin.</h4>
                        <p className="mt-1 mb-4">
                        Dark spots can develop for a wide variety of reasons, though the most common contributing factor to facial hyperpigmentation is overexposure to the sun. Fluctuations in hormone levels, a genetic predisposition to melasma, the healing process of acne lesions, and skin damage caused by laser treatment, can also all lead to the development of facial hyperpigmentation. Facial hyperpigmentation can occur in individuals of any skin tone and type, and depending on the underlying cause of the hyperpigmentation may appear at any age.
                        </p>
                        <h4>Real results require effective strategies that work in partnership with the skin.</h4>
                        <Button 
                            data={{ text: "Learn More", anchor: "hyperpigmentation-melasma-info"}}
                            className="buttonLight my-8 md:my-auto"
                        />
                    </div>
                    <StaticImage src="../assets/images/hyperpigmentationMelasma.jpg" className="lg:w-1/4 max-h-[420px] lg:m-4 rounded-sm shadow-lg" />
                </div>
            </div>
            <div className="bg-lightGreen rounded-lg shadow-lg lg:m-8 flex flex-col lg:flex-row">
                <div id="hyperpigmentation-melasma-info" className="flex flex-col lg:w-1/2 p-4 md:p-8">
                   <h1 className="mb-4 border-b-2 border-darkGreen pb-2 filter drop-shadow-md">Understanding Hyperpigmentation</h1>
                   <p className="my-1">
                   There are two types of hyperpigmentation – <strong>sun derived and internally derived.</strong>
                   </p>
                   <h3 className="text-xl mt-2">Sun Derived/PIH (Post Inflammatory Hyperpigmentation)</h3>
                   <p className="my-1">
                   These areas can be like freckles and will more apparent after sun exposure and generally not symmetrical on your face. Or they can appear as a large cluster on some areas of your body.
                   </p>
                   <h3 className="text-xl mt-2">Internally Derived</h3>
                   <h4 className="text-brown italic mt-2">Melasma</h4>
                   <p className="my-1">
                   This will show up on your cheeks, forehead and upper lip. It can also appear anywhere on your face and is usually asymmetrical. That means you’ll likely see it on both sides of your face in the same area and unlike age spots, Melasma will be in large patches.
                   </p>
                   <h4 className="text-brown italic mt-2">Liver Spots</h4>
                   <p className="my-1">
                   Liver Spots are asymmetrical. You can see them anywhere on the face in one or more location. They are very large patches of pigmentation.
                   </p>
                   <Button 
                            data={{ text: "Learn More", anchor: "hyperpigmentation-melasma-treatment"}}
                            className="buttonLight bg-white my-8 md:my-auto"
                        />
                </div>
                <div className="flex flex-col lg:w-1/2 p-4 md:p-8">
                <BeforeAfter
                    className="rounded-sm shadow-lg h-[480px] my-auto"
                    beforeImage={<StaticImage src="../assets/images/hyperpigmentationBefore1.png" alt="Hyperpigmentation & Melasma Before Treatment Image" />}
                    afterImage={<StaticImage src="../assets/images/hyperpigmentationAfter1.png" alt="Hyperpigmentation & Melasma After Treatment Image" />}
                />
                <span className="text-center mt-4 text-sm">Slide to compare before and after hyperpigmentation treatment</span>
                </div>
            </div>
            <div id="hyperpigmentation-melasma-treatment" className="flex md:m-8 flex-col lg:flex-row lg:items-center my-4">
                <div className="flex flex-col lg:w-1/2 p-4 lg:p-8">
                    <h1 className="mb-4 border-b-2 border-darkGreen pb-2 filter drop-shadow-md">Hyperpigmentation Treatment</h1>
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
                <div className="flex flex-col lg:p-8 lg:w-1/2">     
                    <div className="flex flex-col md:flex-row items-center">   
                        <BeforeAfter
                            className="rounded-sm shadow-lg max-h-[400px] md:w-1/2 my-2 lg:my-0 mx-2"
                            beforeImage={<StaticImage src="../assets/images/hyperpigmentationBefore2.png" alt="Hyperpigmentation & Melasma Before Treatment Image" />}
                            afterImage={<StaticImage src="../assets/images/hyperpigmentationAfter2.png" alt="Hyperpigmentation & Melasma After Treatment Image" />}
                        />
                        <BeforeAfter
                            className="rounded-sm shadow-lg max-h-[400px] md:w-1/2 my-2 lg:my-0 mx-2"
                            beforeImage={<StaticImage src="../assets/images/hyperpigmentationBefore3.png" alt="Hyperpigmentation & Melasma Before Treatment Image" />}
                            afterImage={<StaticImage src="../assets/images/hyperpigmentationAfter3.png" alt="Hyperpigmentation & Melasma After Treatment Image" />}
                        />
                    </div>
                    <span className="text-center text-sm mt-2">Slide to compare before and after hyperpigmentation treatment</span>
                </div>
            </div>
            <div className="p-4 lg:p-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col md:flex-row">
                    <div className="flex flex-col md:w-1/2">
                    <h1 className="font-bold">5 Strategies For Real Results</h1>
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
                    <h1 className="font-bold">Important First Steps</h1>
                    <ul className="text-left my-4">
                        <li className="my-1">1. Sun Protection</li>
                        <li className="my-1">2. Proper skin care to address the specific condition causing your pigmentation</li>
                    </ul>
                    <span>Essence of Beauty offers options for all skin types and ethnic backgrounds. A consultation is needed prior to the treatment <strong>$50</strong></span>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Hyperpigmentation
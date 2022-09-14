import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Gallery from '../components/gallery'

const AnteageStemCell = () => {
    return(
        <>
            <Banner
                heading="AnteAge Stem Cell Facial"
                caption="We are using an award winning holistic approach to significantly reverse your skin's aging process with in-office treatments and advanced homecare protocol. This intriguing treatment is both backed by science and the visible results that you can see for yourself."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteagestemcellHeader.png?raw=true"/>}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Restore your skin’s health on a cellular level with AnteAGE®</h1>
                    <h4 className="mt-2 mb-4">The facial exclusively uses products from AnteAGE® focused on stem cell-based skincare and microchanneling.</h4>
                    <p className="my-1">
                     While most on-counter stem cell-containing skincare products use plant stem cells. AnteAGE® is the result of recent advances in Stem Cell science. One specialized population of stem cells that originate in the bone marrow is now known to be the commander in chief of all tissue repair. AnteAGE® has decoded the bio signal language these cells use to manage skin health. Bio signals called Growth Factors & Cytokines can create a natural, youthful healing response at the deepest level of your skin–at any age.  AnteAGE® products do not contain cells or cell remnants.  They are removed during ultrafiltration, the final step in the laboratory culture process. The ultra-filtered extract is fortified with growth factor actives, plus antioxidants and skin-supporting proteins, to create a biogenic skincare concentrate.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "anteage-stem-cell-facial-info"}}
                        className="buttonLight mt-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage1.jpg?raw=true"
                    alt="Essence of Beauty AnteAge Stem Cell Facial"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div 
                id="anteage-stem-cell-facial-info"
                className="flex flex-col md:flex-row bg-lightGreen rounded-md shadow-md p-4 md:p-8 md:m-4"
            >
                <div className="flex flex-col md:w-2/3 md:mx-4">     
                    <h1 className="font-bold mb-4">AnteAge® MD Targeted Treatments</h1>
                    <p className="my-1">
                    To really supercharge the amazing benefits of the treatment, we have combined AnteAGE® with the transdermal delivery of microchanneling system which creates tiny channels on the skin to deliver a condition targeted solution containing growth factors and cytokines derived from adult bone marrow stem cells. 
                    </p>
                    <p className="my-1">
                    Bone marrow stem cells contain the highest concentration of cytokines responsible for skin healing. As we age, we lose most of these stem cells and can result in chronic inflammation, redness, spots, wrinkles and other signs of aging. Stem growth factors and cytokines applied to the skin mimic the effect of having more stem cells leaving you with youthful appearance. 
                    </p>
                    <p className="my-1">
                    Each targeted solution (Anti-Aging. Brightening, and Clarifying) is enhanced with additional proteins and bio signals to address specific outcomes.
                    </p>
                    <span className="font-bold mt-4 mb-2">Types of targeted treatments:</span>
                    <div className="my-1 flex flex-col">
                        <h4 className="text-lg font-bold">
                            Anti-Aging
                        </h4> 
                        <span className="leading-tight">
                        A microchanneling anti-aging treatment designed to increase collagen production and optimize the skin’s ability to repair and rejuvenate itself.
                        </span>
                    </div>
                    <div className="my-1 flex flex-col">
                        <h4 className="text-lg font-bold">
                            Clarifying
                        </h4> 
                        <span className="leading-tight">
                        A microchanneling clarifying treatment designed to target acne.
                        </span>
                    </div>
                    <div className="my-1 flex flex-col">
                        <h4 className="text-lg font-bold">
                            Brightening
                        </h4> 
                        <span className="leading-tight">
                        A microchanneling brightening treatment designed to target pigmentation and enhance tone.
                        </span>
                    </div>
                    <Button
                        data={{text: "Read About The Benefits", anchor: "anteage-stem-cell-benefits"}}
                        className="buttonLight bg-white mt-8 mx-auto md:mx-0"
                    />
                </div>
                <div className="flex flex-col items-center md:w-1/3 md:ml-8">
                <Gallery 
                    className="grid grid-cols-1 gap-4 my-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage2.jpg?raw=true" alt="AnteAge Treatment" />
                    ]}
                />
                <span className="mt-4 text-sm">Comparing before & after AnteAge treatment</span>
                </div>
            </div>
            <div id="anteage-stem-cell-benefits" className="flex flex-col md:flex-row p-4 md:p-8 items-center">
                <div className="flex flex-col md:w-1/2 md:m-4">
                    <h1 className="font-bold mb-4">The Benefits of AnteAge®</h1>
                    <h4 className="mt-2 mb-4">This innovative, natural approach to skin rejuvenation allows us to achieve immediate as well as long - lasting results that include: </h4>
                    <ul className="my-4 ml-4 list-disc">
                        <li className="my-1 md:text-lg">
                        Delivers the natural stem cell growth factors responsible for collagen stimulation and facial rejuvenation
                        </li>
                        <li className="my-1 md:text-lg">
                        Naturally enhances cell function and stimulates repair activity
                        </li>
                        <li className="my-1 md:text-lg">
                        Smoothing of fine lines and wrinkles
                        </li>
                        <li className="my-1 md:text-lg">
                        Significantly higher hydration
                        </li>
                        <li className="my-1 md:text-lg">
                        Reducing redness and inflammation
                        </li>
                        <li className="my-1 md:text-lg">
                        Regulating acne, refining pores and breakouts
                        </li>
                        <li className="my-1 md:text-lg">
                        Reducing excuses pigmentation
                        </li>
                        <li className="my-1 md:text-lg">
                        Increasing microcirculation
                        </li>
                        <li className="my-1 md:text-lg">
                        Promotes skin health without inflammation
                        </li>
                    </ul>
                    <p className="my-1 md:text-lg">The Stem Cell Facial has no downtime and instantly reveals smoother, brighter and glowing skin. In combination with our daily AnteAGE® Skincare System, we provide everything the skin needs to achieve unparalleled results.</p>
                </div>
                <div className="flex flex-col items-center md:w-1/3 md:mx-auto">
                <Gallery 
                    className="grid grid-cols-1 gap-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage7.jpg?raw=true" alt="AnteAge Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage2.jpg?raw=true" alt="AnteAge Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage3.jpg?raw=true" alt="AnteAge Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage4.jpg?raw=true" alt="AnteAge Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage5.jpg?raw=true" alt="AnteAge Before & After Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/anteage6.jpg?raw=true" alt="AnteAge Before & After Treatment" />,
                    ]}
                />
                <span className="mt-4 text-sm">Amazing results from AnteAge Treatment</span>
                </div>
            </div>
            <div className="md:p-8">
                <Card cardBodyClass="flex flex-col md:flex-row" cardWrapperClass="my-8">
                    <div className="flex flex-col md:w-2/3 p-4 md:p-8">
                        <h1 className="font-bold mb-4">AnteAGE® Homecare System</h1>
                        <div className="my-4">
                        <h4 className="font-bold mb-2">AnteAge® Serum</h4>
                        <p className="my-1">
                            Restore your skin’s ability to heal itself with AnteAGE® regenerating serum. This elegant formula quickly absorbs into your skin, and contains physiologically balanced Stem Cytokines™, potent peptides and protective Antioxidants. Utilizing nanotechnology, this symphony of ingredients act in concert to deliver powerful results at the cellular level.
                        </p>
                        </div>
                        <div className="my-4">
                        <h4 className="font-bold mb-2">AnteAge®  Accelerator</h4>
                        <p className="my-1">
                        The AnteAGE Accelerator is a performance driven treatment rich in powerful moisturizers and revitalizing actives. Stem Cytokines™, vitamins, and targeted antioxidants work to deeply hydrate and nourish the skin, while two research-backed molecules (a defensin peptide and retinoid-like compound) enhance the pro-healing, regenerative and anti-inflammatory potential of the AnteAGE system.
                        </p>
                        </div>
                        <span className="my-auto"><strong>$145</strong>/ 1 hr + Anti-aging, brightening or clarifying.</span>
                    </div>
                    <StaticImage 
                        src="../assets/images/anteageHome.png"
                        alt="Essence of Beauty AnteAge Homecare System"
                        className="md:w-1/4 mx-auto"
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

export default AnteageStemCell
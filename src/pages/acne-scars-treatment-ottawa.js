import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const AcneScars = () => {

    return(
        <>

            <Banner
                heading="Acne Scars Revision"
                gradient="from-black/70 via-black/50 to-black/30"
                caption="Scars can compromise your complexion long after acne heals. At Essence of Beauty Ottawa, we create individual programs for each client to treat a range of problems including active acne and acne scarring."
                image={<StaticImage alt="Essence of Beauty Ottawa - Acne Scars Revision" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneScarsHeader.jpg?raw=true"/>}
            />
            <div className="p-4 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="flex flex-col lg:w-3/5 md:p-4 lg:mx-8">
                    <h1 className="text-2xl md:text-4xl mt-2 mb-4 font-semibold">Safe & Effective Treatment of Acne Scars</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">
                    With customized acne treatment options from Essence of Beauty Ottawa, you can say goodbye to the scarring that compromises your complexion long after your acne is healed.
                    </h2>
                    <p className="my-1">
                    We all want to look and feel our best, both inside and out, every day. But for those who have suffered acne throughout their life and still show their physical scars that can be easier said than done. While it’s most prominent in adolescence, acne scarring can actually affect skin at any age. Scarring can affect not just a person’s physical appearance but also their self-confidence.           
                    </p>
                    <p className="my-1">
                    Scars are can appear to be normal skin color or dark. Acne scars are permanent textural changes and indentations that occur on the skin because of severe acne. As the bumps and lumps of active acne come and go, it often leaves our skin red, irritated, inflamed, uneven and, pigmented. This is what we call acne scarring.
                    </p>
                    <Button 
                            data={{ text: "Learn More", anchor: "acne-scarring-info"}}
                            className="buttonLight my-8 md:mt-8 md:mb-auto"
                        />
                </div>
                
                <StaticImage 
                        loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acne-scar-treatment.jpg?raw=true" 
                    alt="Essence of Beauty Acne Treatment"
                    className="lg:mx-16 md:mt-8 rounded-sm shadow-md h-[460px]" 
                />
                
            </div>
            </div>
            <div id="acne-scarring-info" className="md:p-8">
            <Card cardBodyClass="p-4 lg:px-8" cardWrapperClass="md:my-8" >
            <h2 className="text-xl md:text-3xl my-4">
            How do acne scars develop?
                        </h2>
                        <p className="my-2">
                        When acne breakouts penetrate the skin deeply, they damage the skin and the tissue beneath it. As the acne clears, the body tries to repair this damage. During the healing process, the body produces collagen a substance that gives the skin support. If the body produces too little or too much collagen, you will see a scar. This collagen can stay in place permanently, creating acne scarring. In some cases, the result is not a true scar, but simply an excess of pigmentation. This may fade away over a few months or years – it generally isn’t permanent as with other acne scars.
                        </p>
                        <p className="my-2">
                        Before getting treatment for acne scars, it is important to clear your acne. New acne breakouts can lead to new acne scars. Having acne also means that your skin is inflamed which will reduce the effectiveness of acne scar treatment. Luckily, we have a range of holistically active acne and acne scarring treatments to help get to the source of the problem and give you and your skin its confidence & radiance back!
                        </p>
                        <p className="my-2">
                        We create individual programs for each client to treat a range of problems including active acne and acne scarring. The shape and depth of your acne scars, as well as your skin type, will determine which acne scar treatment, or combination of treatments, is best for you. As most people have a variety of scar shapes and depths, more than one type of treatment may be necessary to deliver the best possible result.
                        </p>
                        <div className="flex flex-col py-4 md:py-8">
                            <span>
                                <strong className="mr-2 text-brown">
                                    Acne Scarring Consultation:
                                </strong>
                                    $50
                            </span>
                            <span>
                            During your analysis, we can discuss any questions or concerns you may have and personalize a treatment plan for you.
                            </span>
                        </div>
            </Card>
          </div>
          <div className="max-w-screen-lg mx-auto my-8">
                    <div className="flex flex-col items-center my-4">
                        <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                        <span className="mb-8">Comparing before & after treatment</span>
                    </div>
                    <Gallery 
                    className="grid grid-col-1 md:grid-cols-2 gap-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneScarring.jpg?raw=true" alt="Before & After Acne Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneScars1.jpg?raw=true" alt="Before & After Acne Treatment" />
                    ]}    
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold mt-8 mb-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default AcneScars

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="Acne Scars Revision Ottawa"
        pageTitleDescription="Safe & Effective Treatment of Acne Scars For All Skin Types!"
        pageDescription="Essence of Beauty Acne Clinic Ottawa creates customized programs for each client to treat skin problems including acne and acne scarring so you can say goodbye to the scarring that compromising your complexion!"
        pageKeywords="Acne Scars, Scarring, Skincare, Safe, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/acne-scars-treatment-ottawa/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acne-scar-treatment.jpg?raw=true"
        />
        <link rel="canonical" href="https://www.essenceofbeauty.ca/acne-scars-treatment-ottawa/" />
        </>
    )
  } 
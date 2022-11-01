import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import { Link } from 'gatsby'
import Button from '../components/button'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const AcneTreatment = () => {
    return(
        <>

            <Banner
                heading="Acne Treatment"
                gradient="from-black/60 via-black/30 to-black/10"
                caption="Our advanced acne deep pore cleansing treatments are customized to help to correct imbalances in your skin, deeply cleanse and clarify congested pores, and help calm and heal irritated skin. We will work with your lymph to stimulate the removal of waste and toxins and cleanse your body. "
                image={<StaticImage alt="Essence of Beauty Ottawa - Acne Treatment" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneTreatmentHeader.jpg?raw=true"/>}
            />
            <div className="p-4 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="flex flex-col lg:w-3/5 md:p-4 lg:mx-8">
                    <h1 className="text-2xl md:text-4xl mt-2 mb-4 font-semibold">Advanced Acne Treatment Options</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">
                    Essence of Beauty Ottawa specializes in the treatment of acne with customized skincare protocols designed specifically for YOU!
                    </h2>
                    <p className="my-1">
                    Our advanced acne deep pore cleansing treatments are customized to help to correct imbalances in your skin, deeply cleanse and clarify congested pores, and help calm and heal irritated skin. We will work with your lymph to stimulate the removal of waste and toxins and cleanse your body.
                    </p>
                    <p className="my-1">
                    The first time you come to visit us, we spend a lot of time together discussing what acne is, because when you understand what it is, what you have to do to treat and clear your acne makes more sense. Then we will talk about your individual concerns and situation. While you didn’t do anything to cause your acne, you may be doing things that can make it harder to clear and we want to help you understand those blocking factors. Then we go into the treatment room and examine and test your skin to help us to learn what type of skin you have and what type of acne you have. Those two factors help us to put together a home care protocol for you because 55% of getting clear is the daily care you take of your skin. We also provide our first treatment, so what you do at home will work better.           
                    </p>
                    <p className="my-1">
                    The products you will need to take care of your skin at home will need to be purchased at the first appointment. They vary in price depending on your skin’s needs but will typically last two to three months.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "acne-treatment-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                
                <StaticImage 
                        loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneTreatment.jpg?raw=true" 
                    alt="Essence of Beauty New Client Acne Treatment"
                    className="lg:mx-16 rounded-sm shadow-md" 
                />
                
            </div>
            
            <div id="acne-treatment-info" className="flex flex-col my-4 p-4 md:p-8 md:my-8 lg:mx-8 bg-lightGreen rounded-sm shadow-md">
                        <h2 className="text-2xl md:text-4xl my-4 md:mt-2 md:mb-4">What's Included?</h2>
                        <p className="my-1">
                        Our in-spa acne treatments are completely individualized, but all include exfoliation and extraction. The type of exfoliation we do is dependent on your skin’s needs and tolerances. Extractions vary according to how many you need and your tolerance. This treatment is combined with Blue or Red LED Lights, Ultrasound Therapy or Acne-Microcurrent for a better and faster results. All of our acne treatments provide the following:
                        </p>
                        <ul className="my-2 list-disc ml-4">
                            <li className="my-1">
                            Appropriate exfoliation for your skin type, type of acne and your physical condition. Proper exfoliation allows the products to penetrate the skin and into the pores much more effectively.
                            </li>
                            <li className="my-1">
                            Hydration of the skin which is necessary for more rapid healing of the lesions and to make your skin more receptive to your home-care acne regimen. The acne products have a tendency to dry out the skin as you are getting used to them.
                            </li>
                            <li className="my-1">
                            Extractions to remove the acne impactions that are closer to the surface, allowing the lesions to heal more quickly.
                            </li>
                            <li className="my-1">
                            Treatment to combat the bacteria inside the pore.
                            </li>
                            <li className="my-1">
                            Normalize skin tone and heal red/inflamed spots on the skin
                            </li>
                            <li className="my-1">
                            Reduces acne scares
                            </li>
                            <li className="my-1">
                            Lifting and lightening of any dark spots that may be a result of your acne lesions.
                            </li>
                        </ul>
                        <span>
                        Please read more about our Acne-Clearing program by clicking <Link className="underline" to="/new-client-acne-consultation/">here.</Link>      
                        </span>
                        </div>

            <div className="p-4 lg:p-8 md:mx-auto md:my-8">
            <Card cardBodyClass="flex flex-col p-4 lg:p-8" cardWrapperClass="lg:mx-4">
                        <div className="flex flex-col md:m-2">
                        <h2 className="text-2xl md:text-4xl my-4 md:mt-2 mb-4 md:mb-8">How It Works</h2>
                        <p className="my-1">
                        Our advanced acne deep pore cleansing treatments are customized to help to correct imbalances in your skin, deeply cleanse and clarify congested pores, and help calm and heal irritated skin. We will work with your lymph to stimulate the removal of waste and toxins and cleanse your body. Each treatment will benefit your complexion as well as your whole body, leaving you looking and feeling relaxed, glowing and well-balanced. During this time we literally go pore by pore to remove blackheads, bumps under the skin, cysts and pustules. Our treatments provides instant gratification with an immediate, visible improvement.
                        </p>
                        <div className="flex flex-col my-4">
                                <span>
                                <strong className="mr-2 text-brown">
                                    Initial Consultation
                                </strong>
                                    $80
                                </span>
                                <span>
                                <strong className="mr-2 text-brown">
                                First 90 minutes treatment
                                </strong>
                                $158
                                </span>
                                <div className="flex flex-col my-2">
                                    <span className="italic text-brown">
                                    <strong className="mr-1 not-italic">Follow-up Acne Treatment</strong>(Duration varies according to individual need):
                                    </span>
                                <span>
                                <strong className="mr-2 text-brown">
                                90 min:
                                </strong>
                                $158
                                </span>
                                <span>
                                <strong className="mr-2 text-brown">
                                2 hours:
                                </strong>
                                $198
                                </span>
                                </div>
                        </div>
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
                    imageClass="rounded-sm shadow-lg max-h-[400px]"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneTreatment1.jpg?raw=true" alt="Before & After Acne Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneTreatment2.jpg?raw=true" alt="Before & After Acne Treatment" />
                    ]}    
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
            </div>
        </>
    )
}

export default AcneTreatment

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="Specialized Acne Treatment Ottawa"
        pageTitleDescription="Heal Your Acne & Acne Related Skin Issues With Essence of Beauty!"
        pageDescription="Our advanced acne deep pore cleansing treatments are customized specifically to treat YOUR acne by helping to correct imbalances in your skin, deeply cleanse and clarify congested pores, and help calm and heal irritated skin."
        pageKeywords="Acne Treatment, Acne scars, dark spots, lesions, sensitive skin, Skincare, Safe, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/acne-treatment-ottawa/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/acneTreatment.jpg?raw=true"
        />
        <link rel="canonical" href="https://www.essenceofbeauty.ca/acne-treatment-ottawa/" />
        </>
    )
  } 
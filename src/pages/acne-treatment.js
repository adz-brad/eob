import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import { Link } from 'gatsby'
import Button from '../components/button'
import Image from '../components/image'

const AcneTreatment = () => {
    return(
        <>
            <Banner
                heading="Acne Treatment"
                gradient="from-black/60 via-black/30 to-black/10"
                caption="Our advanced acne deep pore cleansing treatments are customized to help to correct imbalances in your skin, deeply cleanse and clarify congested pores, and help calm and heal irritated skin. We will work with your lymph to stimulate the removal of waste and toxins and cleanse your body. "
                image={<StaticImage src="../assets/images/acneTreatmentHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex flex-col md:w-3/5 md:p-4 mx-8">
                    <h1 className="mt-2 mb-4 font-semibold">Acne Treatment</h1>
                    <h4 className="mt-2 mb-4">
                    Our advanced acne deep pore cleansing treatments are customized to help to correct imbalances in your skin, deeply cleanse and clarify congested pores, and help calm and heal irritated skin. We will work with your lymph to stimulate the removal of waste and toxins and cleanse your body.
                    </h4>
                    <p className="my-1">
                    The first time you come to visit us, we spend a lot of time together. We will discuss what acne is, because when you understand what it is, what you have to do to get clear makes more sense. Then we will talk about your individual concerns and situation. While you didn’t do anything to cause your acne, you may be doing things that can make it harder to clear and we want to help you understand those blocking factors. Then we go into the treatment room and examine and test your skin to help us to learn what type of skin you have and what type of acne you have. Those two factors help us to put together a home care protocol for you because 55% of getting clear is the daily care you take of your skin. We also provide our first treatment, so what you do at home will work better.           
                    </p>
                    <p className="my-1">
                    The products you will need to take care of your skin at home will need to be purchased at the first appointment. They vary in price depending on your skin’s needs but will typically last two to three months.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "acne-treatment-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <Image className="max-h-[480px] rounded-sm shadow-lg my-8 md:mx-auto">
                <StaticImage 
                    src="../assets/images/acneTreatment.jpg" 
                    alt="Essence of Beauty New Client Acne Treatment" 
                />
                </Image>
            </div>
            <div id="acne-treatment-info" className="flex flex-col md:m-2 p-4 lg:p-8 lg:mx-8 bg-lightGreen rounded-sm shadow-md">
                        <h1 className="my-4 md:mt-2 md:mb-4">What's Included?</h1>
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
                        Please read more about our Acne-Clearing program by clicking <Link className="underline" to="/new-client-acne-consultation">here.</Link>      
                        </span>
                        </div>
            <div className="p-4 lg:p-8 md:mx-auto md:my-8">
            <Card cardBodyClass="flex flex-col p-4 lg:p-8" cardWrapperClass="lg:mx-4">
                        <div className="flex flex-col md:m-2">
                        <h1 className="my-4 md:mt-2 mb-4 md:mb-8">How It Works</h1>
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
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
            </div>
        </>
    )
}

export default AcneTreatment
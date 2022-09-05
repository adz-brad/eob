import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'

const AcneScars = () => {

    return(
        <>
            <Banner
                heading="Acne Scars Revision"
                gradient="from-black/70 via-black/50 to-black/30"
                caption="Scars can compromise your complexion long after acne heals. At Essence of Beauty, we create individual programs for each client to treat a range of problems including active acne and acne scarring."
                image={<StaticImage src="../assets/images/acneScarsHeader.jpg"/>}
            />
            <div className="p-4 lg:p-8">
            <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col p-4 md:p-8 md:w-2/3" >
                        <h1 className="my-4 font-semibold">Safe and effective treatments</h1>
                        <p className="mt-1 mb-2">
                        We all want to look and feel our best, both inside and out, every day. But for those who have suffered acne throughout their life and still show their physical scars that can be easier said than done. While it’s most prominent in adolescence, acne scarring can actually affect skin at any age. Scarring can affect not just a person’s physical appearance but also their self-confidence
                        </p>
                        <p className="mt-1 mb-2">
                        Scars are can appear to be normal skin color or dark. Acne scars are permanent textural changes and indentations that occur on the skin because of severe acne. As the bumps and lumps of active acne come and go, it often leaves our skin red, irritated, inflamed, uneven and, pigmented. This is what we call acne scarring
                        </p>
                        <Button 
                            data={{ text: "Learn More", anchor: "acne-scarring-info"}}
                            className="buttonLight my-8 md:my-auto"
                        />
                    </div>
                    
                        <StaticImage
                         src="../assets/images/acneScarring.jpg"
                        className="md:w-1/3 mx-auto md:m-4 rounded-sm shadow-lg" 
                        />

                </div>
            </div>
            <div id="acne-scarring-info" className="md:p-8">
            <Card cardBodyClass="p-4 lg:px-8" cardWrapperClass="md:my-8" >
            <h1 className="my-4">
            How do acne scars develop?
                        </h1>
                        <p className="mt-1 mb-2">
                        When acne breakouts penetrate the skin deeply, they damage the skin and the tissue beneath it. As the acne clears, the body tries to repair this damage. During the healing process, the body produces collagen a substance that gives the skin support. If the body produces too little or too much collagen, you will see a scar. This collagen can stay in place permanently, creating acne scarring. In some cases, the result is not a true scar, but simply an excess of pigmentation. This may fade away over a few months or years – it generally isn’t permanent as with other acne scars.
                        </p>
                        <p className="mt-1 mb-2">
                        Before getting treatment for acne scars, it is important to clear your acne. New acne breakouts can lead to new acne scars. Having acne also means that your skin is inflamed which will reduce the effectiveness of acne scar treatment. Luckily, we have a range of holistically active acne and acne scarring treatments to help get to the source of the problem and give you and your skin its confidence & radiance back!
                        </p>
                        <p className="mt-1 mb-2">
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
            {/*
            <div className="max-w-screen-xxl mx-auto py-8">
                <h1 className="mt-4 text-center">Useful Tips For Cystic Acne</h1>
                <p className="mb-4 text-center">Click on a tip to learn more.</p>
                <div className="my-4">
                <Accordion
                    className="p-4 md:p-8 bg-white"
                    items={[
                        {
                            heading: 'Reduce swelling and inflammation in your skin as soon as possible after getting a pimple.',
                            content: <p>The longer the inflammation remains on your skin, the greater the likelihood of getting a long-lasting red or brown mark. You can shorten the life of inflamed lesions by icing them for 2 minutes, up to 5 times per day. See what to do right now if you have a pimple guide for best results.</p> 
                        },
                        {
                            heading: "Avoid picking pimples and scabs!",
                            content: <p>If you care about leftover hyperpigmentation from acne, one of the best things you can do for your skin is avoid touching and picking at it. It’s nice to feel smooth skin, but not worth the long-term cost. By picking, you disrupt the skin’s natural healing process, and you may live with the consequences for years.</p>
                        },
                        {
                            heading: "Wear sunscreen every day.",
                            content: <p>Sunscreen does not treat the hyperpigmentation so much as it prevents it from becoming worse.</p>
                        },
                        {
                            heading: "Make an appointment at Essence of Beauty Acne Clinic.",
                            content: <p>Chemical peels and daily exfoliation help you fade red and brown marks from acne faster. Your skin specialist at Acne Clinic Essence of Beauty can customize a protocol for you to speed dead skin cell turnover so you can enjoy a brighter, more even complexion. Pictures will be taken at each appointment so you will be able to see progress with your own eyes—no more guessing if something works or not.</p>
                        }
                    ]}
                    additionalContent={
                        <div className="m-4">
                        <Link to="/new-client-acne-consultation" className="font-semibold hover:text-green">
                            Get one step closer to confident, concealer-free living by booking a New Client Acne Consultation.
                        </Link>
                        </div>
                    }
                />
                </div>
                </div>*/}
          </div>
          <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default AcneScars
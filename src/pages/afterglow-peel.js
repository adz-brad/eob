import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'

const AfterglowPeel = () => {
    return(
        <>
            <Banner
                heading="AfterGlow Peel"
                gradient="from-black/10 via-black/20 to-black/50"
                caption="The AfterGlow Peeling is a treatment in which a cream is applied to the skin to encourage the exfoliation of dead skin cells and debris while stimulating the skin’s natural renewal process. "
                image={<StaticImage src="../assets/images/afterglowHeader.webp"/>}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Get Your Glow Back!</h1>
                    <h4 className="mt-2 mb-4">The AfterGlow Peeling is tailored to fit all clients’ individual skin type and long-term goals.</h4>
                    <p className="my-1">
                    The AfterGlow Peeling is a treatment in which a cream is applied to the skin to encourage the exfoliation of dead skin cells and debris while stimulating the skin’s natural renewal process. The AfterGlow Peeling is designed to refine skin texture damaged by environmental factors and skin conditions such as acne. The procedure assists in smoothing fine lines and evening out skin discoloration. It improves skin texture and reduces the appearance of acne scars and environmental damage to the skin. With each additional AfterGlow Peeling procedure, you will notice incremental improvements in the overall appearance of the skin. 
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "afterglow-peel-info"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                    src="../assets/images/afterglow.jpg"
                    alt="Essence of Beauty Afterglow Peel Treatment"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="afterglow-peel-info" className="p-4 md:p-8">
                <Card cardBodyClass="flex flex-col p-4 md:p-8">
                        <h1 className="font-bold">
                            Afterglow Peel Treatment Benefits
                        </h1>
                        <h4 className="my-2">
                        There is no peeling which rivals its safety and at the same time, produces such excellent results.
                        </h4>
                        <p className="my-1">
                        Due to its safety, it can be used on all skin types and absolutely all skin conditions and colours.  It can also be applied to the face, neck & eyelids as well as can be applied all year round. The peel itself is in a cream form, ensuring easy and uniform application. During application, a very mild warm sensation is experienced and clients experience very little discomfort.
                        </p>
                        <div className="flex flex-col xl:flex-row my-2">
                        <div className="flex flex-col">
                        <h4 className="font-bold my-2">
                            Excellent results on:
                        </h4>
                        <ul className="list-disc my-2 ml-4">
                            <li className="my-1">
                            Hyperpigmentation , melasma & events of skin discoloration/pigmentation
                            </li>
                            <li className="my-1">
                            Acne breakouts, scarring, whiteheads, blackheaders & millia
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
                        <div className="flex flex-col xl:mx-auto">
                        <h4 className="font-bold my-2">
                            Additional benefits include:
                        </h4>
                        <ul className="list-disc my-2 ml-4">
                            <li className="my-1">
                            Improves skin tone
                            </li>
                            <li className="my-1">
                            Smooths fine lines and photo aging
                            </li>
                        </ul>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="my-1">
                                This peel is best done in a series of 3 or more, depending on your skin care goals.
                            </h4>
                            <span><strong className="mr-2 text-brown">One Treatment:</strong>$255</span>
                            <span><strong className="mr-2 text-brown">3 Treatments (package price when pre-booked / pre-paid):</strong>$710</span>
                            <span><strong className="mr-2 text-brown">Extraction and AfterGlow Peeling :</strong>$310</span>
                        </div>
                        </div>
                        <Button
                            data={{text: "Book Today!", anchor: "contact"}}
                            className="buttonLight my-8 mx-auto md:mx-0"
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

export default AfterglowPeel
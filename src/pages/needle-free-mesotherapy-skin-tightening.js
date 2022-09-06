import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'

const NoNeedleMesotherapy = () => {
    return(
        <>
            <Banner
                heading="Needle Free Mesotherapy Infusion"
                gradient="from-black/50 via-black/30 to-black/10"
                caption="Nano Infusion Mesotherapy otherwise known as nano-needling is an innovative, non-invasive transdermal serum delivery system designed to rejuvenate your skin and remedy many common issues like lack of tone, uneven texture, excessive pigmentation, scarring, and loss of elasticity."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/mesotherapyHeader.jpg?raw=true"/>}
            />
                        <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Improve Your Skin Without Needles!</h1>
                    <h4 className="mt-2 mb-4">Get the Best Looking Skin Possible with Transdermal Serum Infusion</h4>
                    <p className="my-1">
                    Nano Infusion Mesotherapy otherwise known as nano-needling is an innovative, non-invasive transdermal serum delivery system designed to rejuvenate your skin and remedy many common issues like lack of tone, uneven texture, excessive pigmentation, scarring, and loss of elasticity. This type of treatment instantly allows up to 1000% more absorption of vitamins, antioxidants, minerals, amino acids and growth factors which are delivered into the mesodermal layer of the skin, flooding the cells with nourishment and moisture to rejuvenate and brighten the complexion. At the same time, this procedure stimulates the production of elastin and collagen responsible for the skin cells’ plump and bounce.  Giving you extraordinary results unattainable through other means
                    </p>
                    <Button
                        data={{text: "Learn About The Benefits", anchor: "nano-infusion-mesotherapy-benefits"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/needleFreeMesotherapy.jpeg?raw=true"
                    alt="Essence of Beauty Needle-free Mesotherapy Treatment"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="nano-infusion-mesotherapy-benefits" className="flex flex-col md:flex-row md:p-8 m-4 bg-lightGreen rounded-sm shadow-md">     
                <div className="flex flex-col md:w-1/2 px-4 md:px-8">
                    <h1 className="font-bold my-4">
                    The Benefits
                    </h1>
                    <h4>The goal of the Mesotherapy is to restore a more youthful look by helping to reverse the signs of aging and gravity. The treatment achieves:</h4>
                    <ul className="my-4 list-disc ml-4">
                        <li className="my-1">
                        Enhances product absorption
                        </li>
                        <li className="my-1">
                            Gently exfloiates while increasing hydration
                        </li>
                        <li className="my-1">
                            Triggers the natural regenerative processes of the skin
                        </li>
                        <li className="my-1">
                            Increases circulation & improves skin texture
                        </li>
                        <li className="my-1">
                            Softens lines, wrinkles & evens skin tone
                        </li>
                        <li className="my-1">
                            Improves the appearance of acne scarring
                        </li>
                        <li className="my-1">
                            Boosts collagen production
                        </li>
                        <li className="my-1">
                            Stimulates elastin production
                        </li>
                    </ul>
                </div>  
                <div className="flex flex-col md:w-1/2 px-4 md:px-8">
                    <h1 className="font-bold my-4">
                    Who Can Mesotherapy Help?
                    </h1>
                    <h4>The multitude of benefits can be experienced by those with a large variety of target issues, such as:</h4>
                    <ul className="my-4 list-disc ml-4">
                        <li className="my-1">
                        Aging skin
                        </li>
                        <li className="my-1">
                            Crow's feet
                        </li>
                        <li className="my-1">
                            Fine lines & lip lines
                        </li>
                        <li className="my-1">
                            Hyperpigmentation
                        </li>
                        <li className="my-1">
                            Large pores
                        </li>
                        <li className="my-1">
                            Scarring
                        </li>
                        <li className="my-1">
                            Stretch marks
                        </li>
                        <li className="my-1">
                        Areas in which traditional chemical peels and microdermabrasion cannot be done
                        </li>
                    </ul>
                </div>         
            </div>
            <div className="md:p-8">
                <Card cardBodyClass="p-4 md:p-8">
                    <h1 className="font-bold my-4">
                    Treatment Frequency & Maintenance
                    </h1>
                    <p className="my-1">
                    For optimum results, we recommend a course of 4 weekly treatments, followed by one treatment done every other week for 4 weeks, then one maintenance treatment every 4-6 weeks thereafter.
                    </p>
                    <p className="my-1">
                    It is important to follow a professionally recommended skin care regimen featuring appropriate, high-quality products to achieve optimum results.   
                    </p>
                    <div className="flex flex-col">
                    <h4 className="font-bold mt-4 mb-2 text-brown">Pricing</h4>
                    <span><strong className="mr-2">Single Treatment:</strong>$178</span>
                    <span><strong className="mr-2">Add LED Lights:</strong>$205</span>
                    </div>
                    <div className="flex flex-col">
                    <h4 className="font-bold mt-4 mb-2 text-brown">Package Prices when pre-booked & pre-paid:</h4>
                    <span><strong className="mr-2">4 Treatments:</strong>$650</span>
                    <span><strong className="mr-2">6 Treatments w/ LED:</strong>$730</span>
                    </div>
                    <h4 className="font-bold mt-4 text-brown">Contraindications</h4>
                    <ul className="my-2 list-disc ml-4">
                        <li className="my-1">
                        Pregnancy
                        </li>
                        <li className="my-1">
                        Cancer or clients using chemotherapy drugs
                        </li>
                    </ul>
                    <Button
                        data={{text: "Book Today!", anchor: "contact"}}
                        className="buttonLight mt-8 mx-auto md:mx-0"
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

export default NoNeedleMesotherapy
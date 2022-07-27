import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import BeforeAfter from '../components/beforeAfter'
import Card from '../components/card'

const HerbalGreenPeel = () => {
    return(
        <>
            <Banner
                heading="Skin Rejuvenation with Herbal Green Peel®"
                caption="GREEN PEEL® is a herbal formulation composed of natural active substances such as vitamins, plant hormones, enzymes, mineral salts, various dried flowers, sea weeds sand other beneficial ingredients. Not an acid anywhere - you’ll hear no tell-tale sizzle of cooking skin with our Green Peel®!"
                image={<StaticImage src="../assets/images/greenPeelHeader.jpg" alt="Page Header"/>}
            />
            <div className="p-4 lg:p-16">
                <div className="flex flex-col-reverse lg:flex-row">
                    <StaticImage 
                            src="../assets/images/greenPeelFeature.png" 
                            alt="Essence of Beauty Herbal Green Peel®"
                            className="my-8 lg:my-0 lg:w-1/2 lg:mr-12 rounded-lg shadow-lg"
                    />
                    <div className="flex flex-col lg:w-1/2 p-2">
                        <h1 className="mb-4">A "New Face" For Skin Peels</h1>
                        <p className="my-1">
                            All of us are probably well acquainted with the theory everywhere marketed in recent years that one of the most popular approaches to skin brightening and renewal has been through the application to the skin of synthetics and acids of various strengths. The acids themselves are very inexpensive and so can be very appealing means for an attractive return for practitioners and for clients seeking a quick and brighter look to the skin.
                        </p>
                        <p className="my-1">
                            At Essence of Beauty, however, we're aware that the most advanced science regarding skincare indicates that there are healthier, more holistic and more successful approaches to skin renewal that do not rely on chemicals or the damaging effects of acids. In fact, the best science in the field tells us that in practice, the frequent use of acids sets up a problematic domino effect that is not only difficult for clients to break but results in the opposite of their intended purpose – that is, acids weaken the cellular structure of the skin thereby speeding the aging process.
                        </p>
                        <p className="my-1">
                            We doubt you want to accelerate the speed at which your skin ages and we at Essence of Beauty most certainly don’t want that for you either. What we want to offer you are treatments and products that support the principal philosophy of our spa – that here is where Health meets Beauty.
                        </p>
                        <p className="mt-2 text-xl font-bold">
                            Meet the Herbal Green Peel®.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:my-20">
                    <h1 className="text-center my-8">
                        Herbal Green Peel® – Brighter, Fresher, Smoother, Rejuvenated Appearance
                    </h1>
                    <div className="grid grid-cols-2 xl:grid-cols-4 md:gap-8">
                        <StaticImage 
                            src="../assets/images/greenPeel1.png" 
                            alt="Essence of Beauty Herbal Green Peel®"
                            className="h-40 md:h-80 rounded-lg shadow-lg m-2 md:m-4"
                        />
                        <StaticImage 
                            src="../assets/images/greenPeel2.png" 
                            alt="Essence of Beauty Herbal Green Peel®"
                            className="h-40 md:h-80 rounded-lg shadow-lg m-2 md:m-4"
                        />
                        <StaticImage 
                            src="../assets/images/greenPeel3.png" 
                            alt="Essence of Beauty Herbal Green Peel®"
                            className="h-40 md:h-80 rounded-lg shadow-lg m-2 md:m-4"
                        />
                        <StaticImage 
                            src="../assets/images/greenPeel4.png" 
                            alt="Essence of Beauty Herbal Green Peel®"
                            className="h-40 md:h-80 rounded-lg shadow-lg m-2 md:m-4"
                        />
                    </div>
                    <p className="my-12 mx-4">
                        In keeping with our philosophy, the Green Peel® offers you an opportunity to experience all the benefits of skin refreshment, skin renewal, skin brightening, and skin treatments that are often associated with acids “BUT” without the very questionable immediate and longer-terms disadvantage. So you see, the Green Peel® is not only truly green in colour but naturally “Green” in its ingredients, in what it can treat and in its benefits as well. Green Peel® – Ingredients Aptly named, the GREEN PEEL® is an herbal formulation composed of natural active substances such as vitamins, plant hormones, enzymes, mineral salts, various dried flowers, sea weeds sand other beneficial ingredients. Not an acid anywhere and you’ll hear no tell-tale sizzle of cooking skin with our Green Peel®.
                    </p>
                    <div className="flex flex-row">
                        <div className="w-1/2 pr-8">
                            <Card cardBodyClass="p-8">
                                <h1 className="text-3xl mb-4">
                                    Green Peel® Advantages
                                </h1>
                                <ul className="list-disc ml-4">
                                    <li className="my-1">
                                    A safe, reliable, clinically tested and unique acid free resurfacing method of skin renewal that has been used for over 50 years in over 40 countries in over 2,000 cosmetics institutes in Germany alone
                                    </li>
                                    <li className="my-1">
                                    Improves skin colour through intensified blood circulation 
                                    </li>
                                    <li className="my-1">
                                    Promotion of faster cell regeneration      
                                    </li>
                                    <li className="my-1">
                                    Stimulation of the body’s collagen which leads to improved texture, firmness, flattening of wrinkles, reduction and often complete clearing of acne and smoothing and softening of facial and body scars.
                                    </li>
                                    <li className="my-1">
                                    No toxic or negative side effects
                                    </li>
                                    <li className="my-1">
                                    No injury or damage to the skin at the dermal level, and minimal or no interruption of professional or social obligations.
                                    </li>
                                </ul>
                            </Card>
                        </div>
                            <div className="w-1/2 pr-8">
                            <Card cardBodyClass="p-8">
                                <h1 className="text-3xl mb-4">
                                    Herbal Green Peel® Helps Treat:
                                </h1>
                                <ul className="list-disc ml-4">
                                    <li className="my-1">
                                    Large pored skin, oily skin, skin impurities, different forms of acne
                                    </li>
                                    <li className="my-1">
                                    Signs of premature aging, wrinkles and sagging facial contours
                                    </li>
                                    <li className="my-1">
                                    Sun damaged skin, uneven skin, some forms of hyper-pigmentation    
                                    </li>
                                    <li className="my-1">
                                    Scars caused by acne, burns and surgery
                                    </li>
                                    <li className="my-1">
                                    Stretch marks, cellulite
                                    </li>
                                    <li className="my-1">
                                    Skin issues on the body including tummy, upper arms and thighs
                                    </li>
                                    <li className="my-1">
                                    Prophylactic anti-aging treatment, aging hands
                                    </li>
                                </ul>
                            </Card>
                        </div>
                        </div>
                        </div>
                        <div className="flex flex-row">
                        <div className="w-1/2">

                        </div>
                        <div className="w-1/2 flex flex-col justify-center my-8">
                            <h1 className="text-center">
                                Before & After Pictures
                            </h1>
                            <span className="text-center text-sm mt-2">Drag the slider to compare before Herbal Green Peel treatment and after.</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg mx-auto my-8">
                                <BeforeAfter
                                    className="rounded-lg shadow-lg h-[400px]"
                                    beforeImage={<StaticImage src="../assets/images/greenPeelBefore1.png" alt="" />}
                                    afterImage={<StaticImage src="../assets/images/greenPeelAfter1.png" alt="" />}
                                />
                                <BeforeAfter
                                    className="rounded-lg shadow-lg h-[400px]"
                                    beforeImage={<StaticImage src="../assets/images/greenPeelBefore2.png" alt="" />}
                                    afterImage={<StaticImage src="../assets/images/greenPeelAfter2.png" alt="" />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default HerbalGreenPeel
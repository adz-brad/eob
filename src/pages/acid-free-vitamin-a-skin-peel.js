import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Seo from '../components/seo'

const VitaminAInfusion = () => {
    return (
        <>
            <Banner
                heading="Vitamin A Infusion Peel"
                gradient="from-black/40 via-black/20 to-black/0"
                image={<StaticImage alt="Essence of Beauty Ottawa - Vitamin A Infusion Peel" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/skinRemodelingHeader.jpg?raw=true" />}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-4 my-8">
                <div className="flex flex-col lg:my-8 md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Vitamin A Infusion Peel For Acne, Rosacea & More</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Essence of Beauty Ottawa clinic specializes in high quality, acid-free peels for treating acne, scarring, rosacea & more. The unique Vitamin A Facial infusion "peel" is extremely gentle, creating change through stimulation, not peeling, with specific receptors designed to interact with the fibroblasts for more collagen production.</h2>
                    <p className="my-1">
                        The vitamin A infusion peel is non-acid retinaldehyde peel that is boosted with powerful antioxidants and nutrients that help repair and remodel the skin. It is a great choice for acne, scarring, rosacea and other treatments on the face, neck and chest. Retinaldehyde is the most potent and least irritating form of vitamin A. An added benefit of retinaldehyde is that your skin can store it. All these features make retinaldehyde the superior form of vitamin A on the market. The vitamin A infusion peel is customized to meet each client’s specific skin needs and concerns. The skincare practitioner creates a custom blend of antioxidants and nutrients that is mixed with the concentrated vitamin A prior to application. Some of the most common ingredients used are COQ10, hyaluronic acid, peptides, vitamin C, beta glucan, mandelic acid and niacinamide. The vitamin A peel is extremely safe and tolerated well by all skin types. You may see mild to moderate flaking two to three days after the peel, which can last another two to four days. The peel is gentle but the results are significant. Once vitamin A has penetrated deep within the skin to the dermal layer, it stimulates the formation of new, healthy cells and the magic begins, resulting in vibrant, healthy and fresh-looking skin.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "vitamimn-a-skin-remodeling-info" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/vitamin-a-infusion-peel.jpg?raw=true"
                    alt="Essence of Beauty Vitamin A Peel Skin Remodeling"
                    className="md:h-[460px] md:w-[500px] md:-ml-2 mx-auto rounded-sm shadow-md transform -rotate-90"
                />
            </div>
            <div id="vitamimn-a-skin-remodeling-info" className="flex flex-col lg:m-8 p-4 lg:p-8 bg-lightGreen rounded-sm shadow-lg">
                <h2 className="text-xl md:text-3xl mb-2">A Peel For All Skin Types</h2>
                <p className="my-2">
                    There are a number of different types of infusions available with the vitamin A infusion peel:
                </p>
                <div className="my-2">
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        Antioxidant anti-aging infusion
                    </h3>
                    <p>
                        This infusion provides the skin with a burst of antioxidants and collagen and elastin stimulators that will feed the skin and keep it youthful and healthy. Retinaldehyde is the most potent anti-aging ingredient; not only does it stimulate collagen and elastin, but it also ensures we are replicating healthy, well formed cells.
                    </p>
                </div>
                <div className="my-2">
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        Firming anti-aging infusion
                    </h3>
                    <p>
                        This will provide the skin with a deep firming and remodeling of damaged skin. Both retinaldehyde and vitamin C are essential when it comes to stimulating and synthesizing collagen. This infusion is packed with both these amazing ingredients.
                    </p>
                </div>
                <div className="my-2">
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        Rosacea infusion
                    </h3>
                    <p>
                        This is the perfect peel for rosacea because it is gentle and delivers remodeling support to the deeper layers where inflammation occurs. It is also calming and restoring. Retinaldehyde is one of the few ingredients that have been proven to effectively reduce rosacea.
                    </p>
                </div>
                <div className="my-2">
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        Acne Infusion
                    </h3>
                    <p>
                        This peel will calm and remodel scar tissue while clearing acne outbreaks and controlling oil and bacteria. Beta glucan is a key ingredient in this infusion; it cleans up debris and scar tissue, allowing the skin to function effectively.
                    </p>
                </div>
                <p className="my-2">
                    One of the best features of the vitamin A peel is that it is 100 percent relaxing and rejuvenating because it is non-acid and it works at a deeper layer, so you do not feel any burning. The treatment experience is similar to a facial but the results are clinical.
                </p>
            </div>
            <div className="p-4 lg:p-8 mt-16 mb-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-2/3">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Vitamin A Infusion Advantages
                        </h2>
                        <ul className="list-disc ml-4 my-4">
                            <li className="my-1">
                                Increasing the number of collagen producing cells.
                            </li>
                            <li className="my-1">
                                Protect the skin by repairing the barrier.
                            </li>
                            <li className="my-1">
                                Increase the skin’s nutritional delivery.
                            </li>
                            <li className="my-1">
                                Stimulate collagen without using inflammation or trauma.
                            </li>
                            <li className="my-1">
                                Improving DNA repair at the cellular level.
                            </li>
                            <li className="my-1">
                                Increase the number of growth factors.
                            </li>
                            <li className="my-1">
                                Strengthening the skin immune system.
                            </li>
                            <li className="my-1">
                                Reactivate the wound and scar repair.
                            </li>
                            <li className="my-1">
                                Fixing oxidative damage that accumulates from repeated sun exposure.
                            </li>
                            <li className="my-1">
                                Uses the highest quality serums available during facials and for home care to deliver potent nutrients to the living skin layer, resulting in new cell growth and tissue oxygenation. Which protects your skin against accelerated aging.
                            </li>
                            <li className="my-1">
                                Includes skin care customization, which ensures that you and your skin get exactly what you need to achieve the healthiest and most radiant skin possible.
                            </li>
                            <li className="my-1">
                                Can resolve acne and rosacea, fade hyper-pigmentation, mediate damage from past skin treatments, and reverse many signs of aging.
                            </li>
                            <li className="my-1">
                                Noticeable improvement in skin tone and laxity.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col lg:mx-auto lg:pl-8">
                        <h3 className="text-lg md:text-2xl font-bold text-brown mt-2">
                            For Skin Affected By:
                        </h3>
                        <ul className="list-disc ml-4 my-4">
                            <li className="my-1">
                                Sun Damage
                            </li>
                            <li className="my-1">
                                Rosacea
                            </li>
                            <li className="my-1">
                                Diabetes
                            </li>
                            <li className="my-1">
                                Pregnancy
                            </li>
                            <li className="my-1">
                                Post-Surgical Wounds
                            </li>
                            <li className="my-1">
                                Hyperpigmentation
                            </li>
                            <li className="my-1">
                                Hypersensitivity
                            </li>
                            <li className="my-1">
                                Damage from injections, chemical peels, and excessive exfoliation
                            </li>
                            <li className="my-1">
                                General Dullness
                            </li>
                            <li className="my-1">
                                Procedure Traumas
                            </li>
                            <li className="my-1">
                                Menopause
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default VitaminAInfusion

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Acid-Free Vitamin A Infusion Peel Ottawa - Acne, Scarring, Anti-aging, & Rosacea Treatment"
                pageDescription="The innovative chemical & acid free Vitamin A Infusion peel will transform how you think about facial peels, providing safe & effective treatment of acne, rosacea, anti-aging & more with incredible results!"
                pageKeywords="Vitamin A, Infusion, Peel, Dermal Rejuvenation, Gentle, Sensitive Skin, Non-acid, Sun damage, Rosacea, Diabetes, Pregnancy, Post-surgery, Dull skin, Menopause, Chemical Free, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/acid-free-vitamin-a-skin-peel/"
                pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/vitamin-a-infusion-peel.jpg?raw=true"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/acid-free-vitamin-a-skin-peel/" />
        </>
    )
} 
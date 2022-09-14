import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import Button from '../components/button'

const SkinTags = () => {
    return(
        <>
            <Banner
                heading="Skin Tags, Milia, Red Dots & Skin Growth Removal"
                gradient="from-black/60 via-black/30 to-black/20"
                caption=""
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/skintagHeader.jpg?raw=true"/>}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col mx-auto">
                    <h1 className="font-bold mb-2">Skin Tags, Milia, Red Dots, Hyperpigmentation, Skin Growths Removal with Vascu-Lyse</h1>
                    <h4 className="mt-2 mb-4">If you have a predisposition to various skin growths such as skin tags, keratosis, ruby pints these targeted skin revision therapies will effectively solve this problem.</h4>
                    <p className="my-1">
                    A safe, non-invasive treatment that permanently removes unsightly skin growths from your face and body in just one session! All treatments are performed using the strictest sanitary procedures. The treatment involves a cauterization machine that has been successfully used for over 30 years by skin care professionals to remove all types of common surface skin growths. The procedure is generally more effective and less painful than liquid nitrogen or laser.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "skin-tags-more-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
            </div>
            <div className="p-4 md:p-8">
            <Card cardBodyClass="p-4 md:p-8" cardWrapperClass="">
                    <h1 className="my-2 font-bold">
                        Common Vascular Imperfections
                    </h1>
                    <span>Click on a topic to read more</span>
                    <ul className="my-4 list-disc ml-4">
                        <li className="my-1 text-lg">
                        Skin Tags
                        </li>
                        <li className="my-1 text-lg">
                        Cherry Angiomas (Ruby Points, Red Dots)  
                        </li>
                        <li className="my-1 text-lg">
                        Telangiectasia & Spider Angiomas
                        </li>
                        <li className="my-1 text-lg">
                        Milia
                        </li>
                        <li className="my-1 text-lg">
                        Sebaceous Hyperplasia
                        </li>
                        <li className="my-1 text-lg">
                        Flat Hyper pigmentation (Age & Sun Spots)
                        </li>
                        <li className="my-1 text-lg">
                        Keratosis
                        </li>
                        <li className="my-1 text-lg">
                        Broken Capillaries on the face
                        </li>
                    </ul>
                </Card>
                </div>
            <div id="skin-tags-more-info" className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                        Skin Tags
                    </h1>
                    <p className="mt-4 mb-auto">
                    A <strong>Skin Tag</strong> is a common skin growth that looks like a small piece of hanging skin, often described as bits of skin-or flesh-coloured tissue that project from the surrounding skin from a small, narrow stalk. They typically occur on the neck, underarms, eyelids, and under the breasts. They are harmless and do not become cancerous or malignant. Skin tags are usually inherited. At Essence of Beauty we’ve performed hundreds of skin tag removals with excellent results. Our the most popular skin tag treatment involves cauterising the base of the skin tag to close the blood supply to the growth. This procedure is well suited to treating small or large skin tags because it accelerates healing with minimal pain and damage to the skin. Most of our clients prefer this method because it offers immediate results. The growth just drops off over a few days, and you can carry on your day normally after a treatment. Skin tags are completely removed with the first treatment.
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/skin-tags.jpg?raw=true" className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row-reverse">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                    Cherry Angiomas (Ruby Points)
                    </h1>
                    <p className="mt-4 mb-auto">
                    <strong>Ruby Points</strong> – these little red dots are called cherry angiomas. They are made up of a cluster of tiny capillaries at the surface of the skin, and can range in color from bright red to purple. As they grow larger, they tend to expand in thickness, and may take on the raised and rounded shape of a dome and may be located on any part of the body. Everyone seems to develop a few, but the number is genetically determined. They usually appear in early adulthood; but the onslaught in those genetically inclined tends to increase as one approaches their 40s. Red dots considered to be painless and harmless. Removal is easy by Vascu-Lyse. They heal beautifully after treatment, and if properly treated they will not.
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cherry-angions-ruby-spots.jpg?raw=true" className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                    Milia
                    </h1>
                    <p className="mt-4 mb-auto">
                    <strong>Milia</strong> often referred to as (milk spots), are keratin-filled cysts that can appear just under the epidermis. They are common in people of all ages, they appear mostly on the face. They are easily removed by Vascu-Lyse in one session.
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/milia.jpg?raw=true" className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row-reverse">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                    Sebaceous Hyperplasia
                    </h1>
                    <p className="mt-4 mb-auto">
                    <strong>Sebaceous Hyperplasia</strong> is a common benign condition of sebaceous glands in adults of middle age or older. Lesions can be single or multiple and manifest as yellowish, soft, small papules on the face (particularly nose, cheeks, and forehead). Sebaceous hyperplasia occasionally also occurs on the chest, areola, mouth, foreskin.
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/sebaceous-hyperplasia.jpg?raw=true" className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                    Seborrheic Keratosis
                    </h1>
                    <p className="mt-4 mb-auto">
                    <strong>Seborrheic Keratosis</strong> – are flesh-colored, brown, or black growths that can appear anywhere on the skin. Theses harmless growths are very common in middle-aged and older people. Seborrheic keratosis are round or oval and very in size. They appear to be stuck on the skin and often have a waxy or scaly surface. They are normally painless, and require no treatment. But often are removed for cosmetic reasons.
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/seborrheic-keratosis.jpg?raw=true" className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row-reverse">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                    Flat Hyper Pigmentation (Sun & Age Spots)
                    </h1>
                    <p className="mt-4 mb-auto">
                    Hyper pigmentation is a common, usually harmless condition in which patches of skin become darker in color then the normal surrounding skin. This darkening occurs when an excess of melanin, the brown pigment that produces normal skin color, forms deposits in the skin. Age or “liver” spots are a common form of hyperpigmentation. They occur due the sun damage. These small, darkened patches are usually found on the hands and face or other areas frequently exposed to the sun.
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/flat-hyperpigmentation-sun-age-spots.jpg?raw=true" className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 bg-lightGreen p-4 md:p-8 lg:px-16">
                    <h1 className="mt-auto font-bold">
                    Telangiectasia & Spider Angiomas
                    </h1>
                    <p className="mt-4 mb-auto">
                    <strong>Telangiectasia</strong> – (broken capillaries) most commonly found on the cheeks and nose area, these appear as small red/pink threads under the skins surface. Broken capillaries occur when the capillary walls narrow and widen too quickly causing the muscles in the walls to tear. This in turn allows the blood to seep out resulting in broken capillaries. <strong>Spider Angioma</strong> is a combination of a ruby point and telangiectasia. They are often found on the face, especially around the eyes and nose. Causes are very similar to telangiectasia. Dehydrated, dry and sensitive skins often have thin skin that provides less protection and therefore, these skin types are the most commonly affected. Common causes: Hot conditions, Wind blowing on face, sunburns, pressure (squeezing spots from glasses
                    </p>
                </div>
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/telangiectasia-spider-angiomas.jpg?raw=true" className="lg:w-1/2" />
            </div>
        </>
    )
}

export default SkinTags
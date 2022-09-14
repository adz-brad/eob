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
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Skin Tags, Milia, Red Dots, Hyperpigmentation, Skin Growths Removal with Vascu-Lyse</h1>
                    <h4 className="mt-2 mb-4">If you have a predisposition to various skin growths such as skin tags, keratosis, ruby pints these targeted skin revision therapies will effectively solve this problem.</h4>
                    <p className="my-1">
                    A safe, non-invasive treatment that permanently removes unsightly skin growths from your face and body in just one session! All treatments are performed using the strictest sanitary procedures. The treatment involves a cauterization machine that has been successfully used for over 30 years by skin care professionals to remove all types of common surface skin growths. The procedure is generally more effective and less painful than liquid nitrogen or laser.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "microneedling-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <Card cardBodyClass="p-4 md:p-8" cardWrapperClass="md:w-1/3 mx-auto h-full">
                    <h1 className="my-2 font-bold">
                        Common Vascular Imperfections
                    </h1>
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
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/skin-tags.jpg?raw=true" className="" />
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cherry-angions-ruby-spots.jpg?raw=true" className="" />
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/milia.jpg?raw=true" className="" />
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/sebaceous-hyperplasia.jpg?raw=true" className="" />
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/seborrheic-keratosis.jpg?raw=true" className="" />
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/flat-hyperpigmentation-sun-age-spots.jpg?raw=true" className="" />
                <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/telangiectasia-spider-angiomas.jpg?raw=true" className="" />
            </div>
        </>
    )
}

export default SkinTags
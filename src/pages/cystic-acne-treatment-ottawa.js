import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Card from '../components/card'
import Button from '../components/button'
import { Link } from 'gatsby'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const CysticAcne = () => {
    return(
        <>

            <Banner
                heading="Cystic Acne"
                gradient="from-black/30 via-black/20 to-black/10"
                caption="Having cystic acne on face can cause you significant discomfort as those lesions are usually not just painful but also impact on your facial appearance. The good news is that cystic acne generally clears up quickly with the Acne Clinic protocol we use at Essence of Beauty."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cysticAcneHeader.jpg?raw=true"/>}
            />
            <div className="p-4 lg:p-8">
                <div className="flex flex-col md:flex-row my-8">
                    <div className="flex flex-col p-4 md:p-8 md:w-3/5 md:mr-8" >
                        <h1 className="my-4 font-semibold">Treatments For Cystic Acne</h1>
                        <h2 className="mb-2 subheader">Essence of Beauty Ottawa Acne Clinic specializes cystic acne treatment that helps clear cystic acne quickly.</h2>
                        <p className="my-1">
                        Having cystic acne on face can cause you significant discomfort as those lesions are usually not just painful but also impact on your facial appearance
                        </p>
                        <p className="my-1">
                        Cystic acne is the most severe acne infliction that someone can suffer from. It manifests itself in large, deeply-embedded, red, painful, and often swollen lumps in the skin. In some cases, these lumps (called cysts) are so deeply embedded that they are not visible from the surface of the skin.
                        </p>
                        <Button 
                            data={{ text: "Learn More", anchor: "cystic-acne-info"}}
                            className="buttonLight my-8 md:my-auto"
                        />
                    </div>
                    <StaticImage 
                        loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cysticAcne.jpg?raw=true" 
                    className="md:m-4 rounded-sm shadow-lg" 
                    />
                </div>
                <div id="cystic-acne-info" className="flex flex-col my-4 md:my-8">
                    <Card cardBodyClass="p-4 lg:px-8" cardWrapperClass="md:m-4" >
                        <h1 className="my-4">
                        How Does Cystic Acne Develop?
                        </h1>
                        <p className="mt-1 mb-2">
                        The exact cause of this condition isn’t known, but hormones play a part, which is why cystic acne often develops in teens.
                        </p>
                        <p className="mt-1 mb-2">
                         
Cystic lesions begin as fairly normal pimples but continue to worsen beyond typical acne. Initially the pore becomes clogged with oil and dead skin cells. Often acne-causing bacteria get trapped inside the pore as well. These bacteria thrive on oil produced by the skin, which only encourages growth and infection.   
                        </p>
                        <p className="mt-1 mb-2">
                        With cystic acne, the infection grows deeper, becomes inflamed, and blocks the pore opening. If the lesion ruptures because of its size or because of squeezing, the infection spreads to surrounding areas and further infects skin
                        </p>
                        <p className="mt-1 mb-2 font-semibold text-brown">
                        In three months normalizing of oil output and acne production, improvement of texture and scar removal, as well as reduction in inflammation and redness to skin.      
                        </p>
                        

                        <h1 className="mt-8 mb-4">
                        Who Usually Develops Cystic Acne?
                        </h1>
                        <p className="mt-1 mb-2">
                        Since hormones are largely responsible for cystic acne, the condition usually appears in teens. The condition appears more with men than women.
                        </p>
                        <p className="mt-1 mb-2">
                        In males, abnormal levels of androgen appear to play a role. Once a male passes the stage of puberty, the levels of androgen increase. These hormones cause change in skin texture and induce excess oil production from the skin glands. If for any reason the skin pore closes (eg due to the oil and other debris), this results in formation of pimples.
                        </p>
                        <p className="mt-1 mb-2">
                        In females, abnormal levels of estrogen/progesterone seem to play a role. Women can experience a number of hormone changes which may contribute to cystic acne. Hormonal changes occur during the menstrual cycle, menopause, pregnancy, and/or if they have a medical disorder called polycystic ovarian syndrome.
                        </p>
                        <p className="mt-1 mb-2">
                        The condition can appear in someone as young as eight years old, to as old as fifty. Cystic acne also runs in families. Hence, if one your parents had severe acne, then there is a chance that you may also develop the condition.
                        </p>
                        <p className="mt-1 mb-2">
                        Cystic acne most commonly presents on the face but can also occur on the back, chest, upper arms and shoulders. Overall cystic acne is much more common in males but women can also develop this skin disorder. When it occurs in women, the cystic acne usually occurs below the cheeks and around the mouth and chin area.    
                            </p>

                        <h1 className="mt-8 mb-4">
                        What Should I Expect?
                        </h1>
                        <p className="mt-1 mb-2">
                        The good news is that cystic acne generally clears up quickly with the protocol we use at Acne Clinic in Essence of Beauty. We treat cystic acne with a combination of topical products and clinical treatments to calm the existing inflammation and to keep it from returning. We also recommend certain supplements to use along with your home care which have been clinically proven to reduce inflammation. To prevent scarring, it is best to not wait if you have cystic acne. Invest in Yourself… You are Worth it! 
                        </p>
                        <p className="mt-1 mb-2">
                        Please read more about our Acne-Clearing program by clicking <Link to="/acne-treatment-ottawa/" className="font-bold text-brown hover:text-green">here.</Link>  
                        </p>
                    </Card>

</div>
            </div>
            <div className="max-w-screen-lg mx-auto my-8">
                    <div className="flex flex-col items-center my-4">
                        <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                        <span className="mb-8">Comparing before & treatment</span>
                    </div>
                    <Gallery 
                    className="flex flex-col md:flex-row gap-4"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cysticacnebeforeafter1.jpg?raw=true" alt="Before & After Cystic Acne Treatment" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cysticacnebeforeafter2.jpg?raw=true" alt="Before & After Cystic Acne Treatment" />
                    ]}
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold mt-8 mb-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default CysticAcne

export const Head = () => {
    return(
        <>
        <Seo
        pageTitle="Cystic Acne Treatment Ottawa"
        pageTitleDescription="Treat Cystic Acne Inflammation & Scars With a Customized Skin Treatment Regiment from Essence of Beauty Ottawa"
        pageDescription="Having cystic acne on face can cause you significant discomfort as those lesions are usually not just painful but also impact on your facial appearance. The good news is that cystic acne generally clears up quickly with the Acne Clinic protocol we use at Essence of Beauty."
        pageKeywords="Cystic Acne, Inflammation, Scars, Acne Scars, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/cystic-acne-treatment-ottawa/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/cysticAcne.jpg?raw=true"
        />
        <link rel="canonical" href="https://www.essenceofbeauty.ca/cystic-acne-treatment-ottawa/" />
        </>
    )
  } 
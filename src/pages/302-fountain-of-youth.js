import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import { Link } from 'gatsby'
import Image from '../components/image'
import Gallery from '../components/gallery'
import Seo from '../components/seo'

const FountainOfYouth = () => {
    return(
        <>           
            <Banner
                heading="302 Fountain of Youth"
                caption="I am very excited to be the first Canadian spa to carry a completely different skincare line that is very effective for aging, acne, rosacea, treats scars and uneven texture, clears visible sun damage as well as other skin conditions – it’s called 302"
                image={<StaticImage alt="Essence of Beauty Ottawa - 302 Fountain of Youth" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302fountainHeader.jpg?raw=true"/>}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">A Revolutionary Approach to Acne, Rosacea & Skin Treatment</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Essence of Beauty Ottawa is excited to be the very first Canadian spa to carry the 302 Professional Skincare Line designed to naturally treat & repair your skin problems.</h2>
                    <p className="my-1">
                    Most approaches to acne, rosacea, anti-aging & other skincare treatments often rely on what is known as the ‘repair’ model. Some of the more common treatments include IPL, microdermabrasion, glycolic, TCA and lactic acid peels, serums/lotions containing ascorbic acid (vitamin C) , BHA, AHA, ALA, or mandelic acid, EOs peels, grainy scrubs, laser treatments to name a few. The purpose is to exfoliate the skin to jump start it into increasing collagen production, which, to an extent, happens. The difficulty arises because exfoliation often causes micro-inflammation too. That is the ‘glow’ you see, the so-called smoother appearance to the skin and the look of reduced wrinkles. It might look nice in the beginning but it reality, it is a problem. Why? Because the quality of the collagen produced is often subpar. Skin that is continuously subjected to these treatments will become depleted of its natural moisture producing capability and its natural defences against environmental elements. And then skin actually ages more quickly, eventually becoming even weaker, thinner, more sensitive and exhausted. In order to regenerate after each exfoliation, skin cells require infusions of the proper nutrients to produce the necessary energy for regeneration, and unfortunately, energy declines with repeated exfoliation and as you age.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "302-fountain-of-youth-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                        loading="eager"
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302Fountain.jpg?raw=true"
                    alt="Essence of Beauty 302 Fountain of Youth"
                    className="md:w-1/3 mx-auto"
                />
            </div>
            <div id="302-fountain-of-youth-info" className="flex flex-col p-4 md:p-8 bg-lightGreen rounded-sm shadow-sm md:m-8">
                    <h2 className="text-xl md:text-3xl mb-4">
                        The Fountain of Youth - All About Avogen™
                    </h2>
                    <p className="my-1">
                    Even without exfoliating/acid treatments, you may notice your skin becoming thin, blotchy, sensitive, spotty, or generally unhealthy looking, whether through age or other factors in your life. These are signs that your skin cells are weakened and having difficulty regenerating healthy new cells. To counteract this, they need a new diet, a healthier diet that strengthens them and supplies them with the nutrients and energy to again perform as they should. 302 can do that for your skin. How? <strong>Through a revolutionary active ingredient in the products called Avogen™.</strong>   
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col md:w-3/5">
                    <h3 className="text-lg md:text-2xl mt-4 md:mt-0 mb-2 font-bold">
                        What is Avogen™?
                    </h3>
                    <p className="my-1">
                    Avogen™ is a natural and unique lipid family found in avocado the result of a laboratory process that isolates a molecule from the leaves of a particular rainforest avocado that researchers discovered provides amazing skin protective measures against sun damage and aging. Avogen is not based on the pulp of the avocado or on avocado oil, so even if you apply avocado oil to your skin or eat lots of avocados, you will not obtain the protective measures of Avogen. This particular “Fountain of Youth” ingredient, Avogen, has the molecular weight of 302 daltons, thus the name of the skincare line, 302.
                    </p>
                    </div>
                    <Image className="md:w-1/3 rounded-sm shadow-md my-8 md:mx-auto md:my-4">
                    <StaticImage
                        loading="lazy"
                        src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302products.jpeg?raw=true"
                        alt="302 Professional Skincare Products"
                    />
                    </Image>

                    </div>
                    <p className="my-1">
                    The Avogen™ molecules are a biologically significant matrix provided both topically and as a dietary supplement. The extracellular matrix (ECM) is the dynamic regulator of cell functions everywhere in the body including the ECM of skin, eyes, bone, muscles, joints, and internal organs (the liver, lungs, heart, brain, etc.).  The ECM is composed of proteins, collagen and elastin, glycosaminoglycans (GAGs), proteoglycans, hyaluronic acid, among other components.  It comprises the various connective tissues in our body.  The health of the extracellular matrix normally declines with age, but also from external factors such as sun damage, toxins, stress, trauma, and inflammation. Avogen™, in preliminary studies, has been shown to <strong>reverse ECM damage from aging and external factors</strong>, restoring it to a healthier, more functional state.
                    </p>
                    <p className="my-1">
                    Avogen™ is the first and only supplement available on the market that targets the health of the ECM.. Aging, stress and inflammation cause ECM deterioration and clinical disorders follow.  It represents a new class of substances (NORMS) that are not anti-inflammatory agents or immune suppressors but instead act to normalize day-to-day functions in the ECM. The effects of renormalization are rapid, well-tolerated, without side effects and continuing.
                    </p>
                    <p className="my-1">
                    Avogen is powerful because it alone, among all skincare actives on the market, has the ability to penetrate below the surface, to the level of your dermis. The small molecular size allows it to accomplish this. Actives in other skincare lines have a molecular weight that is too large to penetrate beyond the outer level of skin. They simply sit on the surface, unable to effect any change where it is most required, at the deeper levels of your skin. The remarkable ability to penetrate to the dermis is what sets Avogen apart; it is what makes it a revolutionary ingredient. Because Avogen is patented and the process of producing it is highly controlled, any attempt to replicate it is impossible. <strong>It is unique to the 302 skincare line.</strong>
                    </p>
                    <p className="my-1">
                    The main philosophy of 302 is “Less is Best”. Simply put, it means your skin performs and looks best when little of this product is used. Results are cumulative, and continue to improve your skin over time, eventually requiring less frequent use of the products! Yes, that’s right. 302 is a natural, safe and largely organic skincare line that when used properly, will rebuild and regenerate your skin from the inside out, healing and repairing your skin cells to produce moisturized, healthy, protected and younger skin. It is a professional grade skincare line, available only through accredited aestheticians whose guidance and expertise are provided to ensure you achieve the best possible results for your skin.
                    </p>
                    <Button
                        data={{text: "Learn About The Benefits of 302", anchor: "302-fountain-of-youth-benefits"}}
                        className="buttonLight bg-white m-8 mx-auto md:mx-0"
                    />
            </div>
            <div id="302-fountain-of-youth-benefits" className="p-4 md:p-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col md:flex-row items-center">
                    <div className="flex flex-col md:w-2/3">
                        <h2 className="text-xl md:text-3xl">
                            302 Skincare Benefits
                        </h2>
                        <h3 className="text-base md:text-xl my-2">
                        The true mark of 302 is that the healthy skin resulting from its use also liberates you from being tied to a “must do” skincare regimen. It’s about your freedom.
                        </h3>
                        <p className="my-1">
                        As you progress in using this product line you will discover you will no longer be a slave to a regimented skincare “routine” with the need to apply specific moisturizers at a certain time, no need for makeup, no need for heavy duty sun screens, no need to adhere rigidly to using any of the products. 302 will repair your skin to the degree that it becomes self-sufficient and not dependent on topical applications to look good.
                        </p>
                        <h4 className="text-lg md:text-2xl font-bold mt-4 mb-2">
                        The Six “S” Benefits of 302
                        </h4>
                        <ul className="my-2">
                            <li className="my-1 flex flex-col">
                                <h5 className="text-base md:text-xl font-bold text-brown mt-1">
                                Sustainable
                                </h5>
                                <p className="my-1">
                                Results are cumulative and permanent. Even if you stop using the products, your skin will not revert to its original, unhealthy state. Your skin’s health is restored and does not become dependent on any product to look its best.
                                </p>
                            </li>
                            <li className="my-1 flex flex-col">
                                <h5 className="text-base md:text-xl font-bold text-brown mt-1">
                                Saves Money
                                </h5>
                                <p className="my-1">
                                Because the products are so potent, very little is needed and on an infrequent basis so they last a long time. In addition, as the skin rebuilds itself toward self-sufficiency, less of the product is required to maintain your skin’s health so you will need to use less makeup, less moisturizer, and less sunscreen. Less of everything adds up to big savings for you.
                                </p>
                            </li>
                            <li className="my-1 flex flex-col">
                                <h5 className="text-base md:text-xl font-bold text-brown mt-1">
                                Saves Time
                                </h5>
                                <p className="my-1">
                                This line is for the person who has no time for long, complicated, morning and evening rituals that other skincare lines prescribe
                                </p>
                            </li>
                            <li className="my-1 flex flex-col">
                                <h5 className="text-base md:text-xl font-bold text-brown mt-1">
                                Simple
                                </h5>
                                <p className="my-1">
                                There are fewer products to apply since only one active is applied per day.
                                </p>
                            </li>
                            <li className="my-1 flex flex-col">
                                <h5 className="text-base md:text-xl font-bold text-brown mt-1">
                                Safe
                                </h5>
                                <p className="my-1">
                                You have in 302 a skincare line that is nontoxic, natural/mostly organic, and uses renewable resources. It is non-irritating, not harmful to the skin’s natural barrier and gentle enough for use on children.
                                </p>
                            </li>
                            <li className="my-1 flex flex-col">
                                <h5 className="text-base md:text-xl font-bold text-brown mt-1">
                                Science-based
                                </h5>
                                <p className="my-1">
                                302 is a skincare line that produces results that are confirmed by independent, clinical studies.
                                </p>
                            </li>
                        </ul>
                        <p className="my-1">
                        302 is not simply about trying another skincare product in the hope that it will work. It is about a revolutionary approach to skincare. It is about a new lifestyle for your skin, a simpler and healthier lifestyle that is not a temporary fix but is sustainable, for long term results. It becomes the easiest, least expensive and most rewarding product line in that very limited effort is required to see big changes, changes that continue to improve your skin over time. Isn’t that what we all want? 302 delivers it for you.
                        </p>
                        <p className="my-1">
                        In conjunction with the use of 302, Ultrasound treatments have been shown to produce a number of very positive and rejuvenating results including improved waste removal of toxins, firmer, cleaner, more toned and healthier skin. Please <Link className="font-bold hover:text-green" to="/non-invasive-ultrasonic-facial/" >click here</Link> for further information on Ultrasound Treatments.
                        </p>
                    </div>
                </Card>
            </div>
            <div className="md:px-4 my-8">
                    <div className="flex flex-col items-center my-8">
                        <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                        <span>Comparing before & after 302 Use</span>
                    </div>
                    <Gallery 
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:p-8"
                    imageClass="rounded-sm shadow-lg min-h-[300px]"
                    images={[
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302before1.png?raw=true" alt="Essence of Beauty Before 302 Skincare in 2004" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302after1.png?raw=true" alt="Essence of Beauty After 302 Skincare in 2008" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302before2.png?raw=true" alt="Essence of Beauty Before 302 Skincare in 2004" />,
                        <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302after2.png?raw=true" alt="Essence of Beauty After 302 Skincare in 2008" />
                    ]}
                />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default FountainOfYouth

export const Head = () => {
    return(
        <>
      <Seo
      pageTitle="302 Fountain of Youth"
      pageTitleDescription="Natural Skincare Treatment in Ottawa"
      pageDescription="Essence of Beauty Ottawa is the very first Canadian spa to carry the 302 Professional Skincare Line designed to naturally treat aging, acne, rosacea & more!"
      pageKeywords="302, Fountain of Youth, Avogen, Sustainable, Sensitive Skin, Non-Toxic, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Skincare, Safe, Acne, Beauty, Spa, Ottawa"
      pageUrl="https://www.essenceofbeauty.ca/302-fountain-of-youth/"
      pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/302Fountain.jpg?raw=true"
      />
      <link rel="canonical" href="https://www.essenceofbeauty.ca/302-fountain-of-youth/" />
      </>
    )
  } 


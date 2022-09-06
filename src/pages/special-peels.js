import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Tabs from '../components/tabs'

const SpecialPeels = () => {
    return(
        <>
            <Banner
                heading="No-Acid Natural Grade Facial Peels"
                gradient="from-black/40 via-black/20 to-black/10"
                caption=""
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/specialPeelsHeader.jpg?raw=true"/>}
            />
            <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 md:mt-8">
                <div className="flex flex-col md:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">Special Peels – Making a major difference</h1>
                    <h4 className="mt-2 mb-4">At the Essence of Beauty, I offer two No-Acid natural grade facial peels to target a variety of skin conditions such as pigmentation, acne and acne scarring, sun damage and fine lines and wrinkles.</h4>
                    <p className="my-1">
                    When properly administered, peels provide powerful, non-invasive, pro-youth improvement to the skin. They remove cellular buildup, stimulate skin regeneration, reduce appearance of wrinkles, fine lines and large pores, clear blemishes, treat hyperpigmentation, and improve overall texture and tone.
                    </p>
                    <p className="my-1">
                    They are an excellent and non-invasive way to improve your skin and you will results immediately. Our peels are derived form natural products, such as plants, and therefore contain no harsh chemicals or preservatives that may cause irritation or reactions. Our peels will rejuvenate your skin by stimulating cell turnover and delivering vital nutrients deep into your skin. Treatments vary in intensity, and a client’s skin tape and desired results will dictate which peel treatment is best.
                    </p>
                    <Button
                        data={{text: "Learn More", anchor: "special-peels-info"}}
                        className="buttonLight m-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage 
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/specialPeels.jpg?raw=true"
                    alt="Essence of Beauty Special Peels"
                    className="h-[500px] mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="special-peels-info" className="p-4 md:p-8">
            <div className="m-4">
            <h1 className="mb-2 font-semibold">Essence of Beauty Special Peels</h1>
            <span>Choose a treatment option to learn more</span>
            </div>
            <Tabs
            columns="grid-cols-1 md:grid-cols-3"
              className="my-8"
              options={[
                {
                  name: "Vitamin A (Retinaldehyde) Infusion Peel",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
                        Vitamin A (Retinaldehyde) Infusion Peel
                      </h1>
                      <p className="my-2">
                      The first non-chemical peel in the skin care industry that creates a substantial increase in your cellular activity and significantly stimulates collagen production.
                      </p>
                      <p className="my-2">
                      Instead of wounding the epidermis (visible skin) with overly aggressive ingredients, The Infusion will gently resurface your skin by feeding retinaldehyde, vitamins and nutrients to the dermis below, where your skin cells are born and aging begins, which results in an increase in cellular turnover where renewal can effectively take place in  youthful, glowing skin! Facial Infusion peel has a healing effect in the the dermis and is great for every skin condition and tolerated by all skin types. The quality of the products linked with innovative technology allows for the rehabilitation of aging skin and cells. Facial Infusion can be customized to specifically treat acne, pigmentation, scarring, rosacea, lax skin tone and skin that show unwanted signs of aging. Your naturally transformed skin will appear brighter and rejuvenated.
                      </p>
                      <ul className="list-disc my-4">
                        <p className="text-brown italic font-semibold text-lg my-1">
                        Dermal Infusion Advantages:
                        </p>
                        <li className="my-1 ml-4">
                        30 days collagen and elastin production increase without trauma
                        </li>
                        <li className="my-1 ml-4">
                        Restore capillary flow and increasing nutrition in the skin
                        </li>
                        <li className="my-1 ml-4">
                        Thicken the dermis (where aging occurs)
                        </li>
                        <li className="my-1 ml-4">
                        Fully customized to your individual needs all the time
                        </li>
                        <li className="my-1 ml-4">
                        Does not break the skin down like other peels
                        </li>
                        <li className="my-1 ml-4">
                        Reduce overproduction of sebum resulting in normalized oil production
                        </li>
                        <li className="my-1 ml-4">
                        Calm acne and rosacea symptoms
                        </li>
                        <li className="my-1 ml-4">
                        Lift hyperpigmentation
                        </li>
                        <li className="my-1 ml-4">
                        Kills Demodex Mite that is linked to rosacea
                        </li>
                        <li className="my-1 ml-4">
                        Reduce fine lines and increase firmness
                        </li>
                        <li className="my-1 ml-4">
                        Normalize skin tone and heal red/inflamed spots on the skin
                        </li>
                        <li className="my-1 ml-4">
                        Unlike a traditional peel, The Infusion feels comfortable, relaxing, and luxuries
                        </li>
                      </ul>
                        <h4 className="font-bold text-brown mt-4 mb-2">
                            Treatment Options
                        </h4>
                      <p className="my-2">
                      Best results come from monthly visits. May be repeated every 3-4 weeks, not to exceed 12 in a year. It is recommended that you be using a recommended Osmosis Vitamin A serum for a month prior to receiving an infusion, but I can customize to occasionally make an exception.
                      </p>
                      <span>
                        <strong className="mr-2 text-brown">Per Treatment:</strong>$178
                      </span>
                      <Button
                        data={{
                          text: "Learn More About Vitamin A Infusion Peel",
                          link: "/skin-remodeling",
                        }}
                        className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                      />
                    </div>
                  ),
                },
                {
                    name: "Herbal Green Peel",
                    content: (
                      <div className="flex flex-col lg:px-4">
                        <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
                        Herbal Green Peel
                        </h1>
                        <p className="my-2">
                        This deep peeling treatment is a natural non-surgical procedure that would re-enhance the skin and correct some of the aging process. It gives you perfect, pure, smooth and youthful skin, by simply smoothing away prematurely aged, damaged or impure skin by regenerating new cells and collagen fibers. This peel does not contain any chemicals or synthetic peeling agents. It is herbal based and perfectly safe. It has no side effects and can be used on all skin types and skin color. Unlike the traditional chemical peel, this method results in a more profound change and can be repeated any number of times. You can try this effective treatment also on the stomach, upper back. A dream that can actually come true naturally. Visible effects can be seen after only a few days.
                        </p>
                        <p className="my-2">
                        A consultation is required prior to this procedure.
                        </p>
                        
                        <div className="my-2">
                            <h4 className="font-bold text-brown my-2">
                            Green Peel® Classic
                            </h4>
                            <p className="my-1">
                            The success of the original GREEN PELL® Herbal Peeling Treatment Classic for decades speaks for itself. It is the solution for various problems     
                            </p> 
                            <div className="flex flex-col">
                            <span>
                            <strong className="mr-2 text-brown">Per Treatment:</strong>$399 + products
                            </span>
                            <span>
                            <strong className="mr-2 text-brown">Package Price when pre-booked and pre-paid:</strong>3 Treatments for $1035
                            </span>
                            </div>
                        </div>
                        <div className="my-2">
                            <h4 className="font-bold text-brown my-2">                    
                            Green Peel® Energy 
                            </h4>
                            <p className="my-1">
                            This treatment with natural herbs noticeably provides energy. It stimulates blood circulation and metabolism and thus leads to a natural improvement of the skin texture without any peeling effect. GREEN PEEL® Energy provides your skin with the natural energy it needs to renew the cells. It helps to reduce age-related skin appearances as well as impurities, scarring and pigment disorders. The treatment visibly improves the skin’s appearance and harmonizes its surface. It works ideally as repeated, intensive salon treatment several times a year.   
                            </p> 
                            <div className="flex flex-col">
                            <span>
                            <strong className="mr-2 text-brown">Per Treatment:</strong>$299
                            </span>
                            <span>
                            <strong className="mr-2 text-brown">Package Price when pre-booked and pre-paid:</strong>3 Treatments for $810
                            </span>
                            </div>
                        </div>
                        <Button
                          data={{
                            text: "Learn More About Herbal Green Peel",
                            link: "/herbal-green-peel",
                          }}
                          className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                        />
                      </div>
                    ),
                  },
                  {
                    name: "Salicylic Acid Peel",
                    content: (
                      <div className="flex flex-col lg:px-4 pb-4">
                        <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
                        Salicylic Acid Peel
                        </h1>
                        <p className="my-2">
                        Different skin problems respond to different peels. In the case of oily and acne-prone skin, it responds well to salicylic acid as it is oil-soluble and penetrates deeper into the skin as well it’s an anti-inflammatory component which makes it ideal for combination, congested and acne skin. This peel system helps to balance skin hydration and oil production in the skin while decreasing bacteria, decongesting the follicles and reducing acne activity. It is perfect for clearing oily and clogged pores, removing dirt and sebum, improving skin texture, discoloration and leaving the skin glowing. Salicylic acid may be used as a once-off peel or a series of 2-3 peels spaced every 2 weeks.
                        </p>
                        <p className="my-2">
                        Home-care preparation is required prior to having this peel.
                        </p>
                        <ul className="list-disc my-4">
                          <p className="text-brown italic font-semibold text-lg my-1">
                          Salicylic acid can also:
                          </p>
                          <li className="my-1 ml-4">
                          Reduce overproduction of sebum resulting in normalized oil production
                          </li>
                          <li className="my-1 ml-4">
                          Reduction & often complete clearing of acne 
                          </li>
                          <li className="my-1 ml-4">
                          Smoothing & softening of facial scars
                          </li>
                          <li className="my-1 ml-4">
                          Cleanse the skin oil, dirt and debris
                          </li>
                          <li className="my-1 ml-4">
                          Penetrate clogged pores and follicles
                          </li>
                          <li className="my-1 ml-4">
                          Accelerate collagen production for firmer, healthier skin   
                          </li>
                          <li className="my-1 ml-4">
                          Gently exfoliate damaged skin cells to remove fine lines, wrinkles and hyperpigmentation
                          </li>
                        </ul>
                          <h4 className="font-bold text-brown mt-4 mb-2">
                              Treatment Options
                          </h4>
                        <p className="my-2">
                        After the peel you must protect treated skin with a sun block
                        </p>
                        <span>
                          <strong className="mr-2 text-brown">Per Treatment:</strong>$155
                        </span>
                      </div>
                    ),
                  },
            ]}
            />
            </div>
        </>
    )
}

export default SpecialPeels
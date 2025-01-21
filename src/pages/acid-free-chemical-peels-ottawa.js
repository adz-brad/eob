import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Tabs from '../components/tabs'
import Seo from '../components/seo'

const SpecialPeels = () => {
  return (
    <>
      <Banner
        heading="Natural Grade Acid-Free & Chemical Facial Peels"
        gradient="from-black/40 via-black/20 to-black/10"
        image={<StaticImage alt="Essence of Beauty Ottawa - Natural Grade Acid-Free & Chemical Facial Peels" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/specialPeelsHeader.jpg?raw=true" />}
      />
      <div className="flex flex-col md:flex-row md:items-center p-4 md:p-8 md:mt-8">
        <div className="flex flex-col md:w-1/2 mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Natural Grade Acid-Free & Chemical Facial Peels</h1>
          <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">At Essence of Beauty Ottawa Acne Clinic, we offer natural, acid-free facial peels as well as chemical peels to target a variety of skin conditions such as pigmentation, acne and acne scarring, sun damage and fine lines and wrinkles.</h2>
          <p className="my-1">
            When properly administered, both acid-free and chemical peels provide powerful, non-invasive, pro-youth improvement to the skin for treatment of acne, scarring, rosacea & more. They remove cellular buildup, stimulate skin regeneration, reduce appearance of wrinkles, fine lines and large pores, clear blemishes, treat hyperpigmentation, and improve overall texture and tone.
          </p>
          <p className="my-1">
            They are an excellent and non-invasive way to improve your skin and you will results immediately. Our natural grade acid-free peels are derived from natural products, such as plants, and therefore contain no harsh chemicals or preservatives that may cause irritation or reactions. Our peels will rejuvenate your skin by stimulating cell turnover and delivering vital nutrients deep into your skin. Treatments vary in intensity, and a client’s skin tape and desired results will dictate which peel treatment is best.
          </p>
          <Button
            data={{ text: "Learn More", anchor: "special-peels-info" }}
            className="buttonLight m-8 mx-auto md:mx-0"
          />
        </div>

        <StaticImage
          loading="eager"
          src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/specialPeels.jpg?raw=true"
          alt="Essence of Beauty Special Peels"
          className="md:w-1/3 h-[480px] mx-auto rounded-sm shadow-md"
        />
      </div>
      <div id="special-peels-info" className="p-4 md:p-8">
        <div className="m-4">
          <h2 className="text-2xl md:text-4xl mb-2">Essence of Beauty Special Peels</h2>
          <span>Choose a treatment option to learn more</span>
        </div>
        <Tabs
          columns="grid-cols-1 md:grid-cols-4 lg:gap-8"
          className="my-8"
          options={[
            {
              name: "Bio Microneedling",
              content: (
                <div className="flex flex-col lg:px-4 pb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4">
                  Bio Microneedling
                  </h3>
                  <p className="my-2">
                  Available exclusively at Essence of Beauty Ottawa, Bio Microneedling offers a revolutionary alternative to traditional microneedling and exfoliating acids. Ideal for all skin types, it leverages powerful healing properties to activate the body’s natural scar-repair process and accelerate skin cell renewal.
                  </p>
                  <ul className="list-disc my-4 ml-4">
                    <p className="text-brown italic font-semibold text-lg my-1">
                      The Benefits:
                    </p>
                    <li className="my-1">
                    Active Acne Balancing and Preventing Future Breakouts
                    </li>
                    <li className="my-1">
                    Improves Post-Acne Scars 
                    </li>
                    <li className="my-1">
                    Biocompatible & 100% Natural
                    </li>
                
                  </ul>
                  <Button
                    data={{
                      text: "Learn More About Bio Microneedling",
                      link: "/bio-microneedling/",
                    }}
                    className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                  />
                </div>
              ),
            },
            {
              name: "AfterGlow Chemical Peel",
              content: (
                <div className="flex flex-col lg:px-4 pb-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4">
                    AfterGlow Chemical Peel
                  </h3>
                  <p className="my-2">
                    The AfterGlow Chemical Peel is tailored to fit all clients’ individual skin type and long-term goals.
                  </p>
                  <p className="my-2">
                    The AfterGlow Chemical Peel is a treatment in which a cream is applied to the skin to encourage the exfoliation of dead skin cells and debris while stimulating the skin’s natural renewal process. The AfterGlow Peeling is designed to refine skin texture damaged by environmental factors and skin conditions such as acne. The procedure assists in smoothing fine lines and evening out skin discoloration. It improves skin texture and reduces the appearance of acne scars and environmental damage to the skin. With each additional AfterGlow Peeling procedure, you will notice incremental improvements in the overall appearance of the skin.
                  </p>
                  <ul className="list-disc my-4">
                    <p className="text-brown italic font-semibold text-lg my-1">
                      The Afterglow Chemical Peel is excellent in treating:
                    </p>
                    <li className="my-1 ml-4">
                      Hyperpigmentation , melasma & events of skin discoloration/pigmentation
                    </li>
                    <li className="my-1 ml-4">
                      Acne breakouts, scarring, whiteheads, blackheaders & milia
                    </li>
                    <li className="my-1 ml-4">
                      Coarse skin & enlarged pores
                    </li>
                    <li className="my-1 ml-4">
                      Psoriasis, facial redness / rosacea & eczema
                    </li>
                    <li className="my-1 ml-4">
                      Dark circles under the eyes
                    </li>
                    <li className="my-1 ml-4">
                      Sun damaged skin
                    </li>
                  </ul>
                  <h4 className="text-base md:text-xl font-bold text-brown mt-4 mb-2">
                    Treatment Options
                  </h4>
                  <div className="flex flex-col">
                    <h5 className="text-base md:text-xl my-1">
                      This peel is best done in a series of 3 or more, depending on your skin care goals.
                    </h5>
                    <span><strong className="mr-2 text-brown">Advanced Treatment:</strong>$330</span>
                    <span><strong className="mr-2 text-brown">3 Treatments (package price when pre-booked / pre-paid):</strong>$710</span>
                    <span><strong className="mr-2 text-brown">Extraction and AfterGlow Peeling :</strong>$310</span>
                  </div>
                  <Button
                    data={{
                      text: "Learn More About Afterglow Chemical Peel",
                      link: "/afterglow-chemical-peel-ottawa/",
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
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4">
                    Herbal Green Peel
                  </h3>
                  <p className="my-2">
                    This deep peeling treatment is a natural non-surgical procedure that would re-enhance the skin and correct some of the aging process. It gives you perfect, pure, smooth and youthful skin, by simply smoothing away prematurely aged, damaged or impure skin by regenerating new cells and collagen fibers. This peel does not contain any chemicals or synthetic peeling agents. It is herbal based and perfectly safe. It has no side effects and can be used on all skin types and skin color. Unlike the traditional chemical peel, this method results in a more profound change and can be repeated any number of times. You can try this effective treatment also on the stomach, upper back. A dream that can actually come true naturally. Visible effects can be seen after only a few days.
                  </p>
                  <p className="my-2">
                    A consultation is required prior to this procedure.
                  </p>

                  <div className="my-2">
                    <h4 className="text-base md:text-xl font-bold text-brown my-2">
                      Green Peel® Classic
                    </h4>
                    <p className="my-1">
                      The success of the original GREEN PEEL® Herbal Peeling Treatment Classic for decades speaks for itself. It is the solution for various problems
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
                    <h4 className="text-base md:text-xl font-bold text-brown my-2">
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
                      link: "/herbal-green-peel/",
                    }}
                    className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                  />
                </div>
              ),
            },
            {
              name: "Vitamin A Infusion Peel",
              content: (
                <div className="flex flex-col lg:px-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl mb-4">
                    Vitamin A Infusion Peel
                  </h3>
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
                  <h4 className="text-base md:text-xl font-bold text-brown mt-4 mb-2">
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
                      link: "/acid-free-vitamin-a-skin-peel/",
                    }}
                    className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                  />
                </div>
              ),
            },
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

export default SpecialPeels

export const Head = () => {
  return (
    <>
      <Seo
        pageTitle="Acid-Free & Chemical Facial Peels - Treat Acne, Scarring, Rosacea, Sun Damage"
        pageDescription="Essence of Beauty Ottawa offers acid-free natural and chemical facial peels to target skin conditions like acne, scarring, pigmentation, sun damage, fine lines, wrinkles & more."
        pageKeywords="Chemical, No Acid, Acid free, Sun damage, sun damaged, acne scarring, scarring, fine lines, wrinkles, Natural, Facial, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/acid-free-chemical-peels-ottawa/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/specialPeels.jpg?raw=true"
      />
      <link rel="canonical" href="https://www.essenceofbeauty.ca/acid-free-chemical-peels-ottawa/" />
    </>
  )
} 
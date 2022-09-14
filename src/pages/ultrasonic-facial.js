import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import Card from '../components/card'
import Tabs from "../components/tabs"

const UltrasonicFacial = () => {
    return(
        <>
            <Banner
                heading="Ultrasonic Regenerative Facial"
                gradient="from-black/20 via-black-40 to-black/50"
                caption="Ultrasonic Regenerative Facials are gentle, non-invasive, safe and suitable for all skin types, from Rosacea/Sensitive to Acne to Mature skins. Yes, even the most sensitive skin will benefit from Ultrasound treatments! This is exciting news for everyone."
                image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ultrasonicFacialHeader.jpg?raw=true"/>}
            />
            <div className="flex flex-col lg:flex-row lg:items-center p-4 md:p-8 my-8">
                <div className="flex flex-col lg:w-1/2 mx-auto">
                    <h1 className="font-bold mb-2">State of the Art Ultrasonic Facials</h1>
                    <h4 className="mt-2 mb-4">Ultrasonic Facials are gentle, non-invasive, safe and suitable for all skin types, from Rosacea/Sensitive to Acne to Mature skins, meaning that even the most sensitive skin will benefit from Ultrasound treatments!</h4>
                    <p className="my-1">
                    It’s an exciting yet simple and powerfully effective tool to rejuvenate your skin. Ultrasound has been widely used around the world in medical applications and is now available for state of the art skincare treatments. Ultrasound uses the cutting-edge technology of very high speed, low-frequency sound waves that radiate invisible micro vibrations deep within cells, helping stimulate the skin’s natural repair mechanisms in distinct ways. But what does that mean for you? In short, it means Ultrasound is superior at cleansing, exfoliating, product infusion restoring elasticity, clearing of pigmentation problems & dramatically improves texture and smoothness…all without using chemicals, dangerous acids or other harsh abrasives.
                    </p>
                    <Button
                        data={{text: "Learn About The Benefits", anchor: "ultrasonic-facial-benefits"}}
                        className="buttonLight my-8 mx-auto lg:mx-0"
                    />
                </div>
                <StaticImage 
                    src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/ultrasonicFacial.jpg?raw=true"
                    alt="Essence of Beauty Ultrasonic Regenerative Facial Treatment"
                    className="lg:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </div>
            <div id="ultrasonic-facial-benefits" className="p-4 md:p-8">
                <Card cardBodyClass="p-4 md:p-8 flex flex-col">
                    <div className="flex flex-col">
                    <h1 className="font-bold">
                        Ultrasonic Facial Benefits
                    </h1>
                    <h4 className="my-2">
                    Here are just some other important benefits of Ultrasonic treatments in skin rejuvenation:
                    </h4>
                    <ul className="list-disc my-2 ml-4">
                        <li className="my-1">
                        Loosens and removes oil, dirt and cellular debris from follicles for cleaner, healthier skin
                        </li>
                        <li className="my-1">
                        Reduces puffiness and helps firm the skin      
                        </li>
                        <li className="my-1">
                        Pain free, gentle and completely non-invasive approach treats the most sensitive skin
                        </li>
                        <li className="my-1">
                        Restores skin to a smooth, youthful glow and maintained with regular treatments
                        </li>
                        <li className="my-1">
                        Harmlessly exfoliates the top layer of the skin for a clearer, healthier complexion without causing redness or irritation associated with standard microdermabrasion 
                        </li>
                        <li className="my-1">
                        Improves blood circulation and skin elasticity & increases cell regeneration
                        </li>
                        <li className="my-1">
                        Soothes inflammation and speeds wound healing
                        </li>
                        <li className="my-1">
                        Increases moisture retention & improves acneic skin and scarring conditions
                        </li>
                        <li className="my-1">
                        Penetrates skin care products more deeply into the skin where they are required to affect change
                        </li>
                    </ul>
                    </div>
                    <div className="flex flex-col mt-8">
                        <h4 className="font-bold lg:text-2xl">Let’s consider the main phases of Ultrasonic Facials</h4>
                        <ul className="my-2">
                            <li className="my-4">
                                <h4 className="text-brown font-bold my-2">
                                    Exfoliation
                                </h4>
                                <p>
                                The Exfoliation Phase removes 20% to 50% of the “stratum corneum” — the outer layer of the skin that we continuously shed. Water is applied and then the hand instrument, similar to a small spatula, is stroked over the skin. Ultrasonic vibrations spin the water molecules at high frequency causing cavitation — that is a brief phase change in the water molecule. Cavitation gently removes the dead surface skin cells and cleans out follicles without irritation and inflammation associated with other mechanical methods.
                                </p>
                            </li>
                            <li className="my-4">
                                <h4 className="text-brown font-bold my-2">
                                Infusion
                                </h4>
                                <p>
                                This is one of the best features. Normally, large molecules cannot penetrate the skin to provide the deep medication that skin often needs to maintain health. But ultrasound makes that penetration possible — the process is called “sonophoresis.” More exciting still is because of the small molecular size of the active in the line, 302 skincare products, when used in conjunction with Ultrasonic treatments, prove an especially powerful combination for skin health and rejuvenation. Typically, a serum is penetrated into the skin to provide deep healing and protection to skin cells. Your skincare specialist will discuss with you any other products specific to your skin type that you may need. These are applied liberally to the skin and then the hand instrument is lightly stroked over your skin. The ultrasound frequency opens minute pathways to allow the product to penetrate deeply into your skin, for better, more long-lasting results.
                                </p>
                            </li>
                            <li className="my-4">
                                <h4 className="text-brown font-bold my-2">
                                Micro Massage Therapy
                                </h4>
                                <p>
                                This phase normalizes the skin with a very mild electrical current — a medically proven technique to restore individual cells’ natural electrical charge. The paddle is lightly stroked over the face and throat creating a slight pulsing and warming on the face. When a cell has been damaged due to environmental causes, like overexposure to the sun or aging, the cell’s electrical current is adversely affected. As a result, waste products build up in the cell, restricting the flow of nutrients required to maintain its health. This condition makes it difficult for cells to heal from damage and to regenerate. The micro massage phase helps normalize the electric current within the cells and promotes healing, cell regeneration and resiliency. Thus, new life is literally massaged into tired, injured and aging skin.
                                </p>
                            </li>
                        </ul>
                        <Button
                        data={{text: "Learn More", anchor: "ultrasonic-facial-treatments"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                    </div>
                </Card>
            </div>
            <div id="ultrasonic-facial-treatments" className="text-center p-4 md:p-8">
            <h1 className="mb-2">Ultrasonic Facial Treatments</h1>
            <span>Ultrasonic Facials are particularly effective in treating the following skin conditions:</span>
            <Tabs
            columns="grid-cols-1 md:grid-cols-3 md:gap-6"
              className="my-8"
              options={[
                {
                  name: "Acne",
                  content: (
                  <>
                  <h4 className="mb-2 font-bold">Ultransonic Facials For Acne Treatment</h4>
                  <p>
                  The ultrasound vibration helps to break-up follicular deposits of oil, dirt and dead cells — a veritable breeding ground for bacteria. Ultrasonic frequency has been shown to kill bacteria and decongest the pores resulting in cleaner, healthier skin.
                  </p>
                  <h4 className="mt-4 mb-2 font-bold">
                    The Final Result:
                  </h4>
                  <p className="my-1">
                  When used regularly along with a quality skincare home program, your skin will be smoother, healthier and younger looking. Who isn’t interested in that?
                  </p>
                  <p className="my-1">
                  Long-term results are achieved when Ultrasound treatments and quality products are regularly performed together—and while one treatment may be all that is necessary to affect a change in some, a series of treatments may be needed by others. However, you will find the results are cumulative, especially when combined with 302. Ultrasound and 302 treatment twice yearly series of treatment can reverse visible aging and restore metabolic functionality in chronologic and environmentally age skin.
                    </p>
                    <p className="my-1">
                    As a tool for rejuvenation, ultrasound is powerful. Simple and effective. It will give you the immediate result without using harmful chemicals exfoliates and continue its effects for months after applications. Your friends will notice the difference, your skin will love the benefits and you will love the results.
                    </p>
                    <h4 className="mt-4 mb-1 font-bold">
                    Contraindications:
                    </h4>
                    <ul className="my-2 list-disc ml-4">
                        <li className="my-1 italic">
                        Not suitable for those wearing a pace maker or electrical implants
                        </li>
                        <li className="my-1 italic">
                        Inadvisable if you are diagnosed with a heart condition
                        </li>
                        <li className="my-1 italic">
                        Not recommended for pregnant women
                        </li>
                    </ul>
                    <div className="my-8">
                    <Button
                        data={{text: "Learn More", link: "/302-fountain-of-youth"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                    </div>
                  </>
                  )
                },
                {
                  name: "Rosacea & Sensitive Skin",
                  content: (
                  <>
                  <h4 className="mb-2 font-bold">Ultransonic Facials For Rosacea & Sensitive Skin</h4>
                  <p>
                  Yes, this is an excellent treatment for sensitive skin, even those with Rosacea. Pure, filtered water and hydrating serum is used during the Peel Phase. It is gentle and non-irritating. During the Infusion Phase, only products formulated for sensitive skin are used. No longer will your sensitive skin and/or Rosacea prevent you from exfoliating!
                  </p>
                  <h4 className="mt-4 mb-2 font-bold">
                    The Final Result:
                  </h4>
                  <p className="my-1">
                  When used regularly along with a quality skincare home program, your skin will be smoother, healthier and younger looking. Who isn’t interested in that?
                  </p>
                  <p className="my-1">
                  Long-term results are achieved when Ultrasound treatments and quality products are regularly performed together—and while one treatment may be all that is necessary to affect a change in some, a series of treatments may be needed by others. However, you will find the results are cumulative, especially when combined with 302. Ultrasound and 302 treatment twice yearly series of treatment can reverse visible aging and restore metabolic functionality in chronologic and environmentally age skin.
                    </p>
                    <p className="my-1">
                    As a tool for rejuvenation, ultrasound is powerful. Simple and effective. It will give you the immediate result without using harmful chemicals exfoliates and continue its effects for months after applications. Your friends will notice the difference, your skin will love the benefits and you will love the results.
                    </p>
                    <h4 className="mt-4 mb-1 font-bold">
                    Contraindications:
                    </h4>
                    <ul className="my-2 list-disc ml-4">
                        <li className="my-1 italic">
                        Not suitable for those wearing a pace maker or electrical implants
                        </li>
                        <li className="my-1 italic">
                        Inadvisable if you are diagnosed with a heart condition
                        </li>
                        <li className="my-1 italic">
                        Not recommended for pregnant women
                        </li>
                    </ul>
                    <div className="my-8">
                    <Button
                        data={{text: "Learn More", link: "/302-fountain-of-youth"}}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                    </div>
                  </>
                  )
                },
                {
                    name: "Fine Lines & Wrinkles",
                    content: (
                  <>
                  <h4 className="mb-2 font-bold">Ultransonic Facials For Fine Lines & Wrinkles</h4>
                    <p>
                    Ultrasound helps stimulate and promote collagen and elastin production for more youthful skin. It also helps with hydration. The “plumping” of the skin fills out fine lines and wrinkles.
                    </p>
                    <h4 className="mt-4 mb-2 font-bold">
                      The Final Result:
                    </h4>
                    <p className="my-1">
                    When used regularly along with a quality skincare home program, your skin will be smoother, healthier and younger looking. Who isn’t interested in that?
                    </p>
                    <p className="my-1">
                    Long-term results are achieved when Ultrasound treatments and quality products are regularly performed together—and while one treatment may be all that is necessary to affect a change in some, a series of treatments may be needed by others. However, you will find the results are cumulative, especially when combined with 302. Ultrasound and 302 treatment twice yearly series of treatment can reverse visible aging and restore metabolic functionality in chronologic and environmentally age skin.
                      </p>
                      <p className="my-1">
                      As a tool for rejuvenation, ultrasound is powerful. Simple and effective. It will give you the immediate result without using harmful chemicals exfoliates and continue its effects for months after applications. Your friends will notice the difference, your skin will love the benefits and you will love the results.
                      </p>
                      <h4 className="mt-4 mb-1 font-bold">
                      Contraindications:
                      </h4>
                      <ul className="my-2 list-disc ml-4">
                          <li className="my-1 italic">
                          Not suitable for those wearing a pace maker or electrical implants
                          </li>
                          <li className="my-1 italic">
                          Inadvisable if you are diagnosed with a heart condition
                          </li>
                          <li className="my-1 italic">
                          Not recommended for pregnant women
                          </li>
                      </ul>
                      <div className="my-8">
                      <Button
                          data={{text: "Learn More", link: "/302-fountain-of-youth"}}
                          className="buttonLight my-8 mx-auto md:mx-0"
                      />
                      </div>
                    </>
                    )
                  },
              ]}
            />
            </div>
            <div className="flex flex-col items-center p-4">
                <h2 className="font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </div>
        </>
    )
}

export default UltrasonicFacial
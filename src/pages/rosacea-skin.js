import React from "react"
import Banner from "../components/banner"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from '../components/gallery'
import Button from "../components/button"
import Tabs from "../components/tabs"

const Rosacea = () => {
  return (
    <>
      <Banner
        heading="Rosacea and Sensitive Skin"
        gradient="from-black/20 via-black-40 to-black/50"
        caption="Anyone with rosacea knows how frustrating it is and how few good treatment options there are. I’ve long been treating my rosacea clients with 302 skincare recommendations with great results, developing my recommendations based on what's worked for them. I’ve never found a skin care product that was even remotely as effective as 302skincare."
        image={<StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/rosaceaHeader.jpg?raw=true" />}
      />
      <div className="md:p-4 lg:p-8 md:mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:mb-16">
          <div className="flex flex-col px-4 md:w-3/5">
            <h1 className="mb-4 font-semibold">Rosacea and Sensitive Skin</h1>
            <h4 className="mt-2 mb-4">
            Anyone with rosacea knows how frustrating it is and how few good treatment options there are. I’ve long been treating my rosacea clients with 302 skincare recommendations with great results, developing my recommendations based on what's worked for them. I’ve never found a skin care product that was even remotely as effective as 302skincare.
            </h4>
            <p className="my-1">
              Whether your rosacea is active or in remission, your skin is still
              sensitive and needs carefully selected skin care to prevent
              rosacea flair ups. Some skin care products can actually help
              control rosacea but a lot of other products aggravate and trigger
              it. Knowing what to use on your skin and what to avoid it takes
              knowledge and experience. Almost anyone can get rosacea, but those
              affected most often are lighter skin women who flush or blush
              easily. Men are less likely to have rosacea, but when they do,
              they have more noticeable problems, including swollen bumps along
              the nose called rhinophyma. In every case, the right combination
              of gentle skin-care products along with right treatments can keep
              rosacea under control and stop it from becoming worse. My
              approached to rosacea are individualized, providing you with the
              most effective program of care for your unique situation.
            </p>
            <Button
              data={{
                text: "Learn More",
                anchor: "wondering-if-you-have-rosacea",
              }}
              className="buttonLight mt-8 mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-2/5 md:m-4">
          <StaticImage
                  src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/rosecea1.png?raw=true"
                  alt="Rosacea Before & After Treatment Image"
                  className="max-h-[420px] m-8 rounded-sm shadow-md"
                />
          </div>
        </div>

        <div id="wondering-if-you-have-rosacea" className="flex md:flex-row md:items-center bg-lightGreen rounded-md shadow-md">
        <div className="flex flex-col my-4 md:w-1/2 mx-auto">
          <div className="flex flex-col p-4 md:p-8">
            <h1 className="mb-4 pb-2 filter drop-shadow-md">
              Wondering If You Have Rosacea?
            </h1>
            <ul className="list-disc my-4">
              <h4 className="my-1 font-bold">Here are the signs to look for:</h4>
              <li className="mt-2 ml-4">
                Red flushing over the cheeks and nose
              </li>
              <li className="mt-2 ml-4">
                Consistent, though random, and often extreme skin sensitivity
              </li>
              <li className="mt-2 ml-4">
                Acne-like bumps (but the bumps are not acne) with underlying
                diffuse redness
              </li>
              <li className="mt-2 ml-4">Blemishes resembling acne</li>
              <li className="mt-2 ml-4">
                Flaky skin, sometimes accompanied by oily skin
              </li>
              <li className="mt-2 ml-4">
                Visible tiny blood vessels that may become more noticeable over
                time
              </li>
              <li className="mt-2 ml-4">
                Other concerns, which can still be present: dry skin, wrinkles,
                sun damage, and skin discolorations
              </li>
            </ul>
            <Button
              data={{
                text: "Rosacea Treatment Options",
                anchor: "rosacea-treatment-options",
              }}
              className="buttonLight bg-white my-8 mx-auto md:mx-0"
            />
          </div>
      </div>
          <StaticImage
            src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/skinTreatmentApproach.jpg?raw=true"
            className="rounded-lg shadow-lg mx-auto"
          />
      </div>
      <div id="rosacea-treatment-options">
          <div className="my-8 lg:pt-8 text-center">
            <h1 className="mb-2 font-semibold">How We Treat Rosacea at Essence of Beauty</h1>
            <span>Choose a treatment option to learn more</span>
            <Tabs
            columns="grid-cols-1 md:grid-cols-3"
              className="my-8"
              options={[
                {
                  name: "Ultrasonic Skin Rejuvenation",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
                        Customized Ultrasound-Galvanic Treatment for
                        Ultra-Sensitive skin / Rosacea with Lymph Drainage
                      </h1>
                      <p className="my-2">
                        This treatment is designed for clients for addressing
                        visible sign of rosacea, dermatitis, facial irritation
                        or those who have particularly sensitive skin and
                        provides immediate reduction and relief. It is a high
                        value procedure to reduce blotches and an effective
                        alternative to expensive photo-facials by medical
                        lasers.
                      </p>
                      <ul className="list-disc my-4">
                        <p className="text-brown italic font-semibold text-lg my-1">
                          Ultrasonic Skin Rejuvenation rosacea facial is
                          designed to:
                        </p>
                        <li className="my-1 ml-4">
                          Decrease flushing, redness and blotchiness
                        </li>
                        <li className="my-1 ml-4">
                          Reduce of dilated facial blood vessels
                        </li>
                        <li className="my-1 ml-4">
                          Reduce inflammatory papules and pustules (blemishes
                          that can accompany rosacea)
                        </li>
                        <li className="my-1 ml-4">
                          Calm and clear your uneven complexion without
                          irritation to inflamed skin regions
                        </li>
                        <li className="my-1 ml-4">
                          Produce a more balanced and even skin appearance
                        </li>
                      </ul>
                      <p className="my-2">
                        Rosacea can be effectively managed in many ways through
                        the right combination of skin care products, Ultrasound
                        Treatments and Galvanic Iontophoresis Therapy. Galvanic
                        Iontophoresis, an extremely gentle and safe electric
                        current, can greatly reduce redness in a single session
                        through the improved absorption of serums that
                        strengthen and protect the skin’s immune function, and
                        by constricting blood capillaries. US Treatment offers
                        visible and lasting solution for rosacea, dermatitis and
                        sensitive skin, which rapidly rebuild weak epidermis
                        depleted by inflammation. This treatment helps stabilize
                        and renormalize the look of inflamed skin. Provides
                        visible relief and moisturizing effects to irritated
                        rosacea skin. Helps establish an intact skin barrier,
                        visibly free of irritation and inflammation by
                        renormalizing sebaceous gland activity and calming the
                        appearance of inflamed and bacteria susceptible skin
                        through improved metabolism and cell formation. This
                        natural approach to rosacea will truly give long-lasting
                        benefits in addition to making you feel better
                        instantly.
                      </p>
                      <p className="my-2">
                        A series of three or four treatments space one or two
                        weeks apart will give best results.
                      </p>
                      <span>
                        <strong className="mr-2 text-brown">80 minute session:</strong>$158
                      </span>
                      <Button
                        data={{
                          text: "Learn More About Ultrasonic Facials",
                          link: "/ultrasonic-facial",
                        }}
                        className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                      />
                    </div>
                  ),
                },
                {
                  name: "DMK Enzyme Therapy Facial",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
                        DMK Enzyme Therapy Facial
                      </h1>
                      <p className="my-2">
                        DMK Enzyme Treatment is suitable for all skin types or
                        colour. It is particularly beneficial for treating
                        rosacea, acne rosacea sun damaged skin, and
                        Telangiectasia (small visible blood vessels on the
                        skin), therefore suitable for treating highly sensitive
                        skin. It is also beneficial in treating Acne Rosacea,
                        Facial redness, Eczema, Psoriasis, Active Acne, Thread
                        Veins, Smoker’s Skin, and Pre & Post Facial Surgery.
                      </p>
                      <ul className="list-disc my-4">
                        <p className="text-brown italic font-semibold text-lg my-1">
                          DMK Enzyme Therapy Effects:
                        </p>
                        <li className="my-1 ml-4">Healing and nourishing</li>
                        <li className="my-1 ml-4">
                          Kills the bacteria involved in acne rosacea
                        </li>
                        <li className="my-1 ml-4">Detoxifies skin</li>
                        <li className="my-1 ml-4">Rehydrates dry skin</li>
                        <li className="my-1 ml-4">
                          Increases skin function meaning healthier skin
                        </li>
                        <li className="my-1 ml-4">
                          Decreases erythema, facial redness
                        </li>
                        <li className="my-1 ml-4">
                          Produce a more balanced and even skin appearance
                        </li>
                        <li className="my-1 ml-4">
                          Stimulates collagen production
                        </li>
                        <li className="my-1 ml-4">
                          Ideal after laser treatments
                        </li>
                      </ul>
                      <p className="my-2">
                        DMK Enzyme Therapy works by providing deep oxygenation
                        to skin cells. This treatment is applied as a masque
                        which contains a blend of transfer enzymes and
                        specialized ingredients that help increase circulation,
                        provide lymphatic drainage, free water levels in the
                        skin, enhance collagen production and improve the skin’s
                        metabolic function. The DMK Enzyme treatment, while
                        helping to flush out impurities, also produces a fresh
                        supply of necessary oxygenated blood vessels to your
                        face and skin cells in a process called the Plasmatic
                        Effect to create a smooth, healthy complexion.
                      </p>
                      <p className="my-2">
                        During the process, enzymes dissolve dead skin cells and
                        contaminants, and then work to form an antioxidant-rich
                        structure within the skin to protect against free
                        radicals and stimulate collagen production.
                      </p>
                      <p className="my-2">
                        The result is a more purified, youthful, even-toned
                        complexion with lasting cellular strength to fight
                        glycation that causes aging, prevents congestion and
                        breakouts and heals the damage caused by acne and
                        rosacea. The quick and comfortable treatment is
                        anti-inflammatory, increases skin function, stimulates
                        fibroblast, and decreases erythema leaving skin looking
                        clear and luminous. It transports huge volumes of oxygen
                        into tissues, accelerating regeneration of skin cells.
                        It makes an extremely suitable rosacea treatment as it
                        targets the redness and inflammation associated with
                        rosacea.
                      </p>
                      <p className="my-2">
                        Both Rosacea and Sensitive skin are the result of
                        inflammation and it is critical to use ingredients that
                        repair and calm the skin to it’s healthy look. The
                        Enzyme Treatment is performed once or every other week.
                      </p>
                      <span>
                        <strong className="mr-2 text-brown">
                          90 minute session (when pre-booked & pre-paid):
                        </strong>
                        $188
                      </span>
                      <Button
                        data={{
                          text: "Learn More About DMK Enzyme Therapy",
                          link: "/dmk-enzyme-therapy",
                        }}
                        className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                      />
                    </div>
                  ),
                },
                {
                  name: "OsmosisMD",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
                      OsmosisMD
                      </h1>
                      <p className="my-2">
                      In order to fully appreciate what
              these products can achieve for you, it is important to understand
              that our skin functions within a process dictated by nature.
              OsmosisMD products have been developed to produce their amazing
              results via an integrated system that works in harmony with
              nature. It is the science of this natural process that provides
              the foundation of the formulation and functioning of OsmosisMD. So
              that rather than products that simply treat the skin’s surface
              with aggressive topicals that force nature and force temporary
              change, OsmosisMD products are formulated to assist and support
              nature’s scientific process, products that transform damaged,
              aging, injured skin into healed, moist, beautiful skin. The
              scientific approach behind OsmosisMD recognizes that healing and
              transformative results require that the skin must be replenished,
              restored and repaired at the deeper skin cells. However, these
              products provide more than that. The organic and anti-oxidant
              ingredient formulation of OsmosisMD also gently replenishes,
              restores and repairs the surface skin cells. What this means for
              you is that the products have a simultaneous dual action – one
              that transforms your deeper cells where real change is required,
              but also one that very quickly and visibly transforms your surface
              cells for brighter, clearer, smoother, healthier skin.
            </p>
                      <Button
                        data={{
                          text: "Learn More About Osmosis MD",
                          link: "/osmosismd",
                        }}
                        className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                      />
                    </div>
                  ),
                },
              ]}
            />
          </div>
      </div>
      </div>
      <div className="mt-8 mb-16">
                    <div className="flex flex-col items-center my-4">
                        <span className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</span>
                        <span className="mb-8">Comparing before & after rosacea treatment</span>
                    </div>
                    <Gallery 
                    className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-8"
                    imageClass="rounded-sm shadow-lg"
                    images={[
                      <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/rosacea1.jpg?raw=true" alt="Rosacea Before & After Treatment Image" />,
                      <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/rosacea2.jpg?raw=true" alt="Rosacea Before & After Treatment Image" />,
                      <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/rosacea3.jpg?raw=true" alt="Rosacea Before & After Treatment Image" />,
                      <StaticImage src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/rosacea4.jpg?raw=true" alt="Rosacea Before & After Treatment Image" />
                    ]}    
                />
      </div>
      <div className="flex flex-col items-center px-4 lg:pb-8">
        <h2 className="font-bold my-4">Are you ready to get started?</h2>
        <p>
          Book a skin consultation to determine the correct treatment and
          product for your skin type and condition.
        </p>
      </div>
    </>
  )
}

export default Rosacea

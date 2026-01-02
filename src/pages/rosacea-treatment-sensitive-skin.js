import React from "react"
import Banner from "../components/banner"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from '../components/gallery'
import Button from "../components/button"
import Tabs from "../components/tabs"
import Seo from '../components/seo'

const Rosacea = () => {
  return (
    <>

      <Banner
        heading="Rosacea & Sensitive Skin"
        gradient="from-black/20 via-black-40 to-black/50"
        image={<StaticImage alt="Essence of Beauty Ottawa - Rosacea & Sensitive Skin" src="../assets/images/rosaceaHeader.jpg" />}
      />
      <section className="md:p-4 lg:p-8 md:mt-8" aria-labelledby="rosacea-heading">
        <div className="flex flex-col md:flex-row md:items-center md:mb-16">
          <div className="flex flex-col px-4 md:w-3/5">
            <h1 id="rosacea-heading" className="text-2xl md:text-4xl mb-4 font-semibold">Natural Rosacea Treatment For Sensitive Skin</h1>
            <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">
              Anyone with rosacea knows how frustrating it is and how few good treatment options there are. Essence of Beauty Ottawa has been treating rosacea clients with 302 skincare with great results, developing recommendations based on what's worked for them.
            </h2>
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
              loading="eager"
              src="../assets/images/rosecea1.png"
              alt="Rosacea Before & After Treatment Image"
              className="max-h-[420px] m-8 rounded-sm shadow-md"
            />
          </div>
        </div>

        <div id="wondering-if-you-have-rosacea" className="flex md:flex-row md:items-center bg-lightGreen rounded-md shadow-md">
          <div className="flex flex-col my-4 md:w-1/2 mx-auto">
            <div className="flex flex-col p-4 md:p-8">
              <h2 className="text-2xl md:text-4xl mb-4 pb-2 filter drop-shadow-md">
                Wondering If You Have Rosacea?
              </h2>
              <ul className="list-disc my-4">
                <h3 className="text-base md:text-xl my-1 font-bold">Here are the signs to look for:</h3>
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
            loading="lazy"
            src="../assets/images/skinTreatmentApproach.jpg"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div id="rosacea-treatment-options">
          <div className="my-8 lg:pt-8 text-center">
            <h2 className="text-2xl md:text-4xl mb-2">How We Treat Rosacea at Essence of Beauty</h2>
            <span>Choose a treatment option to learn more</span>
            <Tabs
              columns="grid-cols-1 md:grid-cols-3"
              className="my-8"
              options={[
                {
                  name: "Ultrasonic Skin Rejuvenation",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
                        Customized Ultrasound-Galvanic Treatment for
                        Ultra-Sensitive skin / Rosacea with Lymph Drainage
                      </h2>
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
                        <strong className="mr-2 text-brown">80 minute session:</strong>$168
                      </span>
                      <Button
                        data={{
                          text: "Learn More About Ultrasonic Facials",
                          link: "/non-invasive-ultrasonic-facial/",
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
                      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
                        DMK Enzyme Therapy Facial
                      </h2>
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
                        $199
                      </span>
                      <Button
                        data={{
                          text: "Learn More About DMK Enzyme Therapy",
                          link: "/dmk-enzyme-therapy/",
                        }}
                        className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                      />
                    </div>
                  ),
                },
                {
                  name: "Microneedling",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
                        Microneedling
                      </h2>
                      <p className="my-2">
            Microneedling is a relatively new approach in the beauty industry used to treat skin concerns by encouraging the skin to produce excessive collagen. This revolutionary rejuvenation procedure is conducted using fine, short needles that create invisible injuries on the skin to boost natural self-healing processes. It is a 100% safe procedure that brings tangible results. The skin becomes hydrated and shining while deep wrinkles and scars disappear. A microneedling facial might also be used for reducing sun spots, pigmentation and scars. This next-generation beauty procedure is the perfect alternative to cosmetic surgery. So, if you’re in two minds about what beauty procedure can make your skin look younger, schedule an appointment with our certified cosmetics specialists. We will check your skin’s quality to conclude whether you’re the right candidate for this procedure.
                      </p>
                      <span>
                        $350
                        </span>
                      <Button
                        data={{
                          text: "Learn More About Microneedling",
                          link: "/microneedling-ottawa/",
                        }}
                        className="buttonLight bg-white mt-8 lg:mt-8 mb-4 md:mx-0"
                      />
                    </div>
                  ),
                },
                {
                  name: "Green Peel®",
                  content: (
                    <div className="flex flex-col lg:px-4">
                      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">
                        Green Peel®
                      </h2>
                      <p className="my-2">
                        In keeping with our philosophy, the Green Peel® offers you an opportunity to experience all the benefits of skin refreshment, skin renewal, skin brightening, and skin treatments that are often associated with acids “BUT” without the very questionable immediate and longer-terms disadvantage. So you see, the Green Peel® is not only truly green in colour but naturally “Green” in its ingredients, in what it can treat and in its benefits as well. Green Peel® – Ingredients Aptly named, the GREEN PEEL® is an herbal formulation composed of natural active substances such as vitamins, plant hormones, enzymes, mineral salts, various dried flowers, sea weeds sand other beneficial ingredients. Not an acid anywhere and you’ll hear no tell-tale sizzle of cooking skin with our Green Peel®.
                      </p>
                      <span>
                        $420
                        </span>
                      <Button
                        data={{
                          text: "Learn More About Green Peel®",
                          link: "/herbal-green-peel/",
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
      </section>
      <section className="mt-8 mb-16" aria-labelledby="results-heading">
        <div className="flex flex-col items-center my-4">
          <h2 id="results-heading" className="font-headers font-medium text-2xl md:text-3xl mb-2">Check out these amazing results!</h2>
          <span className="mb-8">Comparing before & after rosacea treatment</span>
        </div>
        <Gallery
          className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-8"
          imageClass="rounded-sm shadow-lg"
          images={[
            <StaticImage src="../assets/images/rosacea1.jpg" alt="Rosacea Before & After Treatment Image" />,
            <StaticImage src="../assets/images/rosacea2.jpg" alt="Rosacea Before & After Treatment Image" />,
            <StaticImage src="../assets/images/rosacea3.jpg" alt="Rosacea Before & After Treatment Image" />,
            <StaticImage src="../assets/images/rosacea4.jpg" alt="Rosacea Before & After Treatment Image" />
          ]}
        />
      </section>
      <section className="flex flex-col items-center px-4 lg:pb-8" aria-labelledby="get-started-heading">
        <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
        <p>
          Book a skin consultation to determine the correct treatment and
          product for your skin type and condition.
        </p>
      </section>
    </>
  )
}

export default Rosacea

export const Head = () => {
  const pageUrl = "https://www.essenceofbeauty.ca/rosacea-treatment-sensitive-skin/"
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rosacea & Sensitive Skin Treatment",
    "description": "Specialized treatment for rosacea and sensitive skin using 302 skincare recommendations, developing customized treatment plans based on individual needs.",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.essenceofbeauty.ca/#organization",
      "name": "Essence of Beauty Ottawa Acne & Skin Clinic"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ottawa"
    },
    "serviceType": "Rosacea Treatment",
    "url": pageUrl
  }
  
  return (
    <>
      <Seo
        pageTitle="Rosacea & Sensitive Skin Ottawa - Natural Acne Treatments"
        pageDescription="Essence of Beauty Ottawa has been treating rosacea clients with 302 skincare recommendations with great results, developing recommendations based specifically on what's working for them."
        pageKeywords="Rosacea, Sensitive Skin, 302 Skincare, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl={pageUrl}
                pageImage="https://www.essenceofbeauty.ca/images/rosecea1.png"
        pageType="service"
        additionalSchema={serviceSchema}
      />
      <link rel="canonical" href={pageUrl} />
    </>
  )
} 
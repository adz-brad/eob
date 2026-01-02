import React from 'react'
import Banner from '../components/banner'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../components/button'
import { Link } from 'gatsby'
import Seo from '../components/seo'

const SkinPrep = () => {
    return (
        <>
            <Banner
                heading="Skin Preparations for Weddings"
                gradient="from-black/60 via-black/20 to-black/10"
                image={<StaticImage alt="Essence of Beauty Ottawa - Skin Preparation For Weddings" src="../assets/images/skinPrepHeader.jpg" />}
            />
            <section className="flex flex-col md:flex-row md:items-center p-4 md:p-4 my-8" aria-labelledby="wedding-prep-heading">
                <div className="flex flex-col lg:my-8 md:w-1/2 mx-auto">
                    <h1 id="wedding-prep-heading" className="text-2xl md:text-4xl font-bold mb-2">Look Sensational On Your Wedding Day!</h1>
                    <h2 className="text-xl md:text-2xl mt-2 mb-4 subheader">Essence of Beauty Ottawa helps you create lasting wedding memories by mapping out a beauty regiment that not only makes you look the best you can, but makes you feel relaxed and confident as well.</h2>
                    <p className="my-1">
                        <strong>Six months is not too early to start paying serious attention to your skin.</strong> By giving yourself enough time, you can obtain that radiant appearance so many brides are looking for. I recommend visiting our Ottawa clinic for a facial once a month for the next consecutive months, which is the key if you want to have that glowing, almost air-brushed look on your wedding day. Once your beauty plan is in place, maintenance at home by using a daily skin care products regime is essential. We use quality professional and most advanced technologies skin care products that will give you results. Start preparing, caring and pampering your skin as early as possible for your Special Day.
                    </p>
                    <Button
                        data={{ text: "Learn More", anchor: "wedding-preparation-info" }}
                        className="buttonLight my-8 mx-auto md:mx-0"
                    />
                </div>
                <StaticImage
                    loading="eager"
                    src="../assets/images/weddingPreparation.jpg"
                    alt="Essence of Beauty Skin Preparation For Weddings"
                    className="md:w-1/3 mx-auto rounded-sm shadow-md"
                />
            </section>
            <section id="wedding-preparation-info" className="flex flex-col lg:m-8 p-4 lg:p-8 bg-lightGreen rounded-sm shadow-lg" aria-labelledby="wedding-info-heading">
                <h2 className="text-2xl md:text-4xl mb-2">The Right Facial For Your Wedding</h2>
                <p className="my-2">
                    Keep in mind that not all facials are created equal. Some are designed especially for those with extra-sensitive skin, and some are geared to repair damaged or acne prone skin. I will help you to determine what will work best for you. Be sure to let me know if you have any allergies or are taking any medications. For skin that may need a little more help, you may want to consider more advance treatments, a gentle and safe form of facial rejuvenation using treatments procedures that tightens skin, reduces pores, improves complexion tone and color. As with regular facials, you should schedule your back facial before the wedding as well. A good way to relieve wedding worries would be by lavishing in luxurious treatments while enjoying your wedding preparations. What a great way to feel more beautiful and relaxed on your wedding day!
                </p>
                <div className="my-2">
                    <Link to="/radiance-hydro-infusion-facial/">
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                    Radiance Infusion
                    </h3>
                    </Link>
                    <p>
                    Get ready to glow on your special day with the Radiance Hydro Infusion, a revolutionary, non-invasive treatment tailored for brides seeking flawless, luminous skin. This advanced therapy boosts your skin’s absorption of powerful vitamins, antioxidants, minerals, amino acids, and growth factors, deeply nourishing the mesodermal layer. The result? A hydrated, rejuvenated complexion that radiates a natural, inner glow
                    </p>
                </div>
                <div className="my-2">
                    <Link to='/facial-treatments-ottawa/'>
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        Brightening Facial
                    </h3>
                    </Link>
                    <p>
                        A treatment to visibly reduce the appearance of skin discoloration and dark spots for Hyper-Pigmented skin. This treatment combines a light peel, Tranexamic Acid , Vitamin C, Needle Free Mesotherapy and LED Therapy. We are using products containing a large amount of vitamin C. It effectively improves skin complexion, prevent pigmentation and strengthen the protection against free radicals with Arbutin provides moisture, whitening, and elasticity along with prevention and suppression of aging with green tea extract. This treatment laves skin glowing and clear
                    </p>
                </div>
                <div className="my-2">
                <Link to='/facial-treatments-ottawa/'>
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        Nourishing Facial
                    </h3>
                    </Link>
                    <p>
                        Working to improve stressed and dehydrated skin, this replenishing treatment will provide a moisture boost to your skin. Your therapist will select a peel or oxygenation treatment and custom blend a mask specific to your needs. Plump the appearance of fine lines and wrinkles with this deeply nourishing, hydrating treatment. We will tailor a treatment utilising a combination of modalities (peels, masks, LED) to make sure your skin is looking its absolute best. Soothing massage is included throughout the treatment to ensure you leave feeling totally revitalised!
                    </p>
                </div>
                <div className="my-2">
                    <Link to="/dmk-enzyme-therapy/">
                    <h3 className="text-base md:text-xl mb-2 font-bold text-brown">
                        DMK Signature Treatments
                    </h3>
                    </Link>
                    <p>
                        DMK works on your internal structure and function of the skin to bring your skin back to its genetic potential. Revising your skin back to homeostasis is achieved through a course of enzyme therapy treatments, to kick start, boost and activate your skins own processes.  It is suitable for a wide range of conditions such as aging skin, sun damage, acne, rosacea and pigmentation. For more information <Link to="/dmk-enzyme-therapy/" className="font-bold text-brown hover:text-green">click here.</Link>
                    </p>
                </div>
                <p className="my-2">
                    At Essence of Beauty we pride ourselves on assisting our clients to achieve healthy, radiant, glowing, "Bride Skin". I feel so honoured whenever I am contacted by someone in the lead up to their big day, it truly is so special to be a part of their journey & to be trusted as their go-to skincare gal. The path to radiance is slightly different for everyone, so if you would like to discuss your personalised treatment plan or have any questions about wedding skincare preparation or skin-related routines, please shoot me through an email.
                </p>
            </section>
            <section className="flex flex-col items-center p-4" aria-labelledby="get-started-heading">
                <h2 id="get-started-heading" className="text-xl md:text-3xl font-bold my-4">Are you ready to get started?</h2>
                <p>Book a skin consultation to determine the correct treatment and product for your skin type and condition.</p>
            </section>
        </>
    )
}

export default SkinPrep

export const Head = () => {
    return (
        <>
            <Seo
                pageTitle="Skin Preparations for Weddings Ottawa - Get That Beautiful Glow for Your Special Occasion!"
                pageDescription="Creating lasting wedding memories comes from mapping out a beauty regiment that not only makes you look the best you can, but makes you feel relaxed and confident as well with Skin Preparation from Essence of Beauty Ottawa."
                pageKeywords="Skin Preparation, Event, Glow, Skin, Glowing Skin, Radiant, Beautiful, Wedding, Weddings, Special Events, Bride, Bridesmaid, Brides, Bridesmaids, Groom, Groomsman, Groomsmen, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
                pageUrl="https://www.essenceofbeauty.ca/skin-preparations-for-weddings/"
                pageImage="https://www.essenceofbeauty.ca/images/weddingPreparation.jpg"
            />
            <link rel="canonical" href="https://www.essenceofbeauty.ca/skin-preparations-for-weddings/" />
        </>
    )
} 
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MeetEva = ({ _key }) => {
    return(
        <div key={_key} className="pt-20 pb-10 md:py-20 px-4 md:px-12 flex flex-col lg:flex-row">
            <StaticImage  loading="lazy" src="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true" className="w-full lg:w-2/5 rounded-sm shadow-md" alt=""/>
            <div className="flex flex-col w-full mt-16 lg:w-3/5 lg:my-0 p-4 md:p-0 lg:ml-16">
                <h1 className="text-5xl">Meet Eva</h1>
                <h2 className="text-brown text-medium text-lg md:text-2xl">Your Natural and Organic Skincare Specialist</h2>
                <p className="mt-4 mb-1">
                As a European trained aesthetician with over 28 years of experience, I started Essence of Beauty in 2001. My business continues to grow as I offer my clients the most advanced products and techniques. In short, I love what I do and I love the joy in my clients’ eyes and voices when they tell me how much I have helped them. You inspire me.
                </p>
                <p className="my-1">
                The treatments I offer are both simple and sophisticated based on each client’s unique and personal requirements. My specialty is natural and organic skin care that rebuilds and regenerates the skin from the inside out. I have researched and use state of art, non-surgical, non-invasive, acne, acne scarring, rosacea and anti-aging facial treatments. These include Ultrasound, Micro-current, LED Lights, DMK Enzyme Treatments, Derma Ray, Dermal Infusion and Herbal Green Peel® therapies. My more traditional treatments include acne, acne scars, rosacea,  skin tag and red spot removal and repair of damaged facial capillaries with Vasculyse. Of course I am constantly researching new treatments and expect to add them to my services in time.
                </p>
                <p className="my-1">
                I have been successfully using skincare lines that work wonders on teenage and adult acne, rosacea, ultra-sensitive and other chronic skin problems, as well as issues associated with normal aging. The lines I have chosen are 302 skincare, Osmosis MD, DMK Danné Montague-King, AnteAGE as well Hubislab.
                </p>
                <p className="my-1">
                302, Osmosis MD, AnteAGE and Hubislab are brand new to Canada and use the most advanced skincare science available anywhere at any price.
                </p>
                <p className="my-1">
                My goal is to make a difference for anyone interested in learning how to bring to their faces, health and that natural beauty we all love. I am committed to providing the educational tools and maintenance programs you need to achieve your goals.  
                </p>
                <p className="my-1">
                Thank you for choosing me as your Essence of beauty Skin Care Specialist. I am thankful for each and every one of you!           
                </p>
            </div>
        </div>
    )
}

export default MeetEva
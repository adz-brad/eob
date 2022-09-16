import React, { useState } from "react"
import { data } from '../data/pages/home'
import Hero from "../components/hero"
import SplitList from '../components/splitList'
import Features from '../components/features'
import MeetEva from '../components/meetEva'
import Testimonials from "../components/testimonials"
import Seo from '../components/seo'

const Home = () => {

  const [ formData, setFormData ] = useState({
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    message: ''
})
  return(
    <>

<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="flex flex-row flex-wrap px-3 md:px-6">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="firstName"
                                    className="text-lg font-semibold mb-1"
                                >
                                First Name
                                </label>
                                <input           
                                    id="firstName"
                                    name="firstName"
                                    type="text" 
                                    className="w-full p-2 rounded-sm shadow-md border border-black/10"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({
                                        firstName: e.target.value, 
                                        lastName: formData.lastName, 
                                        email: formData.email, 
                                        phone: formData.phone, 
                                        message: formData.message
                                    })} 
                                />
                            </div>
                            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="lastName"
                                    className="text-lg font-semibold mb-1"
                                >
                                Last Name
                                </label>
                                <input           
                                    id="lastName"
                                    name="lastName"
                                    type="text" 
                                    className="w-full p-2 rounded-sm shadow-md border border-black/10"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: e.target.value, 
                                        email: formData.email, 
                                        phone: formData.phone, 
                                        message: formData.message
                                    })} 
                                />
                            </div>

                            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="email"
                                    className="text-lg font-semibold mb-1"
                                >
                                Email
                                </label>
                                <input           
                                    id="email"
                                    name="email"
                                    type="email" 
                                    className="w-full p-2 rounded-sm shadow-md border border-black/10"
                                    value={formData.email}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: formData.lastName, 
                                        email: e.target.value, 
                                        phone: formData.phone, 
                                        message: formData.message
                                    })} 
                                />
                            </div>

                            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="phone"
                                    className="text-lg font-semibold mb-1"
                                >
                                Phone
                                </label>
                                <input           
                                    id="phone"
                                    name="phone"
                                    type="phone" 
                                    className="w-full p-2 rounded-sm shadow-md border border-black/10"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: formData.lastName, 
                                        email: formData.email, 
                                        phone: e.target.value, 
                                        message: formData.message
                                    })} 
                                />
                            </div>   
 
                            <div className="flex flex-col p-1 w-full my-1">
                                <label 
                                    htmlFor="message"
                                    className="text-lg font-semibold mb-1"
                                >
                                    Message
                                </label>
                                <textarea           
                                    id="message"
                                    name="message"
                                    type="text" 
                                    className="w-full p-2 rounded-sm shadow-md border border-black/10"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: formData.lastName, 
                                        email: formData.email, 
                                        phone: formData.phone, 
                                        message: e.target.value
                                    })} 
                                />
                            </div>

                <button type="submit" className="buttonLight mt-4 ml-auto bg-white hover:bg-darkGreen">
                    Submit
                </button>

            </form>

<Seo
        pageTitle="Home"
        pageDescription="Essence of Beauty, Ottawa’s Premier Holistic Acne, Scars, Rosacea and Anti-Aging Skincare Clinic specializes in facial rejuvenation treatments using highly effective natural and organic formulas that combine age-defying science with nature’s most repairing elements."
        pageKeywords="Essence of Beauty, Scars, Rosacea, Rejuvenation, Renew, Therapy, Aging, Anti Aging, Safe, Skincare, Holistic, Beauty, Organic, Treatments, Peels, Ottawa, Skin, Acne, Beauty, Spa"
        pageUrl="https://www.essenceofbeauty.ca/"
        pageImage="https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/meet-eva.png?raw=true"
        />
      {data.components?.map((component, i) => {
        if(component.type === 'hero'){
          return(
            <Hero
              _key={i}
              title={component.heading}
              caption={component.caption}
              bgType="video"
              bgSrc={component.video}
              button={component.button}
            />
          )
        }
        if(component.type === 'splitList'){
          return(
            <SplitList
              _key={i}
              heading={component.heading}
              caption={component.caption}
              image={component.image}
              anchor={component.anchor}
              listTitle={component.listTitle}
              listItems={component.listItems}
              button={component.button}
            />
          )
        }
        if(component.type === 'features'){
          return(
            <Features
              _key={i}
              title={component.title}
              caption={component.caption}
              description={component.description}
              items={component.items}
            />
          )
        }
        if(component.type === 'meetEva'){
          return <MeetEva key={i} />
        }
        if(component.type === 'testimonials'){
          return <Testimonials _key={i} testimonials={component.testimonials} />
        }
        else{
          return null
        }
      })}
    </>
  )
}

export default Home
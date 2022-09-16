import React, { useState } from "react"


const Contact = () => {

    const [ formData, setFormData ] = useState({
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        message: ''
    })

    return(
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
    )
}

export default Contact


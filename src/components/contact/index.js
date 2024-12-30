import React, { useState } from "react"

const Contact = () => {

    const [ formData, setFormData ] = useState({
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        message: ''
    })

    const [ honeypot, setHoneypot ] = useState(null)
    const [ sent, setSent ] = useState({ open: false, status: 'Idle' })

    const submit = async (e) => {
        e.preventDefault()
        if(honeypot){
            return null;
        } 
        else{
          const data = {
            type: 'contact',
            template: 'contact-form-submission',
            form: {
                firstname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            }
          }
          const JSONdata = JSON.stringify(data)
          const endpoint = '/.netlify/functions/submit'
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          body: JSONdata,
          }
          await fetch(endpoint, options).then(res => {
            if(res.status === 200) {
              setSent({ open: true, status: 'Sent' });
              setFormData({
                firstName: '', 
                lastName: '', 
                email: '', 
                phone: '', 
                message: ''
            })
            }
            else {
               setSent({ open: true, status: 'Failed' });
            }
          }).catch(err => {
            if(err) {
                setSent({ open: true, status: 'Failed' });
            }
          })
        }
      }

    return(

<form name="Contact Form" onSubmit={submit} className="flex flex-row flex-wrap px-3 md:px-6">
            {sent.open ?
                <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[calc(100vh/2)] w-[calc(100vw_-_20px)] max-h-[400px] max-w-[600px] z-50 bg-white rounded-md shadow-lg flex flex-col items-center justify-center p-4 md:p-8">
                    {sent.status === 'Sent' ? <span className="text-xl md:text-2xl font-bold">Your message has been sent.</span> : null }
                    {sent.status === 'Sent' ? 
                        <span>We will be in touch with you as soon as possible!</span>
                    : 
                        <span>We're sorry, there was a problem sending your message, but we'd still love to hear from you! Please try giving us a call at <a href="tel:1-(603)-220-2101">1-(603)-220-2101</a></span>
                    }
                    <button 
                        onClick={() => setSent({ open: false, status: 'Idle' })} onKeyDown={() => setSent({ open: false, status: 'Idle' })} 
                        className="buttonLight bg-green hover:bg-darkGreen text-white mt-8"
                    >
                        OK
                    </button>
                </div>
            :
                null
            }

            <label 
                htmlFor="userfirstname"
                className="w-0 h-0 opacity-0"
            >
                Name
            </label>
            <input autoComplete="off" type="text" className="w-0 h-0 opacity-0" id="userfirstname" name="userfirstname" onChange={(e) => setHoneypot(e.target.value)} value={honeypot} />
            <label 
                htmlFor="useremail"
                className="w-0 h-0 opacity-0"
            >
                Email
            </label>
            <input autoComplete="off" type="useremail" className="w-0 h-0 opacity-0" id="useremail" name="useremail" onChange={(e) => setHoneypot(e.target.value)} value={honeypot} />
            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="firstName"
                                    className="text-lg font-semibold mb-1"
                                >
                                First Name
                                </label>
                                <input           
                                    id="firstName"
                                    required
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
                                    required
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
                                    htmlFor="clientEmail"
                                    className="text-lg font-semibold mb-1"
                                >
                                Email
                                </label>
                                <input           
                                    id="clientEmail"
                                    required
                                    name="clientEmail"
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
                                    required
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
                                    required
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


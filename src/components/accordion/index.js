import React, { useState } from 'react'
import Card from '../card'
import { MdRemove, MdAdd } from 'react-icons/md'

const Accordion = ({ items, className, additionalContent }) => {

    const [ active, setActive ] = useState(0)

    if(items){
        return(
            <Card cardBodyClass={className}>
                <ul>
                    {items.map((item, i) => {
                        return(
                            <li 
                                key={i}
                                className="flex flex-col py-4 md:p-4"
                                onClick={()=> setActive(i)}
                                onKeyDown={()=> setActive(i)}
                            >
                                <div className="flex flex-row items-center cursor-pointer">
                                    {active === i ?
                                        <MdRemove className="shrink-0 text-3xl text-lightGreen rounded-sm shadow-md bg-darkGreen" />
                                    :
                                        <MdAdd className="shrink-0 text-3xl bg-lightGreen text-darkGreen rounded-sm shadow-md" />
                                    }
                                    <h1 className="ml-4 text-xl md:text-2xl">
                                        {item.heading}
                                    </h1>
                                </div>
                                <div className={active === i ? 'h-fit px-4 pt-4' : 'h-0 overflow-hidden'}>
                                    {item.content}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                {additionalContent ? additionalContent : null}
            </Card>
        )
    }
    else{
        return null
    }

}

export default Accordion